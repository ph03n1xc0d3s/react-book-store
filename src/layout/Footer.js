import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-dark d-flex flex-row justify-content-around align-items-start" style={{height: '200px'}}>
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
      <div className="copyright-footer bg-dark-subtle text-center">
        <p className='m-0'>Designed by Vaibhav</p>
      </div>
    </>
  );
};

export default Footer;
