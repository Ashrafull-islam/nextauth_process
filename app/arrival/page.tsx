import React from 'react'
import Link from 'next/link';
import './arrival.css'
export default async function Page() {
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
            <h1 className="banner-header">New Arrivals</h1>
            <div className="d-flex gap-2 justify-content-center">
              <p className="banner-home">Home</p>
              <span>/</span>
              <p className="banner-store">New Arrivals</p>
            </div>
          </div>
        </div>
      </section>
      {/* hero section end  */}
      {/* filter section start  */}
      <section>
        <div className="option-section">
          <div className="option-container text-center">
            <div className="option-content row g-3 align-content-center">
              <div className="col-12 col-md-6 col-lg">
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle main-dropdown d-flex justify-content-between align-items-center"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    CATEGORIES
                  </button>
                  <ul className="dropdown-menu" style={{ width: "100%" }}>
                    <li>
                      <a className="dropdown-item" href="#">
                        Breakfast &amp; Snacks
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Featured Product
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        KITCHEN ESSENTIALS
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        NATURAL SWEETENERS
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        New Arrivals
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Nuts &amp; Seeds
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        PICKLES
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Special Products
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Uncategorized
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg">
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle main-dropdown d-flex justify-content-between align-items-center"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    STOCK STATUS
                  </button>
                  <ul className="dropdown-menu" style={{ width: "100%" }}>
                    <li>
                      <a className="dropdown-item" href="#">
                        On sale
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        In stock
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        On backorder
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg">
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle main-dropdown d-flex justify-content-between align-items-center"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    SORT BY
                  </button>
                  <ul className="dropdown-menu" style={{ width: "100%" }}>
                    <li>
                      <a className="dropdown-item" href="#">
                        Default sorting
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Sort by popularity
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Sort by average rating
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Sort by latest
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Sort by price: low to high
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Sort by price: high to low
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg text-center">
                <button className="filter-btn">FILTER</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* filter section end  */}
      {/* card section start  */}
      <section>
  <div className="card-container">
    <div className="medium-card-container">
      {/* card 1  */}
      <Link href={`/product`} className="text-decoration-none">
        <div className="card text-center position-relative">
          <div className="card-img">
            <img
              src="assets/media/home/card-section/card1.png"
              alt="cardimage"
              decoding="async"
              loading="lazy"
            />
          </div>
          <div className="new-badge">-16%</div>
          <h6 className="chocolate-p my-1 p-0">
            Chocolate Peanut Butter- চকলেট পিনাট বাটার
          </h6>
          <p className="price text-center mb-2 p-0">৳ 520 - ৳ 960 </p>
          <div>
            <button className="card-btn card-btn-completed" />
          </div>
          <div className="hover-icon position-absolute d-flex flex-column">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={25}
              height={25}
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={25}
              height={25}
              fill="currentColor"
              className="bi bi-heart my-3"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
            </svg>
          </div>
        </div>
      </Link>
      {/* card 2 */}
      <Link href={`/product`} className="text-decoration-none">
        <div className="card text-center position-relative">
          <div className="card-img">
            <img
              src="assets/media/home/card-section/card2.png"
              alt="cardimage"
              decoding="async"
              loading="lazy"
            />
          </div>
          <div className="new-badge">New</div>
          <h6 className="chocolate-p my-1 p-0">Bilona Ghee – বিলোনা ঘি</h6>
          <p className="price text-center mb-2 p-0">
            ৳&nbsp;800 - ৳&nbsp;1,550{" "}
          </p>
          <div>
            <button className="card-btn card-btn-completed" />
          </div>
          <div className="hover-icon position-absolute d-flex flex-column">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={25}
              height={25}
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={25}
              height={25}
              fill="currentColor"
              className="bi bi-heart my-3"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
            </svg>
          </div>
        </div>
      </Link>
      {/* card 3 */}
      <Link href={`/product`} className="text-decoration-none">
        <div className="card text-center position-relative">
          <div className="card-img">
            <img
              src="assets/media/home/card-section/card3.png"
              alt="cardimage"
              decoding="async"
              loading="lazy"
            />
          </div>
          <div className="new-badge">-12%</div>
          <h6 className="chocolate-p my-1 p-0">
            Sugarcane Jaggery Powder – আখের গুড় পাউডার
          </h6>
          <p className="price text-center mb-2 p-0">
            ৳&nbsp;400 - ৳&nbsp;1,000{" "}
          </p>
          <div>
            <button className="card-btn card-btn-completed" />
          </div>
          <div className="hover-icon position-absolute d-flex flex-column">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={25}
              height={25}
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={25}
              height={25}
              fill="currentColor"
              className="bi bi-heart my-3"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
            </svg>
          </div>
        </div>
      </Link>
      {/* card 4 */}
      <Link href={`/product`} className="text-decoration-none">
        <div className="card text-center position-relative">
          <div className="card-img">
            <img
              src="assets/media/home/card-section/card4.png"
              alt="cardimage"
              decoding="async"
              loading="lazy"
            />
          </div>
          <div className="new-badge">-7%</div>
          <h6 className="chocolate-p my-1 p-0">
            Patali Khejur Gur – পাটালি খেজুরের গুড়
          </h6>
          <p className="price text-center mb-2 p-0">
            ৳&nbsp;700 - ৳&nbsp;1,800{" "}
          </p>
          <div>
            <button className="card-btn card-btn-completed" />
          </div>
          <div className="hover-icon position-absolute d-flex flex-column">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={25}
              height={25}
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={25}
              height={25}
              fill="currentColor"
              className="bi bi-heart my-3"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
            </svg>
          </div>
        </div>
      </Link>
      {/* card 5 */}
      <Link href={`/product`} className="text-decoration-none">
        <div className="card text-center position-relative">
          <div className="card-img">
            <img
              src="assets/media/home/card-section/card5.png"
              alt="cardimage"
              decoding="async"
              loading="lazy"
            />
          </div>
          <div className="persent-badge">New</div>
          <h6 className="chocolate-p my-1 p-0">
            Moringa Powder – মারিঙ্গা পাউডার
          </h6>
          <p className="price text-center mb-2 p-0">
            ৳&nbsp;700 - ৳&nbsp;1,350{" "}
          </p>
          <div>
            <button className="card-btn card-btn-completed" />
          </div>
          <div className="hover-icon position-absolute d-flex flex-column">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={25}
              height={25}
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={25}
              height={25}
              fill="currentColor"
              className="bi bi-heart my-3"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
            </svg>
          </div>
        </div>
      </Link>
      {/* card 6 */}
      <Link href={`/product`} className="text-decoration-none">
        <div className="card text-center position-relative">
          <div className="card-img">
            <img
              src="assets/media/home/card-section/card6.png"
              alt="cardimage"
              decoding="async"
              loading="lazy"
            />
          </div>
          <div className="persent-badge">New</div>
          <h6 className="chocolate-p my-1 p-0">
            Patali Khejur Gur – পাটালি খেজুরের গুড়
          </h6>
          <p className="price text-center mb-2 p-0">
            ৳&nbsp;700 - ৳&nbsp;1,800{" "}
          </p>
          <div>
            <button className="card-btn card-btn-completed" />
          </div>
          <div className="hover-icon position-absolute d-flex flex-column">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={25}
              height={25}
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={25}
              height={25}
              fill="currentColor"
              className="bi bi-heart my-3"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
            </svg>
          </div>
        </div>
      </Link>
      {/* card 7 */}
      <Link href={`/product`} className="text-decoration-none">
        <div className="card text-center position-relative">
          <div className="card-img">
            <img
              src="assets/media/home/card-section/card7.png"
              alt="cardimage"
              decoding="async"
              loading="lazy"
            />
          </div>
          <div className="new-badge">-11%</div>
          <h6 className="chocolate-p my-1 p-0">
            Patali Khejur Gur – পাটালি খেজুরের গুড়
          </h6>
          <p className="price text-center mb-2 p-0">
            ৳&nbsp;700 - ৳&nbsp;1,800{" "}
          </p>
          <div>
            <button className="card-btn card-btn-completed" />
          </div>
          <div className="hover-icon position-absolute d-flex flex-column">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={25}
              height={25}
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={25}
              height={25}
              fill="currentColor"
              className="bi bi-heart my-3"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
            </svg>
          </div>
        </div>
      </Link>
      {/* card 8 */}
      <Link href={`/product`} className="text-decoration-none">
        <div className="card text-center position-relative">
          <div className="card-img">
            <img
              src="assets/media/home/card-section/card8.png"
              alt="cardimage"
              decoding="async"
              loading="lazy"
            />
          </div>
          <div className="persent-badge">New</div>
          <h6 className="chocolate-p my-1 p-0">
            Patali Khejur Gur – পাটালি খেজুরের গুড়
          </h6>
          <p className="price text-center mb-2 p-0">
            ৳&nbsp;700 - ৳&nbsp;1,800{" "}
          </p>
          <div>
            <button className="card-btn card-btn-completed" />
          </div>
          <div className="hover-icon position-absolute d-flex flex-column">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={25}
              height={25}
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={25}
              height={25}
              fill="currentColor"
              className="bi bi-heart my-3"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  </div>
      </section>

      {/* card section end  */}
    </main>

  )
}

