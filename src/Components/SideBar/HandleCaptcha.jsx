import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const HandleCaptcha = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captchaToken, setCaptchaToken] = useState('');

  const handleCaptcha = (token) => {
    setCaptchaToken(token);
    console.log("CAPTCHA Token:", token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaToken) {
      alert('Please complete the CAPTCHA.');
      return;
    }

    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, captcha: captchaToken }),
    });

    const result = await response.json();
    alert(result.message || result.error);
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
        />

        <ReCAPTCHA
          sitekey="6Lc6NyUrAAAAAE0zZuvuQS6JztN33-YJ6Quo4Il6" // Your site key
          onChange={handleCaptcha}
        />

        <button type="submit" style={{ marginTop: '15px', padding: '8px 16px' }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default HandleCaptcha;
