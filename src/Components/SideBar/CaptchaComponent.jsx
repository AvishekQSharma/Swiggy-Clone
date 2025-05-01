import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

function CaptchaComponent() {
  const [captchaToken, setCaptchaToken] = useState(null);

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
    console.log("CAPTCHA Token:", token);
  };

  return (
    <div>
      <ReCAPTCHA
        sitekey="YOUR_SITE_KEY_HERE" // Replace with your Google reCAPTCHA site key
        onChange={handleCaptchaChange}
      />
    </div>
  );
}

export default CaptchaComponent;
