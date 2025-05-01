import  { useState } from 'react';
import './ViewCart.css';

const ViewCart = () => {
  const [selectedAddress, setSelectedAddress] = useState('home');
  const [noContact, setNoContact] = useState(false);

  return (
    <div className="checkout-container">
      {/* Left Section */}
      <div className="left-section">
        <div className="step-section">
          <h3>Select delivery address</h3>
          <p>You have a saved address in this location</p>

          <div className="address-cards">
            <div
              className={`address-card ${selectedAddress === 'home' ? 'selected' : ''}`}
              onClick={() => setSelectedAddress('home')}
            >
              <h4>🏠 Home</h4>
              <p>462 Ramkrishna Apartment, Jyotirmoy Nagar, Thakurpukur, Kolkata, West Bengal, India</p>
              <p className="time">60 MINS</p>
              <button className="btn">DELIVER HERE</button>
            </div>

            <div
              className={`address-card ${selectedAddress === 'new' ? 'selected' : ''}`}
              onClick={() => setSelectedAddress('new')}
            >
              <h4>📍 Add New Address</h4>
              <p>Jyotirmoy Nagar, Thakurpukur, Kolkata, West Bengal, India</p>
              <button className="btn-outline">ADD NEW</button>
            </div>
          </div>
        </div>

        <div className="step-section">
          <h3>Payment</h3>
          {/* Payment UI can be added here */}
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <div className="cart-header">
          <img src="https://www.shutterstock.com/image-photo/south-indian-masala-dosa-green-600nw-2133851191.jpg" className='h-8 rounded-3xl' alt="Restaurant" />
          <div>
            <h4>New Om Sakti</h4>
            <p>Santoshpur</p>
          </div>
        </div>

        <div className="cart-items">
          {[
            { name: 'Onion Dosa', price: '₹83.10', original: '₹95' },
            { name: 'Masala Dosa', price: '₹91.85', original: '₹105' },
            { name: 'Cheese Paper Plain Dosa (1 Pc)', price: '₹122.46', original: '₹140' },
            { name: 'Schezwan Cheese Plain Dosa', price: '₹121.59', original: '₹139' },
          ].map((item, index) => (
            <div className="cart-item" key={index}>
              <p>➕ {item.name}</p>
              <div className="price-box">
                <div className="qty-box">
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </div>
                <div>
                  <span className="discounted">{item.price}</span>
                  <span className="original">{item.original}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="no-contact-box">
          <label>
            <input
              type="checkbox"
              checked={noContact}
              onChange={() => setNoContact(!noContact)}
            />
            <strong> Opt in for No-contact Delivery</strong>
            <p className="note">
              Unwell, or avoiding contact? Please select no-contact delivery.
              Partner will safely place the order outside your door (not for COD).
            </p>
          </label>
        </div>

        <div className="coupon-box">
          <button className="btn-outline">Apply Coupon</button>
        </div>

        <div className="bill-summary">
          <div className="bill-row">
            <span>Item Total</span><span>₹479</span>
          </div>
          <div className="bill-row">
            <span>Delivery Fee | 9.8 kms</span><span>₹70</span>
          </div>
          <div className="bill-row discount">
            <span>Extra discount for you</span><span>-₹60</span>
          </div>
          <div className="bill-row tip">
            <span>Delivery Tip</span><span className="add-tip">Add tip</span>
          </div>
          <div className="bill-total">
            <strong>TO PAY</strong><strong>₹549</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCart;
