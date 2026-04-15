import { useEffect, useState } from "react";
import img from "./assets/uzb.png";
import circle from "./assets/circle.png";
import Shaxzoda from "./assets/Shaxzoda.png";
import logo from "./assets/Logo.png";
import { mockProducts } from "./data/mockProducts";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");     // ← Yangi state
  const [filteredProducts, setFilteredProducts] = useState([]); // ← Qidiruv natijasi

  // API dan ma'lumot olish
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://69ce1bcc33a09f831b7ce988.mockapi.io/Product"
        );
        setProducts(res.data);
        setFilteredProducts(res.data); // boshida hammasi ko'rinadi
      } catch (err) {
        console.error("XATO:", err);
      }
    };

    fetchData();
  }, []);

  // Qidiruv funksiyasi
  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchTerm, products]);

  return (
    <div className="mx-auto">
      <div className="bg-[#F2F4F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center text-[14px] h-auto sm:h-8 py-3 sm:py-0 gap-3 sm:gap-0">
            <div className="flex gap-2 justify-center">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 10c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4 4-1.79 4-4m-6 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2"></path>
                  <path d="M11.42 21.81c.17.12.38.19.58.19s.41-.06.58-.19c.3-.22 7.45-5.37 7.42-11.82 0-4.41-3.59-8-8-8s-8 3.59-8 8c-.03 6.44 7.12 11.6 7.42 11.82M12 4c3.31 0 6 2.69 6 6 .02 4.44-4.39 8.43-6 9.74-1.61-1.31-6.02-5.29-6-9.74 0-3.31 2.69-6 6-6"></path>
                </svg>{" "}
              </span>
              <span>Shahar: <span className="underline pr-3">Samarqand</span></span>
              <span className="hidden sm:inline">Topshirish Punktlari</span>
            </div>

            <div className="text-gray-500 text-center text-sm">
              Buyurtmangizni 1 kunda bepul yetkazib beramiz!
            </div>

            <div className="flex gap-3 text-gray-700">
              <span className="hidden md:inline">Savol-javoblar</span>
              <span className="hidden md:inline">Buyurtmalar</span>
              <span className="flex gap-2 font-medium">
                <img src={img} alt="" /> Оʻzbekcha
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="pt-5 flex flex-col lg:flex-row justify-between items-center gap-5">
            <div className="mr-0 lg:mr-7">
              <img src={logo} alt="" className="h-9 sm:h-10" />
            </div>

            <button className="w-full sm:w-auto px-8 h-10 border-0 rounded-sm bg-[#F0F0FF] text-[#7000FF] font-medium cursor-pointer">
              Katalog
            </button>

            {/* 🔍 Qidiruv inputi - Yangilangan */}
            <div className="w-full lg:w-auto lg:flex-1 max-w-2xl">
              <form className="flex" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  className="border-gray-500 w-full h-10 sm:h-11 rounded-l-sm border border-r-0 px-3 text-sm"
                  placeholder="Mahsulotlar va turkumlar izlash"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button 
                  type="button"
                  className="w-12 sm:w-16 h-10 sm:h-11 border rounded-r-sm border-l-0 border-gray-500 bg-[#F2F4F7] flex justify-center items-center cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 10c0-4.41-3.59-8-8-8s-8 3.59-8 8 3.59 8 8 8c1.85 0 3.54-.63 4.9-1.69l5.1 5.1L21.41 20l-5.1-5.1A8 8 0 0 0 18 10M4 10c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6-6-2.69-6-6"></path>
                  </svg>
                </button>
              </form>
            </div>

            <div className="flex gap-6 lg:gap-8 text-sm">
              <div className="flex gap-2 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5m0-8c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3M4 22h16c.55 0 1-.45 1-1v-1c0-3.86-3.14-7-7-7h-4c-3.86 0-7 3.14-7 7v1c0 .55.45 1 1 1m6-7h4c2.76 0 5 2.24 5 5H5c0-2.76 2.24-5 5-5"></path>
                </svg>
                <span className="hidden sm:inline">Kirish</span>
              </div>
              <div className="flex gap-2 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.29 20.66c.2.2.45.29.71.29s.51-.1.71-.29l7.5-7.5c2.35-2.35 2.35-6.05 0-8.41-2.3-2.28-5.85-2.35-8.21-.2-2.36-2.15-5.91-2.09-8.21.2-2.35 2.36-2.35 6.06 0 8.41zM5.21 6.16C6 5.38 7 4.99 8.01 4.99s2.01.39 2.79 1.17l.5.5c.39.39 1.02.39 1.41 0l.5-.5c1.56-1.56 4.02-1.56 5.59 0 1.56 1.57 1.56 4.02 0 5.58l-6.79 6.79-6.79-6.79a3.91 3.91 0 0 1 0-5.58Z"></path>
                </svg>
                <span className="hidden sm:inline">Saralagan</span>
              </div>
              <div className="flex gap-2 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C9.24 2 7 4.24 7 7v1H4c-.55 0-1 .45-1 1v11c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-.55-.45-1-1-1h-3V7c0-2.76-2.24-5-5-5M9 7c0-1.65 1.35-3 3-3s3 1.35 3 3v1H9zm10 3v10H5V10z"></path>
                </svg>
                <span className="hidden sm:inline">Savat</span>
              </div>
            </div>
          </div>

          <nav className="flex justify-between pt-2.5 overflow-x-auto">
            <div className="flex gap-4 sm:gap-6 text-gray-500 text-[14px] whitespace-nowrap pb-2">
              <span className="text-black font-medium flex items-center gap-1 cursor-pointer">
                <img src={circle} alt="" />
                Muddatli to'lov
              </span>
              <span className="cursor-pointer">Elektronika</span>
              <span className="cursor-pointer">Mashiy texnika</span>
              <span className="cursor-pointer">Kiyim</span>
              <span className="cursor-pointer">Poyabzallar</span>
              <span className="cursor-pointer">Aksessuarlar</span>
              <span className="cursor-pointer">Go'zallik va parvarishlash</span>
              <span className="cursor-pointer">Uy-ro'zg'or buyumlari</span>
              <span className="cursor-pointer">Qurilish va ta'mirlash</span>
            </div>
            <span className="text-gray-500 cursor-pointer hidden sm:block">Yana ↓</span>
          </nav>

          <div>
            <img className="my-5 rounded-lg w-full" src={Shaxzoda} alt="" />
          </div>

          <div>
            <h1 className="text-[24px] sm:text-[28px] font-bold py-5">
              Arzon narxlar {`>`}
            </h1>

            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
              {filteredProducts.map((item) => (
                <div key={item.id} className="rounded-lg">
                  <img
                    src={item.image}
                    alt="404 Not found"
                    className="w-full bg-gray-50 rounded-lg"
                  />

                  <p className="text-sm mt-2 line-clamp-2 leading-tight">{item.title}</p>

                  <p className="text-[#8B8E99] text-sm mt-1">
                    ⭐ {item.rating} ({item.reviewCount} sharh)
                  </p>

                  <span className="bg-[#FFFF00] text-[11px] font-normal px-2 py-0.5 rounded-sm inline-block mt-2">
                    {item.discount}
                  </span>

                  <p className="line-through text-gray-400 text-[11.2px] font-medium mt-1">
                    {item.oldPrice?.toLocaleString()} so'm
                  </p>

                  <p className="text-black font-medium text-[14px]">
                    {item.price.toLocaleString()} so'm
                  </p>
                </div>
              ))}
            </div>

            
            {filteredProducts.length === 0 && searchTerm && (
              <p className="text-center text-2xl text-black">
                "{searchTerm}" bo'yicha hech narsa topilmadi
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;