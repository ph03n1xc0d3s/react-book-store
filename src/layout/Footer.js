import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-dark d-flex flex-row justify-content-around align-items-center" style={{height: "200px"}}>
      <div className="navbar-brand">
      <h2 className="text-light">100 Books Store</h2>
      <p className="text-light text-center">A brand at your service</p>
      </div>
        <div className="links-1">
          <ul
            className="m-2"
            style={{ listStyle: "none" }}
          >
            <li>
              <a className="text-light text-decoration-none" href="">Home</a>
            </li>
            <li>
              <a className="text-light text-decoration-none" href="">Shop</a>
            </li>
            <li>
              <a className="text-light text-decoration-none" href="">About</a>
            </li>
            <li> 
              <a className="text-light text-decoration-none" href="">Contact</a>
            </li>
            <li>
              <a className="text-light text-decoration-none" href="">Create Account</a>
            </li>
          </ul>
        </div>
        <div className="links2">
          <ul className="m-2" style={{ listStyle: "none" }}>
            <li>
              <a className="text-light text-decoration-none" href="">Privacy Policy</a>
            </li>
            <li>
              <a className="text-light text-decoration-none" href="">Terms and Conditions</a>
            </li>
            <li>
              <a className="text-light text-decoration-none" href="">Help and Support</a>
            </li>
            <li>
              <a className="text-light text-decoration-none" href="">Contact Us</a>
            </li>
            <li>
              <a className="text-light text-decoration-none" href="">Locate offline store</a>
            </li>
          </ul>
        </div>
        <div className="socialmedia">
          <ul className="m-2" style={{ listStyle: "none" }}>
            <li>
              <a className="text-light text-decoration-none" href="">Instagram</a>
            </li>
            <li>
              <a className="text-light text-decoration-none" href="">Facebook</a>
            </li>
            <li>
              <a className="text-light text-decoration-none" href="">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright-footer bg-light text-center">
        <p className='m-0'>&#169; Designed and Developed by PH03N1XC0D3S</p>
      </div>
    </>
  );
};

export default Footer;
