const Header = () => {
    return (
      <header className="  shadow-md fixed top-0 w-full z-50">
        <div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
          {/* اسم المحل */}
          <h1 className="text-2xl md:text-3xl font-extrabold text-yellow-700">AL Zaan</h1>
  
          {/* روابط   */}
          <nav>
            <ul className="flex flex-wrap space-x-4 md:space-x-6 rtl:space-x-reverse">
              <li>
                <a
                  href="#hero"
                  className="text-sm md:text-lg font-bold text-black hover:text-yellow-600"
                >
                  الرئيسية
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-sm md:text-lg font-bold text-black hover:text-yellow-600"
                >
                  المنتجات
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm md:text-lg font-bold text-black hover:text-yellow-600"
                >
                  تواصل معنا
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;
  