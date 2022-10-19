import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="p-1  shadow md:flex md:items-center md:justify-between md:p-4 bg-[#00FF7F] text-black">
        <span className="text-sm  sm:text-center ">
          © 2022{" "}
          <a href="https://github.com/yung-coder/Tradify" className="hover:underline">
             Tradify
          </a>
          . All Rights Reserved.
        </span>
        
      </footer>
    </div>
  );
};

export default Footer;
