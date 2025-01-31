import axios from "axios";
import { useEffect, useState } from "react";
import './Inventory.css';

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
    <div className="allcontent">
      <h1 className="headingname">Product Inventory</h1>

      {message && <p className="messagetext">{message}</p>}

      {/* Product Form */}
      <form onSubmit={handleFormSubmit} className="producttable">
        <input
          type="text"
          placeholder="Name"
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
          className="nametext"
        />
        <input
          type="number"
          placeholder="Price"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
          className="pricetext"
        />
        <input
          type="number"
          placeholder="Quantity"
          value={product.quantity}
          onChange={(e) => setProduct({ ...product, quantity: e.target.value })}
          className="quantitytext"
        />
        <input
          type="text"
          placeholder="Category"
          value={product.category}
          onChange={(e) => setProduct({ ...product, category: e.target.value })}
          className="categorytext"
        />
        <input
          type="file"
          onChange={(e) => setProduct({ ...product, image: e.target.files[0] })}
          className="imagetext"
        />
        <button type="submit" className="productbutton">
          {productId ? "Update" : "Create"} Product
        </button>
      </form>

      {/* Fetch by Category */}
      <div className="searchcontent">
        <input
          type="text"
          placeholder="Search by category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="searchtext"
        />
        <button
          onClick={fetchByCategory}
          className="searchbutton"
        >
          Search
        </button>
      </div>

      {/* Products List */}
      <table className="tablecontent">
        
          <tr>
            <th className="tableheading">ID</th>
            <th className="tableheading">Name</th>
            <th className="tableheading">Price</th>
            <th className="tableheading">Quantity</th>
            <th className="tableheading">Category</th>
            <th className="tableheading">Image</th>
            {/* <th className="tableheading">Actions</th> */}
          </tr>
        
        
          {products.map((prod) => (
            <tr key={prod.id}>
              <td className="items">{prod.id}</td>
              <td className="items">{prod.name}</td>
              <td className="items">Rs.{prod.price}</td>
              <td className="items">{prod.quantity}</td>
              <td className="items">{prod.category}</td>
              <td className="items">
                {prod.image_url && (
                  <img
                    src={`http://localhost:3000${prod.image_url}`}
                    alt={prod.name}
                    className="productimage"
                  />
                )}
              </td>
              <td className="actionbuttons">
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
                  className="editbutton"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteProduct(prod.id)}
                  className="deletebutton"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        
      </table>
    </div>
  );
};

export default Inventory;
