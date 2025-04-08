import React, { useState } from 'react';
import axios from 'axios';

const AddListing = () => {
  const [form, setForm] = useState({
    type: 'land',
    title: '',
    description: '',
    location: '',
    phone: '',
    image: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/listings', form);
      alert("তালিকা যুক্ত হয়েছে!");
      setForm({ type: 'land', title: '', description: '', location: '', phone: '', image: '' });
    } catch (err) {
      alert("ত্রুটি হয়েছে");
    }
  };

  return (
    <div style={{ padding: 20, maxWidth: 500, margin: 'auto' }}>
      <h2>তালিকা যুক্ত করুন</h2>
      <form onSubmit={handleSubmit}>
        <select name="type" value={form.type} onChange={handleChange}>
          <option value="land">জমি</option>
          <option value="house">বাসা</option>
          <option value="worker">মিস্ত্রি</option>
        </select><br /><br />
        <input name="title" placeholder="শিরোনাম" value={form.title} onChange={handleChange} /><br /><br />
        <textarea name="description" placeholder="বর্ণনা" value={form.description} onChange={handleChange} /><br /><br />
        <input name="location" placeholder="লোকেশন" value={form.location} onChange={handleChange} /><br /><br />
        <input name="phone" placeholder="ফোন নম্বর" value={form.phone} onChange={handleChange} /><br /><br />
        <input name="image" placeholder="ছবির URL" value={form.image} onChange={handleChange} /><br /><br />
        <button type="submit">তালিকা যুক্ত করুন</button>
      </form>
    </div>
  );
};

export default AddListing;
