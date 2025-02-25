import { useState } from 'react';

const MessageForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h2 className="text-center mb-12 text-4xl font-semibold">メッセージを送る</h2>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <label className="text-base text-gray-200">お名前</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="お名前"
              className="p-4 border border-gray-200 bg-black/30 rounded-lg focus:outline-none focus:border-yellow-100"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 flex flex-col gap-2">
            <label className="text-base text-gray-200">メールアドレス</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="メールアドレス"
              className="p-4 border border-gray-200 bg-black/30 rounded-lg focus:outline-none focus:border-yellow-100"
            />
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <label className="text-base text-gray-200">電話番号</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="電話番号"
              className="p-4 border border-gray-200 bg-black/30 rounded-lg focus:outline-none focus:border-yellow-100"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-base text-gray-200">メッセージ</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="メッセージ"
            rows={6}
            className="p-4 border border-gray-200 bg-black/30 rounded-lg resize-y min-h-[150px] focus:outline-none focus:border-yellow-100"
          />
        </div>

        <button 
          type="submit"
          className="self-center min-w-[150px] px-8 py-4 bg-black text-white border-2 border-gray-600 rounded-full hover:bg-gray-600 transition-colors"
        >
          送信
        </button>
      </form>
    </div>
  );
};

export default MessageForm;
