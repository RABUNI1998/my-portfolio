/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  // --- IMPORTANT SETUP ---
  // 1. Go to https://web3forms.com/
  // 2. Create an account and get your access key.
  // 3. Replace 'YOUR_ACCESS_KEY_HERE' with your actual key.
  const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'submitting', message: 'Sending...' });

    const json = JSON.stringify({
      ...formData,
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `New Contact from ${formData.name}`,
    });

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: res.message || 'An error occurred. Please try again.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'An error occurred. Please try again.' });
    }
  };

  const inputClasses = "w-full bg-slate-800 border border-slate-700 rounded-md p-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all";

  return (
    <section id="contact" className="min-h-screen bg-slate-900 py-24 px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="mb-4 text-4xl font-extrabold text-white md:text-5xl">
            Let's Build Something Great
          </h2>
          <p className="mb-12 text-lg text-slate-300">
            Have a project in mind or just want to say hello? Drop me a line.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className={inputClasses} />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required className={inputClasses} />
          </div>
          <div>
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows="6" required className={inputClasses}></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={status.type === 'submitting'}
              className="inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
            >
              <FaPaperPlane />
              {status.type === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </motion.form>
        {status.message && (
          <p className={`mt-6 text-center text-lg ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
            {status.message}
          </p>
        )}
      </div>
    </section>
  );
};

export default Contact;