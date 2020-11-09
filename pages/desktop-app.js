import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


export default function DesktopApp() {
  return (
    <div>
  {/* WELCOME */}
  <section className="position-relative py-8 py-md-11 mb-9">
    {/* Shape */}
    <div className="shape shape-fluid-x shape-blur-1 svg-shim text-gray-200">
      {"{"}
      {"{"}&gt; blurs/blur-1{"}"}
      {"}"}
    </div>
    {/* Contetn */}
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 order-md-2">
          {/* Image */}
          <div className="img-skewed img-skewed-left mb-8 mb-md-0">
            <img
              src="assets/img/screenshots/desktop/dashkit.jpg"
              alt="..."
              className="screenshot img-fluid mw-md-130"
              data-aos="img-skewed-item-left"
              data-aos-delay={100}
            />
          </div>
        </div>
        <div className="col-12 col-md-6 order-md-1" data-aos="fade-up">
          {/* Heading */}
          <h1 className="display-3">
            Beautiful analytics <br />
            <span className="text-primary">built with Dashkit</span>.
          </h1>
          {/* Text */}
          <p className="lead text-muted mb-6 mb-md-8">
            Intelligent developers use our Dashkit theme to build their internal
            tools and client admin applications. Save yourself time and money.
          </p>
          {/* Buttons */}
          <a href="#!" className="btn btn-primary mr-1 lift">
            Start for free <i className="fe fe-arrow-right ml-3" />
          </a>
          <a href="#!" className="btn btn-primary-soft lift">
            Learn more
          </a>
        </div>
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </section>
  {/* TESTIMONIALS */}
  <section>
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-12 col-md">
          {/* Blockquote */}
          <blockquote className="blockquote mb-8 mb-md-0">
            {/* Logo */}
            <div
              className="img-fluid mb-5 mb-md-6 svg-shim"
              style={{ maxWidth: 120, color: "#FF5A5F" }}
            >
              {"{"}
              {"{"}&gt; logotype/airbnb{"}"}
              {"}"}
            </div>
            {/* Text */}
            <p className="lead text-gray-700 mb-5 mb-md-7">
              "A very simple and modern template with a very harmonious color
              scheme. Also the additional plugins like the statistics are great
              and fit perfectly into the overall picture."
            </p>
            {/* Footer */}
            <p className="font-size-sm font-weight-bold mb-0">Bernhard</p>
            <p className="font-size-sm text-muted mb-0">Dashkit customer</p>
          </blockquote>
        </div>
        <div className="col-1" />
        <div className="col-1 border-left" />
        <div className="col-12 col-md">
          {/* Blockquote */}
          <blockquote className="blockquote mb-0">
            {/* Logo */}
            <div
              className="img-fluid mb-5 mb-md-6 svg-shim"
              style={{ maxWidth: 120, color: "#0081C9" }}
            >
              {"{"}
              {"{"}&gt; logotype/coinbase{"}"}
              {"}"}
            </div>
            {/* Text */}
            <p className="lead text-gray-700 mb-5 mb-md-7">
              “This has been my best theme purchase so far. Simple, beautiful,
              and I haven't had to make any major changes. It plays well with my
              changes as well, which is really nice!”
            </p>
            {/* Footer */}
            <p className="font-size-sm font-weight-bold mb-0">Francisco</p>
            <p className="font-size-sm text-muted mb-0">Dashkit customer</p>
          </blockquote>
        </div>
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </section>
  {/* HUB */}
  <section className="pt-8 pt-md-12 pb-10 pb-md-14 pb-lg-15">
    <div className="container">
      <div className="row align-items-center justify-content-between">
        <div className="col-12 col-md-6">
          {/* Image */}
          <div className="img-skewed img-skewed-right mb-10 mb-md-0">
            <img
              src="assets/img/screenshots/ui/dashkit-layered.png"
              alt="..."
              className="img-fluid"
              data-aos="img-skewed-item-right"
            />
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-5">
          {/* Heading */}
          <h2>
            Use flexible components
            <br />
            <span className="text-primary">to build an app quickly.</span>
          </h2>
          {/* Text */}
          <p className="font-size-lg text-gray-700 mb-6">
            Dashkit styles and extends Bootstrap components, but also included
            brand new dashboard focused components.
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
                >
                  0
                </span>
                +
              </h3>
              <p className="text-gray-700 mb-0">Components</p>
            </div>
            <div className="border-left border-gray-300" />
            <div className="px-5">
              <h3 className="mb-0">
                <span
                  data-countup='{"startVal": 0, "decimalPlaces": 2}'
                  data-to="99.99"
                  data-aos
                  data-aos-id="countup:in"
                >
                  0.00
                </span>
                %
              </h3>
              <p className="text-gray-700 mb-0">Satisfaction</p>
            </div>
            <div className="border-left border-gray-300" />
            <div className="pl-5">
              <h3 className="mb-0">
                <span
                  data-countup='{"startVal": 0, "decimalPlaces": 1}'
                  data-to={5.0}
                  data-aos
                  data-aos-id="countup:in"
                >
                  0.0
                </span>
                /5.0
              </h3>
              <p className="text-gray-700 mb-0">Review Score</p>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </section>
  {/* SHAPE */}
  <div className="position-relative">
    <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
      {"{"}
      {"{"}&gt; curves/curve-3{"}"}
      {"}"}
    </div>
  </div>
  {/* SUPPORT */}
  <section className="pt-10 pt-lg-9 pb-md-14 pb-lg-15 bg-white">
    <div className="container">
      <div className="row align-items-center justify-content-between">
        <div className="col-12 col-md-6 col-lg-5">
          {/* Badge */}
          <span className="badge rounded-pill bg-success-soft mb-3">
            <span className="h6 text-uppercase">Support</span>
          </span>
          {/* Heading */}
          <h2>
            Our friendly support team <br />
            <span className="text-success">will help you with anything</span>.
          </h2>
          {/* Text */}
          <p className="font-size-lg text-gray-700 mb-6">
            We aim to take care of you. Need help with installation, find a bug,
            or just need a clarifiction about our documentation? We'll be there
            to lend a helping hand.
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
                <p className="text-success">Speedy</p>
              </div>
              {/* Item */}
              <div className="d-flex">
                {/* Check */}
                <div className="badge badge-rounded-circle bg-success-soft mt-1 mr-4">
                  <i className="fe fe-check" />
                </div>
                <p className="text-success mb-lg-0">Global team</p>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              {/* Item */}
              <div className="d-flex">
                {/* Check */}
                <span className="badge badge-rounded-circle bg-success-soft mt-1 mr-4">
                  <i className="fe fe-check" />
                </span>
                {/* Text */}
                <p className="text-success">5-star reviews</p>
              </div>
              {/* Item */}
              <div className="d-flex">
                {/* Check */}
                <div className="badge badge-rounded-circle bg-success-soft mr-1 mr-4">
                  <i className="fe fe-check" />
                </div>
                {/* Text */}
                <p className="text-success mb-0">Good looking</p>
              </div>
            </div>
          </div>{" "}
          {/* / .row */}
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
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </section>
  {/* CURVE */}
  <div className="position-relative">
    <div className="shape shape-bottom shape-fluid-x svg-shim text-light">
      {"{"}
      {"{"}&gt; curves/curve-6{"}"}
      {"}"}
    </div>
  </div>
  {/* CUSTOMIZE */}
  <section className="pt-9 pt-md-8">
    <div className="container">
      <div className="row align-items-center justify-content-between">
        <div className="col-12 col-md-6 col-lg-5 order-md-2">
          {/* Badge */}
          <span className="badge rounded-pill bg-primary-soft mb-3">
            <span className="h6 text-uppercase">Customize</span>
          </span>
          {/* Heading */}
          <h2>
            Customize your product. <br />
            <span className="text-primary">There's even night mode</span>.
          </h2>
          {/* Text */}
          <p className="font-size-lg text-gray-700 mb-8 mb-md-0">
            Through the use of variables and a few config options you can
            completely change the look and feel of Dashkit. There's even an
            option to use an inverted color scheme.
          </p>
        </div>
        <div className="col-12 col-md-6 order-md-1" data-aos="fade-up">
          {/* Macbook */}
          <div className="w-100 w-md-130 float-right mb-6 mb-md-0">
            {/* Shape */}
            <div className="shape shape-blur-4 svg-shim text-gray-200">
              {"{"}
              {"{"}&gt; blurs/blur-4{"}"}
              {"}"}
            </div>
            {/* Device */}
            <div className="device device-macbook">
              <img
                src="assets/img/screenshots/desktop/dashkit-alt-dark.jpg"
                className="device-screen"
                alt="..."
              />
              <img
                src="assets/img/devices/macbook.svg"
                className="img-fluid"
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
  {/* PRICING */}
  <section className="pt-9 pb-10 py-md-11">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 text-center">
          {/* Badge */}
          <span className="badge rounded-pill bg-success-soft mb-3">
            <span className="h6 text-uppercase">Pricing</span>
          </span>
          {/* Heading */}
          <h2>
            Our pricing is incredibly{" "}
            <span className="text-success">simple and flexible.</span>
          </h2>
          {/* Text */}
          <p className="lead text-gray-700">
            Companies of all sizes need access to Dashkit, so we have a flexible
            pricing system for any size of project or company.
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
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-5">
          {/* Card */}
          <div className="card card-border card-border-xl border-success shadow-light-lg mb-6 mb-md-0 lift lift-lg">
            <div className="card-body">
              {/* Badge */}
              <h6 className="font-weight-bold text-uppercase text-center text-success mb-5">
                Standard
              </h6>
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
              <p className="text-center text-muted mb-6 mb-md-8">per seat</p>
              {/* List */}
              <div className="d-flex">
                {/* Badge */}
                <span className="badge badge-rounded-circle bg-success-soft mt-1 mr-4">
                  <i className="fe fe-check" />
                </span>
                {/* Text */}
                <p>Single project use</p>
              </div>
              <div className="d-flex">
                {/* Badge */}
                <span className="badge badge-rounded-circle bg-success-soft mt-1 mr-4">
                  <i className="fe fe-check" />
                </span>
                {/* Text */}
                <p>All components included</p>
              </div>
              <div className="d-flex">
                {/* Badge */}
                <span className="badge badge-rounded-circle bg-success-soft mt-1 mr-4">
                  <i className="fe fe-check" />
                </span>
                {/* Text */}
                <p>All pages included</p>
              </div>
              <div className="d-flex">
                {/* Badge */}
                <span className="badge badge-rounded-circle bg-success-soft mt-1 mr-4">
                  <i className="fe fe-check" />
                </span>
                {/* Text */}
                <p className="mb-0">6 months of support</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-5">
          {/* Card */}
          <div className="card card-border card-border-xl border-dark shadow-light-lg lift lift-lg">
            <div className="card-body">
              {/* Badge */}
              <h6 className="font-weight-bold text-uppercase text-center mb-5">
                Extended
              </h6>
              {/* Price */}
              <div className="d-flex justify-content-center">
                <span className="h2 mb-0 mt-2">$</span>
                <span
                  className="price display-2 mb-0"
                  data-annual={49}
                  data-monthly={69}
                >
                  49
                </span>
                <span className="h2 align-self-end mb-1">/mo</span>
              </div>
              {/* Text */}
              <p className="text-center text-muted mb-6 mb-md-8">per seat</p>
              {/* List */}
              <div className="d-flex">
                {/* Badge */}
                <span className="badge badge-rounded-circle bg-success-soft mt-1 mr-4">
                  <i className="fe fe-check" />
                </span>
                {/* Text */}
                <p>Single project use</p>
              </div>
              <div className="d-flex">
                {/* Badge */}
                <span className="badge badge-rounded-circle bg-success-soft mt-1 mr-4">
                  <i className="fe fe-check" />
                </span>
                {/* Text */}
                <p>All components included</p>
              </div>
              <div className="d-flex">
                {/* Badge */}
                <span className="badge badge-rounded-circle bg-success-soft mt-1 mr-4">
                  <i className="fe fe-check" />
                </span>
                {/* Text */}
                <p>All pages included</p>
              </div>
              <div className="d-flex">
                {/* Badge */}
                <span className="badge badge-rounded-circle bg-success-soft mt-1 mr-4">
                  <i className="fe fe-check" />
                </span>
                {/* Text */}
                <p>6 months of support</p>
              </div>
              <div className="d-flex">
                {/* Badge */}
                <span className="badge badge-rounded-circle bg-success-soft mt-1 mr-4">
                  <i className="fe fe-check" />
                </span>
                {/* Text */}
                <p>Unlimited users</p>
              </div>
              <div className="d-flex">
                {/* Badge */}
                <span className="badge badge-rounded-circle bg-success-soft mt-1 mr-4">
                  <i className="fe fe-check" />
                </span>
                {/* Text */}
                <p className="mb-0">Free hugs</p>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </section>
  {/* BRANDS */}
  <section className="py-6 py-md-8 bg-primary-desat">
    <div className="container">
      <div
        className="flickity-viewport-visible"
        data-flickity='{"imagesLoaded": true, "initialIndex": 6, "pageDots": false, "prevNextButtons": false, "contain": true}'
      >
        <div className="col-4 col-md-3 col-lg-2">
          {/* Brand */}
          <div className="img-fluid svg-shim text-white">
            {"{"}
            {"{"}&gt; logotype/airbnb{"}"}
            {"}"}
          </div>
        </div>
        <div className="col-4 col-md-3 col-lg-2">
          {/* Brand */}
          <div className="img-fluid svg-shim text-white">
            {"{"}
            {"{"}&gt; logotype/coinbase{"}"}
            {"}"}
          </div>
        </div>
        <div className="col-4 col-md-3 col-lg-2">
          {/* Brand */}
          <div className="img-fluid svg-shim text-white">
            {"{"}
            {"{"}&gt; logotype/dribbble{"}"}
            {"}"}
          </div>
        </div>
        <div className="col-4 col-md-3 col-lg-2">
          {/* Brand */}
          <div className="img-fluid svg-shim text-white">
            {"{"}
            {"{"}&gt; logotype/instagram{"}"}
            {"}"}
          </div>
        </div>
        <div className="col-4 col-md-3 col-lg-2">
          {/* Brand */}
          <div className="img-fluid svg-shim text-white">
            {"{"}
            {"{"}&gt; logotype/netflix{"}"}
            {"}"}
          </div>
        </div>
        <div className="col-4 col-md-3 col-lg-2">
          {/* Brand */}
          <div className="img-fluid svg-shim text-white">
            {"{"}
            {"{"}&gt; logotype/pinterest{"}"}
            {"}"}
          </div>
        </div>
        <div className="col-4 col-md-3 col-lg-2">
          {/* Brand */}
          <div className="img-fluid svg-shim text-white">
            {"{"}
            {"{"}&gt; logotype/airbnb{"}"}
            {"}"}
          </div>
        </div>
        <div className="col-4 col-md-3 col-lg-2">
          {/* Brand */}
          <div className="img-fluid svg-shim text-white">
            {"{"}
            {"{"}&gt; logotype/coinbase{"}"}
            {"}"}
          </div>
        </div>
        <div className="col-4 col-md-3 col-lg-2">
          {/* Brand */}
          <div className="img-fluid svg-shim text-white">
            {"{"}
            {"{"}&gt; logotype/dribbble{"}"}
            {"}"}
          </div>
        </div>
        <div className="col-4 col-md-3 col-lg-2">
          {/* Brand */}
          <div className="img-fluid svg-shim text-white">
            {"{"}
            {"{"}&gt; logotype/instagram{"}"}
            {"}"}
          </div>
        </div>
        <div className="col-4 col-md-3 col-lg-2">
          {/* Brand */}
          <div className="img-fluid svg-shim text-white">
            {"{"}
            {"{"}&gt; logotype/netflix{"}"}
            {"}"}
          </div>
        </div>
        <div className="col-4 col-md-3 col-lg-2">
          {/* Brand */}
          <div className="img-fluid svg-shim text-white">
            {"{"}
            {"{"}&gt; logotype/pinterest{"}"}
            {"}"}
          </div>
        </div>
      </div>
    </div>{" "}
    {/* / .container */}
  </section>
  {/* CTA */}
  <section
    className="py-10 py-md-14 bg-dark"
    style={{ backgroundImage: "url(assets/img/patterns/pattern-1.svg)" }}
  >
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 text-center">
          {/* Badge */}
          <span className="badge rounded-pill bg-gray-700-soft mb-3">
            <span className="h6 text-uppercase">Get it done</span>
          </span>
          {/* Heading */}
          <h1 className="display-4 text-white">
            Get Dashkit and save your time.
          </h1>
          {/* Text */}
          <p className="font-size-lg text-muted mb-6 mb-md-8">
            Stop wasting time trying to do it the "right way" and build your app
            from scratch. Dashkit is faster, easier, and you still have complete
            control.
          </p>
          {/* Button */}
          <a href="#!" className="btn btn-primary-desat lift">
            Check it out <i className="fe fe-arrow-right ml-2" />
          </a>
        </div>
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </section>
  {/* CURVE */}
  <div className="position-relative">
    <div className="shape shape-bottom shape-fluid-x svg-shim text-gray-200">
      {"{"}
      {"{"}&gt; curves/curve-1{"}"}
      {"}"}
    </div>
  </div>
</div>
  )
}
