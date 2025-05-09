import React from 'react'
import './offers.css'
export default function Page() {
  return (
    <div>
      <main>
  {/* whole section start  */}
  <section>
    <div
      className="banner-container"
      style={{ backgroundImage: "url(assets/media/offer/image.png)" }}
    >
      <div className="banner-content text-center">
        <img
          src="assets/media/offer/joint-our-facebook.png"
          alt="OfferImage"
          className="Join-img img-fluid"
          loading="lazy"
          decoding="async"
        />
        <h2 className="join-header">
          JOIN OUR{" "}
          <span className="highlight">
            COMMUNITY
            <div className="border-animation">
              <svg viewBox="0 0 400 150" preserveAspectRatio="none">
                <ellipse className="oval" cx={200} cy={75} rx={190} ry={60} />
              </svg>
            </div>
          </span>
        </h2>
        <a href="https://www.facebook.com/" className="text-decoration-none">
          <img
            src="assets/media/offer/healthyeatsfacebook.png"
            alt="OfferImage"
            className="Facebook-img img-fluid"
            loading="lazy"
            decoding="async"
          />
        </a>
      </div>
    </div>
  </section>
  {/* whole section end */}
</main>

    </div>
  )
}
