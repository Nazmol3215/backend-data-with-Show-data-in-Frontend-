// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Home = () => {
//   const [listings, setListings] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/listings').then((res) => {
//       setListings(res.data);
//     });
//   }, []);

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>তালিকাগুলো</h2>

//       {listings.map((item) => (
//         <div key={item._id} style={{ border: '1px solid #ccc', padding: 10, marginBottom: 10 }}>
//           <h3>{item.title}</h3>
//           <p>{item.description}</p>
//           <p><strong>লোকেশন:</strong> {item.location}</p>
//           <p><strong>ফোন:</strong> {item.phone}</p>
//           {item.image && <img src={item.image} alt="listing" width="100%" />}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Home;




import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [listings, setListings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/api/listings').then((res) => {
      setListings(res.data);
    });
  }, []);

  const containerStyle = {
    padding: '30px',
    backgroundColor: '#f7f9fc',
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh',
  };

  const headingStyle = {
    textAlign: 'center',
    fontSize: '32px',
    color: '#2c3e50',
    marginBottom: '30px',
    fontWeight: 'bold',
  };

  const cardStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '15px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    marginBottom: '20px',
    transition: 'transform 0.3s',
  };

  const cardHoverStyle = {
    ...cardStyle,
    transform: 'scale(1.02)',
  };

  const titleStyle = {
    fontSize: '24px',
    color: '#34495e',
    marginBottom: '10px',
  };

  const textStyle = {
    fontSize: '16px',
    color: '#555',
    margin: '5px 0',
  };

  const imageStyle = {
    width: '100%',
    borderRadius: '10px',
    marginTop: '10px',
  };

  const buttonStyle = {
    display: 'block',
    margin: '30px auto 0',
    padding: '12px 24px',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    transition: 'background-color 0.3s',
  };

  const handleNavigate = () => {
    navigate('/add-listing');
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>🌟 তালিকাগুলো 🌟</h2>
      <button style={buttonStyle} onClick={handleNavigate}>
        অন্য পেইজে যান 🚀
      </button>


      {listings.map((item) => (
        <div
          key={item._id}
          style={cardStyle}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <h3 style={titleStyle}>{item.title}</h3>
          <p style={textStyle}>{item.description}</p>
          <p style={textStyle}><strong>📍 লোকেশন:</strong> {item.location}</p>
          <p style={textStyle}><strong>📞 ফোন:</strong> {item.phone}</p>
          {item.image && <img src={item.image} alt="listing" style={imageStyle} />}
        </div>
      ))}

     
    </div>
  );
};

export default Home;
