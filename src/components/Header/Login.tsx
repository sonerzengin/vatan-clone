import React from "react";
import { FaUserAlt } from "react-icons/fa";

const Login = () => {
  return (
    <div className="flex items-center mr-4 text-white">
      <div className="mr-2 text-sm font-semibold">Kullanıcı</div>
      <div className="p-1 rounded-full border border-white">
        <FaUserAlt />
      </div>
    </div>
  );
};

export default Login;
