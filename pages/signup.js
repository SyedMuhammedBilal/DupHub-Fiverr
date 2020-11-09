import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


export default function SignUp() {
  return (
    <section className="section-border border-primary">
  <div className="container d-flex flex-column">
    <div className="row align-items-center justify-content-center gx-0 min-vh-100">
      <div className="col-12 col-md-5 col-lg-4 py-8 py-md-11">
        {/* Heading */}
        <h1 className="mb-0 font-weight-bold text-center">Sign up</h1>
        {/* Text */}
        <p className="mb-6 text-center text-muted">
          Simplify your workflow in minutes.
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
          {/* Password */}
          <div className="form-group mb-5">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          {/* Submit */}
          <button className="btn btn-block btn-primary" type="submit">
            Sign up
          </button>
        </form>
        {/* Text */}
        <p className="mb-0 font-size-sm text-center text-muted">
          Already have an account? <a href="signin.html">Log in</a>.
        </p>
      </div>
    </div>{" "}
    {/* / .row */}
  </div>{" "}
  {/* / .container */}
</section>

  )
}
