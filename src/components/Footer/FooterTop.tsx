import React from "react";
import { CiMail } from "react-icons/ci";
import { GoLocation } from "react-icons/go";
import { FiPhone } from "react-icons/fi";

const FooterTop = () => {
  return (
    <div className="container mx-auto mt-8 text-gray-400">
      <div>
        <label htmlFor="" className="flex items-center justify-center mb-1">
          <CiMail />
          <div className="text-xs font-semibold ml-1">E-BÜLTENE ÜYE OL</div>
        </label>
        <div className="border flex items-center justify-between max-w-[345px] mx-auto rounded">
          <input
            type="text"
            className="outline-none p-2 border-none w-[80%] focus:outline-none placeholder:text-xs placeholder:uppercase placeholder:font-semibold"
            placeholder="E-posta Adresiniz"
          />
          <div className="p-2 text-xs font-semibold hover:bg-gray-300 transition-all rounded cursor-pointer mr-1">
            Üye Ol
          </div>
        </div>
        <div className="flex flex-col lg:flex-row  justify-center items-center gap-x-12 mt-8 mb-12">
          <div className="border px-20 py-3 flex rounded mb-5 lg:mb-0">
            <GoLocation />
            <div className="text-xs font-semibold text-gray-500 ml-1 uppercase">
              Mağaza Bul
            </div>
          </div>
          <div className="border px-20 py-3 flex rounded">
            <FiPhone />
            <div className="text-xs font-semibold text-gray-500 ml-1">0850 222 23 56</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
