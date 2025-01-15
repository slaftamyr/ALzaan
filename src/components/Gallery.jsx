import { useState } from "react";
import products from "../Data";

const Gallery = () => {
  const categories = ["الكل", ...new Set(products.map((product) => product.category))];
  const [selectedCategory, setSelectedCategory] = useState("الكل");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredProducts =
    selectedCategory === "الكل"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">منتجاتنا</h2>

      
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-semibold ${
                selectedCategory === category
                  ? "bg-yellow-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-yellow-500 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 shadow-md rounded-lg transform hover:scale-105 transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 sm:h-56 object-cover rounded-lg mb-4 cursor-pointer"
                onClick={() => setSelectedImage(product.image)}
              />
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
              <a
                href={`https://wa.me/1234567890?text=مرحبًا، أرغب في طلب ${product.name}. السعر: ${product.price}.`}
                className="block mt-4 bg-yellow-600 text-white text-center py-2 rounded hover:bg-yellow-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                طلب
              </a>
            </div>
          ))}
        </div>
      </div>

    
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          <div className="relative">
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-screen rounded-lg"
            />
            <button
              onClick={closeLightbox}
              className="absolute top-2 right-2 text-white text-2xl bg-gray-800 rounded-full p-2 hover:bg-gray-600"
            >
              &times;
            </button>
          </div>
        </div>
      )}
      <div className="fixed bottom-5 right-5 flex flex-col space-y-4 z-50">
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
        >
         <i className="fab fa-whatsapp"></i>
        </a>
        <a
          href="tel:1234567890"
          className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
        >
           <i className="fas fa-phone"></i>
        </a>
      </div>
    </section>
  );
};

export default Gallery;
