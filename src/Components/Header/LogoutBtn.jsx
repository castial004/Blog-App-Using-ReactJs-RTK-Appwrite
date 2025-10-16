import React from "react";
import authService from "../../Appwrite/Auth";
import { useDispatch } from "react-redux";
import { logout } from "../../Features/authSlice";

const LogoutBtn = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  return (
    <button
      onClick={handleClick}
      className="rounded-lg px-6 py-2 bg-red-600 hover:bg-red-400 transition"
    >
      Logout
    </button>
  );
};

export default LogoutBtn;

