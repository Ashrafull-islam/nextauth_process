
import FooterLogo from '@/public/assets/media/logo.png'
import Image from 'next/image'
import './footer.css'
import Link from 'next/link'
export default function Footer() {
  return (
    <>
      <footer>
        <section>
          <div
            className="footer-container"
            style={{
              backgroundImage: `url(${encodeURI('assets/media/Footer-Image-scaled-1.jpg')})`,
            }}
          >
            <div className="container-fluid">
              <div className="row footer-content align-content-center justify-content-center">
                {/* Logo & About Section */}
                <div className="col-12 col-md-3 text-center text-md-start text-center">
                  <Image src={FooterLogo} className="img-fluid d-block mx-auto" alt="FooterLogo" loading="lazy" decoding="async" width={150}  // Set a width
                    height={50} />
                  <p className="footer-text mt-3 text-center">Healthy Eats collects pure and fresh groceries
                    directly from core
                    farmers and serve you to your doorstep.</p>
                </div>
                {/* Links Section */}
                <div className="col-12 col-md-6 px-0 py-2 my-3 my-md-0">
                  <hr className="d-block d-md-none" />
                  <div className="d-flex align-items-center justify-content-around links-content">
                    <div>
                      <div className="d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={27} viewBox="0 0 37 33" fill="none">
                          <path d="M13.876 8.17017L23.126 16.3393L13.876 24.5084" stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <Link href={'/contacts'} className="my-2 footer-text text-decoration-none">Contact Us</Link>
                      </div>
                      <div className="d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={27} viewBox="0 0 37 33" fill="none">
                          <path d="M13.875 8.22168L23.125 16.3908L13.875 24.5599" stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <Link href={'/privacy'} className="my-2 footer-text text-decoration-none">Privacy Policy</Link>
                      </div>
                      <div className="d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={27} viewBox="0 0 37 33" fill="none">
                          <path d="M13.876 8.17017L23.126 16.3393L13.876 24.5084" stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <Link href={'/termsService'} className="my-2 footer-text text-decoration-none">Terms of Services</Link>
                      </div>
                      <div className="d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={27} viewBox="0 0 37 33" fill="none">
                          <path d="M13.876 8.17017L23.126 16.3393L13.876 24.5084" stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <Link href={'/refundPolicy'} className="my-2 footer-text text-decoration-none">Refund Policy</Link>
                      </div>
                    </div>
                    <div>
                      <div className="d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={27} viewBox="0 0 37 33" fill="none">
                          <path d="M13.876 8.17017L23.126 16.3393L13.876 24.5084" stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <Link href={'/contacts'} className="my-2 footer-text text-decoration-none">Contact Us</Link>
                      </div>
                      <div className="d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={27} viewBox="0 0 37 33" fill="none">
                          <path d="M13.875 8.22168L23.125 16.3908L13.875 24.5599" stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <Link href={'/privacy'} className="my-2 footer-text text-decoration-none">Privacy Policy</Link>
                      </div>
                      <div className="d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={27} viewBox="0 0 37 33" fill="none">
                          <path d="M13.876 8.17017L23.126 16.3393L13.876 24.5084" stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <Link href={'/termsService'} className="my-2 footer-text text-decoration-none">Terms of Services</Link>
                      </div>
                      <div className="d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={27} viewBox="0 0 37 33" fill="none">
                          <path d="M13.876 8.17017L23.126 16.3393L13.876 24.5084" stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <Link href={'/refundPolicy'} className="my-2 footer-text text-decoration-none">Refund Policy</Link>
                      </div>
                    </div>
                  </div>
                  <hr className="d-block d-md-none" />
                </div>
                {/* Contact & Address Section */}
                <div className="col-12 col-md-3 text-md-start d-flex">
                  <div className="footer-contact ">
                    <p className="my-2 fw-bolder bold-text">Contact </p>
                    <p className="m-0 p-0 footer-text">moazzem@healthyeatsbd.com </p>
                    <p className="m-0 p-0 footer-text">+8801581 044 495</p>
                    <p className="m-0 p-0 footer-text">Timing: 10am to 7pm (Sunday to Saturday)</p>
                    <p className="my-4 p-0 bold-text">Address</p>
                    <p className="my-4 p-0 footer-text">Tejgaon,Dhaka- 1215, Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>
            <hr className="text-white" />
            <div className="p-2">
              <p className="footer-copyright text-center footer-text">© Copyright Healthy Eats BD - 2024 | All rights
                reserved.</p>
            </div>
          </div>
        </section>
      </footer>
    </>
  )
}
