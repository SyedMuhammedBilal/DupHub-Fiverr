import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


export default function PortfolioImageGrid() {
  return (
    <div>
  <section className="pt-8 pt-md-12 pb-10 pb-md-14">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 text-center">
          {/* Headin */}
          <h1 className="display-2 font-weight-bold">Landkit Redesign</h1>
          {/* Text */}
          <p className="lead text-secondary mb-0">
            We design &amp; build products, tools, apps, and sites for companies
            trying to do great things for our planet.
          </p>
        </div>
      </div>
      {/* / .row */}
    </div>
    {/* / .container */}
  </section>
  {/* WELCOME */}
  <section
    data-jarallax
    data-speed=".8"
    className="d-none pt-8 pt-md-12 pb-10 pb-md-14 overlay overlay-black overlay-60 bg-cover jarallax"
    style={{ backgroundImage: "url(assets/img/covers/cover-13.jpg)" }}
  >
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-7 text-center">
          {/* Headin */}
          <h1 className="display-2 font-weight-bold text-white">
            Landkit Redesign
          </h1>
          {/* Text */}
          <p className="lead text-white075 mb-0">
            We design &amp; build products, apps, and sites for companies doing
            good things for the planet.
          </p>
        </div>
      </div>
      {/* / .row */}
    </div>
    {/* / .container */}
  </section>
  {/* WELCOME */}
  <section
    data-jarallax
    data-speed=".8"
    className="d-none pt-8 pt-md-12 pb-10 pb-md-14 bg-primary"
  >
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-7 text-center">
          {/* Headin */}
          <h1 className="display-2 font-weight-bold text-white">
            Landkit Redesign
          </h1>
          {/* Text */}
          <p className="lead text-white075 mb-0">
            We design &amp; build products, apps, and sites for companies doing
            good things for the planet.
          </p>
        </div>
      </div>
      {/* / .row */}
    </div>
    {/* / .container */}
  </section>
  {/* SHAPE */}
  <div className="d-none position-relative">
    <div className="shape shape-bottom shape-fluid-x svg-shim text-light">
      {"{"}
      {"{"}&gt; curves/curve-1{"}"}
      {"}"}
    </div>
  </div>
  {/* CONTENT */}
  <section className="py-8 py-md-11 mt-n10 mt-md-n14">
    <div className="container">
      <div className="row" data-isotope='{"layoutMode": "fitRows"}'>
        <div className="col-12">
          {/* Image */}
          <img
            className="img-fluid mb-7 rounded shadow-light-lg"
            src="assets/img/portfolio/portfolio-16.jpg"
            alt="..."
          />
        </div>
        <div className="col-12 col-md-5">
          {/* Image */}
          <img
            className="img-fluid mb-7 rounded shadow-light-lg"
            src="assets/img/portfolio/portfolio-17.jpg"
            alt="..."
          />
        </div>
        <div className="col-12 col-md-7">
          {/* Image */}
          <img
            className="img-fluid mb-7 rounded shadow-light-lg"
            src="assets/img/portfolio/portfolio-18.jpg"
            alt="..."
          />
        </div>
        <div className="col-12 col-md-7">
          {/* Image */}
          <img
            className="img-fluid mb-7 rounded shadow-light-lg"
            src="assets/img/portfolio/portfolio-19.jpg"
            alt="..."
          />
        </div>
        <div className="col-12 col-md-5">
          {/* Image */}
          <img
            className="img-fluid mb-7 rounded shadow-light-lg"
            src="assets/img/portfolio/portfolio-20.jpg"
            alt="..."
          />
        </div>
        <div className="col-12">
          {/* Image */}
          <img
            className="img-fluid mb-7 rounded shadow-light-lg"
            src="assets/img/portfolio/portfolio-cover-8.jpg"
            alt="..."
          />
        </div>
      </div>
    </div>
  </section>
  {/* SHAPE */}
  <div className="position-relative">
    <div className="shape shape-bottom shape-fluid-x svg-shim text-gray-200">
      {"{"}
      {"{"}&gt; curves/curve-1{"}"}
      {"}"}
    </div>
  </div>
  {/* CTA */}
  <section className="pt-6 pt-md-8 bg-gray-200">
    <div className="container pb-6 pb-md-8 border-bottom border-gray-300">
      <div className="row align-items-center">
        <div className="col-12 col-md">
          {/* Heading */}
          <h3 className="mb-1 font-weight-bold">Get our stories delivered</h3>
          {/* Text */}
          <p className="font-size-lg text-muted mb-6 mb-md-0">
            From us to your inbox weekly.
          </p>
        </div>
        <div className="col-12 col-md-5">
          {/* Form */}
          <form>
            <div className="row">
              <div className="col">
                {/* Input */}
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>
              <div className="col-auto ml-n5">
                {/* Button */}
                <button className="btn btn-primary" type="submit">
                  Subscribe
                </button>
              </div>
            </div>
            {/* / .row */}
          </form>
        </div>
      </div>
      {/* / .row */}
    </div>
    {/* / .container */}
  </section>
</div>
  )
}
