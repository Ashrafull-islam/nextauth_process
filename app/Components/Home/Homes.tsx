import Link from "next/link";
import './home.css'
import ProductCard from "../ProductCard";
export const getProduct= async() =>{
  const res=await fetch('/api/product')
  const data=await res.json();
  return data;
}
export default async function Homes() {
  const products=await getProduct();
  return (
    
    <>
    <main>
  {/* hero section start  */}
  <section>
    <div className="slider-section">
      <div className="swiper custom-swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img
              src="assets/media/home/banner-section/slider2.png"
              alt="SliderImage"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="swiper-slide">
            <img
              src="assets/media/home/banner-section/slider2.png"
              alt="SliderImage"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="swiper-slide">
            <img
              src="assets/media/home/banner-section/slider2.png"
              alt="SliderImage"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
        <div className="swiper-button-next" />
        <div className="swiper-button-prev" />
        <div className="swiper-pagination" />
      </div>
    </div>
  </section>
  {/* hero section end  */}
  {/* card section start  */}
  <section>
    <div className="home-product-card-section">
      <div className="loved-product text-center">
        <img
          src="assets/media/home/banner-section/loved-product.png"
          className="img-fluid"
          alt="lovedImage"
          decoding="async"
          loading="lazy"
        />
      </div>
      {/* swiper with big device start  */}
      <ProductCard data={products}></ProductCard>
      {/* swiper with small device start  */}
      <div className="medium-card-container">
        {/* card 1  */}
        <Link className="text-decoration-none" href={`/product`}>
          <div className="card text-center position-relative">
            <div className="card-img">
              <img
                src="assets/media/home/card-section/card1.png"
                alt="cardimage"
                decoding="async"
                loading="lazy"
              />
            </div>
            <div className="new-badge">-8%</div>
            <h4 className="chocolate-p my-1 p-0">
              Chocolate Peanut Butter- চকলেট পিনাট বাটার
            </h4>
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
        <Link className="text-decoration-none" href={`/product`}>
          <div className="card text-center position-relative">
            <div className="card-img">
              <img
                src="assets/media/home/card-section/card2.png"
                alt="cardimage"
                decoding="async"
                loading="lazy"
              />
            </div>
            <div className="new-badge">-11%</div>
            <h4 className="chocolate-p my-1 p-0">Bilona Ghee - বিলোনা ঘি</h4>
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
            <div className="new-badge">-8%</div>
            <h4 className="chocolate-p my-1 p-0">
              Sugarcane Jaggery Powder - আখের গুড় পাউডার
            </h4>
            <p className="price text-center mb-2 p-0">৳ 400 - ৳ 1,000 </p>
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
            <div className="new-badge">-8%</div>
            <h4 className="chocolate-p my-1 p-0">
              Patali Khejur Gur - পাটালি খেজুরের গুড়{" "}
            </h4>
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
            <h4 className="chocolate-p my-1 p-0">
              Moringa Powder - মারিঙ্গা পাউডার
            </h4>
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
            <div className="new-badge">-18%</div>
            <h4 className="chocolate-p my-1 p-0">
              Premium Tea - প্রিমিয়াম চা{" "}
            </h4>
            <p className="price text-center mb-2 p-0">
              ৳&nbsp;400 - ৳&nbsp;800{" "}
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
            <div className="persent-badge">New</div>
            <h4 className="chocolate-p my-1 p-0">
              Mustard Oil - ঘানি ভাঁঙ্গা সরিষার তেল
            </h4>
            <p className="price text-center mb-2 p-0">
              ৳&nbsp;290 - ৳&nbsp;1350{" "}
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
            <div className="new-badge">-11%</div>
            <h4 className="chocolate-p my-1 p-0">Black Rice - কালো চাল</h4>
            <p className="price text-center mb-2 p-0">
              ৳&nbsp;200 - ৳&nbsp;520{" "}
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
        {/* card 9 */}
        <Link href={`/product`} className="text-decoration-none">
          <div className="card text-center position-relative">
            <div className="card-img">
              <img
                src="assets/media/home/card-section/card9.png"
                alt="cardimage"
                decoding="async"
                loading="lazy"
              />
            </div>
            <div className="new-badge">-11%</div>
            <h4 className="chocolate-p my-1 p-0">Rice Powder - চালের গুঁড়া</h4>
            <p className="price text-center mb-2 p-0">৳&nbsp;100</p>
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
        {/* card 10 */}
        <Link href={`/product`} className="text-decoration-none">
          <div className="card text-center position-relative">
            <div className="card-img">
              <img
                src="assets/media/home/card-section/black-rice.png"
                alt="cardimage"
                decoding="async"
                loading="lazy"
              />
            </div>
            <div className="persent-badge">New</div>
            <h4 className="chocolate-p my-1 p-0">Brown Atta - লাল আটা</h4>
            <p className="price text-center mb-2 p-0">৳&nbsp;90</p>
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
      {/* swiper with small device end */}
    </div>
  </section>
  {/* card section end  */}
  {/* pinnat bater section start  */}
  <section>
    <div className="pinat-batter-section">
      <div className="pinat-container">
        <div className="row align-items-center g-md-5">
          <div className="pinat-img col-12 col-md-5 p-md-5">
            <img
              src="assets/media/home/butter-section/pinatbannar-banner.png"
              className="img-fluid"
              alt="pinatImage"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="pinat-text col-12 col-md-7 p-md-5">
            <h2 className="pinat-head">
              ‘’প্রোটিনে ভরপুর পিনাট বাটার <br /> সারাদিনের শক্তির আধার ‘’
            </h2>
            <div className="d-flex align-items-center gap-2">
              <div className="rating">
                <input type="radio" id="star5" name="rating" defaultValue={5} />
                <label htmlFor="star5">★</label>
                <input type="radio" id="star4" name="rating" defaultValue={4} />
                <label htmlFor="star4">★</label>
                <input type="radio" id="star3" name="rating" defaultValue={3} />
                <label htmlFor="star3">★</label>
                <input type="radio" id="star2" name="rating" defaultValue={2} />
                <label htmlFor="star2">★</label>
                <input type="radio" id="star1" name="rating" defaultValue={1} />
                <label htmlFor="star1">★</label>
              </div>
              <p className="rating-review m-0 p-0">208 reviews</p>
            </div>
            <p className="upokarita text-start text-ld-center">
              চিনাবাদাম ও বাছাইকৃত সেরা লিচু ফুলের মধুর সংমিশ্রণে তৈরি একটু
              বেশিই হেলদি এই পিনাটবাটার থাকুক আপনার নাস্তার টেবিলে।
            </p>
            <div className="pinat-batter-text d-flex align-items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={22}
                height={22}
                viewBox="0 0 24 24"
                fill="none"
              >
                <rect width={22} height={22} rx={4} fill="#276B41" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.5 11.5L10.5 14.5L16.5 8.5"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="m-0 p-0 improve-text">
                রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি করে
              </p>
            </div>
            <div className="pinat-batter-text d-flex align-items-center gap-3 my-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={22}
                height={22}
                viewBox="0 0 24 24"
                fill="none"
              >
                <rect width={22} height={22} rx={4} fill="#276B41" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.5 11.5L10.5 14.5L16.5 8.5"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="m-0 p-0 improve-text">
                ব্রেইনকে করবে আরো বেশি শার্পার
              </p>
            </div>
            <div className="pinat-batter-text d-flex align-items-center gap-3 my-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={22}
                height={22}
                viewBox="0 0 24 24"
                fill="none"
              >
                <rect width={22} height={22} rx={4} fill="#276B41" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.5 11.5L10.5 14.5L16.5 8.5"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="m-0 p-0 improve-text">
                পিনাট বাটারে থাকা স্বাস্থ্যকর চর্বি ও প্রোটিন দীর্ঘক্ষণ শক্তি
                জোগায়
              </p>
            </div>
            <div className="pinat-batter-text d-flex align-items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={22}
                height={22}
                viewBox="0 0 24 24"
                fill="none"
              >
                <rect width={22} height={22} rx={4} fill="#276B41" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.5 11.5L10.5 14.5L16.5 8.5"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="m-0 p-0 improve-text">
                রয়েছে প্রচুর পরিমাণে প্রোটিন যা পেশী গঠনে ভূমিকা রাখে
              </p>
            </div>
            <a
              href="/store.html"
              className="order-btn my-3 text-decoration-none"
            >
              অর্ডার করুন
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* pinnat bater section end  */}
  {/* healthy eats banner section start  */}
  <section>
    <div
      className="healthry-banner"
      style={{
        backgroundImage:
          'url("assets/media/store/banner/Home-Image-1-scaled-1.jpg")'
      }}
    >
      <div className="banner-text d-flex flex-column flex-md-row text-center">
        <h6 className="text-one">
          WE ARE <br />
          HEALTHY <br />
          EATS
        </h6>
        <p className="text-two">
          We collect pure and fresh <br />
          groceries directly from <br />
          core farmers and serve
          <br />
          you to your doorstep.
        </p>
        <div className="small-chachi d-block d-md-none ">
          <img
            src="assets/media/home/banner-section/small-banner.png"
            style={{ width: "100%" }}
            alt="ChachiImage"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>
  </section>
  {/* healthy eats banner section end  */}
  {/* ghee section start  */}
  <section>
    <div className="ghee-section">
      <div className="ghee-container">
        <div className="row align-content-center">
          <div className="ghee-img col-12 col-md-5 text-center">
            <img
              src="assets/media/home/ghee-section/ghee.png"
              className="img-fluid"
              alt="gheeImage"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="ghee-text-content col-12 col-md-7">
            <h2 className="ghee-head">বিলোনা ঘি এর উপকারিতা:</h2>
            <div className="ghee-upokarita d-flex align-items-center gap-3">
              {/* svg  */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ghee-icon"
                viewBox="0 0 310 310"
                fill="none"
              >
                <circle cx={155} cy={155} r={155} fill="#46912E" />
                <path
                  d="M103.541 244.058L114.577 244.11C114.577 244.11 82.7718 214.543 86.6759 206.319C86.8841 205.954 87.0402 205.538 87.1964 205.174C87.9252 203.039 90.7361 196.585 97.5031 195.752C100.21 195.387 102.917 196.168 105.207 197.678C108.851 200.124 112.182 202.935 115.202 206.111C123.114 214.231 145.653 231.357 186.984 218.031C193.803 215.845 200.258 212.461 205.88 207.984C222.121 195.127 248.616 163.999 225.973 107.78C225.973 107.78 209.159 65.252 163.404 93.2051C163.404 93.2051 152.993 100.649 141.125 72.4354L135.555 55.9863H126.966L123.895 66.7615C123.895 66.7615 128.319 87.1668 138.886 97.5776C142.114 100.753 144.196 101.065 146.694 104.813C149.297 108.665 150.755 113.246 150.807 117.931C150.911 124.75 151.431 135.421 153.409 144.478C155.439 153.588 154.607 163.166 150.546 171.547C144.872 183.415 133.629 195.023 111.974 186.382C107.185 184.456 101.98 183.571 96.8264 183.988C88.3936 184.664 77.8787 188.308 76.9417 201.738C76.8376 203.56 76.4212 205.382 75.9527 207.204C74.9116 211.16 75.0157 220.165 90.0073 232.398L103.541 244.058Z"
                  fill="#2F8015"
                />
                <path
                  d="M138.417 50.0521C139.979 51.0931 140.76 52.6027 141.28 54.4246C142.686 59.8903 144.143 65.356 145.913 70.7176C147.943 76.8079 151.327 82.2215 155.491 87.1146C158.042 90.0817 160.54 90.394 163.612 87.9475C171.212 82.0133 179.8 78.6818 189.483 78.3695C207.91 77.7969 224.359 88.5721 231.23 105.802C237.06 120.481 240.287 135.733 239.09 151.558C237.008 178.782 225.712 201.165 202.444 216.261C172.357 235.781 132.067 230.836 107.081 205.121C105.155 203.143 103.333 201.113 100.366 200.749C96.7741 200.384 93.5467 202.102 91.9851 205.226C90.4755 208.349 91.1002 212.045 93.7029 214.751C98.2316 219.332 102.812 223.861 107.341 228.442C112.078 233.179 116.815 237.968 121.604 242.652C123.009 244.058 123.842 245.568 123.061 247.546C122.281 249.524 120.615 249.992 118.585 249.992C113.379 249.94 108.174 250.096 102.969 249.888C101.563 249.836 99.8453 249.211 98.8562 248.222C92.2454 241.82 85.7386 235.417 79.388 228.806C71.5278 220.634 69.0813 210.899 72.5168 200.176C75.9524 189.505 83.5523 183.05 94.6399 181.124C101.199 179.979 107.653 180.76 113.223 184.508C125.976 192.993 138.834 186.174 144.664 178.001C152.888 166.601 154.867 154.056 150.13 140.835C146.746 131.309 145.705 121.783 148.152 111.944C148.776 109.446 147.683 107.728 145.913 106.114C139.719 100.44 134.722 93.8296 130.818 86.3859C130.713 86.1776 130.557 85.9174 130.453 85.7092C129.62 83.8873 129.985 82.2736 131.494 81.4928C133.004 80.712 134.565 81.2325 135.606 82.9503C137.532 86.1256 139.302 89.405 141.489 92.3721C143.779 95.4433 146.486 98.1501 149.036 101.065C150.702 102.939 152.368 104.813 154.19 106.947C155.439 105.386 156.949 103.616 158.302 101.794C159.708 99.8679 161.165 99.2953 162.675 100.232C164.288 101.221 164.705 103.095 163.195 104.917C160.645 107.936 157.886 110.747 155.023 113.454C154.086 114.339 153.409 115.172 153.201 116.421C152.108 123.136 152.472 129.799 154.814 136.202C157.417 143.229 159.031 150.465 158.25 157.96C156.793 171.494 151.535 183.103 139.354 190.338C129.985 195.856 120.459 195.804 111.089 190.026C101.563 184.144 89.018 186.122 82.1469 194.554C74.8593 203.404 75.1716 215.845 83.0838 224.173C89.2783 230.68 95.733 236.927 102.084 243.277C102.448 243.642 103.021 244.058 103.541 244.058C107.081 244.11 110.62 244.11 114.577 244.11C113.796 243.277 113.379 242.809 112.859 242.288C105.103 234.532 97.2426 226.776 89.5386 218.968C83.0838 212.409 84.0208 202.206 91.4125 197.261C95.3686 194.606 99.6371 194.294 104.218 195.752C104.374 195.335 104.478 194.919 104.582 194.502C104.999 192.889 106.092 192.056 107.705 192.212C109.267 192.368 109.944 193.409 110.308 194.919C110.829 197.209 111.349 199.604 112.39 201.738C113.119 203.247 114.629 204.445 115.93 205.538C131.026 218.083 148.36 223.913 167.88 221.883C198.124 218.708 217.852 201.79 228.419 173.837C235.03 156.399 234.666 138.492 229.772 120.742C228.159 114.912 226.285 108.925 223.422 103.616C212.803 83.3667 186.047 77.9531 167.984 92.0077C164.601 94.6625 161.009 96.3803 156.845 94.8707C154.814 94.1419 152.784 92.7365 151.327 91.1228C144.195 83.3147 140.083 73.8929 137.637 63.6902C137.012 61.0875 136.283 58.5369 135.554 55.9862C132.691 55.9862 129.933 55.9862 126.965 55.9862C128.059 60.0465 129.1 64.0026 130.193 67.9587C130.297 68.3751 130.453 68.8436 130.557 69.26C131.026 71.3422 130.193 72.7997 128.475 73.2162C126.861 73.6326 125.404 72.6956 124.883 70.7176C123.478 65.5121 122.072 60.3067 120.719 55.1013C120.146 52.8109 120.719 51.6657 123.218 50C128.267 50.0521 133.316 50.0521 138.417 50.0521Z"
                  fill="white"
                />
                <path
                  d="M178.447 157.023C177.406 162.229 176.469 167.486 175.324 172.64C174.699 175.503 173.137 176.596 171.315 176.075C169.389 175.503 168.869 173.837 169.702 171.026C171.368 165.56 172.148 159.991 172.2 154.317C172.2 153.119 171.888 152.026 170.431 151.974C168.973 151.922 168.296 152.755 168.244 154.161C168.244 154.629 168.244 155.045 168.192 155.514C168.088 163.322 166.266 170.714 162.935 177.689C161.738 180.188 160.28 182.582 158.875 184.977C158.146 186.226 157.99 187.319 159.343 188.152C160.696 188.985 161.529 188.152 162.206 187.059C162.674 186.278 163.039 185.237 163.768 184.872C164.757 184.352 166.162 183.935 167.047 184.3C167.828 184.612 168.713 186.122 168.661 187.007C168.453 190.963 163.299 194.815 159.395 194.294C153.461 193.461 150.546 187.267 153.721 182.218C157.521 176.231 160.436 169.881 161.581 162.854C162.102 159.522 162.102 156.139 162.518 152.755C162.935 149.059 166.006 146.3 169.754 146.04C173.346 145.78 176.781 148.018 177.614 151.402C178.03 153.119 177.978 154.993 178.135 156.815C178.239 156.919 178.343 156.971 178.447 157.023Z"
                  fill="white"
                />
                <path
                  d="M156.741 128.341C156.689 122.667 159.5 119.388 163.196 118.815C166.944 118.243 170.796 120.585 171.889 124.177C172.774 127.092 173.554 130.007 174.283 132.974C175.22 136.722 173.294 140.418 169.702 141.823C165.955 143.333 161.53 142.084 159.968 138.544C158.459 134.744 157.47 130.632 156.741 128.341ZM162.207 126.415C163.248 129.695 164.133 132.766 165.226 135.681C165.382 136.15 166.892 136.566 167.464 136.358C168.037 136.15 168.765 134.952 168.609 134.328C168.037 131.569 167.256 128.81 166.319 126.103C166.059 125.426 164.913 124.75 164.133 124.75C163.56 124.75 162.935 125.739 162.207 126.415Z"
                  fill="white"
                />
                <path
                  d="M162.206 126.416C162.935 125.739 163.559 124.75 164.132 124.75C164.913 124.802 166.11 125.427 166.318 126.103C167.255 128.758 168.036 131.517 168.609 134.328C168.713 134.953 168.036 136.15 167.464 136.358C166.891 136.618 165.381 136.15 165.225 135.681C164.08 132.766 163.247 129.695 162.206 126.416Z"
                  fill="#20650A"
                />
              </svg>
              <div className="ghee-text">
                <h2>টক্সিনমুক্ত পরিপাকতন্ত্র</h2>
                <p className="m-0 p-0">
                  খাবারের সময় অন্তত এক চা চামচ বেলনা ঘি খেলে তা পরিপাকতন্ত্রের
                  মাধ্যমে লিপিড-দ্রবণীয় টক্সিন দ্রবীভূত ও নির্মূল করতে সাহায্য
                  করে এবং শরীরকে সুস্থ ও টক্সিনমুক্ত রাখে।
                </p>
              </div>
            </div>
            <div className="ghee-upokarita d-flex align-items-center gap-3 my-4">
              {/* svg  */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ghee-large-icon"
                viewBox="0 0 310 310"
                fill="none"
              >
                <circle cx={155} cy={155} r={155} fill="#46912E" />
                <path
                  d="M191.583 78.3429C196.965 77.7303 202.041 77.1615 207.117 76.6364C209.568 76.3738 212.018 76.3738 214.469 76.0237C220.201 75.1923 224.883 80.0495 226.021 84.1191C227.465 89.3263 225.365 95.1024 220.507 97.3341C217.794 98.6031 214.644 98.8657 211.668 99.5658C210.355 99.8721 209.043 100.047 207.642 100.747C211.493 102.06 215.256 103.767 219.238 104.511C223.395 105.298 227.378 103.723 231.272 101.973C234.904 100.353 238.405 101.622 241.424 103.854C244.312 105.955 244.706 109.105 243.874 112.343C243.656 113.306 242.824 114.225 241.993 114.881C240.549 116.019 238.93 116.85 237.136 117.988C239.586 120.395 241.905 122.802 244.312 125.033C246.106 126.696 246.369 128.534 245.844 130.766C243.787 139.43 233.547 142.58 226.984 136.542C222.652 132.56 217.882 129.103 212.412 126.871C202.216 122.67 193.377 125.558 187.601 134.966C187.295 135.492 187.032 136.06 186.638 136.542C185.544 137.942 184.188 138.467 182.525 137.636C180.95 136.848 180.293 135.098 181.125 133.479C185.632 124.552 195.959 116.019 209.305 119.17C217.882 121.182 224.84 125.952 231.272 131.728C233.635 133.829 236.567 133.741 238.536 131.51C239.499 130.416 239.892 129.409 238.536 128.184C235.56 125.471 232.672 122.67 229.697 119.957C226.94 117.463 227.378 115.056 230.791 113.569C232.847 112.693 234.86 111.643 236.829 110.593C237.223 110.374 237.705 109.762 237.661 109.411C237.617 109.018 237.004 108.405 236.611 108.361C235.342 108.23 233.854 107.924 232.76 108.405C228.078 110.418 223.264 111.381 218.188 110.943C216.875 110.855 215.475 110.505 214.25 109.937C206.417 106.392 198.191 104.686 189.614 104.948C187.951 104.992 186.245 105.429 184.669 105.998C174.78 109.849 168.216 117.376 162.79 126.127C162.046 127.352 161.346 128.621 160.558 129.803C159.421 131.466 157.67 131.903 156.139 130.984C154.607 130.065 154.082 128.271 155.089 126.521C162.002 114.312 170.623 103.723 184.494 99.2157C191.539 96.9403 198.847 95.5838 206.111 93.9647C209.305 93.2646 212.543 92.9145 215.782 92.3019C218.582 91.7768 220.376 89.4138 220.07 86.7446C219.72 83.944 217.619 82.1062 214.688 82.4125C206.067 83.3314 197.49 84.2941 188.914 85.3881C185.238 85.8694 183.575 84.2503 184.45 80.6621C185.282 77.2052 186.157 73.7921 186.988 70.3351C187.514 68.191 186.288 66.3969 184.144 66.0031C182.175 65.6092 180.687 66.6594 180.206 68.8036C179.681 71.1228 178.981 73.442 178.762 75.805C178.105 80.9685 175.524 84.9067 171.717 88.0136C167.735 91.2955 163.403 94.1398 159.158 97.1591C154.388 100.572 149.4 103.679 144.805 107.311C139.904 111.162 136.316 116.15 134.697 122.32C134.172 124.377 132.422 125.383 130.715 124.902C128.877 124.377 128.002 122.67 128.571 120.482C130.934 111.424 136.797 104.904 144.105 99.5658C149.181 95.8901 154.563 92.652 159.727 89.0638C162.834 86.8758 165.941 84.6004 168.654 81.9311C170.229 80.3996 171.323 78.1679 171.979 76.0237C173.029 72.6543 173.467 69.1099 174.167 65.653C174.736 62.94 178.587 60.0957 182.263 59.6581C187.645 59.0455 192.983 63.2025 193.64 68.5848C193.727 69.3725 193.552 70.2039 193.377 70.9915C192.852 73.3545 192.239 75.7174 191.583 78.3429Z"
                  fill="white"
                />
                <path
                  d="M154.257 167.129C153.863 168.267 153.601 168.923 153.382 169.579C149.487 182.794 145.593 195.966 141.742 209.181C141.655 209.487 141.523 209.837 141.436 210.144C141.042 211.894 140.211 213.25 138.285 213.382C136.229 213.513 135.31 212.069 134.697 210.362C133.822 208.087 132.903 205.811 131.984 203.536C129.534 197.41 127.083 191.284 124.414 184.72C122.882 187.258 121.526 189.49 120.169 191.677C116.494 197.804 117.719 197.016 110.761 197.016C93.0828 197.06 75.4043 197.016 57.7259 197.016C57.1133 197.016 56.5007 197.06 55.8881 196.972C54.2252 196.841 53 195.528 53 193.909C53 192.29 54.1815 190.934 55.8443 190.715C56.4569 190.627 57.0695 190.671 57.6822 190.671C75.5794 190.671 93.4328 190.671 111.33 190.715C112.818 190.715 113.649 190.321 114.393 189.008C116.669 185.026 119.075 181.175 121.395 177.237C122.27 175.749 123.101 174.174 125.201 174.349C127.302 174.48 127.915 176.143 128.571 177.762C131.503 185.114 134.435 192.421 137.541 200.21C137.935 199.16 138.242 198.504 138.417 197.847C142.574 183.713 146.731 169.623 150.844 155.489C151.763 152.382 152.726 151.245 154.607 151.376C157.189 151.551 157.583 153.608 158.064 155.577C162.396 172.949 166.772 190.321 171.104 207.693C171.279 208.306 171.454 208.962 171.804 210.056C174.517 203.974 177.055 198.416 179.506 192.815C182.131 186.776 181.694 187.389 187.907 187.389C208.999 187.389 230.091 187.389 251.182 187.389C251.882 187.389 252.582 187.302 253.239 187.433C254.902 187.739 255.908 188.789 255.996 190.496C256.083 192.115 254.858 193.515 253.195 193.734C252.539 193.822 251.839 193.778 251.138 193.778C230.134 193.778 209.087 193.778 188.082 193.734C186.551 193.734 185.807 194.215 185.194 195.616C181.606 203.842 177.93 212.069 174.299 220.295C173.555 221.958 172.679 223.402 170.623 223.227C168.566 223.052 167.91 221.521 167.472 219.727C163.315 203.055 159.158 186.426 155.001 169.754C154.782 169.098 154.607 168.354 154.257 167.129Z"
                  fill="white"
                />
                <path
                  d="M118.332 77.9054C119.251 76.155 120.126 74.4922 120.957 72.8294C123.583 67.6221 126.69 62.6774 130.934 58.6516C138.286 51.6503 148.394 51.2564 155.614 56.9013C161.434 61.4522 161.521 69.5037 155.92 74.3172C150.669 78.7805 145.9 83.594 143.23 90.114C142.486 91.9518 141.917 93.8334 141.349 95.7151C140.692 98.0343 139.117 99.2157 137.279 98.6906C135.354 98.1655 134.61 96.5027 135.135 94.096C136.404 88.5387 138.811 83.5502 142.224 79.0431C142.618 78.518 143.011 77.9491 143.58 77.2052C138.373 75.8925 133.91 73.617 130.759 68.7598C129.403 71.079 128.09 73.0482 127.04 75.1486C125.202 78.8243 123.451 82.5 121.745 86.2195C121.045 87.751 120.17 89.02 118.332 88.8887C116.494 88.8012 115.837 87.4885 115.137 85.9132C114.218 83.8127 113.124 81.6248 111.637 79.962C107.567 75.5424 103.279 71.3416 98.9904 67.1845C98.5528 66.7469 97.3276 66.6594 96.715 66.922C92.8642 68.7598 90.5013 71.7792 89.3198 75.8049C88.926 77.1615 89.1885 78.1679 90.2387 79.2181C94.7896 83.6815 98.7279 88.6262 101.922 94.1835C105.729 100.879 106.386 107.705 103.06 114.706C100.084 120.92 96.9775 127.046 94.0895 133.304C90.7201 140.568 88.4446 148.138 88.9697 156.233C89.276 160.696 90.0199 165.116 90.5888 170.061C91.6827 169.317 92.2954 168.967 92.8642 168.529C101.835 162.053 109.142 154.045 114.787 144.506C116.494 141.574 118.157 140.786 120.082 142.012C121.92 143.149 122.007 144.9 120.345 147.744C113.781 158.859 105.16 168.048 94.4395 175.224C93.0393 176.143 92.4704 176.975 93.3456 178.506C93.5206 178.812 93.6081 179.119 93.6956 179.469C94.2645 181.569 93.5206 183.188 91.7703 183.845C90.0637 184.457 88.2696 183.582 87.657 181.525C86.2129 176.624 84.7689 171.724 83.6749 166.735C80.6119 152.951 83.3249 139.955 89.5823 127.484C92.0766 122.539 94.3958 117.551 96.89 112.606C99.603 107.18 99.0342 102.016 95.9711 96.8528C92.8642 91.383 88.7947 86.6571 84.2438 82.2812C82.8873 80.9684 82.3622 79.5682 82.4935 77.7303C83.0623 69.5037 88.9697 62.2398 96.9338 59.9644C98.7716 59.4393 100.172 59.7018 101.616 60.9708C107.48 66.003 113.168 71.2103 117.807 77.424C117.894 77.599 118.069 77.6866 118.332 77.9054ZM144.149 59.0017C141.874 59.9206 139.555 60.752 137.323 61.8022C135.573 62.6336 135.616 64.0777 136.448 65.6092C138.636 69.6788 145.856 72.173 150.1 70.2914C151.938 69.46 153.557 68.2785 153.601 65.9593C153.645 63.8151 152.595 62.1961 150.757 61.3209C148.788 60.3582 146.6 59.8331 144.149 59.0017Z"
                  fill="white"
                />
                <path
                  d="M157.452 256.09C149.75 255.959 142.705 252.852 136.098 248.52C125.333 241.431 116.8 232.066 109.23 221.827C106.561 218.195 104.11 214.388 101.66 210.625C99.4717 207.255 99.5155 205.461 101.528 204.236C103.541 203.055 105.029 203.842 107.173 207.343C113.737 217.976 121.307 227.734 130.584 236.136C135.091 240.205 139.992 243.794 145.506 246.507C154.914 251.145 164.103 250.532 173.03 245.281C180.381 240.993 185.763 234.648 190.402 227.647C194.997 220.689 198.585 213.163 201.56 205.417C201.91 204.542 202.217 203.623 202.567 202.748C203.398 200.91 205.017 200.123 206.68 200.735C208.43 201.392 209.262 203.142 208.518 205.067C206.768 209.443 205.105 213.819 203.092 218.064C198.191 228.391 192.196 237.93 183.532 245.544C176.224 252.02 167.822 255.959 157.452 256.09Z"
                  fill="white"
                />
                <path
                  d="M217.007 164.897C216.526 169.842 216.219 173.518 215.825 177.15C215.563 179.556 214.119 180.913 212.193 180.694C210.181 180.475 209.043 178.769 209.48 176.231C210.574 169.229 210.356 162.228 209.524 155.227C208.649 147.875 206.855 140.743 204.317 133.829C204.011 132.954 203.704 131.947 203.792 131.072C203.967 129.584 205.017 128.621 206.549 128.446C208.299 128.271 209.48 129.147 210.006 130.766C211.581 135.842 213.462 140.874 214.469 146.037C215.738 152.645 216.307 159.384 217.007 164.897Z"
                  fill="white"
                />
              </svg>
              <div className="ghee-text">
                <h2>হার্টের সুস্থতা নিয়ন্ত্রন</h2>
                <p className="m-0 p-0">
                  বেলনা ঘি তে আছে লিনোলিক অ্যাসিড, যা খারাপ কোলেস্টেরলের মাত্রা
                  কমাতে ও ভালোকোলেস্টেরলের মাত্রা বাড়াতে সাহায্য করে এবং হার্টকে
                  সুস্থ রাখে।{" "}
                </p>
              </div>
            </div>
            <div className="ghee-upokarita d-flex align-items-center gap-3">
              {/* svg  */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ghee-icon"
                viewBox="0 0 310 310"
                fill="none"
              >
                <circle cx={155} cy={155} r={155} fill="#46912E" />
                <path
                  d="M148.778 221.293C151.731 222.518 152.121 223.131 152.121 226.14C152.121 234.274 152.121 242.409 152.121 250.599C152.121 253.886 151.007 255 147.719 255C132.844 255 117.912 255 103.036 255C99.7488 255 98.6345 253.886 98.6345 250.654C98.6345 242.52 98.6345 234.386 98.6345 226.195C98.6345 223.131 99.0245 222.518 101.922 221.348C101.922 218.73 102.033 216.111 101.866 213.437C101.699 210.428 100.139 208.088 97.9102 206.138C91.0015 200.065 84.2043 193.881 77.2956 187.864C73.7856 184.855 71.6127 181.233 70.4427 176.721C65.9855 159.56 61.3611 142.456 56.6811 125.351C54.9539 118.944 56.4582 113.707 61.8069 109.64C62.3083 109.25 62.5869 108.414 62.5869 107.745C62.754 100.837 67.2669 95.2651 73.6185 94.2066C80.2485 93.0923 86.6001 97.1595 88.8844 103.79C93.6202 117.607 98.4116 131.368 103.203 145.13C103.482 145.91 104.15 146.69 104.819 147.08C114.123 152.596 123.539 158.056 132.844 163.572C143.429 169.812 148.667 179.005 148.667 191.318C148.778 201.291 148.778 211.32 148.778 221.293ZM142.092 221.515C142.092 220.903 142.092 220.401 142.092 219.955C142.092 209.982 142.204 200.009 142.037 190.092C141.925 181.512 138.136 174.882 130.949 170.202C128.721 168.753 126.381 167.472 124.152 166.135C116.575 161.677 109.053 157.276 101.476 152.874C97.4645 150.534 92.9516 152.039 91.4473 156.05C90.2215 159.337 91.4473 162.457 94.7345 164.352C100.863 167.918 107.047 171.428 113.12 175.049C115.015 176.163 115.516 178.002 114.569 179.673C113.622 181.345 111.728 181.902 109.889 180.843C103.315 177.055 96.6845 173.378 90.2215 169.422C85.0958 166.246 82.8672 159.839 85.04 154.267C86.0429 151.816 85.8758 149.81 84.9843 147.526C84.7615 146.969 84.5943 146.356 84.4272 145.743C81.5857 136.94 78.7442 128.137 75.9028 119.334C74.8442 116.047 72.1141 114.097 68.8827 114.153C66.0969 114.208 63.4783 116.214 62.9769 119.111C62.6983 120.56 62.8655 122.176 63.2555 123.624C67.8798 141.007 72.6156 158.39 77.2399 175.773C77.9085 178.336 79.19 180.453 81.1957 182.236C88.2158 188.421 95.1245 194.661 102.145 200.789C106.657 204.689 108.886 209.537 108.719 215.498C108.663 217.504 108.719 219.454 108.719 221.515C119.918 221.515 130.838 221.515 142.092 221.515ZM105.376 248.092C118.692 248.092 131.952 248.092 145.324 248.092C145.324 241.461 145.324 234.887 145.324 228.368C131.952 228.368 118.692 228.368 105.376 228.368C105.376 234.998 105.376 241.461 105.376 248.092ZM96.1273 144.963C93.843 138.333 91.6144 131.926 89.3858 125.463C87.1015 118.888 84.8729 112.37 82.5886 105.795C81.3628 102.285 77.9642 100.168 74.6213 100.781C71.6684 101.338 69.4955 104.068 69.5513 107.3C76.9056 108.024 81.14 112.258 82.9229 119.278C83.3129 120.894 83.9257 122.454 84.4272 124.014C86.8229 131.424 89.2187 138.779 91.6144 146.244C93.1744 145.799 94.5673 145.409 96.1273 144.963Z"
                  fill="white"
                />
                <path
                  d="M208.95 221.293C211.903 222.518 212.293 223.131 212.293 226.14C212.293 234.274 212.293 242.409 212.293 250.599C212.293 253.886 211.179 255 207.892 255C193.016 255 178.084 255 163.208 255C159.921 255 158.807 253.886 158.807 250.654C158.807 242.52 158.807 234.386 158.807 226.195C158.807 223.131 159.197 222.518 162.15 221.348C162.15 211.71 162.261 202.071 162.094 192.376C161.871 179.172 167.498 169.478 178.975 162.959C188.001 157.889 196.86 152.54 205.774 147.247C206.554 146.746 207.334 145.854 207.613 144.963C212.46 131.201 217.252 117.44 221.987 103.622C224.272 97.048 230.512 93.148 237.142 94.2066C243.494 95.2651 248.006 100.837 248.174 107.745C248.174 108.47 248.564 109.361 249.121 109.807C254.191 113.763 255.807 118.833 254.191 124.961C250.012 140.561 245.834 156.106 241.711 171.706C238.423 184.075 239.036 182.961 229.453 191.485C224.049 196.277 218.645 201.124 213.185 205.859C210.176 208.478 208.672 211.598 208.839 215.554C209.062 217.448 208.95 219.398 208.95 221.293ZM202.264 221.46C202.264 219.287 202.32 217.281 202.264 215.275C202.153 209.481 204.326 204.801 208.727 200.957C215.803 194.772 222.879 188.588 229.788 182.181C231.459 180.621 232.963 178.392 233.576 176.163C238.479 158.557 243.159 140.896 247.839 123.178C248.954 118.944 247.171 115.378 243.494 114.32C239.983 113.317 236.306 115.545 235.025 119.557C231.793 129.53 228.506 139.503 225.386 149.532C225.052 150.534 225.163 151.872 225.553 152.819C227.002 156.607 227.336 160.396 225.386 163.906C224.216 166.023 222.545 168.196 220.539 169.478C214.243 173.433 207.724 176.999 201.262 180.732C199.869 181.568 198.309 181.735 197.25 180.509C196.526 179.618 196.08 178.113 196.247 176.999C196.359 176.108 197.529 175.272 198.42 174.715C204.214 171.26 210.064 167.918 215.915 164.575C217.92 163.405 219.48 161.9 219.815 159.505C220.149 156.83 219.369 154.49 217.085 152.93C214.633 151.259 212.126 151.314 209.619 152.763C200.091 158.335 190.509 163.906 180.981 169.533C172.903 174.269 168.891 181.401 168.835 190.705C168.78 200.288 168.835 209.927 168.835 219.51C168.835 220.123 168.835 220.735 168.835 221.404C180.034 221.46 191.01 221.46 202.264 221.46ZM165.66 228.313C165.66 234.998 165.66 241.517 165.66 248.147C179.031 248.147 192.291 248.147 205.496 248.147C205.496 241.461 205.496 234.887 205.496 228.313C192.124 228.313 178.92 228.313 165.66 228.313ZM241.488 107.3C241.376 103.901 239.203 101.282 236.251 100.781C232.908 100.224 229.676 102.23 228.506 105.684C224.105 118.275 219.759 130.867 215.357 143.459C215.19 143.96 215.079 144.462 214.912 144.963C216.472 145.409 217.865 145.799 219.313 146.244C222.322 136.884 225.442 127.691 228.283 118.387C230.289 111.813 234.468 108.024 241.488 107.3Z"
                  fill="white"
                />
                <path
                  d="M155.52 64.7888C160.869 59.6631 167.053 56.6545 174.185 55.4287C192.459 52.3087 210.901 66.6274 212.349 85.0691C213.241 95.9336 209.786 105.182 202.042 112.871C187.668 127.245 173.293 141.62 158.919 155.994C156.077 158.836 154.796 158.836 151.954 155.994C137.246 141.286 122.425 126.688 107.828 111.812C92.1163 95.5993 96.6292 68.9118 116.742 58.6602C128.777 52.5315 143.653 54.3701 153.793 63.2845C154.294 63.786 154.851 64.2317 155.52 64.7888ZM155.13 149.977C155.743 149.531 155.91 149.476 156.077 149.309C170.229 135.157 184.548 121.061 198.532 106.742C208.616 96.435 208.171 79.7762 198.031 69.5803C187.89 59.4402 171.455 59.1059 160.924 68.9675C159.922 69.9146 158.974 70.9732 157.916 71.8647C156.356 73.2575 154.629 73.2575 153.069 71.8647C152.01 70.9175 151.119 69.9146 150.06 68.9675C141.313 60.7774 128.164 59.4402 117.968 65.6246C102.869 74.8733 100.641 95.0421 113.344 107.801C126.548 121.061 139.808 134.266 153.069 147.526C153.793 148.306 154.406 149.141 155.13 149.977Z"
                  fill="white"
                />
                <path
                  d="M142.093 221.515C130.838 221.515 119.918 221.515 108.664 221.515C108.664 219.51 108.608 217.504 108.664 215.498C108.831 209.537 106.602 204.745 102.089 200.789C95.0691 194.661 88.1605 188.365 81.1404 182.236C79.1346 180.453 77.8532 178.392 77.1846 175.773C72.5602 158.39 67.8245 141.007 63.2001 123.624C62.8101 122.175 62.643 120.56 62.9215 119.111C63.4787 116.214 66.0416 114.208 68.8273 114.153C72.0588 114.097 74.7888 116.047 75.8474 119.334C78.6889 128.137 81.5304 136.94 84.3718 145.743C84.539 146.356 84.7061 146.969 84.929 147.526C85.8204 149.754 85.9876 151.76 84.9847 154.267C82.7561 159.839 85.0404 166.302 90.1662 169.422C96.6291 173.433 103.259 177.111 109.834 180.843C111.672 181.902 113.567 181.345 114.514 179.673C115.461 178.002 114.959 176.163 113.065 175.049C106.936 171.428 100.808 167.918 94.6791 164.352C91.3919 162.457 90.2219 159.337 91.3919 156.05C92.8405 151.983 97.3534 150.534 101.421 152.874C108.998 157.276 116.575 161.733 124.097 166.135C126.381 167.472 128.721 168.753 130.894 170.202C138.081 174.882 141.87 181.512 141.981 190.092C142.148 200.065 142.037 209.982 142.037 219.955C142.093 220.401 142.093 220.847 142.093 221.515Z"
                  fill="#46912E"
                />
                <path
                  d="M105.376 248.091C105.376 241.461 105.376 234.998 105.376 228.368C118.692 228.368 131.896 228.368 145.324 228.368C145.324 234.887 145.324 241.461 145.324 248.091C132.008 248.091 118.692 248.091 105.376 248.091Z"
                  fill="#20650A"
                />
                <path
                  d="M96.1269 144.963C94.5669 145.409 93.174 145.799 91.6697 146.244C89.2739 138.779 86.8782 131.424 84.4824 124.014C83.981 122.454 83.3681 120.894 82.9781 119.278C81.1952 112.258 76.9052 108.024 69.6065 107.3C69.5508 104.068 71.7237 101.338 74.6766 100.781C78.0195 100.168 81.4181 102.285 82.6438 105.795C84.9282 112.37 87.1568 118.888 89.4411 125.463C91.614 131.926 93.8426 138.333 96.1269 144.963Z"
                  fill="#20650A"
                />
                <path
                  d="M202.264 221.459C191.01 221.459 180.034 221.459 168.835 221.459C168.835 220.791 168.835 220.178 168.835 219.565C168.835 209.982 168.78 200.343 168.835 190.76C168.891 181.4 172.958 174.324 180.981 169.588C190.508 163.961 200.036 158.39 209.619 152.818C212.126 151.37 214.633 151.314 217.085 152.985C219.369 154.545 220.149 156.885 219.815 159.56C219.48 162.011 217.92 163.516 215.915 164.63C210.064 167.973 204.214 171.316 198.42 174.77C197.529 175.327 196.359 176.219 196.247 177.054C196.08 178.169 196.526 179.673 197.25 180.564C198.253 181.79 199.813 181.623 201.261 180.787C207.724 177.054 214.243 173.489 220.539 169.533C222.545 168.251 224.216 166.078 225.386 163.961C227.336 160.451 227.058 156.607 225.553 152.874C225.163 151.871 225.052 150.59 225.386 149.587C228.562 139.558 231.793 129.585 235.025 119.612C236.306 115.601 239.983 113.372 243.493 114.375C247.171 115.433 249.009 118.999 247.839 123.234C243.103 140.895 238.479 158.557 233.576 176.219C232.963 178.447 231.459 180.676 229.788 182.236C222.935 188.643 215.859 194.827 208.727 201.012C204.326 204.856 202.153 209.536 202.264 215.331C202.32 217.225 202.264 219.231 202.264 221.459Z"
                  fill="#46912E"
                />
                <path
                  d="M165.66 228.312C178.92 228.312 192.125 228.312 205.496 228.312C205.496 234.887 205.496 241.406 205.496 248.147C192.292 248.147 179.032 248.147 165.66 248.147C165.66 241.573 165.66 234.998 165.66 228.312Z"
                  fill="#20650A"
                />
                <path
                  d="M241.488 107.299C234.468 108.024 230.345 111.812 228.284 118.387C225.442 127.691 222.322 136.884 219.314 146.244C217.865 145.799 216.472 145.409 214.912 144.963C215.079 144.461 215.191 143.904 215.358 143.459C219.704 130.867 224.105 118.275 228.507 105.684C229.732 102.229 232.908 100.224 236.251 100.781C239.204 101.282 241.321 103.901 241.488 107.299Z"
                  fill="#20650A"
                />
                <path
                  d="M155.129 149.977C154.405 149.141 153.792 148.25 153.068 147.525C139.864 134.265 126.548 121.061 113.343 107.801C100.64 95.0419 102.924 74.8731 117.968 65.6244C128.108 59.3843 141.312 60.7772 150.059 68.9673C151.062 69.9144 152.009 70.973 153.068 71.8645C154.628 73.2573 156.355 73.2573 157.915 71.8645C158.974 70.9173 159.865 69.9144 160.924 68.9673C171.454 59.1614 187.89 59.44 198.086 69.6359C208.226 79.8317 208.672 96.4905 198.587 106.798C184.547 121.117 170.284 135.212 156.132 149.364C155.965 149.476 155.742 149.587 155.129 149.977ZM145.435 111.199C145.435 114.486 145.435 117.551 145.435 120.615C145.435 123.345 146.661 124.571 149.391 124.571C153.291 124.627 157.191 124.571 161.091 124.571C164.378 124.571 165.492 123.457 165.492 120.169C165.492 117.217 165.492 114.264 165.492 111.199C168.724 111.199 171.621 111.199 174.518 111.199C177.694 111.199 178.808 110.085 178.864 106.965C178.864 103.288 178.864 99.6106 178.864 95.8776C178.864 92.089 177.861 91.1419 174.017 91.1419C171.175 91.1419 168.39 91.1419 165.492 91.1419C165.492 87.799 165.492 84.8461 165.492 81.8375C165.492 78.996 164.267 77.7703 161.425 77.7703C157.525 77.7703 153.625 77.7703 149.725 77.7703C146.605 77.7703 145.435 78.8846 145.435 82.0603C145.435 85.0132 145.435 88.0218 145.435 91.1419C142.148 91.1419 139.139 91.1419 136.075 91.1419C133.289 91.1419 132.063 92.3676 132.063 95.0419C132.008 99.0534 132.063 103.121 132.063 107.132C132.063 109.974 133.289 111.144 136.186 111.144C139.195 111.255 142.148 111.199 145.435 111.199Z"
                  fill="#46912E"
                />
                <path
                  d="M145.435 111.199C142.148 111.199 139.14 111.199 136.187 111.199C133.29 111.199 132.12 110.029 132.064 107.188C132.064 103.177 132.008 99.1093 132.064 95.0978C132.064 92.3678 133.29 91.1978 136.075 91.1978C139.14 91.1978 142.148 91.1978 145.435 91.1978C145.435 88.022 145.435 85.0691 145.435 82.1162C145.435 78.9962 146.55 77.8262 149.726 77.8262C153.626 77.8262 157.526 77.8262 161.426 77.8262C164.323 77.8262 165.493 78.9962 165.493 81.8934C165.493 84.902 165.493 87.8549 165.493 91.1978C168.39 91.1978 171.176 91.1978 174.017 91.1978C177.862 91.1978 178.864 92.1449 178.864 95.9336C178.864 99.6108 178.864 103.288 178.864 107.021C178.864 110.141 177.694 111.255 174.519 111.255C171.622 111.255 168.669 111.255 165.493 111.255C165.493 114.32 165.493 117.272 165.493 120.225C165.493 123.513 164.379 124.571 161.091 124.627C157.191 124.627 153.291 124.627 149.391 124.627C146.661 124.627 145.435 123.401 145.435 120.671C145.435 117.607 145.435 114.542 145.435 111.199ZM158.807 84.5677C156.411 84.5677 154.35 84.5677 152.121 84.5677C152.121 87.4649 152.121 90.1949 152.121 92.9807C152.121 96.9364 151.174 97.8279 147.163 97.8279C144.433 97.8279 141.647 97.8279 138.917 97.8279C138.917 100.168 138.917 102.285 138.917 104.347C139.195 104.402 139.307 104.458 139.474 104.458C142.037 104.458 144.6 104.458 147.218 104.458C151.286 104.458 152.177 105.349 152.177 109.528C152.177 112.258 152.177 115.044 152.177 117.718C154.573 117.718 156.634 117.718 158.863 117.718C158.863 114.821 158.863 112.091 158.863 109.305C158.863 105.349 159.81 104.458 163.821 104.458C166.551 104.458 169.337 104.458 172.123 104.458C172.123 102.118 172.123 100.001 172.123 97.9393C171.844 97.8836 171.733 97.8279 171.566 97.8279C168.836 97.8279 166.161 97.8279 163.431 97.8279C159.921 97.8279 158.918 96.7693 158.863 93.2035C158.807 90.3621 158.807 87.5206 158.807 84.5677Z"
                  fill="white"
                />
                <path
                  d="M158.806 84.5674C158.806 87.5203 158.806 90.3617 158.806 93.2032C158.806 96.769 159.865 97.8276 163.375 97.8276C166.105 97.8276 168.779 97.8276 171.509 97.8276C171.621 97.8276 171.788 97.8833 172.067 97.939C172.067 100 172.067 102.118 172.067 104.458C169.281 104.458 166.551 104.458 163.765 104.458C159.753 104.458 158.806 105.349 158.806 109.305C158.806 112.091 158.806 114.821 158.806 117.718C156.578 117.718 154.516 117.718 152.121 117.718C152.121 114.988 152.121 112.258 152.121 109.528C152.121 105.349 151.229 104.458 147.162 104.458C144.599 104.458 142.036 104.458 139.418 104.458C139.306 104.458 139.139 104.402 138.86 104.346C138.86 102.285 138.86 100.168 138.86 97.8276C141.59 97.8276 144.376 97.8276 147.106 97.8276C151.118 97.8276 152.065 96.8804 152.065 92.9804C152.065 90.1946 152.065 87.4646 152.065 84.5674C154.405 84.5674 156.466 84.5674 158.806 84.5674Z"
                  fill="#20650A"
                />
              </svg>
              <div className="ghee-text">
                <h2>রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি ও সুস্থতা</h2>
                <p className="m-0 p-0">
                  বেলনা ঘি তে ভিটামিন এ, ডি, ই ও কে বেশি থাকে, যা রোগ প্রতিরোধ
                  ক্ষমতা বাড়াতে সাহায্য করে। এই ভিটামিনগুলো হার্ট এবং
                  মস্তিষ্কের কার্যকারিতার পাশাপাশি হাড়ের বৃদ্ধির জন্য
                  অপরিহার্য।
                </p>
              </div>
            </div>
            <a href="/product.html">
              <button className="order-btn my-3 text-decoration-none">
                SHOP NOW
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ghee section end  */}
  {/* ghee banner section start  */}
  <section>
    <div
      className="banner-section"
      style={{
        backgroundImage:
          'url("assets/media/home/banner-section/home-ghee-banner.jpg")'
      }}
    ></div>
  </section>
  {/* ghee banner section end  */}
  {/* review section start  */}
  <section>
    <div className="client-review-section">
      <h2 className="client-header text-center">WHAT OUR CLIENTS SAYS</h2>
      <div className="review-swiper-container">
        <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="review-card">
                <h6 className="review-text">
                  নামি দামি অনেক পেইজ থেকে ঘি নিয়েও কথায় আর ঘি এর স্বাদের কোনো
                  মিল পাই নি। হেলদি ইটস থেকে ঘি নিয়ে বুঝতেই পারি নি যে এই ঘি
                  এতটা সুঘ্রাণ আর স্বাদে অতুলণীয়। ধন্যবাদ হেলদি ইটসকে এত চমৎকার
                  একটি পণ্য আমাদের দারপ্রান্তে পৌঁছে দেওয়ার জন্য।
                </h6>
                <div className="d-flex mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={43}
                    height={55}
                    viewBox="0 0 43 55"
                    fill="none"
                  >
                    <mask
                      id="mask0_187_1329"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x={0}
                      y={0}
                      width={43}
                      height={55}
                    >
                      <path d="M43 0H0V55H43V0Z" fill="white" />
                    </mask>
                    <g mask="url(#mask0_187_1329)">
                      <mask
                        id="mask1_187_1329"
                        style={{ maskType: "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x={0}
                        y={5}
                        width={37}
                        height={39}
                      >
                        <path
                          d="M36.7735 5.89331H0V43.667H36.7735V5.89331Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask1_187_1329)">
                        <path
                          d="M35.6232 24.5296C34.3937 23.4887 32.4503 23.3995 31.1748 24.8056L28.0082 28.2972C27.5989 26.9457 26.3701 25.9616 24.9215 25.9616H19.2709C18.842 25.9616 18.6985 25.7934 17.9536 25.204C15.1139 22.6611 10.8486 22.6692 8.0175 25.2283L5.9405 27.1066C5.00687 26.5989 3.91667 26.5864 2.97794 27.0682L0.595703 28.2913C0.0634922 28.565 -0.151905 29.2297 0.113768 29.7764L6.57751 43.0554C6.84395 43.6021 7.49103 43.8233 8.02325 43.5504L10.4055 42.3265C11.5797 41.7239 12.2332 40.4933 12.1908 39.2407H24.9215C27.2821 39.2407 29.538 38.0824 30.9543 36.1423L36.126 29.0587C37.1293 27.6857 36.9706 25.6724 35.6232 24.5296ZM9.44157 40.3472L8.02318 41.076L2.52258 29.7764L3.94173 29.0475C4.47395 28.7746 5.12028 28.9952 5.38674 29.5425L9.92357 38.863C10.1893 39.4096 9.97378 40.0734 9.44157 40.3472ZM34.4023 27.7307L29.2307 34.8143C28.2187 36.2005 26.6078 37.0274 24.9215 37.0274H11.4389L7.40197 28.7332L9.4409 26.8897C11.4697 25.0564 14.5293 25.0564 16.5581 26.8897C17.7532 27.9705 18.4965 28.1748 19.2707 28.1748H24.9215C25.5154 28.1748 25.9987 28.6713 25.9987 29.2814C25.9987 29.8914 25.5153 30.388 24.9215 30.388H19.4194C18.8248 30.388 18.3422 30.8838 18.3422 31.4946C18.3422 32.1054 18.8248 32.6011 19.4194 32.6011H25.6433C26.5374 32.6011 27.3993 32.216 28.0082 31.544L32.7512 26.3143C33.185 25.8362 33.85 25.876 34.258 26.2427C34.6845 26.6263 34.7306 27.2821 34.4023 27.7307Z"
                          fill="#51983C"
                          stroke="#51983C"
                          strokeWidth="0.107422"
                        />
                        <path
                          d="M22.6514 13.4456C23.389 12.6511 23.8436 11.577 23.8436 10.3944C23.8436 7.95842 21.9275 5.89429 19.5345 5.89429C17.1595 5.89429 15.1536 7.95472 15.1536 10.3944C15.1536 11.5408 15.591 12.623 16.3853 13.4545C14.4153 14.5891 12.999 16.7668 12.999 19.3209V20.4274C12.999 21.0382 13.4817 21.534 14.0763 21.534H24.921C25.5156 21.534 25.9983 21.0382 25.9983 20.4274V19.3209C25.9982 16.817 24.6575 14.6053 22.6514 13.4456ZM19.5345 8.10752C20.7023 8.10752 21.6891 9.15508 21.6891 10.3945C21.6891 11.6146 20.7224 12.6076 19.5345 12.6076C18.3279 12.6076 17.3082 11.594 17.3082 10.3945C17.3082 9.17647 18.3488 8.10752 19.5345 8.10752ZM15.1536 19.3209C15.1536 16.8812 17.1595 14.8208 19.5345 14.8208C21.9103 14.8208 23.8436 16.8391 23.8436 19.3209H15.1536Z"
                          fill="#51983C"
                          stroke="#51983C"
                          strokeWidth="0.107422"
                        />
                      </g>
                    </g>
                  </svg>
                  <div className="ms-1">
                    <p className="review-name m-0 p-0">Rayan Rahman</p>
                    <p className="review-intro">Businessman</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="review-card">
                <h6 className="review-text">
                  নামি দামি অনেক পেইজ থেকে ঘি নিয়েও কথায় আর ঘি এর স্বাদের কোনো
                  মিল পাই নি। হেলদি ইটস থেকে ঘি নিয়ে বুঝতেই পারি নি যে এই ঘি
                  এতটা সুঘ্রাণ আর স্বাদে অতুলণীয়। ধন্যবাদ হেলদি ইটসকে এত চমৎকার
                  একটি পণ্য আমাদের দারপ্রান্তে পৌঁছে দেওয়ার জন্য।
                </h6>
                <div className="d-flex mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={43}
                    height={55}
                    viewBox="0 0 43 55"
                    fill="none"
                  >
                    <mask
                      id="mask0_187_1329"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x={0}
                      y={0}
                      width={43}
                      height={55}
                    >
                      <path d="M43 0H0V55H43V0Z" fill="white" />
                    </mask>
                    <g mask="url(#mask0_187_1329)">
                      <mask
                        id="mask1_187_1329"
                        style={{ maskType: "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x={0}
                        y={5}
                        width={37}
                        height={39}
                      >
                        <path
                          d="M36.7735 5.89331H0V43.667H36.7735V5.89331Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask1_187_1329)">
                        <path
                          d="M35.6232 24.5296C34.3937 23.4887 32.4503 23.3995 31.1748 24.8056L28.0082 28.2972C27.5989 26.9457 26.3701 25.9616 24.9215 25.9616H19.2709C18.842 25.9616 18.6985 25.7934 17.9536 25.204C15.1139 22.6611 10.8486 22.6692 8.0175 25.2283L5.9405 27.1066C5.00687 26.5989 3.91667 26.5864 2.97794 27.0682L0.595703 28.2913C0.0634922 28.565 -0.151905 29.2297 0.113768 29.7764L6.57751 43.0554C6.84395 43.6021 7.49103 43.8233 8.02325 43.5504L10.4055 42.3265C11.5797 41.7239 12.2332 40.4933 12.1908 39.2407H24.9215C27.2821 39.2407 29.538 38.0824 30.9543 36.1423L36.126 29.0587C37.1293 27.6857 36.9706 25.6724 35.6232 24.5296ZM9.44157 40.3472L8.02318 41.076L2.52258 29.7764L3.94173 29.0475C4.47395 28.7746 5.12028 28.9952 5.38674 29.5425L9.92357 38.863C10.1893 39.4096 9.97378 40.0734 9.44157 40.3472ZM34.4023 27.7307L29.2307 34.8143C28.2187 36.2005 26.6078 37.0274 24.9215 37.0274H11.4389L7.40197 28.7332L9.4409 26.8897C11.4697 25.0564 14.5293 25.0564 16.5581 26.8897C17.7532 27.9705 18.4965 28.1748 19.2707 28.1748H24.9215C25.5154 28.1748 25.9987 28.6713 25.9987 29.2814C25.9987 29.8914 25.5153 30.388 24.9215 30.388H19.4194C18.8248 30.388 18.3422 30.8838 18.3422 31.4946C18.3422 32.1054 18.8248 32.6011 19.4194 32.6011H25.6433C26.5374 32.6011 27.3993 32.216 28.0082 31.544L32.7512 26.3143C33.185 25.8362 33.85 25.876 34.258 26.2427C34.6845 26.6263 34.7306 27.2821 34.4023 27.7307Z"
                          fill="#51983C"
                          stroke="#51983C"
                          strokeWidth="0.107422"
                        />
                        <path
                          d="M22.6514 13.4456C23.389 12.6511 23.8436 11.577 23.8436 10.3944C23.8436 7.95842 21.9275 5.89429 19.5345 5.89429C17.1595 5.89429 15.1536 7.95472 15.1536 10.3944C15.1536 11.5408 15.591 12.623 16.3853 13.4545C14.4153 14.5891 12.999 16.7668 12.999 19.3209V20.4274C12.999 21.0382 13.4817 21.534 14.0763 21.534H24.921C25.5156 21.534 25.9983 21.0382 25.9983 20.4274V19.3209C25.9982 16.817 24.6575 14.6053 22.6514 13.4456ZM19.5345 8.10752C20.7023 8.10752 21.6891 9.15508 21.6891 10.3945C21.6891 11.6146 20.7224 12.6076 19.5345 12.6076C18.3279 12.6076 17.3082 11.594 17.3082 10.3945C17.3082 9.17647 18.3488 8.10752 19.5345 8.10752ZM15.1536 19.3209C15.1536 16.8812 17.1595 14.8208 19.5345 14.8208C21.9103 14.8208 23.8436 16.8391 23.8436 19.3209H15.1536Z"
                          fill="#51983C"
                          stroke="#51983C"
                          strokeWidth="0.107422"
                        />
                      </g>
                    </g>
                  </svg>
                  <div className="ms-3">
                    <p className="review-name m-0 p-0">Rayan Rahman</p>
                    <p className="review-intro">Businessman</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="review-card">
                <h6 className="review-text">
                  আপনাদের ঘি এর প্যাকেজিং অনেক ভালো লেগেছে। কাচেরজার এ পরিবেশন
                  সত্যিই ইউনিক ছিল।
                </h6>
                <div className="d-flex mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={43}
                    height={55}
                    viewBox="0 0 43 55"
                    fill="none"
                  >
                    <mask
                      id="mask0_187_1329"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x={0}
                      y={0}
                      width={43}
                      height={55}
                    >
                      <path d="M43 0H0V55H43V0Z" fill="white" />
                    </mask>
                    <g mask="url(#mask0_187_1329)">
                      <mask
                        id="mask1_187_1329"
                        style={{ maskType: "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x={0}
                        y={5}
                        width={37}
                        height={39}
                      >
                        <path
                          d="M36.7735 5.89331H0V43.667H36.7735V5.89331Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask1_187_1329)">
                        <path
                          d="M35.6232 24.5296C34.3937 23.4887 32.4503 23.3995 31.1748 24.8056L28.0082 28.2972C27.5989 26.9457 26.3701 25.9616 24.9215 25.9616H19.2709C18.842 25.9616 18.6985 25.7934 17.9536 25.204C15.1139 22.6611 10.8486 22.6692 8.0175 25.2283L5.9405 27.1066C5.00687 26.5989 3.91667 26.5864 2.97794 27.0682L0.595703 28.2913C0.0634922 28.565 -0.151905 29.2297 0.113768 29.7764L6.57751 43.0554C6.84395 43.6021 7.49103 43.8233 8.02325 43.5504L10.4055 42.3265C11.5797 41.7239 12.2332 40.4933 12.1908 39.2407H24.9215C27.2821 39.2407 29.538 38.0824 30.9543 36.1423L36.126 29.0587C37.1293 27.6857 36.9706 25.6724 35.6232 24.5296ZM9.44157 40.3472L8.02318 41.076L2.52258 29.7764L3.94173 29.0475C4.47395 28.7746 5.12028 28.9952 5.38674 29.5425L9.92357 38.863C10.1893 39.4096 9.97378 40.0734 9.44157 40.3472ZM34.4023 27.7307L29.2307 34.8143C28.2187 36.2005 26.6078 37.0274 24.9215 37.0274H11.4389L7.40197 28.7332L9.4409 26.8897C11.4697 25.0564 14.5293 25.0564 16.5581 26.8897C17.7532 27.9705 18.4965 28.1748 19.2707 28.1748H24.9215C25.5154 28.1748 25.9987 28.6713 25.9987 29.2814C25.9987 29.8914 25.5153 30.388 24.9215 30.388H19.4194C18.8248 30.388 18.3422 30.8838 18.3422 31.4946C18.3422 32.1054 18.8248 32.6011 19.4194 32.6011H25.6433C26.5374 32.6011 27.3993 32.216 28.0082 31.544L32.7512 26.3143C33.185 25.8362 33.85 25.876 34.258 26.2427C34.6845 26.6263 34.7306 27.2821 34.4023 27.7307Z"
                          fill="#51983C"
                          stroke="#51983C"
                          strokeWidth="0.107422"
                        />
                        <path
                          d="M22.6514 13.4456C23.389 12.6511 23.8436 11.577 23.8436 10.3944C23.8436 7.95842 21.9275 5.89429 19.5345 5.89429C17.1595 5.89429 15.1536 7.95472 15.1536 10.3944C15.1536 11.5408 15.591 12.623 16.3853 13.4545C14.4153 14.5891 12.999 16.7668 12.999 19.3209V20.4274C12.999 21.0382 13.4817 21.534 14.0763 21.534H24.921C25.5156 21.534 25.9983 21.0382 25.9983 20.4274V19.3209C25.9982 16.817 24.6575 14.6053 22.6514 13.4456ZM19.5345 8.10752C20.7023 8.10752 21.6891 9.15508 21.6891 10.3945C21.6891 11.6146 20.7224 12.6076 19.5345 12.6076C18.3279 12.6076 17.3082 11.594 17.3082 10.3945C17.3082 9.17647 18.3488 8.10752 19.5345 8.10752ZM15.1536 19.3209C15.1536 16.8812 17.1595 14.8208 19.5345 14.8208C21.9103 14.8208 23.8436 16.8391 23.8436 19.3209H15.1536Z"
                          fill="#51983C"
                          stroke="#51983C"
                          strokeWidth="0.107422"
                        />
                      </g>
                    </g>
                  </svg>
                  <div className="ms-3">
                    <p className="review-name m-0 p-0">Jamal Rahman</p>
                    <p className="review-intro">Govt. Service</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="review-card">
                <h6 className="review-text">
                  নামি দামি অনেক পেইজ থেকে ঘি নিয়েও কথায় আর ঘি এর স্বাদের কোনো
                  মিল পাই নি। হেলদি ইটস থেকে ঘি নিয়ে বুঝতেই পারি নি যে এই ঘি
                  এতটা সুঘ্রাণ আর স্বাদে অতুলণীয়। ধন্যবাদ হেলদি ইটসকে এত চমৎকার
                  একটি পণ্য আমাদের দারপ্রান্তে পৌঁছে দেওয়ার জন্য।
                </h6>
                <div className="d-flex mx-auto align-content-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={43}
                    height={55}
                    viewBox="0 0 43 55"
                    fill="none"
                  >
                    <mask
                      id="mask0_187_1329"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x={0}
                      y={0}
                      width={43}
                      height={55}
                    >
                      <path d="M43 0H0V55H43V0Z" fill="white" />
                    </mask>
                    <g mask="url(#mask0_187_1329)">
                      <mask
                        id="mask1_187_1329"
                        style={{ maskType: "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x={0}
                        y={5}
                        width={37}
                        height={39}
                      >
                        <path
                          d="M36.7735 5.89331H0V43.667H36.7735V5.89331Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask1_187_1329)">
                        <path
                          d="M35.6232 24.5296C34.3937 23.4887 32.4503 23.3995 31.1748 24.8056L28.0082 28.2972C27.5989 26.9457 26.3701 25.9616 24.9215 25.9616H19.2709C18.842 25.9616 18.6985 25.7934 17.9536 25.204C15.1139 22.6611 10.8486 22.6692 8.0175 25.2283L5.9405 27.1066C5.00687 26.5989 3.91667 26.5864 2.97794 27.0682L0.595703 28.2913C0.0634922 28.565 -0.151905 29.2297 0.113768 29.7764L6.57751 43.0554C6.84395 43.6021 7.49103 43.8233 8.02325 43.5504L10.4055 42.3265C11.5797 41.7239 12.2332 40.4933 12.1908 39.2407H24.9215C27.2821 39.2407 29.538 38.0824 30.9543 36.1423L36.126 29.0587C37.1293 27.6857 36.9706 25.6724 35.6232 24.5296ZM9.44157 40.3472L8.02318 41.076L2.52258 29.7764L3.94173 29.0475C4.47395 28.7746 5.12028 28.9952 5.38674 29.5425L9.92357 38.863C10.1893 39.4096 9.97378 40.0734 9.44157 40.3472ZM34.4023 27.7307L29.2307 34.8143C28.2187 36.2005 26.6078 37.0274 24.9215 37.0274H11.4389L7.40197 28.7332L9.4409 26.8897C11.4697 25.0564 14.5293 25.0564 16.5581 26.8897C17.7532 27.9705 18.4965 28.1748 19.2707 28.1748H24.9215C25.5154 28.1748 25.9987 28.6713 25.9987 29.2814C25.9987 29.8914 25.5153 30.388 24.9215 30.388H19.4194C18.8248 30.388 18.3422 30.8838 18.3422 31.4946C18.3422 32.1054 18.8248 32.6011 19.4194 32.6011H25.6433C26.5374 32.6011 27.3993 32.216 28.0082 31.544L32.7512 26.3143C33.185 25.8362 33.85 25.876 34.258 26.2427C34.6845 26.6263 34.7306 27.2821 34.4023 27.7307Z"
                          fill="#51983C"
                          stroke="#51983C"
                          strokeWidth="0.107422"
                        />
                        <path
                          d="M22.6514 13.4456C23.389 12.6511 23.8436 11.577 23.8436 10.3944C23.8436 7.95842 21.9275 5.89429 19.5345 5.89429C17.1595 5.89429 15.1536 7.95472 15.1536 10.3944C15.1536 11.5408 15.591 12.623 16.3853 13.4545C14.4153 14.5891 12.999 16.7668 12.999 19.3209V20.4274C12.999 21.0382 13.4817 21.534 14.0763 21.534H24.921C25.5156 21.534 25.9983 21.0382 25.9983 20.4274V19.3209C25.9982 16.817 24.6575 14.6053 22.6514 13.4456ZM19.5345 8.10752C20.7023 8.10752 21.6891 9.15508 21.6891 10.3945C21.6891 11.6146 20.7224 12.6076 19.5345 12.6076C18.3279 12.6076 17.3082 11.594 17.3082 10.3945C17.3082 9.17647 18.3488 8.10752 19.5345 8.10752ZM15.1536 19.3209C15.1536 16.8812 17.1595 14.8208 19.5345 14.8208C21.9103 14.8208 23.8436 16.8391 23.8436 19.3209H15.1536Z"
                          fill="#51983C"
                          stroke="#51983C"
                          strokeWidth="0.107422"
                        />
                      </g>
                    </g>
                  </svg>
                  <div className="ms-1 ms-md-3">
                    <p className="review-name m-0 p-0">Rayan Rahman</p>
                    <p className="review-intro">Businessman</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="review-card">
                <h6 className="review-text">
                  নামি দামি অনেক পেইজ থেকে ঘি নিয়েও কথায় আর ঘি এর স্বাদের কোনো
                  মিল পাই নি। হেলদি ইটস থেকে ঘি নিয়ে বুঝতেই পারি নি যে এই ঘি
                  এতটা সুঘ্রাণ আর স্বাদে অতুলণীয়। ধন্যবাদ হেলদি ইটসকে এত চমৎকার
                  একটি পণ্য আমাদের দারপ্রান্তে পৌঁছে দেওয়ার জন্য।
                </h6>
                <div className="d-flex mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={43}
                    height={55}
                    viewBox="0 0 43 55"
                    fill="none"
                  >
                    <mask
                      id="mask0_187_1329"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x={0}
                      y={0}
                      width={43}
                      height={55}
                    >
                      <path d="M43 0H0V55H43V0Z" fill="white" />
                    </mask>
                    <g mask="url(#mask0_187_1329)">
                      <mask
                        id="mask1_187_1329"
                        style={{ maskType: "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x={0}
                        y={5}
                        width={37}
                        height={39}
                      >
                        <path
                          d="M36.7735 5.89331H0V43.667H36.7735V5.89331Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask1_187_1329)">
                        <path
                          d="M35.6232 24.5296C34.3937 23.4887 32.4503 23.3995 31.1748 24.8056L28.0082 28.2972C27.5989 26.9457 26.3701 25.9616 24.9215 25.9616H19.2709C18.842 25.9616 18.6985 25.7934 17.9536 25.204C15.1139 22.6611 10.8486 22.6692 8.0175 25.2283L5.9405 27.1066C5.00687 26.5989 3.91667 26.5864 2.97794 27.0682L0.595703 28.2913C0.0634922 28.565 -0.151905 29.2297 0.113768 29.7764L6.57751 43.0554C6.84395 43.6021 7.49103 43.8233 8.02325 43.5504L10.4055 42.3265C11.5797 41.7239 12.2332 40.4933 12.1908 39.2407H24.9215C27.2821 39.2407 29.538 38.0824 30.9543 36.1423L36.126 29.0587C37.1293 27.6857 36.9706 25.6724 35.6232 24.5296ZM9.44157 40.3472L8.02318 41.076L2.52258 29.7764L3.94173 29.0475C4.47395 28.7746 5.12028 28.9952 5.38674 29.5425L9.92357 38.863C10.1893 39.4096 9.97378 40.0734 9.44157 40.3472ZM34.4023 27.7307L29.2307 34.8143C28.2187 36.2005 26.6078 37.0274 24.9215 37.0274H11.4389L7.40197 28.7332L9.4409 26.8897C11.4697 25.0564 14.5293 25.0564 16.5581 26.8897C17.7532 27.9705 18.4965 28.1748 19.2707 28.1748H24.9215C25.5154 28.1748 25.9987 28.6713 25.9987 29.2814C25.9987 29.8914 25.5153 30.388 24.9215 30.388H19.4194C18.8248 30.388 18.3422 30.8838 18.3422 31.4946C18.3422 32.1054 18.8248 32.6011 19.4194 32.6011H25.6433C26.5374 32.6011 27.3993 32.216 28.0082 31.544L32.7512 26.3143C33.185 25.8362 33.85 25.876 34.258 26.2427C34.6845 26.6263 34.7306 27.2821 34.4023 27.7307Z"
                          fill="#51983C"
                          stroke="#51983C"
                          strokeWidth="0.107422"
                        />
                        <path
                          d="M22.6514 13.4456C23.389 12.6511 23.8436 11.577 23.8436 10.3944C23.8436 7.95842 21.9275 5.89429 19.5345 5.89429C17.1595 5.89429 15.1536 7.95472 15.1536 10.3944C15.1536 11.5408 15.591 12.623 16.3853 13.4545C14.4153 14.5891 12.999 16.7668 12.999 19.3209V20.4274C12.999 21.0382 13.4817 21.534 14.0763 21.534H24.921C25.5156 21.534 25.9983 21.0382 25.9983 20.4274V19.3209C25.9982 16.817 24.6575 14.6053 22.6514 13.4456ZM19.5345 8.10752C20.7023 8.10752 21.6891 9.15508 21.6891 10.3945C21.6891 11.6146 20.7224 12.6076 19.5345 12.6076C18.3279 12.6076 17.3082 11.594 17.3082 10.3945C17.3082 9.17647 18.3488 8.10752 19.5345 8.10752ZM15.1536 19.3209C15.1536 16.8812 17.1595 14.8208 19.5345 14.8208C21.9103 14.8208 23.8436 16.8391 23.8436 19.3209H15.1536Z"
                          fill="#51983C"
                          stroke="#51983C"
                          strokeWidth="0.107422"
                        />
                      </g>
                    </g>
                  </svg>
                  <div className="ms-3">
                    <p className="review-name m-0 p-0">Rayan Rahman</p>
                    <p className="review-intro">Businessman</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Scroll Buttons and Pagination */}
          <div className="swiper-button-next" />
          <div className="swiper-button-prev" />
        </div>
      </div>
    </div>
  </section>
  {/* review section end  */}
  {/* blog section start  */}
  <section>
    <div className="blog-section">
      <h2 className="blog-header text-center">BLOGS</h2>
      <div className="blog-container my-3">
        <Link href={'/singleProduct'} className="text-decoration-none">
          <div className="card-box">
            <img
              src="assets/media/home/blog-section/blogcard1.png"
              alt="cardImage"
              className="img-fluid"
              loading="lazy"
              decoding="async"
            />
            <div className="card-text p-3">
              <p className="card-date">04 Sep 2024</p>
              <h3 className="mousumi-achar">বেলোনা ঘি এর বৈশিষ্ট্য</h3>
              <p className="card-texts">
                আপনি কি জানেন যে আপনি যে ঘি গ্রহণ করেন তার গুণমান তার পুষ্টিগুণ
                এবং স্বাস্থ্য উপকারিতাকে ব্যাপকভাবে সংজ্ঞায়িত করে? গুণমান
                নিশ্চিত করতে...
              </p>
              <h4>CONTINUE READING</h4>
            </div>
          </div>
        </Link>
        <Link href={'/singleProduct'} className="text-decoration-none">
          <div className="card-box">
            <img
              src="assets/media/home/blog-section/blogcard2.png"
              alt="cardImage"
              className="img-fluid"
              loading="lazy"
              decoding="async"
            />
            <div className="card-text p-3">
              <p className="card-date">04 Sep 2024</p>
              <h3 className="mousumi-achar">মৌসুমি আচার</h3>
              <p className="card-texts">
                আপনি কি জানেন যে আপনি যে ঘি গ্রহণ করেন তার গুণমান তার পুষ্টিগুণ
                এবং স্বাস্থ্য উপকারিতাকে ব্যাপকভাবে সংজ্ঞায়িত করে? গুণমান
                নিশ্চিত করতে...
              </p>
              <h4>CONTINUE READING</h4>
            </div>
          </div>
        </Link>
        <Link href={'/singleProduct'} className="text-decoration-none">
          <div className="card-box">
            <img
              src="assets/media/home/blog-section/blogcard3.png"
              alt="cardImage"
              className="img-fluid"
              loading="lazy"
              decoding="async"
            />
            <div className="card-text p-3">
              <p className="card-date">29 Dec 2023</p>
              <h3 className="mousumi-achar">
                প্রাকৃতিক মিষ্টান্ন এর কার্যকারিতা
              </h3>
              <p className="card-texts">
                গুড় হলো আখ বা খেজুর গাছ বা খেজুরের ঘন রস থেকে প্রাপ্ত একটি
                প্রাকৃতিক মিষ্টান্ন। একটি ঐতিহ্যগত প্রক্রিয়ার মাধ্যমে...
              </p>
              <h4>CONTINUE READING</h4>
            </div>
          </div>
        </Link>
      </div>
    </div>
  </section>
  {/* blog section start  */}
  {/* service section start  */}
  <section>
    <div className="service-container">
      <div className="row">
        <div className="col-6 col-md-3 service-card mb-4 mb-md-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="service-icon"
            viewBox="0 0 55 55"
            fill="none"
          >
            <g clipPath="url(#clip0_201_4468)">
              <g clipPath="url(#clip1_201_4468)">
                <path
                  d="M53.2795 27.1339C51.4406 25.6183 48.534 25.4884 46.6263 27.5357L41.8903 32.6197C41.278 30.6518 39.4402 29.2189 37.2737 29.2189H28.8223C28.1809 29.2189 27.9662 28.974 26.8522 28.1158C22.605 24.4132 16.2256 24.425 11.9913 28.1512L8.88486 30.886C7.48849 30.1469 5.85793 30.1287 4.45393 30.8301L0.890958 32.6111C0.0949617 33.0096 -0.227196 33.9774 0.170157 34.7734L9.83759 54.1081C10.2361 54.9041 11.2039 55.2263 11.9999 54.8289L15.5629 53.0469C17.3191 52.1694 18.2965 50.3776 18.2331 48.5538H37.2736C40.8043 48.5538 44.1782 46.8673 46.2965 44.0424L54.0315 33.7284C55.5321 31.7292 55.2947 28.7978 53.2795 27.1339ZM14.1212 50.1649L11.9998 51.2261L3.77287 34.7734L5.89542 33.7121C6.69142 33.3147 7.65811 33.6359 8.05664 34.4329L14.8421 48.0038C15.2395 48.7997 14.9172 49.7663 14.1212 50.1649ZM51.4535 31.7948L43.7186 42.1088C42.2051 44.1271 39.7957 45.3312 37.2737 45.3312H17.1085L11.0707 33.2545L14.1202 30.5703C17.1546 27.9009 21.7306 27.9009 24.765 30.5703C26.5524 32.1439 27.6641 32.4414 28.8221 32.4414H37.2736C38.1619 32.4414 38.8848 33.1644 38.8848 34.0527C38.8848 34.9409 38.1618 35.6639 37.2736 35.6639H29.0445C28.1551 35.6639 27.4333 36.3858 27.4333 37.2751C27.4333 38.1645 28.1552 38.8863 29.0445 38.8863H38.3532C39.6904 38.8863 40.9795 38.3256 41.8903 37.3471L48.9841 29.7324C49.6329 29.0363 50.6275 29.0943 51.2377 29.6282C51.8756 30.1867 51.9445 31.1416 51.4535 31.7948Z"
                  fill="#51983C"
                  stroke="#51983C"
                  strokeWidth="0.107422"
                />
                <path
                  d="M33.8789 10.996C34.982 9.83921 35.662 8.27525 35.662 6.55328C35.662 3.00643 32.7962 0.000976562 29.2171 0.000976562C25.6649 0.000976562 22.6648 3.00105 22.6648 6.55328C22.6648 8.22251 23.319 9.79828 24.507 11.0089C21.5606 12.661 19.4424 15.8318 19.4424 19.5506V21.1618C19.4424 22.0511 20.1643 22.773 21.0536 22.773H37.2733C38.1627 22.773 38.8846 22.0511 38.8846 21.1618V19.5506C38.8845 15.9049 36.8792 12.6846 33.8789 10.996ZM29.2171 3.22353C30.9637 3.22353 32.4396 4.74881 32.4396 6.55339C32.4396 8.33004 30.9938 9.77583 29.2171 9.77583C27.4125 9.77583 25.8873 8.29996 25.8873 6.55339C25.8873 4.77996 27.4437 3.22353 29.2171 3.22353ZM22.6648 19.5506C22.6648 15.9983 25.6649 12.9983 29.2171 12.9983C32.7704 12.9983 35.662 15.9371 35.662 19.5506H22.6648Z"
                  fill="#51983C"
                  stroke="#51983C"
                  strokeWidth="0.107422"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_201_4468">
                <rect width={55} height={55} fill="white" />
              </clipPath>
              <clipPath id="clip1_201_4468">
                <rect width={55} height={55} fill="white" />
              </clipPath>
            </defs>
          </svg>
          <div className="service">
            <h6 className="service-first m-0 p-0">Customer Service</h6>
            <p className="service-second m-0 p-0 text-center text-md-start">
              Top notch customer service.
            </p>
          </div>
        </div>
        <div className="col-6 col-md-3 service-card mb-4 mb-md-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="service-icon"
            viewBox="0 0 55 55"
            fill="none"
          >
            <g clipPath="url(#clip0_201_4482)">
              <g clipPath="url(#clip1_201_4482)">
                <path
                  d="M39.0756 29.6406H31.6022C29.5568 29.6406 27.8936 31.3039 27.8936 33.3492V39.0808C27.8936 41.1261 29.5568 42.7894 31.6022 42.7894H39.0756C41.121 42.7894 42.7842 41.1261 42.7842 39.0808V33.3492C42.7842 31.3039 41.121 29.6406 39.0756 29.6406ZM40.0871 39.0808C40.0871 39.6427 39.6263 40.0922 39.0756 40.0922H31.6022C31.0403 40.0922 30.5907 39.6314 30.5907 39.0808V33.3492C30.5907 32.7873 31.0515 32.3378 31.6022 32.3378H39.0756C39.6375 32.3378 40.0871 32.7986 40.0871 33.3492V39.0808Z"
                  fill="#51983C"
                  stroke="#51983C"
                  strokeWidth="0.112383"
                />
                <path
                  d="M55 19.2228C55 18.9868 54.9438 18.762 54.8202 18.5598L46.6387 4.17479C46.4027 3.75898 45.9532 3.48926 45.47 3.48926H9.5188C9.03555 3.48926 8.58602 3.74774 8.35002 4.17479L0.179812 18.5598C0.0674295 18.762 0 18.9868 0 19.2228C0 22.4482 1.94422 25.2128 4.72007 26.4378V50.1617C4.72007 50.9034 5.32693 51.5103 6.06866 51.5103H13.5196C13.5309 51.5103 13.5421 51.5103 13.5533 51.5103H24.0049C24.0161 51.5103 24.0274 51.5103 24.0386 51.5103H48.9201C49.6618 51.5103 50.2687 50.9034 50.2687 50.1617V26.6063C50.2687 26.5501 50.2687 26.5052 50.2575 26.4602C53.0445 25.2353 55 22.4594 55 19.2228ZM10.3055 6.19768H44.6833L51.0779 17.4472H3.92215L10.3055 6.19768ZM39.1428 20.1331C38.7158 22.5606 36.5917 24.4036 34.0407 24.4036C31.4896 24.4036 29.3655 22.5606 28.9385 20.1331H39.1428ZM26.0727 20.1331C25.6457 22.5606 23.5217 24.4036 20.9706 24.4036C18.4195 24.4036 16.2955 22.5606 15.8572 20.1331H26.0727ZM2.78709 20.1331H13.0027C12.5756 22.5606 10.4403 24.4036 7.88925 24.4036C5.33817 24.4149 3.21414 22.5606 2.78709 20.1331ZM22.6563 48.8131H14.9019V34.2596C14.9019 33.2032 15.756 32.3378 16.8237 32.3378H20.7458C21.8022 32.3378 22.6676 33.192 22.6676 34.2596V48.8131H22.6563ZM47.5715 48.8131H25.3535V34.2596C25.3535 31.7197 23.2857 29.6407 20.7346 29.6407H16.8124C14.2726 29.6407 12.1935 31.7085 12.1935 34.2596V48.8244H7.41725V27.1008C7.57458 27.1121 7.73192 27.1121 7.88925 27.1121C10.6089 27.1121 13.0139 25.7298 14.4299 23.6282C15.8459 25.7298 18.2509 27.1121 20.9706 27.1121C23.6902 27.1121 26.084 25.7298 27.5112 23.6282C28.9273 25.7298 31.3322 27.1121 34.0407 27.1121C36.7603 27.1121 39.1541 25.7298 40.5701 23.6282C41.9861 25.7298 44.3911 27.1121 47.1107 27.1121C47.2681 27.1121 47.4142 27.1008 47.5715 27.1008V48.8131ZM47.1107 24.4149C44.5597 24.4149 42.4356 22.5718 42.0086 20.1443H52.2242C51.7859 22.5606 49.6618 24.4149 47.1107 24.4149Z"
                  fill="#51983C"
                  stroke="#51983C"
                  strokeWidth="0.112383"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_201_4482">
                <rect width={55} height={55} fill="white" />
              </clipPath>
              <clipPath id="clip1_201_4482">
                <rect width={55} height={55} fill="white" />
              </clipPath>
            </defs>
          </svg>
          <div className="service">
            <h6 className="service-first m-0 p-0">Pickop At Any Store</h6>
            <p className="service-second m-0 p-0 text-center text-md-start">
              Order anywhere
            </p>
          </div>
        </div>
        <div className="col-6 col-md-3 service-card">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="service-icon"
            viewBox="0 0 55 55"
            fill="none"
          >
            <rect width={55} height={55} fill="#F5F5F5" />
            <rect x={-968} y={-368} width={1920} height={427} fill="#E3F1DF" />
            <g clipPath="url(#clip0_0_1)">
              <g clipPath="url(#clip1_0_1)">
                <path
                  d="M53.2812 34.375C52.3325 34.375 51.5625 35.145 51.5625 36.0938V48.125H3.4375V27.5H22.3438C23.2925 27.5 24.0625 26.73 24.0625 25.7812C24.0625 24.8325 23.2925 24.0625 22.3438 24.0625H3.4375V17.1875H22.3438C23.2925 17.1875 24.0625 16.4175 24.0625 15.4688C24.0625 14.52 23.2925 13.75 22.3438 13.75H3.4375C1.54 13.75 0 15.29 0 17.1875V48.125C0 50.0225 1.54 51.5625 3.4375 51.5625H51.5625C53.46 51.5625 55 50.0225 55 48.125V36.0938C55 35.145 54.23 34.375 53.2812 34.375Z"
                  fill="#51983C"
                  stroke="#51983C"
                  strokeWidth="0.107422"
                />
                <path
                  d="M15.4688 34.375H8.59375C7.645 34.375 6.875 35.145 6.875 36.0938C6.875 37.0425 7.645 37.8125 8.59375 37.8125H15.4688C16.4175 37.8125 17.1875 37.0425 17.1875 36.0938C17.1875 35.145 16.4175 34.375 15.4688 34.375Z"
                  fill="#51983C"
                  stroke="#51983C"
                  strokeWidth="0.107422"
                />
                <path
                  d="M53.9584 8.73039L41.9272 3.57414C41.4906 3.39195 41.0059 3.39195 40.5694 3.57414L28.5381 8.73039C27.9091 9.00195 27.5 9.62414 27.5 10.3116V17.1866C27.5 26.6432 30.9959 32.1707 40.3941 37.5848C40.6588 37.736 40.9544 37.8116 41.25 37.8116C41.5456 37.8116 41.8412 37.736 42.1059 37.5848C51.5041 32.1845 55 26.657 55 17.1866V10.3116C55 9.62414 54.5909 9.00195 53.9584 8.73039ZM51.5625 17.1866C51.5625 25.1238 48.9363 29.4929 41.25 34.0991C33.5637 29.4826 30.9375 25.1135 30.9375 17.1866V11.446L41.25 7.02539L51.5625 11.446V17.1866Z"
                  fill="#51983C"
                  stroke="#51983C"
                  strokeWidth="0.107422"
                />
                <path
                  d="M47.482 14.1245C46.7429 13.5401 45.6635 13.6535 45.0654 14.3926L39.6617 21.1507L37.5235 17.9538C36.9907 17.1632 35.9217 16.9535 35.1413 17.476C34.3542 18.002 34.1376 19.071 34.6635 19.8582L38.101 25.0145C38.407 25.4717 38.9088 25.7535 39.4588 25.781C39.4829 25.781 39.5104 25.781 39.531 25.781C40.0501 25.781 40.5451 25.5473 40.8751 25.1348L47.7501 16.541C48.3413 15.7985 48.2245 14.7192 47.482 14.1245Z"
                  fill="#51983C"
                  stroke="#51983C"
                  strokeWidth="0.107422"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_0_1">
                <rect width={55} height={55} fill="white" />
              </clipPath>
              <clipPath id="clip1_0_1">
                <rect width={55} height={55} fill="white" />
              </clipPath>
            </defs>
          </svg>
          <div className="service">
            <h6 className="service-first m-0 p-0">Secured Payment</h6>
            <p className="service-second m-0 p-0 text-center text-md-start">
              All major credit cards.
            </p>
          </div>
        </div>
        <div className="col-6 col-md-3 service-card">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="service-icon"
            viewBox="0 0 55 55"
            fill="none"
          >
            <rect width={55} height={55} fill="#F5F5F5" />
            <rect x={-1316} y={-368} width={1920} height={427} fill="#E3F1DF" />
            <g clipPath="url(#clip0_0_1)">
              <g clipPath="url(#clip1_0_1)">
                <path
                  d="M27.5004 8.70117C24.2085 8.70117 21.5301 11.3794 21.5301 14.6714V17.6371H16.1017L14.7715 42.0833H40.2291L38.899 17.6371H33.4705V14.6714C33.4707 11.3794 30.7925 8.70117 27.5004 8.70117ZM36.8266 38.8607H18.1744L19.1539 20.8598H35.8471L36.8266 38.8607ZM27.5004 11.9238C29.0155 11.9238 30.248 13.1564 30.248 14.6714V17.6371H24.7528V14.6714C24.7529 13.1564 25.9855 11.9238 27.5004 11.9238Z"
                  fill="#51983C"
                  stroke="#51983C"
                  strokeWidth="0.107422"
                />
                <path
                  d="M50.7345 12.791L54.4264 13.4384L54.9828 10.2642L45.7098 8.63844L44.0841 17.9115L47.2583 18.4681L47.9646 14.4396C50.437 18.3188 51.7773 22.8665 51.7773 27.5C51.7773 33.9847 49.2521 40.0812 44.6667 44.6667C40.0814 49.2521 33.9848 51.7773 27.5 51.7773C21.0152 51.7773 14.9187 49.2521 10.3333 44.6667C5.74793 40.0814 3.22266 33.9847 3.22266 27.5C3.22266 21.0153 5.74793 14.9187 10.3333 10.3333C14.9187 5.74804 21.0153 3.22266 27.5 3.22266C32.182 3.22266 36.7261 4.55759 40.6413 7.08318L42.3882 4.37508C37.9513 1.51293 32.803 0 27.5 0C20.1545 0 13.2487 2.86043 8.0546 8.05449C2.86054 13.2487 0 20.1545 0 27.5C0 34.8455 2.86054 41.7514 8.0546 46.9455C13.2487 52.1396 20.1545 55 27.5 55C34.8455 55 41.7513 52.1395 46.9455 46.9455C52.1396 41.7514 55 34.8455 55 27.5C55 22.2857 53.5009 17.167 50.7345 12.791Z"
                  fill="#51983C"
                  stroke="#51983C"
                  strokeWidth="0.107422"
                />
                <path
                  d="M22.5225 28.249H32.4768V31.4717H22.5225V28.249Z"
                  fill="#51983C"
                  stroke="#51983C"
                  strokeWidth="0.107422"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_0_1">
                <rect width={55} height={55} fill="white" />
              </clipPath>
              <clipPath id="clip1_0_1">
                <rect width={55} height={55} fill="white" />
              </clipPath>
            </defs>
          </svg>
          <div className="service">
            <h6 className="service-first m-0 p-0">Free Return</h6>
            <p className="service-second m-0 p-0 text-center text-md-start">
              7 days return Policy
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      className="service-banner"
      style={{
        backgroundImage:
          'url("assets/media/home/banner-section/Home-bottom-banner.jpg")'
      }}
    ></div>
  </section>
  {/* service section end  */}
</main>

    </>
  )
}
