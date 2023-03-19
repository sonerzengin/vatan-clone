import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user: {
    email: string;
  } | null;
  password: string | null;
  error: string | null; // new error state
}

const initialState: UserState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")!).email
    : null,
  password: null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearUser(state) {
      state.user = null;
      state.password = null;
      localStorage.removeItem("user");
    },
    registerUser(
      state,
      action: PayloadAction<{ email: string; password: string }>
    ) {
      const { email, password } = action.payload;
      state.user = { email };
      state.password = password;
      localStorage.setItem("user", JSON.stringify({ email, password }));
    },
    loginUser(
      state,
      action: PayloadAction<{ email: string; password: string }>
    ) {
      const { email, password } = action.payload;
      const storedUser = JSON.parse(localStorage.getItem("user")!);
      if (
        storedUser &&
        storedUser.email === email &&
        storedUser.password === password
      ) {
        state.user = { email };
        state.password = password;
        localStorage.setItem("user", JSON.stringify({ email, password }));
        state.error = null;
      } else {
        state.error =
          "Kullanıcı bulunamadı.Lütfen Bilgileri Kopyalayıp Yapıştırınız";
      }
    },
  },
});

export const { clearUser, registerUser, loginUser } = userSlice.actions;

export default userSlice.reducer;
