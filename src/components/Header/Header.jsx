import React from "react";
import "./Header.css";

const navigationItems = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d84bca6c160161e1c55dbe855df481450bc727448e2a2238a462900ecdd6b48a?placeholderIfAbsent=true&apiKey=dab43acfe9e64948b6d46280c551ed17",
    label: "Cart",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/24e6912df6906d4069bfb9f2dec3c96f570caff9106ee1c5a153072740b91bd3?placeholderIfAbsent=true&apiKey=dab43acfe9e64948b6d46280c551ed17",
    label: "My Orders",
  },
];

export default function Header() {
  const cartCount = 0;  // Example, you can replace it with dynamic count

  return (
    <header className="header">
      <div className="logo-container">
        <div>
          <h1 className="brand-name">Blossom Bliss</h1>
          <p className="tagline">- Flower & Gift Delivery -</p>
        </div>
        <div className="search-container">
          <input
            type="search"
            className="search-input"
            placeholder="Search for flowers, gifts, and more..."
            aria-label="Search products"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec35e781faacaa2419379e4951b22dc60d5dda8206a0cffe28039fbdcbafca75?placeholderIfAbsent=true&apiKey=dab43acfe9e64948b6d46280c551ed17"
            className="search-icon"
            alt="Search Icon"
          />
        </div>
      </div>
      <nav className="navigation-container">
        <div className="navItem">
          <div className="icon-container">
            <img
              loading="lazy"
              src={navigationItems[0].icon}
              className="icon"
              alt="Cart Icon"
            />
            <div className="badge">1</div>
            {/* {cartCount > 0 && <div className="badge">{cartCount}</div>} */}
          </div>
          <div className="label">{navigationItems[0].label}</div>
        </div>
        <div className="navItem">
          <div className="icon-container">
            <img
              loading="lazy"
              src={navigationItems[1].icon}
              className="icon"
              alt="Orders Icon"
            />
          </div>
          <div className="label">{navigationItems[1].label}</div>
        </div>
      </nav>
    </header>
  );
}
