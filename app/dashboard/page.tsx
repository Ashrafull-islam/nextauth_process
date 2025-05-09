"use client";
import './dashboard.css'
import React, { useEffect, useState } from "react";

export default function Page() {
    useEffect(() => {
      const menuItems = document.querySelectorAll('#sidebar-menu li');
      const sections = document.querySelectorAll('.account-content');
    
      const handleClick = (event:any) => {
        const item = event.currentTarget;
    
        // Remove active class from all
        menuItems.forEach(i => i.classList.remove('active'));
        sections.forEach(s => s.classList.remove('active'));
    
        // Add active class to clicked item and show its section
        item.classList.add('active');
        const targetId = item.getAttribute('data-section');
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.classList.add('active');
        }
      };
    
      // Add click listeners
      menuItems.forEach(item => {
        item.addEventListener('click', handleClick);
      });
    
      // Cleanup on unmount
      return () => {
        menuItems.forEach(item => {
          item.removeEventListener('click', handleClick);
        });
      };
    }, []);
    
  return (
    <main>
    {/* hero section start  */}
    <section>
      <div
        className="hero-container d-flex align-items-center justify-content-center"
        style={{
          backgroundImage:
            "url(assets/media/store/banner/Home-Image-1-scaled-1.jpg)"
        }}
      >
        <div className="hero-content">
          <h1 className="banner-header">My account</h1>
          <div className="d-flex gap-2 justify-content-center">
            <p className="banner-home ">
              <a className="raf-tag" href="index.html">
                Home
              </a>
            </p>
            <span>/</span>
            <p className="banner-store ">
              <a className="raf-tag" href="login.html">
                My account
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* hero section end  */}
    <section>
      <div className="dashboard-section">
        <div className="container account-section">
          <div className="row">
            {/* Sidebar */}
            <div className="col-md-3 sidebar-nav">
              <h5>MY ACCOUNT</h5>
              <hr />
              <ul id="sidebar-menu">
                <li className="active" data-section="dashboard">
                  Dashboard
                </li>
                <li data-section="orders">Orders</li>
                <li data-section="addresses">Addresses</li>
                <li data-section="account">Account details</li>
                <li data-section="wishlist">Wishlist</li>
                <li data-section="logout text-black">
                  <a className="text-decoration-none text-body" href="login.html">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
            {/* Main Sections */}
            <div className="col-md-9">
              {/* Dashboard */}
              <div className="account-content active" id="dashboard">
                <p>
                  Hello <strong>Shafaet Hosser Shuvo</strong> (not{" "}
                  <strong>Shafaet Hosser Shuvo</strong>? <a href="#">Log out</a>)
                </p>
                <p>
                  From your account dashboard you can view your{" "}
                  <a href="#">recent orders</a>, manage your{" "}
                  <a href="#">shipping and billing addresses</a>, and{" "}
                  <a href="#">edit your password</a> and account details.
                </p>
                <div className="row gap-3 ms-3">
                  <div className="col-12 col-md-5 col-lg-3 border details-dev px-5 py-4 text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width={42}
                      height={42}
                      viewBox="0 0 32 32"
                    >
                      <path d="M 8 3 C 6.90625 3 6 3.90625 6 5 L 6 27 C 6 28.09375 6.90625 29 8 29 L 24 29 C 25.09375 29 26 28.09375 26 27 L 26 9.59375 L 25.71875 9.28125 L 19.71875 3.28125 L 19.40625 3 Z M 8 5 L 17 5 L 17 10 C 17 11.09375 17.90625 12 19 12 L 24 12 L 24 27 L 8 27 Z M 19 5.4375 L 23.5625 10 L 19 10 Z M 11 15 L 11 17 L 21 17 L 21 15 Z M 11 18 L 11 20 L 21 20 L 21 18 Z M 11 21 L 11 23 L 16 23 L 16 21 Z" />
                    </svg>
                    <p>Orders</p>
                  </div>
                  <div className="col-12 col-md-5 col-lg-3 border details-dev px-5 py-4 text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={42}
                      height={42}
                      viewBox="0 0 53 53"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_187_2751)">
                        <path
                          d="M26.5 11.5938C21.9271 11.5938 18.2188 15.3021 18.2188 19.875C18.2188 24.4479 21.9271 28.1563 26.5 28.1563C31.0729 28.1563 34.7812 24.4479 34.7812 19.875C34.7812 15.3021 31.0729 11.5938 26.5 11.5938ZM26.5 24.8438C23.7556 24.8438 21.5312 22.6194 21.5312 19.875C21.5312 17.1306 23.7556 14.9063 26.5 14.9063C29.2444 14.9063 31.4688 17.1306 31.4688 19.875C31.4688 22.6194 29.2444 24.8438 26.5 24.8438ZM26.5 0C15.524 0 6.625 8.89906 6.625 19.875C6.625 28.1845 23.1958 53.0167 26.5 53.0001C29.7529 53.0166 46.375 28.0735 46.375 19.875C46.375 8.89906 37.476 0 26.5 0ZM26.5 48.0313C23.7457 48.0462 9.9375 26.7998 9.9375 19.875C9.9375 10.7276 17.3525 3.3125 26.5 3.3125C35.6475 3.3125 43.0625 10.7276 43.0625 19.875C43.0625 26.7071 29.2113 48.0462 26.5 48.0313Z"
                          fill="#D1D1D1"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_187_2751">
                          <rect width={53} height={53} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <p>Address</p>
                  </div>
                  <div className="col-12 col-md-5 col-lg-3 border details-dev px-5 py-4 text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={42}
                      height={42}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        fill="currentColor"
                        d="M12 5.9a2.1 2.1 0 1 1 0 4.2a2.1 2.1 0 0 1 0-4.2m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4"
                      />
                    </svg>
                    <p>Account details</p>
                  </div>
                  <div className="col-12 col-md-5 col-lg-3 border details-dev px-5 py-4 text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={42}
                      height={42}
                      fill="currentColor"
                      className="bi bi-suit-heart"
                      viewBox="0 0 16 16"
                    >
                      <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.6 7.6 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                    </svg>
                    <p>Wishlist</p>
                  </div>
                  <div className="col-12 col-md-5 col-lg-3 border details-dev px-5 py-4 text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={42}
                      height={42}
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
                    <p>Logout</p>
                  </div>
                </div>
              </div>
              {/* Orders */}
              <div className="account-content" id="orders">
                <h6>Your Orders</h6>
                <p>No orders yet.</p>
                <div className="account-card mt-3">
                  <i className="bi bi-card-checklist" />
                  <p>Order #001</p>
                  <span>Status: Pending</span>
                </div>
              </div>
              {/* Addresses */}
              <div className="account-content" id="addresses">
                <h6>
                  The following addresses will be used on the checkout page by
                  default.
                </h6>
                <div className="account-card mt-3 row gap-3">
                  <div className="col-12 col-md-5">
                    <h4 className="address-head">Billing address</h4>
                    <p className="address-billing">
                      <i className="fa-solid fa-pen-to-square" />
                      Add Billing address
                    </p>
                    <p className="address-text">
                      You have not set up this type of address yet.
                    </p>
                  </div>
                  <div className="col-12 col-md-5">
                    <h4 className="address-head">Shipping address</h4>
                    <p className="address-billing">
                      <i className="fa-solid fa-pen-to-square" />
                      Add Billing address
                    </p>
                    <p className="address-text">
                      You have not set up this type of address yet.
                    </p>
                  </div>
                </div>
              </div>
              {/* Account details */}
              <div className="account-content" id="account">
                <section className="dashboard-form-section">
                  <div className="container">
                    <form>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <label htmlFor="firstName" className="form-label">
                            First name <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            defaultValue="Shafaet Hosser"
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="lastName" className="form-label">
                            Last name <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            defaultValue="Shuvo"
                          />
                        </div>
                        <div className="col-12">
                          <label htmlFor="displayName" className="form-label">
                            Display name <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="displayName"
                            defaultValue="Shafaet Hosser Shuvo"
                          />
                          <div className="form-text">
                            This will be how your name will be displayed in the
                            account section and in reviews
                          </div>
                        </div>
                        <div className="col-12">
                          <label htmlFor="email" className="form-label">
                            Email address <span className="text-danger">*</span>
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            defaultValue="nahidulcpa@gmail.com"
                          />
                        </div>
                      </div>
                      {/* Password Change Section */}
                      <div className="form-section mt-4">
                        <h5>Password change</h5>
                        <div className="mb-3 password-wrapper">
                          <label htmlFor="currentPassword" className="form-label">
                            Current password (leave blank to leave unchanged)
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="currentPassword"
                          />
                          <i
                            className="bi bi-eye-slash toggle-password"
                            // onClick="togglePassword(this, 'currentPassword')"
                          />
                        </div>
                        <div className="mb-3 password-wrapper">
                          <label htmlFor="newPassword" className="form-label">
                            New password (leave blank to leave unchanged)
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="newPassword"
                          />
                          <i
                            className="bi bi-eye toggle-password"
                            // onClick="togglePassword(this, 'newPassword')"
                          />
                        </div>
                        <div className="mb-3 password-wrapper">
                          <label htmlFor="confirmPassword" className="form-label">
                            Confirm new password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="confirmPassword"
                          />
                          <i
                            className="bi bi-eye toggle-password"
                            // onClick="togglePassword(this, 'confirmPassword')"
                          />
                        </div>
                      </div>
                      <button type="submit" className="btn btn-save">
                        SAVE CHANGES
                      </button>
                    </form>
                  </div>
                </section>
              </div>
              {/* Wishlist */}
              <div className="account-content" id="wishlist">
                {/* wish section start  */}
                <div className="wish-container d-flex align-items-center justify-content-center">
                  <div className="wish-content text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={150}
                      height={150}
                      fill="currentColor"
                      className="bi bi-suit-heart"
                      viewBox="0 0 16 16"
                    >
                      <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.6 7.6 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                    </svg>
                    <h2 className="wish-error my-4">This wishlist is empty.</h2>
                    <p className="wish-text">
                      You don't have any products in the wishlist yet. You will
                      find a lot of interesting products on our "Shop" page.
                    </p>
                    <a
                      href="index.html"
                      className="wish-btn text-decoration-none my-5"
                    >
                      RETURN TO SHOP
                    </a>
                  </div>
                </div>
                {/* wish section end  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  
  );
}
