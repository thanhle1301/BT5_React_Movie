import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  // useNavigate dùng để điều hướng trang, không gây reload
  let navigate = useNavigate();

  // lấy dữ liệu từ redux về

  // useSelector ~ mapStateToProps
  let user = useSelector((state) => state.userReducer.user);
  console.log("😃 - file: Header.js:13 - Header - user:", user);
  let renderMenu = () => {
    if (user) {
      return (
        <>
          <span>{user.hoTen}</span>
          <button
            className="btn-theme"
            onClick={() => {
              window.location.href = "/";
              // clear data user localStorage
              localStorage.removeItem("USER_INFO");
            }}
          >
            Logout
          </button>
        </>
      );
    } else {
      return (
        <button
          className="btn-theme"
          onClick={() => {
            // navigate("/login");
            window.location.href = "/login";
            //  window => reload lại trang =>dữ liệu trên redux sẽ mất
          }}
        >
          Login
        </button>
      );
    }
  };
  return (
    <div className="container h-20 flex items-center justify-between">
      <span
        onClick={() => {
          navigate("/");
        }}
        className="font-medium text-red-500 text-3xl animate-pulse"
      >
        CyberFlix
      </span>
      <div className="space-x-5">{renderMenu()}</div>
    </div>
  );
}
