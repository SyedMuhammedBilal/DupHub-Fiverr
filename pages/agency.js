import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


export default function Agency() {
  return (
   
    <div>
  <section className="mt-n10">
    <div className="container d-flex flex-column">
      <div className="row align-items-center justify-content-center min-vh-100 py-8 py-md-11">
        <div className="col-12 col-md-8 col-lg-7 mt-auto text-center">
          {/* Heading */}
          <h1 className="display-1 mb-0 font-weight-bold">
            We <span className="text-primary">Design &amp; Build</span> Products
            For All.
          </h1>
        </div>
        <div className="col-12 mt-auto text-center">
          {/* Button */}
          <a
            className="btn btn-primary btn-rounded-circle shadow"
            data-scroll='{"offset": 0}'
            href="#sectionTwo"
          >
            <i className="fe fe-arrow-down" />
          </a>
        </div>
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </section>
  {/* IMAGE */}
  <a
    className="d-block text-decoration-none"
    id="sectionTwo"
    data-jarallax
    data-speed=".8"
    href="portfolio-case-study.html"
    style={{
      backgroundImage: "url(assets/img/portfolio/portfolio-cover-4.jpg)"
    }}
  >
    <div className="container d-flex flex-column">
      <div className="row align-items-center min-vh-100 py-8 py-md-11">
        <div className="col-12">
          {/* Brand */}
          <div
            className="img-fluid text-white svg-shim mx-auto mb-5"
            style={{ maxWidth: 320 }}
          >
            {"{"}
            {"{"}&gt; brands/larq{"}"}
            {"}"}
          </div>
          {/* Subheading */}
          <p className="mb-0 font-weight-bold text-center text-uppercase text-white letter-spacing-lg">
            Bottle Redesigned
          </p>
        </div>
      </div>
    </div>
  </a>
  {/* IMAGE */}
  <a
    className="d-block text-decoration-none"
    id="sectionTwo"
    data-jarallax
    data-speed=".8"
    href="portfolio-sidebar.html"
    style={{
      backgroundImage: "url(assets/img/portfolio/portfolio-cover-5.jpg)"
    }}
  >
    <div className="container d-flex flex-column">
      <div className="row align-items-center min-vh-100 py-8 py-md-11">
        <div className="col-12">
          {/* Brand */}
          <div
            className="img-fluid text-white svg-shim mx-auto mb-5"
            style={{ maxWidth: 320 }}
          >
            {"{"}
            {"{"}&gt; brands/goby{"}"}
            {"}"}
          </div>
          {/* Subheading */}
          <p className="mb-0 font-weight-bold text-center text-uppercase text-white letter-spacing-lg">
            Toothbrush Prototype
          </p>
        </div>
      </div>
    </div>
  </a>
  {/* QUOTE */}
  <section>
    <div className="container d-flex flex-column">
      <div className="row align-items-center justify-content-center min-vh-100 py-8 py-md-11">
        <div className="col-12 col-lg-10 col-xl-8">
          {/* Blockquote */}
          <blockquote className="blockquote text-center">
            {/* Logo */}
            <div
              className="img-fluid mb-5 mb-md-7 mx-auto svg-shim"
              style={{ maxWidth: 120, color: "#CB2027" }}
            >
              {"{"}
              {"{"}&gt; logotype/airbnb{"}"}
              {"}"}
            </div>
            {/* Text */}
            <p className="h2 mb-5 mb-md-7">
              “Before we even did a kickoff call, I knew we'd make the right
              choice to work with the Landkit team. Their body of work and
              influence on the industry speak volumes.”
            </p>
            {/* Footer */}
            <footer className="blockquote-footer mb-0">
              <div className="avatar mr-3">
                <img
                  src="assets/img/avatars/avatar-1.jpg"
                  className="avatar-img rounded-circle"
                  alt="..."
                />
              </div>{" "}
              <span className="h6 text-uppercase">Jacob Thornton</span>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  </section>
  {/* IMAGE */}
  <a
    className="d-block text-decoration-none"
    id="sectionTwo"
    data-jarallax
    data-speed=".8"
    href="portfolio-case-study.html"
    style={{
      backgroundImage: "url(assets/img/portfolio/portfolio-cover-7.jpg)"
    }}
  >
    <div className="container d-flex flex-column">
      <div className="row align-items-center min-vh-100 py-8 py-md-11">
        <div className="col-12">
          {/* Brand */}
          <div
            className="img-fluid text-white svg-shim mx-auto mb-5"
            style={{ maxWidth: 500 }}
          >
            {"{"}
            {"{"}&gt; brands/trek{"}"}
            {"}"}
          </div>
          {/* Subheading */}
          <p className="mb-0 font-weight-bold text-center text-uppercase text-white letter-spacing-lg">
            Ride for your campaign
          </p>
        </div>
      </div>
    </div>
  </a>
  {/* IMAGE */}
  <a
    className="d-block text-decoration-none"
    id="sectionTwo"
    data-jarallax
    data-speed=".8"
    href="portfolio-sidebar-fluid.html"
    style={{
      backgroundImage: "url(assets/img/portfolio/portfolio-cover-2.jpg)"
    }}
  >
    <div className="container d-flex flex-column">
      <div className="row align-items-center min-vh-100 py-8 py-md-11">
        <div className="col-12">
          {/* Brand */}
          <div
            className="img-fluid text-white svg-shim mx-auto mb-5"
            style={{ maxWidth: 320 }}
          >
            {"{"}
            {"{"}&gt; brands/larq{"}"}
            {"}"}
          </div>
          {/* Subheading */}
          <p className="mb-0 font-weight-bold text-center text-uppercase text-white letter-spacing-lg">
            The bright campaign
          </p>
        </div>
      </div>
    </div>
  </a>
  {/* TOGETHER */}
  <section>
    <div className="container d-flex flex-column">
      <div className="row align-items-center justify-content-between min-vh-100 py-8 py-md-11">
        <div className="col-12 col-md-6 col-lg-5">
          {/* Badge */}
          <span className="badge rounded-pill bg-primary-soft mb-3">
            <span className="h6 text-uppercase">Support</span>
          </span>
          {/* Heading */}
          <h2>
            Our legacy will be working <br />
            <span className="text-primary">with people we love</span>.
          </h2>
          {/* Text */}
          <p className="font-size-lg text-gray-700 mb-6">
            Are you doing good for the world? Do you care about the future of
            technology and the internet? Are you the type of person who “wastes”
            hundreds of hours of side projects and experiments? We probably love
            you.
          </p>
          {/* Stats */}
          <div className="d-flex mb-8 mb-md-0">
            <div className="pr-5">
              <h3 className="mb-0">
                <span
                  data-countup='{"startVal": 0}'
                  data-to={50}
                  data-aos
                  data-aos-id="countup:in"
                >
                  0
                </span>
                %
              </h3>
              <p className="text-gray-700 mb-0">Humanitarian</p>
            </div>
            <div className="border-left border-gray-300" />
            <div className="px-5">
              <h3 className="mb-0">
                <span
                  data-countup='{"startVal": 0}'
                  data-to={100}
                  data-aos
                  data-aos-id="countup:in"
                >
                  0
                </span>
                %
              </h3>
              <p className="text-gray-700 mb-0">Satisfaction</p>
            </div>
            <div className="border-left border-gray-300" />
            <div className="pl-5">
              <h3 className="mb-0">
                <span
                  data-countup='{"startVal": 0}'
                  data-to={67}
                  data-aos
                  data-aos-id="countup:in"
                >
                  0
                </span>
                %
              </h3>
              <p className="text-gray-700 mb-0">Remote work</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          {/* Images */}
          <div className="row">
            <div className="col-6 mt-8 mr-n5" data-aos="fade-up">
              <img
                src="assets/img/photos/photo-10.jpg"
                alt="..."
                className="img-fluid mb-4 rounded"
              />
              <img
                src="assets/img/photos/photo-12.jpg"
                alt="..."
                className="img-fluid rounded"
              />
            </div>
            <div className="col-6" data-aos="fade-up" data-aos-delay={100}>
              <img
                src="assets/img/photos/photo-9.jpg"
                alt="..."
                className="img-fluid mb-4 rounded"
              />
              <img
                src="assets/img/photos/photo-11.jpg"
                alt="..."
                className="img-fluid rounded"
              />
            </div>
          </div>{" "}
          {/* / .row */}
        </div>
      </div>
    </div>
  </section>
  {/* IMAGE */}
  <a
    className="d-block text-decoration-none"
    id="sectionTwo"
    data-jarallax
    data-speed=".8"
    href="portfolio-case-study.html"
    style={{
      backgroundImage: "url(assets/img/portfolio/portfolio-cover-6.jpg)"
    }}
  >
    <div className="container d-flex flex-column">
      <div className="row align-items-center min-vh-100 py-8 py-md-11">
        <div className="col-12">
          {/* Brand */}
          <div
            className="img-fluid text-white svg-shim mx-auto mb-5"
            style={{ maxWidth: 370 }}
          >
            {"{"}
            {"{"}&gt; brands/nike{"}"}
            {"}"}
          </div>
          {/* Subheading */}
          <p className="mb-0 font-weight-bold text-center text-uppercase text-white letter-spacing-lg">
            (Red) Freeruns
          </p>
        </div>
      </div>
    </div>
  </a>
  {/* IMAGE */}
  <a
    className="d-block text-decoration-none"
    id="sectionTwo"
    data-jarallax
    data-speed=".8"
    href="portfolio-sidebar.html"
    style={{
      backgroundImage: "url(assets/img/portfolio/portfolio-cover-3.jpg)"
    }}
  >
    <div className="container d-flex flex-column">
      <div className="row align-items-center min-vh-100 py-8 py-md-11">
        <div className="col-12">
          {/* Brand */}
          <div
            className="img-fluid text-white svg-shim mx-auto mb-5"
            style={{ maxWidth: 320 }}
          >
            {"{"}
            {"{"}&gt; brands/larq{"}"}
            {"}"}
          </div>
          {/* Subheading */}
          <p className="mb-0 font-weight-bold text-center text-uppercase text-white letter-spacing-lg">
            Earthtones collection
          </p>
        </div>
      </div>
    </div>
  </a>
  {/* CTA */}
  <section>
    <div className="container d-flex flex-column">
      <div className="row align-items-center justify-content-center min-vh-100 py-8 py-md-11">
        <div className="col-12 col-md-9 col-lg-8 col-xl-7 text-center">
          {/* Heading */}
          <h2 className="display-3">Wanna work with us?</h2>
          {/* Text */}
          <p className="mb-5 font-size-lg text-gray-800">
            We work on everything from physical products to digital experiences
            and are looking forward to hearing from you.
          </p>
          {/* Button */}
          <a className="btn btn-primary rounded-pill" href="#!">
            Let us know <i className="fe fe-arrow-right ml-2" />
          </a>
        </div>
      </div>
    </div>
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
