import Modal from "./Modal";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/user-slice";
import { InfinitySpin } from "react-loader-spinner";

interface ModalType {
  isOpen: boolean;
  toggle: () => void;
}

interface RootState {
  user: {
    user: {
      email: string;
    } | null;
    password: string | null;
    error: string | null;
  };
}

const LoginModal = (props: ModalType) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const dispatch = useDispatch();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      user: e.target.value,
    }));
  };
  const error = useSelector((state: RootState) => state.user.error);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const { email, password } = formData;
    setTimeout(
      () => (dispatch(loginUser({ email, password })), setLoading(false)),
      2000
    );
  };
  const handleRegister = () => {
    localStorage.setItem(
      "user",
      JSON.stringify({ email: "admin@admin.com", password: "admin123" })
    );
  };
  return (
    <Modal isOpen={props.isOpen} toggle={props.toggle}>
      <div className="">
        <section className="w-[500px] rounded-lg">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Kullanıcı Giriş
                </h1>
                <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
                  <div
                    onClick={handleRegister}
                    className="text-black p-2 bg-gray-200 rounded"
                  >
                    E-mail: <strong className="select-all">admin@admin.com</strong>, Password:{" "}
                    <strong className="select-all">admin123</strong>
                  </div>
                  {error && (
                    <div className="text-xs p-1 bg-red-400 rounded">
                      {error}
                    </div>
                  )}
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      E-posta adresiniz
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-stone-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="eposta@eposta.com"
                      onChange={onChange}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Şifre
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={onChange}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white bg-stone-400 hover:bg-stone-500 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                  >
                    {!loading ? (
                      "Giriş Yap"
                    ) : (
                      <div className="flex justify-center items-center p-0 mr-8">
                        <InfinitySpin width="75" color="#ffffff" />
                      </div>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Modal>
  );
};

export default LoginModal;
