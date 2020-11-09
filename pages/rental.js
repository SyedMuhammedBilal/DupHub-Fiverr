import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


export default function Rental() {
  return (
    <div>
  <section
    data-jarallax
    data-speed=".8"
    className="pt-10 pt-md-14 pb-12 pb-md-15 overlay overlay-primary overlay-80 jarallax"
    style={{ backgroundImage: "url(assets/img/covers/cover-6.jpg)" }}
  >
    {/* Content */}
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 text-center">
          {/* Heading */}
          <h1 className="display-1 font-weight-bold text-white mb-6 mt-n3">
            Rent your home within minutes
          </h1>
          {/* Button */}
          <a
            className="btn btn-pill btn-white shadow lift"
            data-bigpicture='{"ytSrc": "9I-Y6VQ6tyI"}'
            href="#"
          >
            <i className="fe fe-eye mr-2" />
            Watch us work
          </a>
        </div>
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
    {/* Shape */}
    <div className="position-absolute right-0 bottom-0 left-0">
      {/* Shape */}
      <div className="position-relative shape shape-bottom shape-fluid-x svg-shim text-white">
        {"{"}
        {"{"}&gt; angles/angle-bottom{"}"}
        {"}"}
      </div>
      {/* Button */}
      <div className="position-absolute center">
        <a
          className="btn btn-light btn-rounded-circle lift"
          data-scroll
          href="#payItDown"
        >
          <i className="fe fe-arrow-down" />
        </a>
      </div>
    </div>
  </section>
  {/* PAY IT DOWN */}
  <section className="pt-8 pt-md-11" id="payItDown">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 text-center">
          {/* Badge */}
          <span className="badge rounded-pill bg-primary-soft mb-3">
            <span className="h6 text-uppercase">Pay it down</span>
          </span>
          {/* Heading */}
          <h1>
            Earn revenue while{" "}
            <span className="text-primary">enjoying a vacation.</span>
          </h1>
          {/* Text */}
          <p className="lead text-gray-700 mb-7 mb-md-9">
            Anytime you leave your home vacant, you're wasting potential
            earnings! Rent it out for an hour or a day at a time.
          </p>
        </div>
      </div>{" "}
      {/* / .row */}
      <div className="row align-items-center">
        <div className="col-12 col-md-6 col-lg-7">
          {/* Screenshot */}
          <div className="mb-8 mb-md-0">
            {/* Image */}
            <img
              src="assets/img/screenshots/desktop/rental.jpg"
              alt="..."
              className="screenshot img-fluid mw-md-110 float-right mr-md-6 mb-6 mb-md-0"
            />
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-5">
          {/* List */}
          <div className="d-flex">
            {/* Badge */}
            <div className="badge badge-lg badge-rounded-circle bg-primary-soft mt-1">
              <span>1</span>
            </div>
            {/* Body */}
            <div className="ml-5">
              {/* Heading */}
              <h3>Sign up</h3>
              {/* Text */}
              <p className="text-gray-700 mb-6">
                It takes a few minutes to add your information and home's
                photos.
              </p>
            </div>
          </div>
          <div className="d-flex">
            {/* Badge */}
            <div className="badge badge-lg badge-rounded-circle bg-primary-soft mt-1">
              <span>2</span>
            </div>
            {/* Body */}
            <div className="ml-5">
              {/* Heading */}
              <h3>List your homes</h3>
              {/* Text */}
              <p className="text-gray-700 mb-6">
                Let us know where your homes are located and when they're
                available.
              </p>
            </div>
          </div>
          <div className="d-flex">
            {/* Badge */}
            <div className="badge badge-lg badge-rounded-circle bg-primary-soft mt-1">
              <span>3</span>
            </div>
            {/* Body */}
            <div className="ml-5">
              {/* Heading */}
              <h3>Start welcoming guests</h3>
              {/* Text */}
              <p className="text-gray-700 mb-0">
                Get ready for an influx of guests and easy passive income.
              </p>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </section>
  {/* PRICING */}
  <section className="py-8 py-md-12">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12 col-md-6">
          {/* Badge */}
          <span className="badge rounded-pill bg-primary-soft mb-3">
            <span className="h6 text-uppercase">Pricing</span>
          </span>
          {/* Heading */}
          <h2>
            Don't worry about pricing. <br />
            <span className="text-primary">We maximize your earnings</span>.
          </h2>
          {/* Text */}
          <p className="font-size-lg text-gray-700 mb-6">
            Instead of constantly worrying about when your home will be in
            demand, just share your availability and we will price based on
            popularity of your listing, seasonal factors, nearby events, and
            more.
          </p>
          {/* List */}
          <div className="row">
            <div className="col-12 col-lg-6">
              {/* Item */}
              <div className="d-flex">
                {/* Check */}
                <div className="badge badge-rounded-circle bg-primary-soft mt-1 mr-4">
                  <i className="fe fe-check" />
                </div>
                {/* Text */}
                <p>35% more earned</p>
              </div>
              {/* Item */}
              <div className="d-flex">
                {/* Check */}
                <div className="badge badge-rounded-circle bg-primary-soft mt-1 mr-4">
                  <i className="fe fe-check" />
                </div>
                <p className="mb-lg-0">No wasted time</p>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              {/* Item */}
              <div className="d-flex">
                {/* Check */}
                <span className="badge badge-rounded-circle bg-primary-soft mt-1 mr-4">
                  <i className="fe fe-check" />
                </span>
                {/* Text */}
                <p>60% less vacancy</p>
              </div>
              {/* Item */}
              <div className="d-flex">
                {/* Check */}
                <div className="badge badge-rounded-circle bg-primary-soft mr-1 mr-4">
                  <i className="fe fe-check" />
                </div>
                {/* Text */}
                <p className="mb-0">Data driven</p>
              </div>
            </div>
          </div>{" "}
          {/* / .row */}
        </div>
        <div className="col-12 col-md-6">
          {/* Image */}
          <img
            src="assets/img/illustrations/illustration-3.png"
            alt="..."
            className="img-fluid mw-md-130"
          />
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
  {/* BLOG */}
  <section className="py-8 py-md-11 bg-gradient-light border-bottom">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 text-center">
          {/* Badge */}
          <span className="badge rounded-pill bg-primary-soft mb-3">
            <span className="h6 text-uppercase">Our blog</span>
          </span>
          {/* Heading */}
          <h1>Stay up to date with rentals.</h1>
          {/* Text */}
          <p className="font-size-lg text-muted mb-7 mb-md-9">
            We share common trends and strategies for improving your rental
            income and making sure you stay in high demand.
          </p>
        </div>
      </div>{" "}
      {/* / .row */}
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4 d-flex">
          {/* Card */}
          <div
            className="card mb-6 mb-lg-0 pt-14 overlay overlay-black overlay-30 bg-cover shadow-light-lg lift lift-lg"
            style={{ backgroundImage: "url(assets/img/photos/photo-8.jpg)" }}
          >
            {/* Body */}
            <a className="card-body mt-auto" href="#!">
              {/* Heading */}
              <h3 className="text-white">
                Using Unsplash to improve your listing visibility
              </h3>
              {/* Text */}
              <p className="mb-0 text-white">
                Using free stock photos of your surrounding areas can skyrocket
                your popularity.
              </p>
            </a>
            {/* Meta */}
            <a className="card-meta" href="#!">
              {/* Divider */}
              <hr className="card-meta-divider bg-white-20" />
              {/* Avatar */}
              <div className="avatar avatar-sm mr-2">
                <img
                  src="assets/img/avatars/avatar-1.jpg"
                  alt="..."
                  className="avatar-img rounded-circle"
                />
              </div>
              {/* Author */}
              <h6 className="text-uppercase text-white-80 mr-2 mb-0">
                Casey Fyfe
              </h6>
              {/* Date */}
              <p className="h6 text-uppercase text-white-80 mb-0 ml-auto">
                <time dateTime="2019-05-02">May 02</time>
              </p>
            </a>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 d-flex">
          {/* Card */}
          <div className="card mb-6 mb-lg-0 shadow-light-lg lift lift-lg">
            {/* Image */}
            <a className="card-img-top" href="#!">
              <img
                src="assets/img/photos/photo-7.jpg"
                alt="..."
                className="img-fluid"
              />
            </a>
            {/* Shape */}
            <div className="position-relative">
              <div className="shape shape-fluid-x shape-bottom svg-shim text-white">
                {"{"}
                {"{"}&gt; curves/curve-1{"}"}
                {"}"}
              </div>
            </div>
            {/* Body */}
            <a className="card-body" href="#!">
              {/* Heading */}
              <h3>Photos should appeal to a sense of adventure</h3>
              {/* Text */}
              <p className="mb-0 text-muted">
                Cozy vibes are out and this summer you should focus on making
                customer's feel brave.
              </p>
            </a>
            {/* Meta */}
            <a className="card-meta" href="#!">
              {/* Divider */}
              <hr className="card-meta-divider" />
              {/* Avatar */}
              <div className="avatar avatar-sm mr-2">
                <img
                  src="assets/img/avatars/avatar-1.jpg"
                  alt="..."
                  className="avatar-img rounded-circle"
                />
              </div>
              {/* Author */}
              <h6 className="text-uppercase text-muted mr-2 mb-0">
                Danny Devito
              </h6>
              {/* Date */}
              <p className="h6 text-uppercase text-muted mb-0 ml-auto">
                <time dateTime="2019-05-02">May 02</time>
              </p>
            </a>
          </div>
        </div>
        <div className="col-12 col-lg-4 d-flex">
          {/* Card */}
          <div className="card shadow-light-lg lift lift-lg">
            {/* Body */}
            <a className="card-body my-auto" href="#!">
              {/* Heading */}
              <h3 className="mt-auto">
                It's the little touches that make memories.
              </h3>
              {/* Text */}
              <p className="mb-0 text-muted">
                Once you have your rental posted, you should focus on how you
                can differentiate your home with little touches. Chocolates,
                specialty coffee, fast wifi, nice toiletries, or a personal
                note. Small touches can make a huge difference.
              </p>
            </a>
            {/* Meta */}
            <a className="card-meta" href="#!">
              {/* Divider */}
              <hr className="card-meta-divider" />
              {/* Avatar */}
              <div className="avatar avatar-sm mr-2">
                <img
                  src="assets/img/avatars/avatar-1.jpg"
                  alt="..."
                  className="avatar-img rounded-circle"
                />
              </div>
              {/* Author */}
              <h6 className="text-uppercase text-muted mr-2 mb-0">
                Dave Gamache
              </h6>
              {/* Date */}
              <p className="h6 text-uppercase text-muted mb-0 ml-auto">
                <time dateTime="2019-05-02">May 02</time>
              </p>
            </a>
          </div>
        </div>
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </section>
  {/* TESTIMONIALS */}
  <section className="py-8 py-md-11">
    <div className="container">
      <div className="row align-items-stretch">
        <div className="col-12 col-md-5">
          {/* Blockquote */}
          <blockquote className="blockquote text-center">
            {/* Logo */}
            <div
              className="img-fluid mb-5 mb-md-7 mx-auto svg-shim"
              style={{ maxWidth: 120, color: "#FF5A5F" }}
            >
              {"{"}
              {"{"}&gt; logotype/airbnb{"}"}
              {"}"}
            </div>
            {/* Text */}
            <p className="mb-5 mb-md-7">
              "It was incredibly easy to post the unused apartment above my
              garage for rent and have since been paying my mortgage with the
              proceeds.”
            </p>
            {/* Footer */}
            <footer className="blockquote-footer mb-8 mb-md-0">
              <div className="avatar mr-3">
                <img
                  src="assets/img/avatars/avatar-2.jpg"
                  className="avatar-img rounded-circle"
                  alt="..."
                />
              </div>{" "}
              <span className="h6 text-uppercase">Bill Callan</span>
            </footer>
          </blockquote>
        </div>
        <div className="col-12 col-md-1 border-right my-n8 my-md-n11 d-none d-md-block" />
        <div className="col-12 col-md-5 offset-md-1">
          {/* Blockquote */}
          <blockquote className="blockquote text-center">
            {/* Logo */}
            <div
              className="img-fluid mb-5 mb-md-7 mx-auto svg-shim"
              style={{ maxWidth: 120, color: "#CB2027" }}
            >
              {"{"}
              {"{"}&gt; logotype/pinterest{"}"}
              {"}"}
            </div>
            {/* Text */}
            <p className="mb-5 mb-md-7">
              “If you're going on vacation, you might as well get paid while you
              travel! Share your home with others and return to a nice paycheck
              when you arrive home.”
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
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </section>
  {/* CTA */}
  <section
    data-jarallax
    data-speed=".8"
    className="py-12 py-md-14 overlay overlay-black overlay-80 jarallax"
    style={{ backgroundImage: "url(assets/img/covers/cover-8.jpg)" }}
  >
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-1- col-lg-8 text-center">
          {/* Heading */}
          <h1 className="text-white">Stop leaving money on the table.</h1>
          {/* Text */}
          <p className="font-size-lg text-white-80 mb-6 mb-md-8">
            Post your home today and start entertaining welcome guests and
            collecting a paycheck without ever lifting a finger.
          </p>
          {/* Button */}
          <a href="#!" className="btn btn-pill btn-primary lift">
            Get Started <i className="fe fe-arrow-right ml-2" />
          </a>
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
