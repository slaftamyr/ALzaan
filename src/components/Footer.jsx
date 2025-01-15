const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-lg font-medium">© 2025 محل الزان. جميع الحقوق محفوظة.</p>
        
          <div className="flex justify-center space-x-6 rtl:space-x-reverse mt-4">
            {/* فيسبوك */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 text-2xl transition-transform transform hover:-translate-y-2"
            >
              <i className="fab fa-facebook"></i>
            </a>
            {/* إنستغرام */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-600 text-2xl transition-transform transform hover:-translate-y-2"
            >
              <i className="fab fa-instagram"></i>
            </a>
            {/* تويتر */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500 text-2xl transition-transform transform hover:-translate-y-2"
            >
              <i className="fab fa-twitter"></i>
            </a>
            {/* واتساب */}
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-600 text-2xl transition-transform transform hover:-translate-y-2"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
            {/* البريد الإلكتروني */}
            <a
              href="mailto:info@alzanfurniture.com"
              className="text-yellow-500 hover:text-yellow-600 text-2xl transition-transform transform hover:-translate-y-2"
            >
              <i className="fas fa-envelope"></i>
            </a>
            {/* الاتصال   */}
            <a
              href="tel:+1234567890"
              className="text-green-500 hover:text-green-600 text-2xl transition-transform transform hover:-translate-y-2"
            >
              <i className="fas fa-phone"></i>
            </a>
          </div>
        </div>
      </footer>
      );
  };
  
  export default Footer;
  