const HeroSection = () => {
    return (
      <section
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1554995207-c18c203602cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHBhbm9yYW1hJTIwbGl2aW5nJTIwcm9vbSUyMHBob3RvfGVufDB8fDB8fHww')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="h-screen flex items-center justify-center text-center text-white"
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">مرحبًا بكم في محل الزان</h1>
          <p className="text-lg md:text-xl mb-6">
            نقدم لكم أفخم وأرقى الأثاث المنزلي المصمم بعناية لتناسب جميع احتياجاتكم.
          </p>
          <a
            href="#products"
            className="px-6 py-3 bg-yellow-600 rounded-lg text-lg font-semibold hover:bg-yellow-700 transition duration-300"
          >
            استعرض المنتجات
          </a>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  