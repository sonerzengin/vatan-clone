import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../../features/user-slice";
import useModal from "../../hooks/useModal";
import LoginModal from "../LoginModal";

interface RootState {
  user: {
    user: {
      email: string;
    } | null;
    password: string | null;
  };
}

const Login = () => {
  const { isOpen, toggle } = useModal();

  const { user } = useSelector((state: RootState) => state.user);
  const email = user ? user.email : "";

  const dispatch = useDispatch();

  return (
    <div
      className="flex items-center mr-4 text-white cursor-pointer hover:bg-blue-500 transition-all py-2 px-1 rounded"
      onClick={toggle}
    >
      <div className="flex items-center">
        <div className="mr-2 text-xs font-semibold ">
          {email ? "Hoşgeldin Admin" : "Giriş Yap"}
        </div>
        {email && (
          <div
            onClick={() => dispatch(clearUser())}
            className="mr-2 text-xs font-semibold rounded p-2 bg-gray-300 hover:bg-gray-600"
          >
            Çıkış
          </div>
        )}
      </div>
      <div className="p-1 rounded-full border border-white">
        <FaUserAlt />
      </div>
      <div className="">
        <LoginModal isOpen={!email && isOpen} toggle={toggle} />
      </div>
    </div>
  );
};

export default Login;
