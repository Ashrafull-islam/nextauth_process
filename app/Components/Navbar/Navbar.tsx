"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "@/public/assets/media/logo.png";
import Image from "next/image";
import "./navbar.css";
import { useSession } from "next-auth/react";
import Signout from "../Signout";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();
  // console.log("navbar session",session);
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header");
      if (header) {
        header.classList.toggle("scrolled", window.scrollY > 30);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header>
        {/* Topbar Start */}
        <section className="top-bar">
          <div className="container">
            <h5 className="top-bar-text text-center text-white mb-0">
              Shipping All Over Bangladesh!! The Pure Taste Of Nature.
            </h5>
          </div>
        </section>
        {/* Topbar End */}
        {/* Navigation Start */}
        <section>
          <div className="main-navbar" id="header">
            <div className="container-fluid">
              <div className="desktop-menu">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="nav-left">
                    <div className="d-flex justify-content-between align-content-center">
                      <div className="main-logo">
                        <Link href={"/"}>
                          <Image
                            src={logo}
                            alt="Main Logo"
                            loading="lazy"
                            decoding="async"
                            className="fixed-img"
                          />
                        </Link>
                      </div>
                      <div className="main-menu">
                        <ul>
                          <li>
                            <Link href={"/"}>Home</Link>
                          </li>
                          <li>
                            <Link href={"/store"}>Store</Link>
                          </li>
                          <li>
                            <Link href={"/arrival"}>New Arrivals</Link>
                          </li>
                          <li>
                            <Link href={"/offers"}>Offers</Link>
                          </li>
                          <li>
                            <Link href={"/contacts"}>Contact us</Link>
                          </li>
                          <li className="have-sub-menu">
                            <Link href="#">Dropdown</Link>
                            <ul className="sub-menu">
                              <li>
                                <Link href={"/product"}>Product</Link>
                              </li>
                              <li>
                                <Link href={"/singleProduct"}>
                                  Single product
                                </Link>
                              </li>
                              <li>
                                <Link href={"/checkout"}>Checkout</Link>
                              </li>
                              <li>
                                <Link href={"/privacy"}>Privacy</Link>
                              </li>
                              <li>
                                <Link href={""}>Submenu 5</Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="nav-right">
                    <div className="search-section">
                      <form className="search-bar">
                        <div className="form-group">
                          <input
                            type="text"
                            className="search-input"
                            id="search"
                            placeholder="search for product"
                          />
                          <button className="search-btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={32}
                              height={32}
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="M9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.6 5.6q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-5.6-5.6q-.75.6-1.725.95T9.5 16m0-2q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"
                              />
                            </svg>
                          </button>
                        </div>
                      </form>
                    </div>
                    {!session ? (
  // 🔓 Not logged in → Show Offcanvas trigger
  <div className="user">
    <button
      className="btn account-menu-toggle"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#userAuthOffcanvas"
      aria-controls="userAuthOffcanvas"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={28}
        height={28}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          fill="currentColor"
          d="M12 5.9a2.1 2.1 0 1 1 0 4.2a2.1 2.1 0 0 1 0-4.2m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4"
        />
      </svg>
    </button>
  </div>
) : (
  // ✅ Logged in → Show hover dropdown
  <div
    className="user account-menu-container"
    onMouseEnter={() => setIsOpen(true)}
    onMouseLeave={() => setIsOpen(false)}
  >
    <button className="btn  account-menu-toggle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={28}
        height={28}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          fill="currentColor"
          d="M12 5.9a2.1 2.1 0 1 1 0 4.2a2.1 2.1 0 0 1 0-4.2m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4"
        />
      </svg>
    </button>

    {isOpen && (
      <ul className="account-menu-dropdown show">
        <li><Link className="account-menu-item" href="/dashboard">Dashboard</Link></li>
        <li><Link className="account-menu-item" href="/dashboard">Orders</Link></li>
        <li><Link className="account-menu-item" href="/dashboard">Addresses</Link></li>
        <li><Link className="account-menu-item" href="/dashboard">Account details</Link></li>
        <li><Link className="account-menu-item" href="/dashboard">Wishlist</Link></li>
        <li><Link href="/" className="account-menu-item"><Signout></Signout></Link></li>
      </ul>
    )}
  </div>
)}

                    <div className="white-list mx-3">
                      <Link href={"/wishlist"}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="m12 21l-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812T2.388 10.4T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55t2.475-.55q2.35 0 3.925 1.575T22 8.15q0 1.15-.387 2.25t-1.363 2.412t-2.625 2.963T13.45 19.7zm0-2.7q2.4-2.15 3.95-3.687t2.45-2.675t1.25-2.026T20 8.15q0-1.5-1-2.5t-2.5-1q-1.175 0-2.175.662T12.95 7h-1.9q-.375-1.025-1.375-1.687T7.5 4.65q-1.5 0-2.5 1t-1 2.5q0 .875.35 1.763t1.25 2.025t2.45 2.675T12 18.3m0-6.825" />
                        </svg>
                      </Link>
                    </div>
                    <div className="cart">
                      <button
                        className="position-relative btn"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#cartOffCanvas"
                        aria-controls="cartOffCanvas"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={25}
                          height={25}
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                          >
                            <path d="M3 3h2l.5 3m0 0L7 15h11l3-9z" />
                            <circle cx={8} cy={20} r={1} />
                            <circle cx={17} cy={20} r={1} />
                          </g>
                        </svg>
                        <span className="position-absolute top-0 start-70 translate-middle badge rounded-pill bg-unread">
                          0
                          <span className="visually-hidden">
                            unread messages
                          </span>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mobile-menu py-2">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="mobile-menu-icon">
                    <button
                      className="d-flex align-items-center p-0 btn"
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#mobileMenuOffcanvas"
                      aria-controls="mobileMenuOffcanvas"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={32}
                        height={32}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h16q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z" />
                      </svg>
                      <span className="text-uppercase ms-2">menu</span>
                    </button>
                  </div>
                  <div className="main-logo">
                    <Link href="/index.html">
                      <Image
                        src={logo}
                        alt="Main Logo"
                        loading="lazy"
                        decoding="async"
                        className="fixed-img small-logo"
                      />
                    </Link>
                  </div>
                  <div className="cart">
                    <button
                      className="position-relative btn"
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#cartOffCanvas"
                      aria-controls="cartOffCanvas"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={25}
                        height={25}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        >
                          <path d="M3 3h2l.5 3m0 0L7 15h11l3-9z" />
                          <circle cx={8} cy={20} r={1} />
                          <circle cx={17} cy={20} r={1} />
                        </g>
                      </svg>
                      <span className="position-absolute top-0 start-70 translate-middle badge rounded-pill bg-unread">
                        0
                        <span className="visually-hidden">unread messages</span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Mobile Menu */}
            <div
              className="offcanvas offcanvas-start"
              tabIndex={-1}
              id="mobileMenuOffcanvas"
              aria-labelledby="mobileMenuOffcanvasLabel"
            >
              <div className="offcanvas-header d-flex justify-content-end">
                <button
                  type="button"
                  className="btn p-0 d-flex align-items-center"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
                    />
                  </svg>
                  Close
                </button>
              </div>
              <div className="offcanvas-body">
                <div className="container-fluid p-0">
                  <div className="p-3-bottom">
                    <div className="search-container">
                      <input
                        type="search"
                        className="form-control"
                        id="searchInput"
                        placeholder="Search for products"
                      />
                    </div>
                  </div>
                  <ul className="nav nav-tabs" id="menuTabs" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="menu-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#menu"
                        type="button"
                        role="tab"
                      >
                        MENU
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="categories-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#categories"
                        type="button"
                        role="tab"
                      >
                        CATEGORIES
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="menuTabsContent">
                    <div
                      className="tab-pane fade show active"
                      id="menu"
                      role="tabpanel"
                    >
                      <ul className="menu-list">
                        <li>
                          <a href="index.html">HOME</a>
                        </li>
                        <li>
                          <a href="store.html">STORE</a>
                        </li>
                        <li>
                          <a
                            href={"/arrival"}
                            className="d-flex justify-content-between align-items-center"
                          >
                            NEW ARRIVALS
                            <span className="new-badge">NEW</span>
                          </a>
                        </li>
                        <li>
                          <a href="offer.html">OFFERS</a>
                        </li>
                        <li>
                          <a href="contact.html">CONTACT US</a>
                        </li>
                      </ul>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="categories"
                      role="tabpanel"
                    >
                      <div className="">
                        <ul className="menu-list">
                          <li>
                            <a href="#">NATURAL SWEETENERS</a>
                          </li>
                          <li>
                            <a href="#">PICKLES</a>
                          </li>
                          <li>
                            <a href="#">KITCHEN ESSENTIALS</a>
                          </li>
                          <li>
                            <a href="#">SPECIAL PRODUCTS</a>
                          </li>
                          <li>
                            <a href="#">NUTS&amp;SEEDS</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="offcanvas offcanvas-end"
              tabIndex={-1}
              id="cartOffCanvas"
              aria-labelledby="cartOffCanvasLabel"
            >
              <div className="offcanvas-header d-flex justify-content-between align-content-center">
                <h5 className="fw-bold">Shoping Cart</h5>
                <button
                  type="button"
                  className="btn p-0 d-flex align-items-center"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
                    />
                  </svg>
                  Close
                </button>
              </div>
              <div className="offcanvas-body">
                <div className="empty-cart-content">
                  <div className="cart-icon">
                    <i className="bi bi-cart-x" />
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={150}
                    height={150}
                    fill="lightgray"
                    className="bi bi-cart-x"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5 6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793z" />
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                  </svg>
                  <p className="empty-message my-3 fs-6 fw-bold">
                    No products in the cart.
                  </p>
                  <button className="btn btn-success return-shop-btn">
                    RETURN TO SHOP
                  </button>
                </div>
              </div>
            </div>
            <div
              className="offcanvas offcanvas-end p-10"
              tabIndex={-1}
              id="userAuthOffcanvas"
              aria-labelledby="userAuthOffcanvasLabel"
            >
              <div className="offcanvas-header d-flex justify-content-between align-content-center border border-bottom-success">
                <h5 className="fw-bold">Sign In</h5>
                <button
                  type="button"
                  className="btn d-flex align-items-center"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
                    />
                  </svg>
                  Close
                </button>
              </div>
              {/* off canva  */}
              {!session ? (
                // ❌ Not logged in: show login form
                <div className="offcanvas-body p-0 m-0">
                  <div className="login-container p-3">
                    <form>
                      <div className="mb-3">
                        <label
                          htmlFor="username"
                          className="form-label required"
                        >
                          Username or email address
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="username"
                          required={true}
                        />
                      </div>
                      <div className="mb-1">
                        <label
                          htmlFor="password"
                          className="form-label required"
                        >
                          Password
                        </label>
                        <div className="password-field">
                          <input
                            type="password"
                            className="form-control"
                            id="password"
                            required={true}
                          />
                          <button type="button" className="password-toggle">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              fill="currentColor"
                              className="bi bi-eye"
                              viewBox="0 0 16 16"
                            >
                              <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                              <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-login text-white"
                      >
                        LOG IN
                      </button>
                      <div className="d-flex justify-content-between align-items-center border-bottom">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="remember"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="remember"
                          >
                            Remember me
                          </label>
                        </div>
                        <a href="#" className="forgot-password">
                          Lost your password?
                        </a>
                      </div>
                      <div className="avatar-section my-3">
                        <div className="avatar-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={66}
                            height={66}
                            fill="currentColor"
                            className="bi bi-person"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                          </svg>
                        </div>
                        <p className="no-account">No account yet?</p>
                        <a
                          href="#"
                          className="create-account border-bottom border-success d-inline-block"
                        >
                          CREATE AN ACCOUNT
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </section>
        {/* Navigarion End */}
        {/* down bar start  */}
        <section>
          <div className="botton-nav-container">
            <div className="bottom-nav">
              <div className="container h-100">
                <div className="row h-100 align-items-center justify-content-around g-0">
                  <a href="/store.html" className="col nav-items active">
                    <svg viewBox="0 0 24 24">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                    Store
                  </a>
                  <a
                    href="#"
                    className="col nav-items"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#cartOffCanvas"
                    aria-controls="cartOffCanvas"
                  >
                    <svg viewBox="0 0 24 24">
                      <circle cx={9} cy={21} r={1} />
                      <circle cx={20} cy={21} r={1} />
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                    </svg>
                    <span className="cart-badge">0</span>
                    Cart
                  </a>
                  <Link href={"wishlist"} className="col nav-items">
                    <svg viewBox="0 0 24 24">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                    Wishlist
                  </Link>
                  <a href="/login.html" className="col nav-items">
                    <svg viewBox="0 0 24 24" style={{ pointerEvents: "none" }}>
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx={12} cy={7} r={4} />
                    </svg>
                    My account
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* down bar end  */}
      </header>

    </>
  );
}
