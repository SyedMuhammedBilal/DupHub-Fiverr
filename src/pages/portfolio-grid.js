import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


export default function PortfolioGrid() {
  return (
    <div>
  <section className="pt-8 pt-md-12 pb-12 pb-md-15">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 text-center">
          {/* Headin */}
          <h1 className="display-1 font-weight-bold">Our Work.</h1>
          {/* Text */}
          <p className="lead text-secondary mb-4">
            We design &amp; build products, tools, apps, and sites for companies
            trying to do great things for our planet.
          </p>
          {/* Badges */}
          <nav className="nav justify-content-center">
            <a
              className="badge rounded-pill bg-secondary-soft active mr-1 mb-1"
              href="#"
              data-toggle="pill"
              data-filter="*"
              data-target="#portfolio"
            >
              <span className="h6 text-uppercase">Primary</span>
            </a>
            <a
              className="badge rounded-pill bg-secondary-soft mr-1 mb-1"
              href="#"
              data-toggle="pill"
              data-filter=".product"
              data-target="#portfolio"
            >
              <span className="h6 text-uppercase">Product</span>
            </a>
            <a
              className="badge rounded-pill bg-secondary-soft mr-1 mb-1"
              href="#"
              data-toggle="pill"
              data-filter=".ux"
              data-target="#portfolio"
            >
              <span className="h6 text-uppercase">UX</span>
            </a>
            <a
              className="badge rounded-pill bg-secondary-soft mr-1 mb-1"
              href="#"
              data-toggle="pill"
              data-filter=".resources"
              data-target="#portfolio"
            >
              <span className="h6 text-uppercase">Resources</span>
            </a>
          </nav>
        </div>
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </section>
  {/* CONTENT */}
  <section className="py-8 py-md-11 mt-n10 mt-md-n14">
    <div className="container">
      <div
        className="row"
        id="portfolio"
        data-isotope='{"layoutMode": "fitRows"}'
      >
        <div className="col-12 col-md-4 product">
          {/* Card */}
          <a className="card card-flush mb-7" href="#!">
            {/* Image */}
            <div className="card-zoom">
              <img
                className="card-img-top rounded shadow-light-lg"
                src="assets/img/portfolio/portfolio-1.jpg"
                alt="..."
              />
            </div>
            {/* Footer */}
            <div className="card-footer">
              {/* Preheading */}
              <h6 className="text-uppercase mb-1 text-muted">Branding</h6>
              {/* Heading */}
              <h4 className="mb-0">Curology Campaign</h4>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-4 resources">
          {/* Card */}
          <a className="card card-flush mb-7" href="#!">
            {/* Image */}
            <div className="card-zoom">
              <img
                className="card-img-top rounded shadow-light-lg"
                src="assets/img/portfolio/portfolio-2.jpg"
                alt="..."
              />
            </div>
            {/* Footer */}
            <div className="card-footer">
              {/* Preheading */}
              <h6 className="text-uppercase mb-1 text-muted">Packaging</h6>
              {/* Heading */}
              <h4 className="mb-0">Honest Packaging</h4>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-4 ux">
          {/* Card */}
          <a className="card card-flush mb-7" href="#!">
            {/* Image */}
            <div className="card-zoom">
              <img
                className="card-img-top rounded shadow-light-lg"
                src="assets/img/portfolio/portfolio-3.jpg"
                alt="..."
              />
            </div>
            {/* Footer */}
            <div className="card-footer">
              {/* Preheading */}
              <h6 className="text-uppercase mb-1 text-muted">Branding</h6>
              {/* Heading */}
              <h4 className="mb-0">Larq Bright Campaign</h4>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-4 resources">
          {/* Card */}
          <a className="card card-flush mb-7" href="#!">
            {/* Image */}
            <div className="card-zoom">
              <img
                className="card-img-top rounded shadow-light-lg"
                src="assets/img/portfolio/portfolio-4.jpg"
                alt="..."
              />
            </div>
            {/* Footer */}
            <div className="card-footer">
              {/* Preheading */}
              <h6 className="text-uppercase mb-1 text-muted">Ideation</h6>
              {/* Heading */}
              <h4 className="mb-0">Doodle Pads</h4>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-4 product">
          {/* Card */}
          <a className="card card-flush mb-7" href="#!">
            {/* Image */}
            <div className="card-zoom">
              <img
                className="card-img-top rounded shadow-light-lg"
                src="assets/img/portfolio/portfolio-5.jpg"
                alt="..."
              />
            </div>
            {/* Footer */}
            <div className="card-footer">
              {/* Preheading */}
              <h6 className="text-uppercase mb-1 text-muted">Branding</h6>
              {/* Heading */}
              <h4 className="mb-0">Larq Earthtones Collection</h4>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-4 resources">
          {/* Card */}
          <a className="card card-flush mb-7" href="#!">
            {/* Image */}
            <div className="card-zoom">
              <img
                className="card-img-top rounded shadow-light-lg"
                src="assets/img/portfolio/portfolio-6.jpg"
                alt="..."
              />
            </div>
            {/* Footer */}
            <div className="card-footer">
              {/* Preheading */}
              <h6 className="text-uppercase mb-1 text-muted">Product Design</h6>
              {/* Heading */}
              <h4 className="mb-0">Goby Brush Prototype</h4>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-4 product">
          {/* Card */}
          <a className="card card-flush mb-7" href="#!">
            {/* Image */}
            <div className="card-zoom">
              <img
                className="card-img-top rounded shadow-light-lg"
                src="assets/img/portfolio/portfolio-7.jpg"
                alt="..."
              />
            </div>
            {/* Footer */}
            <div className="card-footer">
              {/* Preheading */}
              <h6 className="text-uppercase mb-1 text-muted">Product Design</h6>
              {/* Heading */}
              <h4 className="mb-0">Larq Bottle Redesign</h4>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-4 ux">
          {/* Card */}
          <a className="card card-flush mb-7" href="#!">
            {/* Image */}
            <div className="card-zoom">
              <img
                className="card-img-top rounded shadow-light-lg"
                src="assets/img/portfolio/portfolio-8.jpg"
                alt="..."
              />
            </div>
            {/* Footer */}
            <div className="card-footer">
              {/* Preheading */}
              <h6 className="text-uppercase mb-1 text-muted">Product Design</h6>
              {/* Heading */}
              <h4 className="mb-0">Goby Packaging </h4>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-4 ux">
          {/* Card */}
          <a className="card card-flush mb-7" href="#!">
            {/* Image */}
            <div className="card-zoom">
              <img
                className="card-img-top rounded shadow-light-lg"
                src="assets/img/portfolio/portfolio-9.jpg"
                alt="..."
              />
            </div>
            {/* Footer */}
            <div className="card-footer">
              {/* Preheading */}
              <h6 className="text-uppercase mb-1 text-muted">Branding</h6>
              {/* Heading */}
              <h4 className="mb-0">Trek Campaign</h4>
            </div>
          </a>
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
            </div>{" "}
            {/* / .row */}
          </form>
        </div>
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </section>
</div>

  )
}
