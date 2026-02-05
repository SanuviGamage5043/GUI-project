# 🌸 Blossom Bliss – Flower & Gift Delivery Web App
## 🚀 Project Overview

Blossom Bliss is a web-based flower and gift delivery system designed to provide users with a seamless experience for ordering flowers and gifts online.

It allows users to:

  - Browse flowers, gifts, and combos

  - Place orders and select delivery dates

  - Manage carts and checkout

This project demonstrates a full-stack web application using React.js, Node.js, Express.js, and SQLite.

## 🛠️ Technology Stack

| Layer    | Technology           | Purpose                                                   |
| -------- | -------------------- | --------------------------------------------------------- |
| Frontend | React.js             | Dynamic and interactive user interface                    |
| Backend  | Node.js + Express.js | RESTful API to handle requests and manage business logic  |
| Database | SQLite               | Lightweight database to store products, orders, and users |
| Other    | CSS / HTML / JS      | Styling and frontend logic                                |

## 🗂 Project Structure

📦blossom-bliss

 ┣ src
 
 ┃ ┣ components        ← UI components (Navbar, Cart, ProductCard)
 
 ┃ ┣ pages             ← App pages (Home, Products, Checkout)
 
 ┃ ┃ ┗ App.js          ← Main React entry
 
 ┃ ┗ server.js         ← Express server entry
 
 ┗ README.md


## ⚡ Features

  - Product Catalog: Browse flowers, gifts, and combos.

  - Search & Filter: Find products by category, price, or occasion.

  - Cart Management: Add/remove items to the cart.

  - Admin Panel (optional): Manage products and orders (if implemented).

## 🏃 How to Run

Prerequisites

  - Node.js & npm installed

  - SQLite installed or bundled in project

### Steps

#### 1. Clone the repository

    git clone https://github.com/SanuviGamage5043/GUI-project.git
    cd GUI-project

#### 2. Install dependencies

    npm install

#### 3. Run the backend server

    node server.js
    # or use nodemon if installed
    nodemon server.js

#### 4. Run the React frontend

    npm start

Open the app in browser

    http://localhost:3000

## 📦 Database

SQLite is used to store:

  - Products (flowers, gifts, combos)

Tables are created automatically using models in backend code.

## ✨ Contributing

Contributions are welcome:

  - Add new features (e.g., admin dashboard, payment gateway)

  - Improve UI design and responsiveness

  - Optimize backend APIs

  - Report bugs and suggest improvements

How to contribute:

  - Fork the repository

  - Create a new branch

  - Make your changes

  - Submit a Pull Request
