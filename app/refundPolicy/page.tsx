import React from 'react'
import './refundPolicy.css'

export default function page() {
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
        <h1 className="banner-header">Refund policy</h1>
        <div className="d-flex gap-2 justify-content-center">
          <p className="banner-home">
            <a className="raf-tag" href="#">
              Home
            </a>
          </p>
          <span>/</span>
          <p className="banner-store">
            <a className="raf-tag" href="#">
            Refund Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* hero section end  */}
  {/* text sectin start  */}
  <section>
    <div className="text-container p-3 my-5">
      <div className="text-content">
        <h6 className="normal-text">Thank you for shopping at Healthy Eats!</h6>
        <p className="normal-text">
        We offer a refund and/or exchange within the first 5 days of your purchase, if 5 days have passed since your purchase, you will not be offered a refund and/or exchange of any kind.
        </p>
        <p className="normal-text">
        Eligibility for Return and Refunds
        </p>
        <ul className="bold-text">
          <li className='normal-text'>Your item must be unworn or unused and in the same condition that you received it.
          </li>
          <li className='normal-text'>The item must be in the original packaging.
          </li>
          <li className='normal-text'>To complete your return, we require a receipt or proof of purchase.
          </li>
          <li className='normal-text'>Only regular priced items may eligible to refunded/exchange. On sale/ discounted/ Customized (color, size and other) than the regular items cannot be refunded.
          </li>
        </ul>
        <p className="normal-text">
        Return/ Exchanges Charge:
        </p>
        <ul>
            <li className='normal-text'>15% of item invoiced – return fee applicable, if the request is eligible
            </li>
            <li className='normal-text'>10% of item invoiced – exchange fee applicable, if the request is eligible
            </li>
        </ul>
        <p className="normal-text">
        Damages and issues
        </p>
        <p className="normal-text">
        Please inspect your order upon reception and contact us immediately if the item is defective, damaged or if you receive the wrong item so that we can evaluate the issue and make it right. After the delivery person leaves – a damage report may not be except (As per the rule of the delivery company)
        </p>
        <p className="normal-text">
        To start a return or exchange, you can contact us at ujjwalaltd@gmail.com. If your return is accepted, we’ll send you a return shipping label, as well as for instructions on how and where to send your package. Items sent back to us without first requesting a return will not be accepted.
        </p>
        <p className="normal-text">
        The fastest way to ensure you get what you want is to return the item you have, and once the return is accepted, make a separate purchase for the new item.
        </p>
        <p className="bold-text">You can always contact us for any return questions at ujjwalaltd@gmail.com.
        </p>
        <p className="normal-text">
        Exceptions / non-returnable items
        </p>
        <p className="normal-text">
        Certain types of items cannot be returned, on sale/ discounted/ Customized in terms of colour, size and other than the regular items cannot be refunded. Please get in touch if you have questions or concerns about your specific item.
        </p>
        <p className="normal-text">
          mobile device unique ID, the IP address of Your mobile device, Your
          mobile operating system, the type of mobile Internet browser You use,
          unique device identifiers and other diagnostic
        </p>
        <p className="normal-text">
        Refunds
        </p>
        <p className="normal-text">
        We will notify you once we’ve received and inspected your return, and let you know if the refund was approved or not. If approved, you’ll be automatically refunded on your advised payment method. Please remember it can take up to 10 days for the refund of the agreed amount.
        </p>
      </div>
    </div>
  </section>
  {/* text sectin end  */}
</main>

  )
}
