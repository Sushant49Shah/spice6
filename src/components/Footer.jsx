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
              <Link to="/" className="hover:text-yellow-500 transition-colors">Home</Link>
              <Link to="/menu" className="hover:text-yellow-500 transition-colors">Menu</Link>
              <Link to="/about" className="hover:text-yellow-500 transition-colors">About</Link>
              <Link to="/contact" className="hover:text-yellow-500 transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-white text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p>123 Restaurant Street</p>
              <p>New York, NY 10001</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@restaurant.com</p>
            </div>
          </div>

          {/* Hours & Social Media */}
          <div className="space-y-4">
            <h3 className="text-white text-xl font-semibold mb-4">Hours</h3>
            <div className="space-y-2">
              <p>Monday - Friday: 11am - 10pm</p>
              <p>Saturday - Sunday: 10am - 11pm</p>
            </div>
            
            <div className="mt-6">
              <h3 className="text-white text-xl font-semibold mb-4">Follow Us</h3>
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
