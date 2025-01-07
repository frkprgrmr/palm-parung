"use client";

import { JSX, useState } from "react";
import { Home, Phone, Mail, Map, Check, Menu, X } from "lucide-react";

interface Property {
  type: string;
  price: string;
  specs: string;
}

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Monitor scroll untuk mengubah style navbar
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }

  const propertyImages: string[] = ["./hero.webp"];

  const features: string[] = [
    "Lokasi strategis dekat pusat kota",
    "Akses mudah ke fasilitas publik",
    "Sistem keamanan 24 jam",
    "Taman bermain anak",
    "Masjid",
    "Club house dengan kolam renang",
  ];

  const properties: Property[] = [
    {
      type: "Tipe 36",
      price: "Rp. 300.000.000",
      specs: "2 Kamar Tidur • 1 Kamar Mandi • Carport",
    },
    {
      type: "Tipe 45",
      price: "Rp. 450.000.000",
      specs: "2 Kamar Tidur • 2 Kamar Mandi • Carport",
    },
    {
      type: "Tipe 60",
      price: "Rp. 600.000.000",
      specs: "3 Kamar Tidur • 2 Kamar Mandi • Carport",
    },
  ];

  const handleScroll = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const NavLinks = (): JSX.Element => (
    <>
      <button
        onClick={() => handleScroll("beranda")}
        className="text-gray-700 hover:text-blue-600 px-4 py-2 transition-colors"
      >
        Beranda
      </button>
      <button
        onClick={() => handleScroll("tipe-rumah")}
        className="text-gray-700 hover:text-blue-600 px-4 py-2 transition-colors"
      >
        Tipe Rumah
      </button>
      <button
        onClick={() => handleScroll("fasilitas")}
        className="text-gray-700 hover:text-blue-600 px-4 py-2 transition-colors"
      >
        Fasilitas
      </button>
      <button
        onClick={() => handleScroll("kontak")}
        className="text-gray-700 hover:text-blue-600 px-4 py-2 transition-colors"
      >
        Kontak
      </button>
      <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors ml-4">
        Hubungi Kami
      </button>
    </>
  );

  return (
    <>
      {/* Mobile-friendly Header/Nav */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Home
                className={`h-6 w-6 ${
                  isScrolled ? "text-gray-900" : "text-blue-600"
                }`}
              />
              <span
                className={`ml-2 text-lg font-bold ${
                  isScrolled ? "text-blue-600" : "text-gray-900"
                }`}
              >
                Palm Parung Residence
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center space-x-1">
              <NavLinks />
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X
                  className={`h-6 w-6 ${
                    isScrolled ? "text-gray-900" : "text-white"
                  }`}
                />
              ) : (
                <Menu
                  className={`h-6 w-6 ${
                    isScrolled ? "text-gray-900" : "text-white"
                  }`}
                />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white shadow-lg rounded-b-lg">
              <div className="flex flex-col px-4 pt-2 pb-4">
                <NavLinks />
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content with top padding for fixed header */}
      <div className="pt-16">
        {/* Hero Section */}
        <section id="beranda" className="relative">
          <div className="relative h-[400px] md:h-[600px]">
            {propertyImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Tampilan perumahan ${idx + 1}`}
                className={`absolute w-full h-full object-cover transition-opacity duration-500 ${
                  0 === idx ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-3xl md:text-6xl font-bold mb-4">
                Palm Parung Residence
              </h1>
              <p className="text-lg md:text-2xl mb-6">
                Hunian Eksklusif dengan Suasana Asri
              </p>
              <button
                onClick={() => handleScroll("tipe-rumah")}
                className="bg-blue-600 text-white px-6 py-3 rounded-full text-base font-semibold hover:bg-blue-700 transition-colors"
              >
                Lihat Unit Tersedia
              </button>
            </div>
          </div>
        </section>

        {/* Property Types Section */}
        <section
          id="tipe-rumah"
          className="py-12 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Pilihan Tipe Rumah
          </h2>
          <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
            {properties.map((property, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src="/api/placeholder/400/300"
                  alt={property.type}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{property.type}</h3>
                  <p className="text-xl text-blue-600 font-bold mb-3">
                    {property.price}
                  </p>
                  <p className="text-sm text-gray-600 mb-4">{property.specs}</p>
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    Info Lebih Lanjut
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section
          id="fasilitas"
          className="py-12 bg-gray-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Fasilitas Lengkap
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow"
              >
                <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="kontak"
          className="py-12 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Hubungi Kami
          </h2>
          <div className="space-y-8 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
            <div className="space-y-6 bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center space-x-4">
                <Phone className="h-5 w-5 text-blue-600" />
                <span className="text-sm">+62 123 4567 890</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-5 w-5 text-blue-600" />
                <span className="text-sm">info@test.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Map className="h-5 w-5 text-blue-600" />
                <span className="text-sm">
                  Jl. Pemukiman Baru No. 123, Kota Baru
                </span>
              </div>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nama Lengkap"
                className="w-full p-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="tel"
                placeholder="Nomor Telepon"
                className="w-full p-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <textarea
                placeholder="Pesan"
                rows={4}
                className="w-full p-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Kirim Pesan
              </button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-6 ">
          <div className="text-center text-sm">
            <p>© 2025 Palm Parung Residence.</p>
            <p className="mt-2">Semua hak dilindungi.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
