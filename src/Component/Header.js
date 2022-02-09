import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, withRouter, useHistory, useLocation } from "react-router-dom";

import DropDown from "./DropDown";

import Logo from "../images/logo.PNG";
import { searchSingleProductFun } from "../Redux/Thunks/Header";
import { getSettingHome } from "../Redux/Thunks/AdminHome";

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
  const [show] = useState(true);

  const productdata = useSelector((state) => state.AdminHomeSetting.setting);
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();

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
    if (pathname.includes("/showProduct")) {
      // setPage()
    } else {
      setPage(activePage.value);
    }
  }, [pathname]);

  useEffect(() => {
    if (!productdata?.product) {
      dispatch(getSettingHome());
    }
  }, [productdata, dispatch]);

  const findOnChange = (e) => {
    const foundProduct = productdata?.product.filter(
      (f) =>
        f.categoryName.toLowerCase().includes(e.toLowerCase()) ||
        f.productName.toLowerCase().includes(e.toLowerCase()) ||
        f.application.toLowerCase().includes(e.toLowerCase())
    );
    setSearchedProduct({
      ...searchedProduct,
      text: e,
      searchedProduct: foundProduct.length !== 0 ? [...foundProduct] : [],
    });
  };

  const change = () => {};

  const openNav = () => {
    setOpenMenu(!openMenu);
  };

  const showSingle = (id) => {
    setSearchedProduct({ ...initialSearch });
    dispatch(searchSingleProductFun(id));
    setInterval(() => {
      history.push(`/showProduct/${id}`);
    }, 1000);
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
                <form action="" autoComplete="off">
                  <div className="search-wrapper">
                    <label>
                      <i className="icon fa fa-search"></i>
                      <input
                        type="text"
                        className="search-box"
                        id="search"
                        onChange={(e) => findOnChange(e.target.value)}
                        placeholder={
                          window.innerWidth <= 768
                            ? "Search on KIN Industries"
                            : "Search on KIN"
                        }
                      />
                    </label>
                  </div>
                </form>
                {/* {searchedProduct.text === "" && show && (
                  <ul className="dropdown-products-dummy">
                    {searchedProduct.searchedProduct.map((m) => (
                    <li>Search Category, Product and Application</li>
                    ))}
                  </ul>
                )} */}
                {searchedProduct.text !== "" && show && (
                  <ul className="dropdown-products">
                    {searchedProduct.searchedProduct.map((m) => (
                      <li key={m._id} onClick={() => showSingle(m._id)}>
                        <div>
                          <div className="serach-result-productname">
                            {m.productName}
                          </div>
                          <div className="serach-result-category">
                            {m.categoryName}
                          </div>
                          <div className="serach-result-category">
                            Application:- {m.application}
                          </div>
                        </div>
                        <img
                          className="serach-result-img"
                          src={`https://kinindustries.s3.ap-south-1.amazonaws.com/product/${m.productImage}`}
                          alt=""
                        />
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
            htmlFor="menu-btn"
            onClick={() => openNav()}
            className={`menu-icon ${openMenu && "mobile-menu-icon"}`}
          >
            <span className="menu-icon__line"></span>
          </label>

          <ul className={`nav-links ${openMenu && "mobile-links"}`}>
            {routes.map((m, index) => (
              <li
                key={index}
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
