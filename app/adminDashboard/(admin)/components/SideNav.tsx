import Script from 'next/script'
import React from 'react'

export default function SideNav() {
  return (
    <>
    <div
      className="main-menu menu-fixed menu-dark menu-accordion menu-shadow"
      data-scroll-to-active="true"
    >
      <div className="navbar-header">
        <ul className="nav navbar-nav flex-row">
          <li className="nav-item me-auto">
            <a
              className="navbar-brand"
              href="../../../html/ltr/vertical-menu-template-dark/index.html"
            >
              <span className="brand-logo">
                <svg
                  viewBox="0 0 139 95"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  height={24}
                >
                  <defs>
                    <linearGradient
                      id="linearGradient-1"
                      x1="100%"
                      y1="10.5120544%"
                      x2="50%"
                      y2="89.4879456%"
                    >
                      <stop stopColor="#000000" offset="0%" />
                      <stop stopColor="#FFFFFF" offset="100%" />
                    </linearGradient>
                    <linearGradient
                      id="linearGradient-2"
                      x1="64.0437835%"
                      y1="46.3276743%"
                      x2="37.373316%"
                      y2="100%"
                    >
                      <stop stopColor="#EEEEEE" stopOpacity={0} offset="0%" />
                      <stop stopColor="#FFFFFF" offset="100%" />
                    </linearGradient>
                  </defs>
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth={1}
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="Artboard"
                      transform="translate(-400.000000, -178.000000)"
                    >
                      <g
                        id="Group"
                        transform="translate(400.000000, 178.000000)"
                      >
                        <path
                          className="text-primary"
                          id="Path"
                          d="M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z"
                          style={{ fill: "currentColor" }}
                        />
                        <path
                          id="Path1"
                          d="M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z"
                          fill="url(#linearGradient-1)"
                          opacity="0.2"
                        />
                        <polygon
                          id="Path-2"
                          fill="#000000"
                          opacity="0.049999997"
                          points="69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325"
                        />
                        <polygon
                          id="Path-21"
                          fill="#000000"
                          opacity="0.099999994"
                          points="69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338"
                        />
                        <polygon
                          id="Path-3"
                          fill="url(#linearGradient-2)"
                          opacity="0.099999994"
                          points="101.428699 0 83.0667527 94.1480575 130.378721 47.0740288"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
              <h2 className="brand-text">Vuexy</h2>
            </a>
          </li>
          <li className="nav-item nav-toggle">
            <a
              className="nav-link modern-nav-toggle pe-0"
              data-bs-toggle="collapse"
            >
              <i
                className="d-block d-xl-none text-primary toggle-icon font-medium-4"
                data-feather="x"
              />
              <i
                className="d-none d-xl-block collapse-toggle-icon font-medium-4  text-primary"
                data-feather="disc"
                data-ticon="disc"
              />
            </a>
          </li>
        </ul>
      </div>
      <div className="shadow-bottom" />
      <div className="main-menu-content">
        <ul
          className="navigation navigation-main"
          id="main-menu-navigation"
          data-menu="menu-navigation"
        >
          <li className=" nav-item">
            <a className="d-flex align-items-center" href="index.html">
              <i data-feather="home" />
              <span
                className="menu-title text-truncate"
                data-i18n="Dashboards"
              >
                Dashboards
              </span>
              <span className="badge badge-light-warning rounded-pill ms-auto me-1">
                2
              </span>
            </a>
            <ul className="menu-content">
              <li>
                <a
                  className="d-flex align-items-center"
                  href="dashboard-analytics.html"
                >
                  <i data-feather="circle" />
                  <span
                    className="menu-item text-truncate"
                    data-i18n="Analytics"
                  >
                    Analytics
                  </span>
                </a>
              </li>
              <li className="active">
                <a
                  className="d-flex align-items-center"
                  href="dashboard-ecommerce.html"
                >
                  <i data-feather="circle" />
                  <span
                    className="menu-item text-truncate"
                    data-i18n="eCommerce"
                  >
                    eCommerce
                  </span>
                </a>
              </li>
            </ul>
          </li>
          <li className=" nav-item">
            <a className="d-flex align-items-center" href="#">
              <i data-feather="shopping-cart" />
              <span
                className="menu-title text-truncate"
                data-i18n="eCommerce"
              >
                AddProduct
              </span>
            </a>
            <ul className="menu-content">
              <li>
                <a
                  className="d-flex align-items-center"
                  href="app-ecommerce-shop.html"
                >
                  <i data-feather="circle" />
                  <span className="menu-item text-truncate" data-i18n="Shop">
                    Shop
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="d-flex align-items-center"
                  href="app-ecommerce-details.html"
                >
                  <i data-feather="circle" />
                  <span
                    className="menu-item text-truncate"
                    data-i18n="Details"
                  >
                    Details
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="d-flex align-items-center"
                  href="app-ecommerce-wishlist.html"
                >
                  <i data-feather="circle" />
                  <span
                    className="menu-item text-truncate"
                    data-i18n="Wish List"
                  >
                    Wish List
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="d-flex align-items-center"
                  href="app-ecommerce-checkout.html"
                >
                  <i data-feather="circle" />
                  <span
                    className="menu-item text-truncate"
                    data-i18n="Checkout"
                  >
                    Checkout
                  </span>
                </a>
              </li>
            </ul>
          </li>
          <li className=" nav-item">
            <a className="d-flex align-items-center" href="#">
              <i data-feather="user" />
              <span className="menu-title text-truncate" data-i18n="User">
                User
              </span>
            </a>
            <ul className="menu-content">
              <li>
                <a
                  className="d-flex align-items-center"
                  href="app-user-list.html"
                >
                  <i data-feather="circle" />
                  <span className="menu-item text-truncate" data-i18n="List">
                    List
                  </span>
                </a>
              </li>
              <li>
                <a className="d-flex align-items-center" href="#">
                  <i data-feather="circle" />
                  <span className="menu-item text-truncate" data-i18n="View">
                    View
                  </span>
                </a>
                <ul className="menu-content">
                  <li>
                    <a
                      className="d-flex align-items-center"
                      href="app-user-view-account.html"
                    >
                      <span
                        className="menu-item text-truncate"
                        data-i18n="Account"
                      >
                        Account
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="d-flex align-items-center"
                      href="app-user-view-security.html"
                    >
                      <span
                        className="menu-item text-truncate"
                        data-i18n="Security"
                      >
                        Security
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="d-flex align-items-center"
                      href="app-user-view-billing.html"
                    >
                      <span
                        className="menu-item text-truncate"
                        data-i18n="Billing & Plans"
                      >
                        Billing &amp; Plans
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="d-flex align-items-center"
                      href="app-user-view-notifications.html"
                    >
                      <span
                        className="menu-item text-truncate"
                        data-i18n="Notifications"
                      >
                        Notifications
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="d-flex align-items-center"
                      href="app-user-view-connections.html"
                    >
                      <span
                        className="menu-item text-truncate"
                        data-i18n="Connections"
                      >
                        Connections
                      </span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className=" nav-item">
            <a className="d-flex align-items-center" href="#">
              <i data-feather="file-text" />
              <span className="menu-title text-truncate" data-i18n="Pages">
                Pages
              </span>
            </a>
            <ul className="menu-content">
              <li>
                <a className="d-flex align-items-center" href="#">
                  <i data-feather="circle" />
                  <span
                    className="menu-item text-truncate"
                    data-i18n="Account Settings"
                  >
                    Account Settings
                  </span>
                </a>
                <ul className="menu-content">
                  <li>
                    <a
                      className="d-flex align-items-center"
                      href="page-account-settings-account.html"
                    >
                      <span
                        className="menu-item text-truncate"
                        data-i18n="Account"
                      >
                        Account
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="d-flex align-items-center"
                      href="page-account-settings-security.html"
                    >
                      <span
                        className="menu-item text-truncate"
                        data-i18n="Security"
                      >
                        Security
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="d-flex align-items-center"
                      href="page-account-settings-billing.html"
                    >
                      <span
                        className="menu-item text-truncate"
                        data-i18n="Billings & Plans"
                      >
                        Billings &amp; Plans
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="d-flex align-items-center"
                      href="page-account-settings-notifications.html"
                    >
                      <span
                        className="menu-item text-truncate"
                        data-i18n="Notifications"
                      >
                        Notifications
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="d-flex align-items-center"
                      href="page-account-settings-connections.html"
                    >
                      <span
                        className="menu-item text-truncate"
                        data-i18n="Connections"
                      >
                        Connections
                      </span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  className="d-flex align-items-center"
                  href="page-profile.html"
                >
                  <i data-feather="circle" />
                  <span
                    className="menu-item text-truncate"
                    data-i18n="Profile"
                  >
                    Profile
                  </span>
                </a>
              </li>
              <li>
                <a className="d-flex align-items-center" href="page-faq.html">
                  <i data-feather="circle" />
                  <span className="menu-item text-truncate" data-i18n="FAQ">
                    FAQ
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="d-flex align-items-center"
                  href="page-knowledge-base.html"
                >
                  <i data-feather="circle" />
                  <span
                    className="menu-item text-truncate"
                    data-i18n="Knowledge Base"
                  >
                    Knowledge Base
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="d-flex align-items-center"
                  href="page-pricing.html"
                >
                  <i data-feather="circle" />
                  <span
                    className="menu-item text-truncate"
                    data-i18n="Pricing"
                  >
                    Pricing
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="d-flex align-items-center"
                  href="page-license.html"
                >
                  <i data-feather="circle" />
                  <span
                    className="menu-item text-truncate"
                    data-i18n="License"
                  >
                    License
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="d-flex align-items-center"
                  href="page-api-key.html"
                >
                  <i data-feather="circle" />
                  <span
                    className="menu-item text-truncate"
                    data-i18n="API Key"
                  >
                    API Key
                  </span>
                </a>
              </li>
              <li>
                <a className="d-flex align-items-center" href="#">
                  <i data-feather="circle" />
                  <span className="menu-item text-truncate" data-i18n="Blog">
                    Blog
                  </span>
                </a>
                <ul className="menu-content">
                  <li>
                    <a
                      className="d-flex align-items-center"
                      href="page-blog-list.html"
                    >
                      <span
                        className="menu-item text-truncate"
                        data-i18n="List"
                      >
                        List
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="d-flex align-items-center"
                      href="page-blog-detail.html"
                    >
                      <span
                        className="menu-item text-truncate"
                        data-i18n="Detail"
                      >
                        Detail
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="d-flex align-items-center"
                      href="page-blog-edit.html"
                    >
                      <span
                        className="menu-item text-truncate"
                        data-i18n="Edit"
                      >
                        Edit
                      </span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="d-flex align-items-center" href="#">
                  <i data-feather="circle" />
                  <span
                    className="menu-item text-truncate"
                    data-i18n="Mail Template"
                  >
                    Mail Template
                  </span>
                </a>
                <ul className="menu-content">
                  <li>
                    <a
                      className="d-flex align-items-center"
                      href="https://pixinvent.com/demo/vuexy-mail-template/mail-welcome.html"
                      target="_blank"
                    >
                      <span
                        className="menu-item text-truncate"
                        data-i18n="Welcome"
                      >
                        Welcome
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="d-flex align-items-center"
                      href="https://pixinvent.com/demo/vuexy-mail-template/mail-reset-password.html"
                      target="_blank"
                    >
                      <span
                        className="menu-item text-truncate"
                        data-i18n="Reset Password"
                      >
                        Reset Password
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="d-flex align-items-center"
                      href="https://pixinvent.com/demo/vuexy-mail-template/mail-verify-email.html"
                      target="_blank"
                    >
                      <span
                        className="menu-item text-truncate"
                        data-i18n="Verify Email"
                      >
                        Verify Email
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="d-flex align-items-center"
                      href="https://pixinvent.com/demo/vuexy-mail-template/mail-deactivate-account.html"
                      target="_blank"
                    >
                      <span
                        className="menu-item text-truncate"
                        data-i18n="Deactivate Account"
                      >
                        Deactivate Account
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="d-flex align-items-center"
                      href="https://pixinvent.com/demo/vuexy-mail-template/mail-invoice.html"
                      target="_blank"
                    >
                      <span
                        className="menu-item text-truncate"
                        data-i18n="Invoice"
                      >
                        Invoice
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="d-flex align-items-center"
                      href="https://pixinvent.com/demo/vuexy-mail-template/mail-promotional.html"
                      target="_blank"
                    >
                      <span
                        className="menu-item text-truncate"
                        data-i18n="Promotional"
                      >
                        Promotional
                      </span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="d-flex align-items-center" href="#">
                  <i data-feather="circle" />
                  <span
                    className="menu-item text-truncate"
                    data-i18n="Miscellaneous"
                  >
                    Miscellaneous
                  </span>
                </a>
                <ul className="menu-content">
                  <li>
                    <a
                      className="d-flex align-items-center"
                      href="page-misc-coming-soon.html"
                      target="_blank"
                    >
                      <span
                        className="menu-item text-truncate"
                        data-i18n="Coming Soon"
                      >
                        Coming Soon
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="d-flex align-items-center"
                      href="page-misc-not-authorized.html"
                      target="_blank"
                    >
                      <span
                        className="menu-item text-truncate"
                        data-i18n="Not Authorized"
                      >
                        Not Authorized
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="d-flex align-items-center"
                      href="page-misc-under-maintenance.html"
                      target="_blank"
                    >
                      <span
                        className="menu-item text-truncate"
                        data-i18n="Maintenance"
                      >
                        Maintenance
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="d-flex align-items-center"
                      href="page-misc-error.html"
                      target="_blank"
                    >
                      <span
                        className="menu-item text-truncate"
                        data-i18n="Error"
                      >
                        Error
                      </span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className=" nav-item">
            <a className="d-flex align-items-center" href="#">
              <i data-feather="user-check" />
              <span
                className="menu-title text-truncate"
                data-i18n="Authentication"
              >
                Authentication
              </span>
            </a>
            <ul className="menu-content">
              <li>
                <a className="d-flex align-items-center" href="#">
                  <i data-feather="circle" />
                  <span className="menu-item text-truncate" data-i18n="Login">
                    Login
                  </span>
                </a>
                <ul className="menu-content">
                  <li>
                    <a
                      className="d-flex align-items-center"
                      href="auth-login-basic.html"
                      target="_blank"
                    >
                      <span
                        className="menu-item text-truncate"
                        data-i18n="Basic"
                      >
                        Basic
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="d-flex align-items-center"
                      href="auth-login-cover.html"
                      target="_blank"
                    >
                      <span
                        className="menu-item text-truncate"
                        data-i18n="Cover"
                      >
                        Cover
                      </span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="d-flex align-items-center" href="#">
                  <i data-feather="circle" />
                  <span
                    className="menu-item text-truncate"
                    data-i18n="Register"
                  >
                    Register
                  </span>
                </a>
                <ul className="menu-content">
                  <li>
                    <a
                      className="d-flex align-items-center"
                      href="auth-register-basic.html"
                      target="_blank"
                    >
                      <span
                        className="menu-item text-truncate"
                        data-i18n="Basic"
                      >
                        Basic
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="d-flex align-items-center"
                      href="auth-register-cover.html"
                      target="_blank"
                    >
                      <span
                        className="menu-item text-truncate"
                        data-i18n="Cover"
                      >
                        Cover
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="d-flex align-items-center"
                      href="auth-register-multisteps.html"
                      target="_blank"
                    >
                      <span
                        className="menu-item text-truncate"
                        data-i18n="Multi-Steps"
                      >
                        Multi-Steps
                      </span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="d-flex align-items-center" href="#">
                  <i data-feather="circle" />
                  <span
                    className="menu-item text-truncate"
                    data-i18n="Forgot Password"
                  >
                    Forgot Password
                  </span>
                </a>
                <ul className="menu-content">
                  <li>
                    <a
                      className="d-flex align-items-center"
                      href="auth-forgot-password-basic.html"
                      target="_blank"
                    >
                      <span
                        className="menu-item text-truncate"
                        data-i18n="Basic"
                      >
                        Basic
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="d-flex align-items-center"
                      href="auth-forgot-password-cover.html"
                      target="_blank"
                    >
                      <span
                        className="menu-item text-truncate"
                        data-i18n="Cover"
                      >
                        Cover
                      </span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="d-flex align-items-center" href="#">
                  <i data-feather="circle" />
                  <span
                    className="menu-item text-truncate"
                    data-i18n="Reset Password"
                  >
                    Reset Password
                  </span>
                </a>
                <ul className="menu-content">
                  <li>
                    <a
                      className="d-flex align-items-center"
                      href="auth-reset-password-basic.html"
                      target="_blank"
                    >
                      <span
                        className="menu-item text-truncate"
                        data-i18n="Basic"
                      >
                        Basic
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="d-flex align-items-center"
                      href="auth-reset-password-cover.html"
                      target="_blank"
                    >
                      <span
                        className="menu-item text-truncate"
                        data-i18n="Cover"
                      >
                        Cover
                      </span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="d-flex align-items-center" href="#">
                  <i data-feather="circle" />
                  <span
                    className="menu-item text-truncate"
                    data-i18n="Verify Email"
                  >
                    Verify Email
                  </span>
                </a>
                <ul className="menu-content">
                  <li>
                    <a
                      className="d-flex align-items-center"
                      href="auth-verify-email-basic.html"
                      target="_blank"
                    >
                      <span
                        className="menu-item text-truncate"
                        data-i18n="Basic"
                      >
                        Basic
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="d-flex align-items-center"
                      href="auth-verify-email-cover.html"
                      target="_blank"
                    >
                      <span
                        className="menu-item text-truncate"
                        data-i18n="Cover"
                      >
                        Cover
                      </span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="d-flex align-items-center" href="#">
                  <i data-feather="circle" />
                  <span
                    className="menu-item text-truncate"
                    data-i18n="Two Steps"
                  >
                    Two Steps
                  </span>
                </a>
                <ul className="menu-content">
                  <li>
                    <a
                      className="d-flex align-items-center"
                      href="auth-two-steps-basic.html"
                      target="_blank"
                    >
                      <span
                        className="menu-item text-truncate"
                        data-i18n="Basic"
                      >
                        Basic
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="d-flex align-items-center"
                      href="auth-two-steps-cover.html"
                      target="_blank"
                    >
                      <span
                        className="menu-item text-truncate"
                        data-i18n="Cover"
                      >
                        Cover
                      </span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </>
  )
}
