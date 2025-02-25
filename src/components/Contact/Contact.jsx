import React from "react";
import "../../App.css";
import Title from "../Title";
import contactImg from "../../assets/contact.jpg";
import Background from "../Background";
import MessageForm from "./MessageForm";
import MapSection from "./MapSection";
import { FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa";
const Contact = () => {
  return (
    <div>
      <Background backgroundImage={contactImg} />
      <Title titleEng="Contact Us" titleJp="お問い合わせ" />
      <div className="contact-container bg-black/70 min-h-screen flex flex-col items-center justify-center">
        <div className="contact-form w-full">
          <MessageForm />
        </div>
        <div className="contact-details w-full">
          <div className="contact-info-grid grid md:grid-cols-3 gap-8 p-8 text-center">
            <div className="location-info glass-effect p-6 rounded-lg">
              <h3 className="text-xl font-bold text-orange-600 mb-3">
                <FaMapMarkerAlt className="inline-block mr-2" />
                LOCATION
              </h3>
              <p className="text-white">
                〒420-0044 静岡県静岡市
                <br />
                葵区瀬名１丁目１６−７８
              </p>
            </div>

            <div className="phone-info glass-effect p-6 rounded-lg">
              <h3 className="text-xl font-bold text-orange-600 mb-3">
                <FaPhone className="inline-block rotate-90 mr-2" />
                CALL US
              </h3>
              <p className="text-white">
                <a
                  href="tel:+81-54-123-4567"
                  className="hover:text-orange-600 transition-colors"
                >
                  090-6120-4765
                </a>
              </p>
            </div>

            <div className="hours-info glass-effect p-6 rounded-lg">
              <h3 className="text-xl font-bold text-orange-600 mb-3">
                <FaClock className="inline-block mr-2" />
                OPENING HOURS
              </h3>
              <p className="text-white">
                営業時間: 10:00 ~ 18:00 <br />
                定休日: 月曜日・火曜日
              </p>
            </div>
          </div>
        </div>
        <div className="map-section w-2/3 h-[500px] my-16 relative z-0">
          <MapSection />
        </div>
      </div>
    </div>
  );
};

export default Contact;
