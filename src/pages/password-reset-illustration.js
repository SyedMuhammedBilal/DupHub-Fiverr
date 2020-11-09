import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


export default function PasswordIllustration() {
  return (
    <section className="section-border border-primary">
  <div className="container d-flex flex-column">
    <div className="row align-items-center justify-content-center gx-0 min-vh-100">
      <div className="col-8 col-md-6 col-lg-7 offset-md-1 order-md-2 mt-auto mt-md-0 pt-8 pb-4 py-md-11">
        {/* Image */}
        <img
          src="assets/img/illustrations/illustration-4.png"
          alt="..."
          className="img-fluid"
        />
      </div>
      <div className="col-12 col-md-5 col-lg-4 order-md-1 mb-auto mb-md-0 pb-8 py-md-11">
        {/* Heading */}
        <h1 className="mb-0 font-weight-bold text-center">Password reset</h1>
        {/* Text */}
        <p className="mb-6 text-center text-muted">
          Enter your email to reset your password.
        </p>
        {/* Form */}
        <form className="mb-6">
          {/* Email */}
          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="name@address.com"
            />
          </div>
          {/* Submit */}
          <button className="btn btn-block btn-primary" type="submit">
            Reset Password
          </button>
        </form>
        {/* Text */}
        <p className="mb-0 font-size-sm text-center text-muted">
          Remember your password? <a href="signin-illustration.html">Log in</a>.
        </p>
      </div>
    </div>{" "}
    {/* / .row */}
  </div>{" "}
  {/* / .container */}
</section>

  )
}
