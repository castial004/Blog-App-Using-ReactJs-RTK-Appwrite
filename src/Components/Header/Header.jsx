import React from "react";
import { useSelector } from "react-redux";
import { Container, Logo, LogoutBtn } from "../index";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);

  const navItems = [
    { name: "Home", path: "/", active: authStatus },
    { name: "Login", path: "/login", active: !authStatus },
    { name: "Sign up", path: "/signup", active: !authStatus },
    { name: "All posts", path: "/all-posts", active: authStatus },
    { name: "Add post", path: "/add-post", active: authStatus },
  ];

  return (
    <header className="py-3 shadow bg-gray-900">
      <Container className="flex">
        <nav className="flex w-full items-center">
          <div className="mr-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>
          <ul className="flex ml-auto">
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <button
                      className="px-6 py-2 mx-2 rounded-full bg-green-400 hover:bg-green-600 transition"
                      onClick={() => navigate(item.path)}
                    >
                      {item.name}
                    </button>
                  </li>
                )
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;

