import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


export default function PortfolioSidebar() {
  return (
    <div>
  <div className="container">
    <div className="row justify-content-between">
      <div
        className="col-12 col-md-4 position-md-sticky d-flex align-items-center vh-md-100"
        style={{ top: 0 }}
      >
        {/* Sidebar */}
        <aside className="py-8 py-md-10">
          {/* Brand */}
          <div
            className="img-fluid mb-4 text-body svg-shim"
            style={{ maxWidth: 140 }}
          >
            {"{"}
            {"{"}&gt; brands/larq{"}"}
            {"}"}
          </div>
          {/* Text */}
          <p className="font-size-lg mb-7 text-muted">
            We created a photographic brand for Larq that’s fun and exciting.
          </p>
          {/* List group */}
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              {/* Heading */}
              <h6 className="d-flex mb-0 text-uppercase">
                Year <span className="ml-auto">2019</span>
              </h6>
            </li>
            <li className="list-group-item">
              {/* Heading */}
              <h6 className="d-flex mb-0 text-uppercase">
                Service <span className="ml-auto">Photography</span>
              </h6>
            </li>
            <li className="list-group-item">
              {/* Heading */}
              <h6 className="d-flex mb-0 text-uppercase">
                Timeline <span className="ml-auto">60 Days</span>
              </h6>
            </li>
          </ul>
        </aside>
      </div>
      <div className="col-12 col-md-7">
        {/* Images */}
        <section className="pb-8 pt-md-12 pb-md-10">
          <a
            className="d-block"
            data-bigpicture='{"imgSrc": "assets/img/portfolio/portfolio-21.jpg"}'
            href="#"
          >
            <img
              className="img-fluid rounded"
              src="assets/img/portfolio/portfolio-21.jpg"
              alt="..."
            />
          </a>
          <a
            className="d-block mt-7"
            data-bigpicture='{"imgSrc": "assets/img/portfolio/portfolio-22.jpg"}'
            href="#"
          >
            <img
              className="img-fluid rounded"
              src="assets/img/portfolio/portfolio-22.jpg"
              alt="..."
            />
          </a>
          <a
            className="d-block mt-7"
            data-bigpicture='{"imgSrc": "assets/img/portfolio/portfolio-23.jpg"}'
            href="#"
          >
            <img
              className="img-fluid rounded"
              src="assets/img/portfolio/portfolio-23.jpg"
              alt="..."
            />
          </a>
          <a
            className="d-block mt-7"
            data-bigpicture='{"imgSrc": "assets/img/portfolio/portfolio-24.jpg"}'
            href="#"
          >
            <img
              className="img-fluid rounded"
              src="assets/img/portfolio/portfolio-24.jpg"
              alt="..."
            />
          </a>
          <a
            className="d-block mt-7"
            data-bigpicture='{"imgSrc": "assets/img/portfolio/portfolio-25.jpg"}'
            href="#"
          >
            <img
              className="img-fluid rounded"
              src="assets/img/portfolio/portfolio-25.jpg"
              alt="..."
            />
          </a>
        </section>
      </div>
    </div>
  </div>
  {/* SHAPE */}
  <div className="position-relative">
    <div className="shape shape-bottom shape-fluid-x svg-shim text-light">
      {"{"}
      {"{"}&gt; curves/curve-1{"}"}
      {"}"}
    </div>
  </div>
  {/* RELATED */}
  <section className="pt-7 pt-md-10 bg-light">
    <div className="container">
      <div className="row align-items-center mb-5">
        <div className="col-12 col-md">
          {/* Heading */}
          <h3 className="mb-0">Related Work</h3>
          {/* Text */}
          <p className="mb-0 text-muted">
            Other goodies that are similar to this one.
          </p>
        </div>
        <div className="col-12 col-md-auto">
          {/* Button */}
          <a
            href="#!"
            className="btn btn-sm btn-outline-gray-300 d-none d-md-inline"
          >
            View all
          </a>
        </div>
      </div>{" "}
      {/* / .row */}
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4 d-flex">
          {/* Card */}
          <a className="card mb-6 mb-lg-0 shadow-light-lg" href="#!">
            {/* Image */}
            <div className="card-zoom">
              <img
                className="card-img-top"
                src="assets/img/portfolio/portfolio-1.jpg"
                alt="..."
              />
            </div>
            {/* Body */}
            <div className="card-body">
              {/* Shape */}
              <div className="shape shape-bottom-100 shape-fluid-x svg-shim text-white">
                {"{"}
                {"{"}&gt; curves/curve-1{"}"}
                {"}"}
              </div>
              {/* Preheading */}
              <h6 className="text-uppercase mb-1 text-muted">Branding</h6>
              {/* Heading */}
              <h4 className="mb-0">Curology Campaign</h4>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-6 col-lg-4 d-flex">
          {/* Card */}
          <a className="card mb-6 mb-lg-0 shadow-light-lg" href="#!">
            {/* Image */}
            <div className="card-zoom">
              <img
                className="card-img-top"
                src="assets/img/portfolio/portfolio-2.jpg"
                alt="..."
              />
            </div>
            {/* Body */}
            <div className="card-body">
              {/* Shape */}
              <div className="shape shape-bottom-100 shape-fluid-x svg-shim text-white">
                {"{"}
                {"{"}&gt; curves/curve-1{"}"}
                {"}"}
              </div>
              {/* Preheading */}
              <h6 className="text-uppercase mb-1 text-muted">Branding</h6>
              {/* Heading */}
              <h4 className="mb-0">Honest Packaging</h4>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-6 col-lg-4 d-flex">
          {/* Card */}
          <a className="card d-md-none d-lg-flex shadow-light-lg" href="#!">
            {/* Image */}
            <div className="card-zoom">
              <img
                className="card-img-top"
                src="assets/img/portfolio/portfolio-4.jpg"
                alt="..."
              />
            </div>
            {/* Body */}
            <div className="card-body">
              {/* Shape */}
              <div className="shape shape-bottom-100 shape-fluid-x svg-shim text-white">
                {"{"}
                {"{"}&gt; curves/curve-1{"}"}
                {"}"}
              </div>
              {/* Preheading */}
              <h6 className="text-uppercase mb-1 text-muted">Ideation</h6>
              {/* Heading */}
              <h4 className="mb-0">Doodle Pad</h4>
            </div>
          </a>
        </div>
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </section>
  {/* CTA */}
  <section className="pt-7 pt-md-10 bg-light">
    <div className="container py-6 py-md-8 border-top border-bottom border-gray-300">
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
