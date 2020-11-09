import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


export default function SigninCover() {
  return (
    <section>
  <div className="container d-flex flex-column">
    <div className="row align-items-center justify-content-center gx-0 min-vh-100">
      <div className="col-12 col-md-6 col-lg-4 py-8 py-md-11">
        {/* Heading */}
        <h1 className="mb-0 font-weight-bold">Sign in</h1>
        {/* Text */}
        <p className="mb-6 text-muted">Simplify your workflow in minutes.</p>
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
            Sign in
          </button>
        </form>
        {/* Text */}
        <p className="mb-0 font-size-sm text-muted">
          Don't have an account yet? <a href="signup-cover.html">Sign up</a>.
        </p>
      </div>
      <div className="col-lg-7 offset-lg-1 align-self-stretch d-none d-lg-block">
        {/* Image */}
        <div
          className="h-100 w-cover bg-cover"
          style={{ backgroundImage: "url(assets/img/covers/cover-14.jpg)" }}
        />
        {/* Shape */}
        <div className="shape shape-left shape-fluid-y svg-shim text-white">
          {"{"}
          {"{"}&gt; angles/angle-left{"}"}
          {"}"}
        </div>
      </div>
    </div>{" "}
    {/* / .row */}
  </div>{" "}
  {/* / .container */}
</section>

  )
}
