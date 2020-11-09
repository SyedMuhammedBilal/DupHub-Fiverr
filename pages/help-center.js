import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


export default function HelpCenter() {
  return (
    <div>
  <section
    data-jarallax
    data-speed=".8"
    className="pt-10 pb-11 py-md-14 overlay overlay-black overlay-60 jarallax"
    style={{ backgroundImage: "url(assets/img/covers/cover-4.jpg)" }}
  >
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 text-center">
          {/* Heading */}
          <h1 className="display-2 font-weight-bold text-white">
            What Do You Need?
          </h1>
          {/* Text */}
          <p className="lead text-white-75 mb-0">
            We're here to help you better use Landkit. First, let's figure out
            if we have a solution in our documentation.
          </p>
        </div>
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </section>
  {/* SHAPE */}
  <div className="position-relative">
    <div className="shape shape-bottom shape-fluid-x svg-shim text-light">
      {"{"}
      {"{"}&gt; curves/curve-1{"}"}
      {"}"}
    </div>
  </div>
  {/* CATEGORIES */}
  <section>
    <div className="container">
      <div className="row">
        <div className="col-12">
          {/* Form */}
          <form className="rounded shadow mt-n6 mb-4">
            <div className="input-group input-group-lg">
              {/* Text */}
              <span className="input-group-text border-0 pr-1">
                <i className="fe fe-search" />
              </span>
              {/* Input */}
              <input
                className="form-control border-0 px-1"
                type="text"
                aria-label="Search for your issue..."
                placeholder="Search for your issue..."
              />
              {/* Text */}
              <span className="input-group-text border-0 py-0 pl-1 pr-3">
                <button className="btn btn-sm btn-primary" type="submit">
                  Search
                </button>
              </span>
            </div>
          </form>
          {/* Text */}
          <div className="row align-items-center mb-6 mb-md-8">
            <div className="col-auto">
              {/* Heading */}
              <h6 className="font-weight-bold text-uppercase text-muted mb-0">
                Common searches:
              </h6>
            </div>
            <div className="col ml-n5">
              {/* Text */}
              <p className="font-size-sm text-muted mb-0">
                Redownload my theme, Request an invoice, Update my .zip
              </p>
            </div>
          </div>{" "}
          {/* / .row */}
        </div>
      </div>{" "}
      {/* / .row */}
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4">
          {/* Card */}
          <div className="card card-border border-primary shadow-lg mb-6 mb-md-8 lift lift-lg">
            <div className="card-body text-center">
              {/* Icon */}
              <div className="icon-circle bg-primary text-white mb-5">
                <i className="fe fe-users" />
              </div>
              {/* Heading */}
              <h4 className="font-weight-bold">Account</h4>
              {/* Text */}
              <p className="text-gray-700 mb-5">
                Issues related to logging in, out, or about multiple devices.
              </p>
              {/* Badge */}
              <span className="badge rounded-pill bg-dark-soft">
                <span className="h6 text-uppercase">21 entries</span>
              </span>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          {/* Card */}
          <div className="card card-border border-success shadow-lg mb-6 mb-md-8 lift lift-lg">
            <div className="card-body text-center">
              {/* Icon */}
              <div className="icon-circle bg-success text-white mb-5">
                <i className="fe fe-clock" />
              </div>
              {/* Heading */}
              <h4 className="font-weight-bold">Integrations</h4>
              {/* Text */}
              <p className="text-gray-700 mb-5">
                Connecting with 3rd party apps to exchange data.
              </p>
              {/* Badge */}
              <span className="badge rounded-pill bg-dark-soft">
                <span className="h6 text-uppercase">9 entries</span>
              </span>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          {/* Card */}
          <div className="card card-border border-warning shadow-lg mb-6 mb-md-8 lift lift-lg">
            <div className="card-body text-center">
              {/* Icon */}
              <div className="icon-circle bg-warning text-white mb-5">
                <i className="fe fe-users" />
              </div>
              {/* Heading */}
              <h4 className="font-weight-bold">Billing</h4>
              {/* Text */}
              <p className="text-gray-700 mb-5">
                Issues with payments or invoicing.
              </p>
              {/* Badge */}
              <span className="badge rounded-pill bg-dark-soft">
                <span className="h6 text-uppercase">14 entries</span>
              </span>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          {/* Card */}
          <div className="card card-border border-dark shadow-lg mb-6 mb-md-8 mb-lg-0 lift lift-lg">
            <div className="card-body text-center">
              {/* Icon */}
              <div className="icon-circle bg-dark text-white mb-5">
                <i className="fe fe-users" />
              </div>
              {/* Heading */}
              <h4 className="font-weight-bold">Organizations</h4>
              {/* Text */}
              <p className="text-gray-700 mb-5">
                Setting up and managing collections of users.
              </p>
              {/* Badge */}
              <span className="badge rounded-pill bg-dark-soft">
                <span className="h6 text-uppercase">17 entries</span>
              </span>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          {/* Card */}
          <div className="card card-border border-primary-desat shadow-lg mb-6 mb-md-0 lift lift-lg">
            <div className="card-body text-center">
              {/* Icon */}
              <div className="icon-circle bg-primary-desat text-white mb-5">
                <i className="fe fe-users" />
              </div>
              {/* Heading */}
              <h4 className="font-weight-bold">Performance</h4>
              {/* Text */}
              <p className="text-gray-700 mb-5">
                Improving your system's speed and reliability.
              </p>
              {/* Badge */}
              <span className="badge rounded-pill bg-dark-soft">
                <span className="h6 text-uppercase">7 entries</span>
              </span>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          {/* Card */}
          <div className="card card-border border-danger shadow-lg lift lift-lg">
            <div className="card-body text-center">
              {/* Icon */}
              <div className="icon-circle bg-danger text-white mb-5">
                <i className="fe fe-users" />
              </div>
              {/* Heading */}
              <h4 className="font-weight-bold">Customizing</h4>
              {/* Text */}
              <p className="text-gray-700 mb-5">
                Building custom modules on top of our platform.
              </p>
              {/* Badge */}
              <span className="badge rounded-pill bg-dark-soft">
                <span className="h6 text-uppercase">14 entries</span>
              </span>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* / .row */}
    </div>
  </section>
  {/* FORM */}
  <section className="pt-8 pt-md-11 pb-8 pb-md-14">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 text-center">
          {/* Heading */}
          <h2 className="font-weight-bold">Can't find the answer you need?</h2>
          {/* Text */}
          <p className="font-size-lg text-muted mb-7 mb-md-9">
            Contact us and we'll get back to you as soon as possible with a
            solution to whatever issues you're having with Landkit.
          </p>
        </div>
      </div>{" "}
      {/* / .row */}
      <div className="row mb-7 mb-md-9">
        <div className="col-12 col-md-4 text-center">
          {/* Heading */}
          <h6 className="text-uppercase text-gray-700 mb-1">Message us</h6>
          {/* Link */}
          <div className="mb-5 mb-md-0">
            <a href="#!" className="h4 text-primary">
              Start a chat!
            </a>
          </div>
        </div>
        <div className="col-12 col-md-4 text-center border-left-md border-gray-300">
          {/* Heading */}
          <h6 className="text-uppercase text-gray-700 mb-1">Call anytime</h6>
          {/* Link */}
          <div className="mb-5 mb-md-0">
            <a href="#!" className="h4">
              (555) 123-4567
            </a>
          </div>
        </div>
        <div className="col-12 col-md-4 text-center border-left-md border-gray-300">
          {/* Heading */}
          <h6 className="text-uppercase text-gray-700 mb-1">Email us</h6>
          {/* Link */}
          <a href="#!" className="h4">
            support@goodthemes.co
          </a>
        </div>
      </div>{" "}
      {/* / .row */}
      <div className="row justify-content-center">
        <div className="col-12">
          {/* Form */}
          <form>
            <div className="row">
              <div className="col-12 col-md-6">
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
              </div>
              <div className="col-12 col-md-6">
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
              </div>
            </div>{" "}
            {/* / .row */}
            <div className="row">
              <div className="col-12">
                <div className="form-group mb-7 mb-md-9">
                  {/* Label */}
                  <label className="form-label" htmlFor="contactMessage">
                    What can we help you with?
                  </label>
                  {/* Input */}
                  <textarea
                    className="form-control"
                    id="contactMessage"
                    rows={5}
                    placeholder="Tell us what we can help you with!"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>{" "}
            {/* / .row */}
            <div className="row justify-content-center">
              <div className="col-auto">
                {/* Submit */}
                <button type="submit" className="btn btn-primary lift">
                  Submit request
                </button>
              </div>
            </div>{" "}
            {/* / .row */}
          </form>
        </div>
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </section>
  {/* SHAPE */}
  <div className="position-relative">
    <div className="shape shape-bottom shape-fluid-x svg-shim text-dark">
      {"{"}
      {"{"}&gt; curves/curve-1{"}"}
      {"}"}
    </div>
  </div>
</div>

  )
}
