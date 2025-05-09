"use client";
import './checkout.css'
import React, { useEffect, useState, useRef } from "react";

// Uncomment and fix the following line if you have a store
// import useStore from "../store";
// const { count, increase, decrease } = useStore();

// Dummy implementations for missing functions
const validateForm = (): boolean => {
  // Replace with your actual validation logic
  return true;
};

const saveCustomerData = (): void => {
  // Replace with your actual saving logic
  console.log("Customer data saved!");
};
export default function Page () {
  const [quantity, setQuantity] = useState<number>(1);
  const [subtotal, setSubtotal] = useState<number>(1800);
  const [shipping, setShipping] = useState<string>("inside");

  // Use typed refs for better type checking
  const pagesRef = useRef<Record<string, HTMLElement>>({});
  const stepsRef = useRef<Record<string, HTMLElement>>({});

  // Function to navigate between pages
  const navigateToPage = (pageId: string) => {
    Object.values(pagesRef.current).forEach((page) =>
      page.classList.remove("active")
    );
    if (pagesRef.current[pageId]) {
      pagesRef.current[pageId].classList.add("active");
      updateActiveStep(pageId);
      window.scrollTo(0, 0);
    }
  };

  // Update active step indicator
  const updateActiveStep = (activePageId: string) => {
    Object.values(stepsRef.current).forEach((step) =>
      step.classList.remove("active")
    );
    if (stepsRef.current[activePageId]) {
      stepsRef.current[activePageId].classList.add("active");
    }
  };

  // Update quantity and recalculate subtotal
  const updateQuantity = (change: number) => {
    const newQuantity = Math.max(1, quantity + change);
    setQuantity(newQuantity);
    setSubtotal(newQuantity * 1800);
  };

  // Handle shipping selection
  const handleShippingChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedShipping = event.target.value;
    setShipping(selectedShipping);
  };

  useEffect(() => {
    // Store page and step elements in refs, if available
    document.querySelectorAll<HTMLElement>(".page").forEach((page) => {
      if (page.id) {
        pagesRef.current[page.id] = page;
      }
    });
    document.querySelectorAll<HTMLElement>(".step").forEach((step) => {
      const dataPage = step.dataset.page;
      if (dataPage) {
        stepsRef.current[dataPage] = step;
      }
    });

    // Setup event listeners for steps
    Object.values(stepsRef.current).forEach((step) => {
      step.addEventListener("click", () => {
        if (step.dataset.page !== "complete-page") {
          navigateToPage(step.dataset.page!);
        }
      });
    });

    // Setup button events using optional chaining
    document.getElementById("proceed-to-checkout")?.addEventListener("click", () =>
      navigateToPage("checkout-page")
    );
    document.getElementById("place-order-btn")?.addEventListener("click", () => {
      if (validateForm()) {
        saveCustomerData();
        navigateToPage("complete-page");
      }
    });
    document.getElementById("continue-shopping")?.addEventListener("click", () =>
      navigateToPage("cart-page")
    );
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
        <h1 className="banner-header">CheckOut</h1>
        <div className="d-flex gap-2 justify-content-center">
          <p className="banner-home">Home</p>
          <span>/</span>
          <p className="banner-store">CheckOut</p>
        </div>
      </div>
    </div>
  </section>
  {/* hero section end  */}
  <section className="checkout-section">
    <div className="container-fluid p-0">
      <div className="checkout-container">
        {/* Checkout Progress */}
        <div className="checkout-header">
          <div className="checkout-steps">
            <span className="step" data-page="cart-page">
              SHOPPING CART
            </span>
            <span className="step-arrow">→</span>
            <span className="step" data-page="checkout-page">
              CHECKOUT
            </span>
            <span className="step-arrow">→</span>
            <span className="step" data-page="complete-page">
              ORDER COMPLETE
            </span>
          </div>
        </div>
        {/* Cart Page */}
        <div id="cart-page" className="page active my-5">
          <div className="row">
            {/* Cart Items */}
            <div className="col-lg-8">
              <div className="cart-items">
                <div className="cart-header">
                  <div className="row product-prices">
                    <div className="col-6">PRODUCT</div>
                    <div className="col-2 text-center">PRICE</div>
                    <div className="col-2 text-center">QUANTITY</div>
                    <div className="col-2 text-end">SUBTOTAL</div>
                  </div>
                </div>
                <div className="cart-item">
                  <div className="row align-items-center">
                    <div className="col-12 col-md-6 d-flex align-items-center">
                      <button className="remove-item" aria-label="Remove item">
                        ×
                      </button>
                      <div className="product-image">
                        <img
                          src="/assets/media/home/card-section/card2.png"
                          decoding="async"
                          loading="lazy"
                        />
                      </div>
                      <div className="product-name">
                        Patali Khejur Gur - পাটালি খেজুরের গুড় - 3 KG
                      </div>
                    </div>
                    <div className="col-4 col-md-2 text-center my-4 md-my-0">
                      <div className="price">৳ 1,800</div>
                    </div>
                    <div className="col-4 col-md-2 text-center">
                      <div className="quantity-selector">
                        <button  className="quantity-btn decrease">-</button>
                        <input
                          type="text"
                          className="quantity-input"
                          defaultValue="1300"
                          readOnly={true}
                        />
                        <button  className="quantity-btn increase">+</button>
                      </div>
                    </div>
                    <div className="col-4 col-md-2 text-end">
                      <div className="subtotal">৳ 3,600</div>
                    </div>
                  </div>
                </div>
                <div className="cart-item">
                  <div className="row align-items-center">
                    <div className="col-12 col-md-6 d-flex align-items-center">
                      <button className="remove-item" aria-label="Remove item">
                        ×
                      </button>
                      <div className="product-image">
                        <img
                          src="assets/media/home/card-section/card4.png"
                          decoding="async"
                          loading="lazy"
                        />
                      </div>
                      <div className="product-name">
                        Sugarcane Jaggery Powder - আখের গুড় পাউডার - 1 KG
                      </div>
                    </div>
                    <div className="col-4 col-md-2 text-center my-4 md-my-0">
                      <div className="price">৳ 400</div>
                    </div>
                    <div className="col-4 col-md-2 text-center">
                      <div className="quantity-selector">
                        <button  className="quantity-btn decrease">-</button>
                        <input
                          type="text"
                          className="quantity-input"
                          defaultValue='1300'
                          readOnly={true}
                        />
                        <button  className="quantity-btn increase">+</button>
                      </div>
                    </div>
                    <div className="col-4 col-md-2 text-end">
                      <div className="subtotal">৳ 400</div>
                    </div>
                  </div>
                </div>
                <div className="coupon-section">
                  <div className="row">
                    <div className="col-md-8 col-lg-6 gap-3">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          id="coupon-code"
                          placeholder="Coupon code"
                          aria-label="Coupon code"
                        />
                        <button
                          className="btn btn-apply-coupon"
                          type="button"
                          id="apply-coupon"
                        >
                          APPLY COUPON
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Cart Totals */}
            <div className="col-lg-4 ">
              <div className="cart-totals border border-3">
                <h3 className="totals-title">CART TOTALS</h3>
                <div className="totals-row cart-subtotals d-flex align-items-center justify-content-between">
                  <span className="cart-subtotals total">Subtotal</span>
                  <span className="subtotal" id="total-price">
                    ৳ 3,600
                  </span>
                </div>
                <div className="shipping-section">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="cart-subtotals fw-semibold">Shipping</div>
                    <div className="shipping-content text-end">
                      <div className="shipping-options">
                        <div className="shipping-option">
                          <input
                            type="radio"
                            id="inside-dhaka"
                            name="shipping"
                            defaultValue="inside"
                            defaultChecked={true}
                          />
                          <label htmlFor="inside-dhaka">
                            Inside Dhaka: ৳ 60
                          </label>
                        </div>
                        <div className="shipping-option">
                          <input
                            type="radio"
                            id="outside-dhaka"
                            name="shipping"
                            defaultValue="outside"
                          />
                          <label htmlFor="outside-dhaka">
                            Outside Dhaka: ৳ 120
                          </label>
                        </div>
                      </div>
                      <div className="shipping-address">
                        Shipping to <strong>Dhaka</strong>. <br />
                        <a href="#" className="change-address">
                          Change address
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="totals-row total">
                  <span className="cart-subtotals">Total</span>
                  <span className="total-price" id="cart-total">
                    ৳ 3,660
                  </span>
                </div>
                <button
                  type="button"
                  className="btn btn-checkout"
                  id="proceed-to-checkout"
                >
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Checkout Page */}
        <div id="checkout-page" className="page">
          {/* Coupon Notice */}
          <div className="coupon-notice">
            Have a coupon?{" "}
            <a href="#" className="coupon-link" id="show-coupon">
              Click here to enter your code
            </a>
          </div>
          {/* Coupon Field (Hidden by default) */}
          <div
            className="coupon-field mb-4"
            id="coupon-field"
            style={{ display: "none" }}
          >
            <div className="row">
              <div className="col-md-6">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control focus:none"
                    placeholder="Coupon code"
                    aria-label="Coupon code"
                  />
                  <button className="btn btn-apply-coupon" type="button">
                    APPLY COUPON
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {/* Billing Details */}
            <div className="col-lg-6">
              <div className="billing-details">
                <h3 className="section-title">BILLING DETAILS</h3>
                <form className="billing-form" id="billing-form">
                  <div className="form-group">
                    <label className="label-text" htmlFor="fullName">
                      Full name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="fullName"
                      name="fullName"
                      required={true}
                    />
                    <div className="invalid-feedback">
                      Please enter your full name
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="label-text" htmlFor="country">
                      Country / Region <span className="required">*</span>
                    </label>
                    <select
                      className="form-control"
                      id="country"
                      name="country"
                      disabled={true}
                    >
                      <option value="Bangladesh">Bangladesh</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="label-text" htmlFor="streetAddress">
                      Street address <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="streetAddress"
                      name="streetAddress"
                      placeholder="House number and street name"
                      required={true}
                    />
                    <div className="invalid-feedback">
                      Please enter your street address
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="label-text" htmlFor="stateCounty">
                      State / County <span className="required">*</span>
                    </label>
                    <select
                      className="form-control"
                      id="stateCounty"
                      name="stateCounty"
                      required={true}
                    >
                      <option value="Dhaka">Dhaka</option>
                      <option value="Chittagong">Chittagong</option>
                      <option value="Rajshahi">Rajshahi</option>
                      <option value="Khulna">Khulna</option>
                    </select>
                    <div className="invalid-feedback">
                      Please select your state/county
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="label-text" htmlFor="postcode">
                      Postcode / ZIP (optional)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="postcode"
                      name="postcode"
                    />
                  </div>
                  <div className="form-group">
                    <label className="label-text" htmlFor="phone">
                      Phone <span className="required">*</span>
                    </label>
                    <div className="input-group border-1 border rounded">
                      <div className="input-group-prepend">
                        <span className="input-group-text p-2">
                          <img
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='16' viewBox='0 0 30 20' fill='none'%3E%3Crect width='30' height='20' fill='%23006A4E'/%3E%3Ccircle cx='13' cy='10' r='5' fill='%23F42A41'/%3E%3C/svg%3E"
                            alt="Bangladesh flag"
                            width={30}
                            height={20}
                          />
                        </span>
                      </div>
                      <input
                        type="tel"
                        className="form-control rounded"
                        id="phone"
                        name="phone"
                        placeholder="01812-345678"
                        required={true}
                      />
                      <div className="invalid-feedback">
                        Please enter a valid phone number
                      </div>
                    </div>
                  </div>
                  <div className="form-check ship-different">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="shipDifferent"
                      name="shipDifferent"
                    />
                    <label className="label-text" htmlFor="shipDifferent">
                      Ship to a different address?
                    </label>
                  </div>
                  <div className="form-group">
                    <label className="label-text" htmlFor="orderNotes">
                      Order notes (optional)
                    </label>
                    <textarea
                      placeholder="Note about your user ,g, speacail node for delivery"
                      className="form-control"
                      id="orderNotes"
                      name="orderNotes"
                      rows={9}
                      defaultValue={""}

                    />
                  </div>
                </form>
              </div>
            </div>
            {/* Order Summary */}
            <div className="col-lg-6">
              <div className="order-section">
                <h3 className="section-order-title text-center">YOUR ORDER</h3>
                <div className="order-summary my-3">
                  <div className="order-summary-content">
                    <div className="order-header">
                      <div className="row">
                        <div className="col-6 product-title">PRODUCT</div>
                        <div className="col-6 text-end product-title">
                          SUBTOTAL
                        </div>
                      </div>
                    </div>
                    <div className="order-item">
                      <div className="row align-items-center">
                        <div className="col-md-8 d-flex align-items-center">
                          <button
                            className="remove-item"
                            aria-label="Remove item"
                          >
                            ×
                          </button>
                          <div className="product-image">
                            <img
                              src="assets/media/home/card-section/card8.png"
                              alt="Patali Khejur Gur"
                              width={60}
                              height={60}
                            />
                          </div>
                          <div className="product-name">
                            Patali Khejur Gur - পাটালি খেজুরের গুড় - 3 KG
                          </div>
                        </div>
                        <div className="col-md-4 text-end">
                          <div className="quantity-selector small">
                            <button  className="quantity-btn decrease">-</button>
                            <input
                              type="text"
                              className="quantity-input"
                              defaultValue='1300'
                              readOnly={true}
                            />
                            <button  className="quantity-btn increase">+</button>
                          </div>
                          <div className="subtotal">৳ 3,600</div>
                        </div>
                      </div>
                    </div>
                    <div className="order-subtotal">
                      <div className="row my-3">
                        <div className="col-6">Subtotal</div>
                        <div className="col-6 text-end" id="order-subtotal">
                          ৳ 3,600
                        </div>
                      </div>
                      <hr />
                    </div>
                    <div className="order-shipping">
                      <div className="shipping-options">
                        <div className="shipping-option">
                          <input
                            type="radio"
                            id="inside-dhaka-checkout"
                            name="shipping-checkout"
                            defaultValue="inside"
                            defaultChecked={true}
                          />
                          <label htmlFor="inside-dhaka-checkout">
                            Inside Dhaka: ৳ 60
                          </label>
                        </div>
                        <hr />
                        <div className="shipping-option">
                          <input
                            type="radio"
                            id="outside-dhaka-checkout"
                            name="shipping-checkout"
                            defaultValue="outside"
                          />
                          <label htmlFor="outside-dhaka-checkout">
                            Outside Dhaka: ৳ 120
                          </label>
                        </div>
                        <hr />
                      </div>
                    </div>
                    <div className="order-total">
                      <div className="row">
                        <div className="col-6">Total</div>
                        <div className="col-6 text-end" id="order-total">
                          ৳ 3,660
                        </div>
                      </div>
                      <hr />
                    </div>
                    <div>
                      <h4 className="cash-text">Cash on delivery</h4>
                    </div>
                    <div className="payment-method ">
                      <p>Pay with cash upon delivery.</p>
                    </div>
                    <hr />
                    <button
                      type="button"
                      className="btn btn-place-order"
                      id="place-order-btn"
                    >
                      PLACE ORDER
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Order Complete Page */}
        <div id="complete-page" className="page">
          <div className="order-complete-container">
            <div className="order-complete-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={64}
                height={64}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-check-circle"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h2 className="order-complete-title">
              Thank you. Your order has been received.
            </h2>
            <div className="order-details">
              <div className="order-detail-item">
                <span className="detail-label">Order number:</span>
                <span className="detail-value" id="order-number">
                  #12345
                </span>
              </div>
              <div className="order-detail-item">
                <span className="detail-label">Date:</span>
                <span className="detail-value" id="order-date">
                  March 13, 2025
                </span>
              </div>
              <div className="order-detail-item">
                <span className="detail-label">Total:</span>
                <span className="detail-value" id="complete-total">
                  ৳ 3,660
                </span>
              </div>
              <div className="order-detail-item">
                <span className="detail-label">Payment method:</span>
                <span className="detail-value">Cash on delivery</span>
              </div>
            </div>
            <div className="order-summary-complete">
              <h3>Order details</h3>
              <div className="order-summary-table">
                <div className="order-summary-header">
                  <div className="row">
                    <div className="col-8">Product</div>
                    <div className="col-4 text-end">Subtotal</div>
                  </div>
                </div>
                <div className="order-summary-item">
                  <div className="row">
                    <div className="col-8">
                      Patali Khejur Gur - পাটালি খেজুরের গুড় - 3 KG ×{" "}
                      <span id="complete-quantity">2</span>
                    </div>
                    <div className="col-4 text-end" id="complete-subtotal">
                      ৳ 3,600
                    </div>
                  </div>
                </div>
                <div className="order-summary-subtotal">
                  <div className="row">
                    <div className="col-8">Subtotal</div>
                    <div className="col-4 text-end" id="summary-subtotal">
                      ৳ 3,600
                    </div>
                  </div>
                </div>
                <div className="order-summary-shipping">
                  <div className="row">
                    <div className="col-8">Shipping</div>
                    <div className="col-4 text-end" id="shipping-cost">
                      ৳ 60
                    </div>
                  </div>
                </div>
                <div className="order-summary-total">
                  <div className="row">
                    <div className="col-8">Total</div>
                    <div className="col-4 text-end" id="summary-total">
                      ৳ 3,660
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="customer-details">
              <h3>Customer details</h3>
              <div className="customer-detail-item">
                <span className="detail-label">Email:</span>
                <span className="detail-value" id="customer-email">
                  customer@example.com
                </span>
              </div>
              <div className="customer-detail-item">
                <span className="detail-label">Phone:</span>
                <span className="detail-value" id="customer-phone">
                  01812-345678
                </span>
              </div>
              <div className="customer-detail-item">
                <span className="detail-label">Shipping address:</span>
                <span className="detail-value" id="customer-address">
                  123 Main Street, Dhaka, Bangladesh 
                </span>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-continue-shopping"
              id="continue-shopping"
            >
              CONTINUE SHOPPING
            </button>
          </div>
        </div>
      </div>
      {/* Decorative Images */}
    </div>
  </section>
</main>
  )
}
