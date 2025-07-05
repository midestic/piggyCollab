import React from "react";

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="w-[100%] border">
      <div className="w-[100%]  flex justify-between items-center max-w-[1200px] mx-auto border  ">
        <div className="w-[70%] border flex justify-between items-center">
          <div className="w-[10%]">
            <h1>PIGGYVEST</h1>
          </div>
          <div className="flex justify-between items-center w-[85%] gap-x-[10px]">
            <span>Save</span>
            <Link to="/invest">
              <span>Invest</span>
            </Link>
            <span>Stories</span>
            <span>FAQ</span>
            <span>Resources</span>
            <span>PiggyBank</span>

          <Link to= "/safelock">
          <span>Safelock</span> 
           </Link>

            <span>Target Savings</span>
            <span>flex Naira</span>
            <span>Flex Dollar </span>
            <Link to="/housemoney">
              <span>House Money</span>
            </Link>
            <span>Blog</span>
          </div>
        </div>

        <Link to="/shop">
          <span>Shop</span>
        </Link>
        <div className="w-[20%] border">
          <button>Login</button>
          <button>Sign up</button>
        </div>
      </div>
    </div>
  );
}
