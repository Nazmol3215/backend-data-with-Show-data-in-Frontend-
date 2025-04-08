import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const [listings, setListings] = useState([]);
  const [locationFilter, setLocationFilter] = useState('');
  const [searchTitle, setSearchTitle] = useState('');

  // ম্যানুয়ালি অ্যাড করা প্রোফাইলগুলোর অ্যারে
  const manualProfiles = [
    { _id: 'manual1', title: 'ম্যানুয়াল প্রোফাইল ১', description: 'এটি একটি ম্যানুয়ালি অ্যাড করা প্রোফাইল।', location: 'ঢাকা', phone: '0123456789', image: 'https://via.placeholder.com/100' },
    { _id: 'manual2', title: 'ম্যানুয়াল প্রোফাইল ২', description: 'এটি আরেকটি ম্যানুয়ালি অ্যাড করা প্রোফাইল।', location: 'চট্টগ্রাম', phone: '0987654321', image: 'https://via.placeholder.com/100' },
    
  ];

  useEffect(() => {
    axios.get('http://localhost:5000/api/listings').then((res) => {
      // MongoDB Atlas থেকে প্রাপ্ত ডেটার সাথে ম্যানুয়াল প্রোফাইলগুলোকে একত্রিত (concatenate) করে listings এ সেট করা
      setListings([...res.data, ...manualProfiles]);
    });
  }, []);

  const uniqueLocations = [...new Set(listings.map(item => item.location))];

  const filteredListings = listings.filter(item => {
    const matchLocation = locationFilter === '' || item.location === locationFilter;
    const matchTitle = searchTitle === '' || item.title.toLowerCase().includes(searchTitle.toLowerCase());
    return matchLocation && matchTitle;
  });

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">তালিকাগুলো</h2>

      {/* ফিল্টার UI */}
      <div className="row mb-3">
        <div className="col-md-6 mb-2">
          <select
            className="form-select"
            value={locationFilter}
            onChange={e => setLocationFilter(e.target.value)}
          >
            <option value="">সব লোকেশন</option>
            {uniqueLocations.map((loc, i) => (
              <option key={i} value={loc}>{loc}</option>
            ))}
          </select>
        </div>
        <div className="col-md-6 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="শিরোনাম দিয়ে খুঁজুন"
            value={searchTitle}
            onChange={e => setSearchTitle(e.target.value)}
          />
        </div>
      </div>

      {/* কার্ড লিস্টিং */}
      <div className="row g-3">
        {filteredListings.map((item) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={item._id}>
            <div className="card text-center shadow-sm w-100" style={{ borderRadius: "15px", padding: "1px", backgroundColor: "#f9f9f9", border: "1px solid #ddd" }}>
              <img
                src={item.image || "https://via.placeholder.com/100"}
                className="card-img-top rounded-circle mx-auto mt-3"
                style={{ width: "100px", height: "100px", objectFit: "cover", border: "3px solid #007bff" }}
                alt="Listing"
              />
              <div className="card-body" style={{ padding: "1px 2px", margin: "4px" }}>
                <h5 className="card-title" style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#333" }}>{item.title}</h5>
                <table className="table table-bordered" style={{ fontSize: "0.9rem", backgroundColor: "#fff" }}>
                  <tbody>
                    <tr>
                    <td style={{ fontWeight: "bold", backgroundColor: "#f1f1f1" }}>নাম্বার</td>
                    <td>{item.phone}</td>
                    
                    </tr>
                    <tr>
                          <td style={{ fontWeight: "bold", backgroundColor: "#f1f1f1" }}>ধরণ</td>
                      <td>{item.description}</td>
                   
                    </tr>
                    <tr>
                    <td style={{ fontWeight: "bold", backgroundColor: "#f1f1f1" }}>ঠিকানা</td>
                    <td>{item.location}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}
        {filteredListings.length === 0 && (
          <div className="text-center text-muted py-5">
            <h5>কোনো লিস্টিং খুঁজে পাওয়া যায়নি</h5>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
