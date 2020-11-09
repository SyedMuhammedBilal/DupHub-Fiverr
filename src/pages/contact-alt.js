import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


export default function ContactAlt() {
  return (
    <section>
  {/* Content */}
  <div className="container d-flex flex-column">
    <div className="row align-items-center justify-content-between gx-0 min-vh-100">
      <div className="col-12 col-md-5 align-self-stretch">
        {/* Image (mobile) */}
        <img
          src="assets/img/photos/photo-5.jpg"
          className="d-md-none img-cover"
          alt="..."
        />
        {/* Image */}
        <div
          className="d-none d-md-block vw-50 h-100 float-right bg-cover"
          style={{ backgroundImage: "url(assets/img/covers/cover-10.jpg)" }}
        />
      </div>
      <div className="col-12 col-md-6 py-8 py-md-11">
        {/* Heading */}
        <h2 className="font-weight-bold text-center mb-2">
          Contact us for anything.
        </h2>
        {/* Text */}
        <p className="font-size-lg text-center text-muted mb-0">
          Our goal is to be as helpful as possible.
        </p>
        {/* Divider */}
        <hr className="hr-sm my-6 my-md-8 mx-auto bg-gray-300" />
        {/* Form */}
        <form>
          <div className="form-group mb-5">
            {/* Label */}
            <label className="form-label" htmlFor="contactName">
              Full name
            </label>
            {/* Input */}
            <input
              className="form-control"
              id="contactName"
              type="text"
              placeholder="Full name"
            />
          </div>
          <div className="form-group mb-5">
            {/* Label */}
            <label className="form-label" htmlFor="contactEmail">
              Email
            </label>
            {/* Input */}
            <input
              className="form-control"
              id="contactEmail"
              type="email"
              placeholder="hello@domain.com"
            />
          </div>
          <div className="form-group mb-5 d-none">
            {/* Label */}
            <label htmlFor="contactMessage">What can we help you with?</label>
            {/* Input */}
            <textarea
              className="form-control"
              id="contactMessage"
              rows={5}
              placeholder="Tell us what we can help you with!"
              defaultValue={""}
            />
          </div>
          <div className="form-group mb-0">
            {/* Submit */}
            <a href="#!" className="btn btn-block btn-primary lift">
              Send message
            </a>
          </div>
        </form>
      </div>
    </div>{" "}
    {/* / .row */}
  </div>
</section>

  )
}
