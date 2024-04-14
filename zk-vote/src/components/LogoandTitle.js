import React from "react";
import logo from "../pics/logoVoting.png";
import { Link } from "react-router-dom";
function LogoandTitle() {
  return (
    <div className="flex mt-6 ml-6   ">
      <img
        src={logo}
        alt="logo pic"
        className=" ml-10 object-scale-down h-12 w-28 "
      />
      <div className="flex items-center gap-2">
        <img
          src={"https://euc.li/sepolia/akhil.eth"}
          className="w-8 h-8 rounded-full"
        />
        <div className="flex flex-col gap-0 leading-3 pr-10">
          {<span className="font-bold">{"akhil.eth"}</span>}
          <span>{"0xAA6C32B4C3B869201A3e162F24bBe37BCacB02D9"}</span>
        </div>
      </div>

      <Link to="/">
        <h1 className=" mt-2 text-4xl font-mono title text-gray-800">
          zK-Vote
        </h1>
      </Link>
    </div>
  );
}

export default LogoandTitle;
