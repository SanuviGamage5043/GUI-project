import express from "express";
import cors from "cors"; 
import path from "path";
import multer from "multer";
import fs from "fs";
import { fileURLToPath } from "url";
import sqlite3 from "sqlite3";

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Static file handling for uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// Database Connection
const db = new sqlite3.Database('database.db', (err) => {
  if (err) {
    console.error("Error connecting to the database:", err.message);
  } else {
    console.log("Connected to the SQLite database.");
  }
});

// Create the products table if it doesn't exist
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    price REAL,
    quantity REAL,
    category TEXT,
    image_url TEXT,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
  );
`;

db.run(createTableQuery, (err) => {
  if (err) {
    console.error("Error creating table:", err.message);
  } else {
    console.log("Products table created successfully or already exists.");
  }
});

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, 'uploads');
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath);
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// Routes

app.get('/',(req,res)=>{
  res.json("Backend for the blossom bliss")
})

// 1. Get all products
app.get('/products', (req, res) => {
  const query = 'SELECT * FROM products';
  db.all(query, [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows);
    }
  });
});

// 2. Get a product by ID
app.get('/products/id/:id', (req, res) => {
  const query = 'SELECT * FROM products WHERE id = ?';
  const { id } = req.params;
  db.get(query, [id], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (!row) {
      res.status(404).json({ message: "Product not found." });
    } else {
      res.json(row);
    }
  });
});

// Get products by category
app.get('/products/:category', (req, res) => {
  const query = 'SELECT * FROM products WHERE category = ?';
  const { category } = req.params;

  db.all(query, [category], (err, rows) => { 
    if (err) {
      res.status(500).json({ error: err.message }); 
    } else if (rows.length === 0) {
      res.status(404).json({ message: "No products found in this category." }); 
    } else {
      res.json(rows); 
    }
  });
});


// 3. Create a new product
app.post('/products', upload.single('image'), (req, res) => {
  const { name, price, category, quantity } = req.body;
  const image_url = req.file ? `/uploads/${req.file.filename}` : null;

  if (!name || !price) {
    return res.status(400).json({ error: "Name and price are required." });
  }

  const query = `
    INSERT INTO products (name, price, category, image_url, quantity)
    VALUES (?, ?, ?, ?,?)
  `;
  db.run(query, [name, price, category, image_url, quantity], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({ id: this.lastID });
    }
  });
});

// 4. Update a product
app.put('/products/:id', upload.single('image'), (req, res) => {
  const { id } = req.params;
  const { name, price, category, quantity } = req.body;
  const image_url = req.file ? `/uploads/${req.file.filename}` : null;

  const query = `
    UPDATE products
    SET name = COALESCE(?, name),
        price = COALESCE(?, price),
        quantity = COALESCE(?, quantity),
        category = COALESCE(?, category),
        image_url = COALESCE(?, image_url)
    WHERE id = ?
  `;

  db.run(query, [name, price, quantity, category, image_url, id], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (this.changes === 0) {
      res.status(404).json({ message: "Product not found." });
    } else {
      res.json({ message: "Product updated successfully." });
    }
  });
});

// 5. Delete a product
app.delete('/products/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM products WHERE id = ?';
  db.run(query, [id], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (this.changes === 0) {
      res.status(404).json({ message: "Product not found." });
    } else {
      res.json({ message: "Product deleted successfully." });
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
