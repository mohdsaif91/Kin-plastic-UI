import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, withRouter, useLocation } from "react-router-dom";

import Logo from "../images/logo.PNG";
import DropDown from "./DropDown";

const routes = [
  { name: "Home", to: "/", additionalClass: "", value: "home" },
  { name: "Product", to: "/product", additionalClass: "", value: "product" },
  { name: "Service", to: "/service", additionalClass: "", value: "service" },
  { name: "About Kin", to: "/aboutUs", additionalClass: "", value: "aboutUs" },
  { name: "Reach Us", to: "/reachUs", additionalClass: "", value: "reachUs" },
  { name: "Login", to: "/login", additionalClass: "side-menu", value: "login" },
];

const initialSearch = {
  text: "",
  searchedProduct: [],
};

function Header(props) {
  const [openMenu, setOpenMenu] = useState(false);
  const [page, setPage] = useState("home");
  const [searchedProduct, setSearchedProduct] = useState({ ...initialSearch });

  const productdata = useSelector((state) => state.AdminHomeSetting.setting);
  const { pathname } = useLocation();

  const setPageCloseNav = (data) => {
    // setPage(data);
    setOpenMenu(false);
  };

  useEffect(() => {
    const activePage = routes.find((m) => {
      let pathNameURL = "";
      if (pathname === "/") {
        pathNameURL = "product";
      } else if (pathname.substring(1) === m.value) {
        pathNameURL = m.value;
      }
      return pathNameURL;
    });
    setPage(activePage.value);
  }, [pathname]);

  const findOnChange = (e) => {
    const foundProduct = productdata?.product.filter(
      (f) =>
        f.categoryName.toLowerCase().includes(e) ||
        f.productName.toLowerCase().includes(e)
    );
    setSearchedProduct({
      ...searchedProduct,
      text: e,
      searchedProduct: [...foundProduct],
    });
  };

  const change = () => {};

  const openNav = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="main-header">
      <div className="left-container">
        <div className="logo">
          <NavLink to="/">
            <img className="company-logo" src={Logo} alt="" />
          </NavLink>
        </div>
        {!props.hideRest && window.innerWidth <= 759 && (
          <div className="logo-name-header">Kin Industries</div>
        )}
        <div className="logo-name">Kin Industries</div>
        {props.hideRest && (
          <div
            className="search-container"
            style={{ display: openMenu ? "none" : "inline-flex" }}
          >
            <div className="container">
              <div className="form-control">
                <form action="" autocomplete="off">
                  <div className="search-wrapper">
                    <label>
                      <i className="icon fa fa-search"></i>
                      <input
                        type="text"
                        className="search-box"
                        id="search"
                        onChange={
                          (e) => findOnChange(e.target.value)
                          // dispatch(getSerchObjectFunction(e.target.value))
                        }
                        placeholder={
                          window.innerWidth <= 768
                            ? "Search on KIN Industries"
                            : "Search on KIN"
                        }
                      />
                    </label>
                  </div>
                </form>
                {searchedProduct.text !== "" && (
                  <ul className="dropdown-products">
                    {searchedProduct.searchedProduct.map((m) => (
                      <li>
                        <img alt="" />
                        <div>{m.categoryName}</div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      {props.hideRest && (
        <>
          <input
            type="checkbox"
            value={openMenu}
            onChange={() => change()}
            className="menu-btn"
            id="menu-btn"
          />
          <label
            for="menu-btn"
            onClick={() => openNav()}
            className={`menu-icon ${openMenu && "mobile-menu-icon"}`}
          >
            <span className="menu-icon__line"></span>
          </label>

          <ul className={`nav-links ${openMenu && "mobile-links"}`}>
            {routes.map((m) => (
              <li
                className={`nav-link ${m.additionalClass} ${
                  page === m.value && "active"
                }`}
                onClick={() => setPageCloseNav(m.value)}
              >
                <NavLink to={m.to}>{m.name}</NavLink>
              </li>
            ))}
          </ul>
        </>
      )}
      <div className="dropdown-container">
        <DropDown />
      </div>
    </div>
  );
}

export default withRouter(Header);
