import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="p-1  shadow md:flex md:items-center md:justify-between md:p-4 bg-[#98FB98] text-black">
        <span class="text-sm  sm:text-center ">
          © 2022{" "}
          <a href="https://github.com/yung-coder/Tradify" class="hover:underline">
             Tradify
          </a>
          . All Rights Reserved.
        </span>
        
      </footer>
    </div>
  );
};

export default Footer;
