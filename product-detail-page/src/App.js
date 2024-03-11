// App.js
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fetchProductById } from "./services/api";

const ProductDetail = ({ match }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchProductById(match.params.productId);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, [match.params.productId]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4">{product.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.img
            src={product.image}
            alt={product.title}
            className="w-full h-auto mb-4"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <div>
            <p className="text-gray-600 mb-2">${product.price}</p>
            <p className="text-gray-800">{product.description}</p>
            {/* Add interactive elements, e.g., buttons for adding to cart or favoriting */}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductDetail;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
