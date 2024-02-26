import { useState } from "react";
import OtpInput from "./OtpInput";
const PhoneOtpLogin = () => {
  const [phoneNumber, setphoneNumber] = useState("");
  const [showOtpField, setShowotpField] = useState(false);

  const handlePhoneNumber = (event) => {
    setphoneNumber(event.target.value);
  };

  const handlePhoneSubmit = (event) => {
    event.preventDefault(); //to prevent the page from getting refreshed after clicking the submit button.

    //Phone validation
    const regex = /[^0-9]/g;
    if (phoneNumber.length != 10 || regex.test(phoneNumber)) {
      alert("Invalid number entered");
      return;
    }
    //call the api from the backend for the otp.
    //show otp field.
    setShowotpField(true);
  };

  const onOtpSubmit = (otp) => {
    console.log(otp)
  }
  return (
    <div>
      {!showOtpField ? (
        <form onSubmit={handlePhoneSubmit}>
          <input
            type="text"
            value={phoneNumber}
            placeholder="Enter your phone number"
            onChange={handlePhoneNumber}
          />

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Enter the otp sent to {phoneNumber}</p>
          <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
        </div>
      )}
    </div>
  );
};

export default PhoneOtpLogin;
