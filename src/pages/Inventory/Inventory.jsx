import axios from "axios";
import { useEffect, useState } from "react";

const Inventory = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    quantity: "",
    image: null,
  });
  const [productId, setProductId] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");

  const API_URL = "http://localhost:3000/products";

  // Fetch all products
  const fetchProducts = async () => {
    try {
      const response = await axios.get(API_URL);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Create or Update product
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("price", product.price);
    formData.append("quantity", product.quantity);
    formData.append("category", product.category);
    if (product.image) formData.append("image", product.image);

    try {
      if (productId) {
        await axios.put(`${API_URL}/${productId}`, formData);
        setMessage("Product updated successfully!");
      } else {
        await axios.post(API_URL, formData);
        setMessage("Product created successfully!");
      }
      fetchProducts();
      setProduct({
        name: "",
        price: "",
        category: "",
        quantity: "",
        image: null,
      });
      setProductId("");
    } catch (error) {
      console.error("Error creating/updating product:", error);
    }
  };

  // Delete product
  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setMessage("Product deleted successfully!");
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  // Fetch products by category
  const fetchByCategory = async () => {
    try {
      const response = await axios.get(`${API_URL}/${category}`);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products by category:", error);
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Product Management</h1>

      {message && <p className="text-green-500 mb-4">{message}</p>}

      {/* Product Form */}
      <form onSubmit={handleFormSubmit} className="mb-6">
        <input
          type="text"
          placeholder="Name"
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
          className="border p-2 mr-2"
        />
        <input
          type="number"
          placeholder="Price"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
          className="border p-2 mr-2"
        />
        <input
          type="number"
          placeholder="Quantity"
          value={product.quantity}
          onChange={(e) => setProduct({ ...product, quantity: e.target.value })}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Category"
          value={product.category}
          onChange={(e) => setProduct({ ...product, category: e.target.value })}
          className="border p-2 mr-2"
        />
        <input
          type="file"
          onChange={(e) => setProduct({ ...product, image: e.target.files[0] })}
          className="border p-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          {productId ? "Update" : "Create"} Product
        </button>
      </form>

      {/* Fetch by Category */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 mr-2"
        />
        <button
          onClick={fetchByCategory}
          className="bg-gray-500 text-white px-4 py-2"
        >
          Search
        </button>
      </div>

      {/* Products List */}
      <table className="table-auto w-full border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-400 p-2">ID</th>
            <th className="border border-gray-400 p-2">Name</th>
            <th className="border border-gray-400 p-2">Price</th>
            <th className="border border-gray-400 p-2">Quantity</th>
            <th className="border border-gray-400 p-2">Category</th>
            <th className="border border-gray-400 p-2">Image</th>
            <th className="border border-gray-400 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod) => (
            <tr key={prod.id}>
              <td className="border border-gray-400 p-2">{prod.id}</td>
              <td className="border border-gray-400 p-2">{prod.name}</td>
              <td className="border border-gray-400 p-2">Rs.{prod.price}</td>
              <td className="border border-gray-400 p-2">{prod.quantity}</td>
              <td className="border border-gray-400 p-2">{prod.category}</td>
              <td className="border border-gray-400 p-2">
                {prod.image_url && (
                  <img
                    src={`http://localhost:3000${prod.image_url}`}
                    alt={prod.name}
                    className="h-12"
                  />
                )}
              </td>
              <td className="border border-gray-400 p-2">
                <button
                  onClick={() => {
                    setProductId(prod.id);
                    setProduct({
                      name: prod.name,
                      price: prod.price,
                      quantity: prod.quantity,
                      category: prod.category,
                      image: null,
                    });
                  }}
                  className="bg-yellow-500 text-white px-2 py-1 mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteProduct(prod.id)}
                  className="bg-red-500 text-white px-2 py-1"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;
