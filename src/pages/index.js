import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


export default function Home() {
  const data = useStaticQuery(graphql`
    query {
  swapi {
    content(where: {id: "ckh5drj40078u0b60u36m7i2d"}) {
      content {
        text
      }
    }
  }
}
  `);
  console.log(data);

  const cont = data.swapi.content.content.text
  console.log(cont)
  
  return (
    <div>
  <section className="pt-4 pt-md-11">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12 col-md-5 col-lg-6 order-md-2">
          {/* Image */}
          <img
            src="assets/img/illustrations/illustration-2.png"
            className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0"
            alt="..."
            data-aos="fade-up"
            data-aos-delay={100}
          />
        </div>
        <div className="col-12 col-md-7 col-lg-6 order-md-1" data-aos="fade-up">
          {/* Heading */}
          <h1 className="display-3 text-center text-md-left">
            Welcome to <span className="text-primary">Landkit</span>. <br />
            Develop anything.
          </h1>
          {/* Text */}
          <p className="lead text-center text-md-left text-muted mb-6 mb-lg-8">
            Build a beautiful, modern website with flexible Bootstrap components
            built from scratch.
          </p>
          {/* Buttons */}
          <div className="text-center text-md-left">
            <a
              href="overview.html"
              className="btn btn-primary shadow lift mr-1"
            >
              View all pages{" "}
              <i className="fe fe-arrow-right d-none d-md-inline ml-3" />
            </a>
            <a href="docs/index.html" className="btn btn-primary-soft lift">
              Documentation
            </a>
          </div>
        </div>
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </section>
  {/* FEATURES */}
  <section className="py-8 py-md-11 border-bottom">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-4" data-aos="fade-up">
          {/* Icon */}
          <div className="icon text-primary mb-3">
            {"{"}
            {"{"}&gt; general/settings-1{"}"}
            {"}"}
          </div>
          {/* Heading */}
          <h3>Built for developers</h3>
          {/* Text */}
          <p className="text-muted mb-6 mb-md-0">
            Landkit is built to make your life easier. Variables, build tooling,
            documentation, and reusable components.
          </p>
        </div>
        <div className="col-12 col-md-4" data-aos="fade-up" data-aos-delay={50}>
          {/* Icon */}
          <div className="icon text-primary mb-3">
            {"{"}
            {"{"}&gt; layout/layout-arrange{"}"}
            {"}"}
          </div>
          {/* Heading */}
          <h3>Designed to be modern</h3>
          {/* Text */}
          <p className="text-muted mb-6 mb-md-0">
            Designed with the latest design trends in mind. Landkit feels
            modern, minimal, and beautiful.
          </p>
        </div>
        <div
          className="col-12 col-md-4"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          {/* Icon */}
          <div className="icon text-primary mb-3">
            {"{"}
            {"{"}&gt; code/code{"}"}
            {"}"}
          </div>
          {/* Heading */}
          <h3>Documentation for everything</h3>
          {/* Text */}
          <p className="text-muted mb-0">
            We've written extensive documentation for components and tools, so
            you never have to reverse engineer anything.
          </p>
        </div>
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </section>
  {/* BRANDS */}
  <section className="py-6 py-md-8 border-bottom">
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-6 col-sm-4 col-md-2 mb-4 mb-md-0">
          {/* Brand */}
          <div className="img-fluid text-gray-600 mb-2 mb-md-0 svg-shim">
            {"{"}
            {"{"}&gt; logotype/airbnb{"}"}
            {"}"}
          </div>
        </div>
        <div className="col-6 col-sm-4 col-md-2 mb-4 mb-md-0">
          {/* Brand */}
          <div className="img-fluid text-gray-600 mb-2 mb-md-0 svg-shim">
            {"{"}
            {"{"}&gt; logotype/coinbase{"}"}
            {"}"}
          </div>
        </div>
        <div className="col-6 col-sm-4 col-md-2 mb-4 mb-md-0">
          {/* Brand */}
          <div className="img-fluid text-gray-600 mb-2 mb-md-0 svg-shim">
            {"{"}
            {"{"}&gt; logotype/dribbble{"}"}
            {"}"}
          </div>
        </div>
        <div className="col-6 col-sm-4 col-md-2 mb-4 mb-md-0">
          {/* Brand */}
          <div className="img-fluid text-gray-600 mb-2 mb-md-0 svg-shim">
            {"{"}
            {"{"}&gt; logotype/instagram{"}"}
            {"}"}
          </div>
        </div>
        <div className="col-6 col-sm-4 col-md-2 mb-4 mb-md-0">
          {/* Brand */}
          <div className="img-fluid text-gray-600 mb-2 mb-md-0 svg-shim">
            {"{"}
            {"{"}&gt; logotype/netflix{"}"}
            {"}"}
          </div>
        </div>
        <div className="col-6 col-sm-4 col-md-2 mb-4 mb-md-0">
          {/* Brand */}
          <div className="img-fluid text-gray-600 mb-2 mb-md-0 svg-shim">
            {"{"}
            {"{"}&gt; logotype/pinterest{"}"}
            {"}"}
          </div>
        </div>
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </section>
  {/* ABOUT */}
  <section className="pt-8 pt-md-11 bg-gradient-light">
    <div className="container">
      <div className="row align-items-center justify-content-between mb-8 mb-md-11">
        <div className="col-12 col-md-6 order-md-2" data-aos="fade-left">
          {/* Heading */}
          <h2>
            The most useful resource <br />
            <span className="text-success">
              ever created for{" "}
              <span data-typed='{"strings": ["developers.", "founders.", "designers."]}' />
            </span>
          </h2>
          {/* Text */}
          <p className="font-size-lg text-muted mb-6">
            Using Landkit to build your site means never worrying about
            designing another page or cross browser compatibility. Our
            ever-growing library of components and pre-designed layouts will
            make your life easier.
          </p>
          {/* List */}
          <div className="row">
            <div className="col-12 col-lg-6">
              {/* Item */}
              <div className="d-flex">
                {/* Check */}
                <div className="badge badge-rounded-circle bg-success-soft mt-1 mr-4">
                  <i className="fe fe-check" />
                </div>
                {/* Text */}
                <p className="text-success">Lifetime updates</p>
              </div>
              {/* Item */}
              <div className="d-flex">
                {/* Check */}
                <div className="badge badge-rounded-circle bg-success-soft mt-1 mr-4">
                  <i className="fe fe-check" />
                </div>
                <p className="text-success mb-lg-0">Tons of assets</p>
              </div>
            </div>
            <div className="col-12 col-lg-6 mb-6 mb-md-0">
              {/* Item */}
              <div className="d-flex">
                {/* Check */}
                <span className="badge badge-rounded-circle bg-success-soft mt-1 mr-4">
                  <i className="fe fe-check" />
                </span>
                {/* Text */}
                <p className="text-success">Tech support</p>
              </div>
              {/* Item */}
              <div className="d-flex">
                {/* Check */}
                <div className="badge badge-rounded-circle bg-success-soft mr-1 mr-4">
                  <i className="fe fe-check" />
                </div>
                {/* Text */}
                <p className="text-success mb-0">Integration ready</p>
              </div>
            </div>
          </div>{" "}
          {/* / .row */}
        </div>
        <div
          className="col-12 col-md-6 col-lg-5 order-md-1"
          data-aos="fade-right"
        >
          {/* Card */}
          <div className="card shadow-light-lg lift lift-lg">
            {/* Image */}
            <img
              src="assets/img/photos/photo-2.jpg"
              alt="..."
              className="card-img-top"
            />
            {/* Shape */}
            <div className="position-relative">
              <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                {"{"}
                {"{"}&gt; curves/curve-1{"}"}
                {"}"}
              </div>
            </div>
            {/* Body */}
            <div className="card-body">
              {/* Form */}
              <form>
                <div className="form-label-group">
                  <input
                    type="text"
                    className="form-control form-control-flush"
                    id="cardName"
                    placeholder="Name"
                  />
                  <label htmlFor="cardName">Name</label>
                </div>
                <div className="form-label-group">
                  <input
                    type="email"
                    className="form-control form-control-flush"
                    id="cardEmail"
                    placeholder="Email"
                  />
                  <label htmlFor="cardEmail">Email</label>
                </div>
                <div className="form-label-group">
                  <input
                    type="password"
                    className="form-control form-control-flush"
                    id="cardPassword"
                    placeholder="Password"
                  />
                  <label htmlFor="cardPassword">Password</label>
                </div>
                <div className="mt-6">
                  <button
                    className="btn btn-block btn-success lift"
                    type="submit"
                  >
                    Download a sample
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* / .row */}
      <div className="row align-items-center">
        <div className="col-12 col-md-7 col-lg-6" data-aos="fade-right">
          {/* Heading */}
          <h2>
            We have lots of experience <br />
            <span className="text-primary">building Bootstrap themes</span>.
          </h2>
          {/* Text */}
          <p className="font-size-lg text-muted mb-6">
            We've built well over a dozen Bootstrap themes and sold tens of
            thousands of copies.
          </p>
          {/* List */}
          <div className="d-flex">
            {/* Icon */}
            <div className="icon text-primary">
              {"{"}
              {"{"}&gt; media/repeat{"}"}
              {"}"}
            </div>
            <div className="ml-5">
              {/* Heading */}
              <h4 className="mb-1">Bootstrap users since the beginning</h4>
              {/* Text */}
              <p className="text-muted mb-6">
                We've been developing with Bootstrap since it was publicly
                released in 2011.
              </p>
            </div>
          </div>
          <div className="d-flex">
            {/* Icon */}
            <div className="icon text-primary">
              {"{"}
              {"{"}&gt; code/code{"}"}
              {"}"}
            </div>
            <div className="ml-5">
              {/* Heading */}
              <h4 className="mb-1">Deep understanding of Bootstrap</h4>
              {/* Text */}
              <p className="text-muted mb-6 mb-md-0">
                We've watched Bootstrap grow up over the years and understand it
                better than almost anyone.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5 col-lg-6">
          <div
            className="w-md-150 w-lg-130 position-relative"
            data-aos="fade-left"
          >
            {/* Shape */}
            <div className="shape shape-fluid-y shape-blur-4 svg-shim text-gray-200">
              {"{"}
              {"{"}&gt; blurs/blur-4{"}"}
              {"}"}
            </div>
            {/* Image */}
            <div className="img-skewed img-skewed-left">
              {/* Image */}
              <img
                src="assets/img/screenshots/desktop/dashkit.jpg"
                className="screenshot img-fluid img-skewed-item"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </section>
  {/* TESTIMONIALS */}
  <section className="pt-10 pt-md-12">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 text-center">
          {/* Heading */}
          <h2>Our customers are our biggest fans.</h2>
          {/* Text */}
          <p className="font-size-lg text-muted mb-7 mb-md-9">
            We don't like to brag, but we don't mind letting our customers do it
            for us. Here are a few nice things folks have said about our themes
            over the years.
          </p>
        </div>
      </div>{" "}
      {/* / .row */}
      <div className="row">
        <div className="col-12">
          {/* Card */}
          <div className="card card-row shadow-light-lg mb-6">
            <div className="row gx-0">
              <div className="col-12 col-md-6">
                {/* Slider */}
                <div
                  className="card-img-slider"
                  data-flickity='{"fade": true, "imagesLoaded": true, "pageDots": false, "prevNextButtons": false, "asNavFor": "#blogSlider", "draggable": false}'
                >
                  <a
                    className="card-img-left w-100 bg-cover"
                    style={{
                      backgroundImage: "url(assets/img/photos/photo-1.jpg)"
                    }}
                    href="#!"
                  >
                    {/* Image (placeholder) */}
                    <img
                      src="assets/img/photos/photo-1.jpg"
                      alt="..."
                      className="img-fluid d-md-none invisible"
                    />
                  </a>
                  <a
                    className="card-img-left w-100 bg-cover"
                    style={{
                      backgroundImage: "url(assets/img/photos/photo-26.jpg)"
                    }}
                    href="#!"
                  >
                    {/* Image (placeholder) */}
                    <img
                      src="assets/img/photos/photo-26.jpg"
                      alt="..."
                      className="img-fluid d-md-none invisible"
                    />
                  </a>
                </div>
                {/* Shape */}
                <div className="shape shape-right shape-fluid-y svg-shim text-white d-none d-md-block">
                  {"{"}
                  {"{"}&gt; curves/curve-4{"}"}
                  {"}"}
                </div>
              </div>
              <div className="col-12 col-md-6 position-md-static">
                {/* Slider */}
                <div
                  className="position-md-static"
                  data-flickity='{"wrapAround": true, "pageDots": false, "adaptiveHeight": true}'
                  id="blogSlider"
                >
                  <div className="w-100">
                    {/* Body */}
                    <div className="card-body">
                      <blockquote className="blockquote text-center mb-0">
                        {/* Brand */}
                        <div className="row justify-content-center mb-5 mb-md-7">
                          <div className="col-6 col-sm-4 col-md-7 col-lg-5">
                            {/* Logo */}
                            <div
                              className="img-fluid svg-shim"
                              style={{ color: "#FF5A5F" }}
                            >
                              {"{"}
                              {"{"}&gt; logotype/airbnb{"}"}
                              {"}"}
                            </div>
                          </div>
                        </div>{" "}
                        {/* / .row */}
                        {/* Text */}
                        
                              <div>
                                <p className="mb-5 mb-md-7">
                                  {cont}
                                </p>
                              </div>

                        {/* Footer */}
                        <footer className="blockquote-footer">
                          <span className="h6 text-uppercase">
                            Dave Gamache
                          </span>
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                  <div className="w-100">
                    {/* Body */}
                    <div className="card-body">
                      <blockquote className="blockquote text-center mb-0">
                        {/* Brand */}
                        <div className="row justify-content-center mb-5 mb-md-7">
                          <div className="col-6 col-sm-4 col-md-7 col-lg-5">
                            {/* Logo */}
                            <div
                              className="img-fluid svg-shim"
                              style={{ color: "#3F5D87" }}
                            >
                              {"{"}
                              {"{"}&gt; logotype/instagram{"}"}
                              {"}"}
                            </div>
                          </div>
                        </div>{" "}
                        {/* / .row */}
                        {/* Text */}
                        <p className="mb-5 mb-md-7">
                          “I've never used a theme as versatile and flexible as
                          Landkit. It's my go to for building landing sites on
                          almost any project.”
                        </p>
                        {/* Footer */}
                        <footer className="blockquote-footer">
                          <span className="h6 text-uppercase">Russ D'Sa</span>
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* / .row */}
          </div>
        </div>
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </section>
  {/* SHAPE */}
  <div className="position-relative mt-n8">
    <div className="shape shape-bottom shape-fluid-x svg-shim text-gray-200">
      {"{"}
      {"{"}&gt; curves/curve-3{"}"}
      {"}"}
    </div>
  </div>
  {/* STATS */}
  <section className="pt-12 pt-md-13 bg-gray-200">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12 col-md-5 col-lg-6 order-md-2">
          {/* Image */}
          <img
            src="assets/img/illustrations/illustration-8.png"
            alt="..."
            className="img-fluid mb-6 mb-md-0"
          />
        </div>
        <div className="col-12 col-md-7 col-lg-6 order-md-1">
          {/* Heading */}
          <h2>
            Stay focused on your business. <br />
            <span className="text-primary">Let us handle the design</span>.
          </h2>
          {/* Text */}
          <p className="font-size-lg text-gray-700 mb-6">
            You have a business to run. Stop worring about cross-browser bugs,
            designing new pages, keeping your components up to date. Let us do
            that for you.
          </p>
          {/* Stats */}
          <div className="d-flex">
            <div className="pr-5">
              <h3 className="mb-0">
                <span
                  data-countup='{"startVal": 0}'
                  data-to={100}
                  data-aos
                  data-aos-id="countup:in"
                />
                %
              </h3>
              <p className="text-gray-700 mb-0">Satisfaction</p>
            </div>
            <div className="border-left border-gray-300" />
            <div className="px-5">
              <h3 className="mb-0">
                <span
                  data-countup='{"startVal": 0}'
                  data-to={24}
                  data-aos
                  data-aos-id="countup:in"
                />
                /
                <span
                  data-countup='{"startVal": 0}'
                  data-to={7}
                  data-aos
                  data-aos-id="countup:in"
                />
              </h3>
              <p className="text-gray-700 mb-0">Support</p>
            </div>
            <div className="border-left border-gray-300" />
            <div className="pl-5">
              <h3 className="mb-0">
                <span
                  data-countup='{"startVal": 0}'
                  data-to={100}
                  data-aos
                  data-aos-id="countup:in"
                />
                k+
              </h3>
              <p className="text-gray-700 mb-0">Sales</p>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </section>
  {/* PRICING */}
  <section className="pt-9 pt-md-12 bg-gray-200">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 text-center">
          {/* Heading */}
          <h1>Fair, simple pricing for all.</h1>
          {/* Text */}
          <p className="lead text-gray-700">
            All types of businesses need access to development resources, so we
            give you the option to decide how much you need to use.
          </p>
          {/* Form */}
          <form className="d-flex align-items-center justify-content-center mb-7 mb-md-9">
            {/* Label */}
            <span className="text-muted">Annual</span>
            {/* Switch */}
            <div className="form-check form-switch mx-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="billingSwitch"
                data-toggle="price"
                data-target=".price"
              />
            </div>
            {/* Label */}
            <span className="text-muted">Monthly</span>
          </form>
        </div>
      </div>{" "}
      {/* / .row */}
      <div className="row align-items-center gx-0">
        <div className="col-12 col-md-6">
          {/* Card */}
          <div
            className="card rounded-lg shadow-lg mb-6 mb-md-0"
            style={{ zIndex: 1 }}
            data-aos="fade-up"
          >
            {/* Body */}
            <div className="card-body py-6 py-md-8">
              <div className="row justify-content-center">
                <div className="col-12 col-xl-9">
                  {/* Badge */}
                  <div className="text-center mb-5">
                    <span className="badge rounded-pill bg-primary-soft">
                      <span className="h6 font-weight-bold text-uppercase">
                        Standard
                      </span>
                    </span>
                  </div>
                  {/* Price */}
                  <div className="d-flex justify-content-center">
                    <span className="h2 mb-0 mt-2">$</span>
                    <span
                      className="price display-2 mb-0"
                      data-annual={29}
                      data-monthly={49}
                    >
                      29
                    </span>
                    <span className="h2 align-self-end mb-1">/mo</span>
                  </div>
                  {/* Text */}
                  <p className="text-center text-muted mb-6 mb-md-8">
                    per seat
                  </p>
                  {/* Features */}
                  <div className="d-flex">
                    {/* Check */}
                    <div className="badge badge-rounded-circle bg-success-soft mt-1 mr-4">
                      <i className="fe fe-check" />
                    </div>
                    {/* Text */}
                    <p>Rich, responsive landing pages</p>
                  </div>
                  <div className="d-flex">
                    {/* Check */}
                    <div className="badge badge-rounded-circle bg-success-soft mt-1 mr-4">
                      <i className="fe fe-check" />
                    </div>
                    {/* Text */}
                    <p>100+ styled components</p>
                  </div>
                  <div className="d-flex">
                    {/* Check */}
                    <div className="badge badge-rounded-circle bg-success-soft mt-1 mr-4">
                      <i className="fe fe-check" />
                    </div>
                    {/* Text */}
                    <p>Flexible, simple license</p>
                  </div>
                  <div className="d-flex">
                    {/* Check */}
                    <div className="badge badge-rounded-circle bg-success-soft mt-1 mr-4">
                      <i className="fe fe-check" />
                    </div>
                    {/* Text */}
                    <p>Speedy build tooling</p>
                  </div>
                  <div className="d-flex">
                    {/* Check */}
                    <div className="badge badge-rounded-circle bg-success-soft mt-1 mr-4">
                      <i className="fe fe-check" />
                    </div>
                    {/* Text */}
                    <p className="mb-0">6 months free support included</p>
                  </div>
                </div>
              </div>{" "}
              {/* / .row */}
            </div>
            {/* Button */}
            <a href="#!" className="card-btn btn btn-block btn-lg btn-primary">
              Get it now
            </a>
          </div>
        </div>
        <div className="col-12 col-md-6 ml-md-n3">
          {/* Card */}
          <div
            className="card rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            {/* Body */}
            <div className="card-body py-6 py-md-8">
              <div className="row justify-content-center">
                <div className="col-12 col-xl-10">
                  {/* Badge */}
                  <p className="text-center mb-8 mb-md-11">
                    <span className="badge rounded-pill bg-primary-soft">
                      <span className="h6 font-weight-bold text-uppercase">
                        Enterprise
                      </span>
                    </span>
                  </p>
                  {/* Text */}
                  <p className="lead text-center text-muted mb-0 mb-md-10">
                    We offer variable pricing with discounts for larger
                    organizations. Get in touch with us and we’ll figure out
                    something that works for everyone.
                  </p>
                </div>
              </div>{" "}
              {/* / .row */}
            </div>
            {/* Button */}
            <a
              href="#!"
              className="card-btn btn btn-block btn-lg btn-light bg-gray-300 text-gray-700"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </section>
  {/* SHAPE */}
  <div className="position-relative mt-n15">
    <div className="shape shape-bottom shape-fluid-x svg-shim text-dark">
      {"{"}
      {"{"}&gt; curves/curve-1{"}"}
      {"}"}
    </div>
  </div>
  {/* FAQ */}
  <section className="pt-15 bg-dark">
    <div className="container pt-8 pt-md-11">
      <div className="row">
        <div className="col-12 col-md-6">
          {/* Item */}
          <div className="d-flex">
            {/* Badge */}
            <div className="badge badge-lg badge-rounded-circle bg-success">
              <span>?</span>
            </div>
            <div className="ml-5">
              {/* Heading */}
              <h4 className="text-white">Can I use Landkit for my clients?</h4>
              {/* Text */}
              <p className="text-muted mb-6 mb-md-8">
                Absolutely. The Bootstrap Themes license allows you to build a
                website for personal use or for a client.
              </p>
            </div>
          </div>
          {/* Item */}
          <div className="d-flex">
            {/* Badge */}
            <div className="badge badge-lg badge-rounded-circle bg-success">
              <span>?</span>
            </div>
            <div className="ml-5">
              {/* Heading */}
              <h4 className="text-white">Do I get free updates?</h4>
              {/* Text */}
              <p className="text-muted mb-6 mb-md-0">
                Yes. We update all of our themes with each Bootstrap update,
                plus are constantly adding new components, pages, and features
                to our themes.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          {/* Item */}
          <div className="d-flex">
            {/* Badge */}
            <div className="badge badge-lg badge-rounded-circle bg-success">
              <span>?</span>
            </div>
            <div className="ml-5">
              {/* Heading */}
              <h4 className="text-white">Is there a money back guarantee?</h4>
              {/* Text */}
              <p className="text-muted mb-6 mb-md-8">
                Yup! Bootstrap Themes come with a satisfaction guarantee. Submit
                a return and get your money back.
              </p>
            </div>
          </div>
          {/* Item */}
          <div className="d-flex">
            {/* Badge */}
            <div className="badge badge-lg badge-rounded-circle bg-success">
              <span>?</span>
            </div>
            <div className="ml-5">
              {/* Heading */}
              <h4 className="text-white">
                Does it work with Rails? React? Laravel?
              </h4>
              {/* Text */}
              <p className="text-muted mb-6 mb-md-0">
                Yes. Landkit has basic CSS/JS files you can include. If you want
                to enable deeper customization, you can integrate it into your
                assets pipeline or build processes.
              </p>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </section>
  {/* CTA */}
  <section className="py-8 py-md-11 bg-dark">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 text-center">
          {/* Badge */}
          <span className="badge rounded-pill bg-gray-700-soft mb-4">
            <span className="h6 font-weight-bold text-uppercase">
              Get started
            </span>
          </span>
          {/* Heading */}
          <h1 className="display-4 text-white">
            Get Landkit and save your time.
          </h1>
          {/* Text */}
          <p className="font-size-lg text-muted mb-6 mb-md-8">
            Stop wasting time trying to do it the "right way" and build a site
            from scratch. Landkit is faster, easier, and you still have complete
            control.
          </p>
          {/* Button */}
          <a
            href="https://themes.getbootstrap.com/product/landkit/"
            target="_blank"
            className="btn btn-success lift"
          >
            Buy it now <i className="fe fe-arrow-right" />
          </a>
        </div>
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </section>
</div>

  )
}
