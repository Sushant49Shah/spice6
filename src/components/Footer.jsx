import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-white text-xl font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="hover:text-yellow-500 transition-colors">ホーム</Link>
              <Link to="/menu" className="hover:text-yellow-500 transition-colors">メニュー</Link>
              <Link to="/about" className="hover:text-yellow-500 transition-colors">について</Link>
              <Link to="/contact" className="hover:text-yellow-500 transition-colors">お問い合わせ</Link>
              <Link to="/gallery" className="hover:text-yellow-500 transition-colors">お問い合わせ</Link>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-white text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p>〒420-0044 静岡県静岡市</p>
              <p>葵区瀬名１丁目１６−７８</p>
              <p>Phone: 090-6120-4765</p>
              <p>Email: 6spice6@gmail.com</p>
            </div>
          </div>

          {/* Hours & Social Media */}
          <div className="space-y-4">
            <h3 className="text-white text-xl font-semibold mb-4">Hours</h3>
            <div className="space-y-2">
              <p>営業時間: 10:00 ~ 18:00</p>
              <p>定休日: 月曜日・火曜日</p>
            </div>
            
            <div className="mt-6">
              <h3 className="text-white text-xl font-semibold mb-4">フォローする</h3>
              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#4267B2] transition-colors">
                  <FaFacebook size={24} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#E1306C] transition-colors">
                  <FaInstagram size={24} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#1DA1F2] transition-colors">
                  <FaTwitter size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Spice6. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
