import { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

     
    const whatsappMessage = `اسم: ${name}\nالبريد الإلكتروني: ${email}\nالرسالة: ${message}`;
 
    const whatsappUrl = `https://wa.me/249129512950?text=${encodeURIComponent(whatsappMessage)}`;
    window.location.href = whatsappUrl;
  };

  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">تواصل معنا</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
          <input
            type="text"
            placeholder="الاسم"
            className="w-full p-3 mb-4 border rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="البريد الإلكتروني"
            className="w-full p-3 mb-4 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="رسالتك"
            className="w-full p-3 mb-4 border rounded h-32"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit" className="w-full bg-yellow-600 text-white py-2 rounded hover:bg-yellow-700">
            إرسال
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
