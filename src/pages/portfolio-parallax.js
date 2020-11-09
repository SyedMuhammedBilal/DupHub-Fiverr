import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


export default function PortfolioParallax() {
  return (
    <div>
  <section
    className="overlay overlay-dark overlay-40"
    data-jarallax
    data-speed=".8"
    style={{
      backgroundImage: "url(assets/img/portfolio/portfolio-cover-1.jpg)"
    }}
  >
    <div className="container d-flex flex-column">
      <div className="row align-items-center justify-content-center min-vh-100 py-8 py-md-11">
        <div className="col-12 col-md-8 col-lg-6 mt-auto text-center">
          {/* Brand */}
          <div className="img-fluid text-white svg-shim mb-6">
            {"{"}
            {"{"}&gt; brands/larq{"}"}
            {"}"}
          </div>
          {/* Heading */}
          <p className="lead text-white">
            Researching antibacterial materials to keep a daily waterbottle
            sanitary without ever washing it.
          </p>
        </div>
        <div className="col-12 mt-auto text-center">
          {/* Button */}
          <a
            className="btn btn-white btn-rounded-circle shadow"
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
  <section
    className="min-vh-100"
    id="sectionTwo"
    data-jarallax
    data-speed=".8"
    style={{
      backgroundImage: "url(assets/img/portfolio/portfolio-cover-2.jpg)"
    }}
  />
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
  <section
    className="min-vh-100"
    data-jarallax
    data-speed=".8"
    style={{
      backgroundImage: "url(assets/img/portfolio/portfolio-cover-3.jpg)"
    }}
  />
  {/* IMAGE */}
  <section
    className="min-vh-100"
    data-jarallax
    data-speed=".8"
    style={{
      backgroundImage: "url(assets/img/portfolio/portfolio-cover-4.jpg)"
    }}
  />
  {/* PROCESS */}
  <section>
    <div className="container d-flex flex-column">
      <div className="row align-items-center min-vh-100 py-8 py-md-11">
        <div className="col-12">
          <div className="row align-items-center justify-content-between mb-8 mb-md-11">
            <div className="col-12 col-md-6">
              {/* Preheading */}
              <h6 className="text-uppercase text-primary font-weight-bold">
                Process
              </h6>
              {/* Heading */}
              <h2>Our process relies on working closely with your team.</h2>
              {/* Text */}
              <p className="lead text-muted mb-6 mb-md-0">
                We embed ourselves in your team and aim to work as a natural
                extension of your full-time team.
              </p>
            </div>
            <div className="col-12 col-md-6 col-xl-5">
              <div className="row gx-0">
                <div className="col-4">
                  {/* Image */}
                  <div
                    className="w-150 mt-9 p-1 bg-white shadow-lg"
                    data-aos="fade-up"
                    data-aos-delay={100}
                  >
                    <img
                      src="assets/img/photos/photo-13.jpg"
                      className="img-fluid"
                      alt="..."
                    />
                  </div>
                </div>
                <div className="col-4">
                  {/* Image */}
                  <div
                    className="w-150 p-1 bg-white shadow-lg"
                    data-aos="fade-up"
                  >
                    <img
                      src="assets/img/photos/photo-14.jpg"
                      className="img-fluid"
                      alt="..."
                    />
                  </div>
                </div>
                <div className="col-4 position-relative">
                  {/* Image */}
                  <div
                    className="w-150 mt-11 float-right p-1 bg-white shadow-lg"
                    data-aos="fade-up"
                    data-aos-delay={150}
                  >
                    <img
                      src="assets/img/photos/photo-15.jpg"
                      className="img-fluid"
                      alt="..."
                    />
                  </div>
                </div>
              </div>{" "}
              {/* / .row */}
            </div>
          </div>{" "}
          {/* / .row */}
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="row">
                <div className="col-auto col-md-12">
                  {/* Step */}
                  <div className="row gx-0 align-items-center mb-md-5">
                    <div className="col-auto">
                      <a
                        href="#!"
                        className="btn btn-sm btn-rounded-circle btn-gray-400 disabled opacity-1"
                      >
                        <span>1</span>
                      </a>
                    </div>
                    <div className="col">
                      <hr className="d-none d-md-block w-130" />
                    </div>
                  </div>{" "}
                  {/* / .row */}
                </div>
                <div className="col col-md-12 ml-n5 ml-md-0">
                  {/* Heading */}
                  <h3>Define the problem.</h3>
                  {/* Text */}
                  <p className="text-muted mb-6 mb-md-0">
                    We start by putting a fine point on the problem. Making sure
                    everyone agrees on the underlying issue is key.
                  </p>
                </div>
              </div>{" "}
              {/* / .row */}
            </div>
            <div className="col-12 col-md-4">
              <div className="row">
                <div className="col-auto col-md-12">
                  {/* Step */}
                  <div className="row gx-0 align-items-center mb-md-5">
                    <div className="col-auto">
                      <a
                        href="#!"
                        className="btn btn-sm btn-rounded-circle btn-gray-400 disabled opacity-1"
                      >
                        <span>2</span>
                      </a>
                    </div>
                    <div className="col">
                      <hr className="d-none d-md-block w-130" />
                    </div>
                  </div>{" "}
                  {/* / .row */}
                </div>
                <div className="col col-md-12 ml-n5 ml-md-0">
                  {/* Heading */}
                  <h3>Explore the possibilities.</h3>
                  {/* Text */}
                  <p className="text-muted mb-6 mb-md-0">
                    Get the ideas out! We avoid hindering ourselves with
                    limitations and just try to create viable solutions.
                  </p>
                </div>
              </div>{" "}
              {/* / .row */}
            </div>
            <div className="col-12 col-md-4">
              <div className="row">
                <div className="col-auto col-md-12">
                  {/* Step */}
                  <div className="row gx-0 align-items-center mb-md-5">
                    <div className="col-auto">
                      <a
                        href="#!"
                        className="btn btn-sm btn-rounded-circle btn-gray-400 disabled opacity-1"
                      >
                        <span>3</span>
                      </a>
                    </div>
                  </div>{" "}
                  {/* / .row */}
                </div>
                <div className="col col-md-12 ml-n5 ml-md-0">
                  {/* Heading */}
                  <h3>Execute the vision</h3>
                  {/* Text */}
                  <p className="text-muted mb-0">
                    Once we've decided a direction, we go heads down to create a
                    polished final product to review all together.
                  </p>
                </div>
              </div>{" "}
              {/* / .row */}
            </div>
          </div>{" "}
          {/* / .row */}
        </div>
      </div>
    </div>{" "}
    {/* / .container */}
  </section>
  {/* IMAGE */}
  <section
    className="min-vh-100"
    data-jarallax
    data-speed=".8"
    style={{ backgroundImage: "url(assets/img/covers/cover-2.jpg)" }}
  />
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
