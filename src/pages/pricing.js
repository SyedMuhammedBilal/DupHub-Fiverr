import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


export default function Pricing() {
  return (
    <div>
  <section className="pt-8 pt-md-11 pb-10 pb-md-15 bg-primary">
    {/* Shape */}
    <div className="shape shape-blur-3 svg-shim text-white">
      {"{"}
      {"{"}&gt; blurs/blur-3{"}"}
      {"}"}
    </div>
    {/* Content */}
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 text-center">
          {/* Heading */}
          <h1 className="display-2 text-white">Simple, fair pricing.</h1>
          {/* Text */}
          <p className="lead text-white-80 mb-6 mb-md-8">
            All types of businesses need access to development resources, so we
            give you the option to decide how much you need to use.
          </p>
          {/* Form */}
          <form className="d-flex align-items-center justify-content-center mb-7 mb-md-9">
            {/* Label */}
            <span className="text-white-80">Annual</span>
            {/* Switch */}
            <div className="form-check form-check-dark form-switch mx-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="billingSwitch"
                data-toggle="price"
                data-target=".price"
              />
            </div>
            {/* Label */}
            <span className="text-white-80">Monthly</span>
          </form>
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
  {/* PRICING */}
  <section className="mt-n8 mt-md-n14">
    <div className="container">
      <div className="row gx-4">
        <div className="col-12 col-md-4">
          {/* Card */}
          <div className="card shadow-lg mb-6 mb-md-0">
            <div className="card-body">
              {/* Preheading */}
              <div className="text-center mb-3">
                <span className="badge rounded-pill bg-primary-soft">
                  <span className="h6 text-uppercase">Basic</span>
                </span>
              </div>
              {/* Price */}
              <div className="d-flex justify-content-center">
                <span className="h2 mb-0 mt-2">$</span>
                <span
                  className="price display-2 mb-0"
                  data-annual={0}
                  data-monthly={0}
                >
                  0
                </span>
                <span className="h2 align-self-end mb-1">/mo</span>
              </div>
              {/* Text */}
              <p className="text-center text-muted mb-5">per seat</p>
              {/* List */}
              <div className="d-flex">
                {/* Badge */}
                <div className="badge badge-rounded-circle bg-success-soft mt-1 mr-4">
                  <i className="fe fe-check" />
                </div>
                {/* Text */}
                <p>Rich landing pages</p>
              </div>
              <div className="d-flex">
                {/* Badge */}
                <div className="badge badge-rounded-circle bg-success-soft mt-1 mr-4">
                  <i className="fe fe-check" />
                </div>
                {/* Text */}
                <p className="mb-5">100+ components</p>
              </div>
              {/* Button */}
              <a href="#!" className="btn btn-block btn-primary-soft">
                Start for free <i className="fe fe-arrow-right ml-3" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          {/* Card */}
          <div className="card shadow-lg mb-6 mb-md-0">
            <div className="card-body">
              {/* Preheading */}
              <div className="text-center mb-3">
                <span className="badge rounded-pill bg-primary-soft">
                  <span className="h6 text-uppercase">Standard</span>
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
              <p className="text-center text-muted mb-5">per seat</p>
              {/* List */}
              <div className="d-flex">
                {/* Badge */}
                <div className="badge badge-rounded-circle bg-success-soft mt-1 mr-4">
                  <i className="fe fe-check" />
                </div>
                {/* Text */}
                <p>Rich landing pages</p>
              </div>
              <div className="d-flex">
                {/* Badge */}
                <div className="badge badge-rounded-circle bg-success-soft mt-1 mr-4">
                  <i className="fe fe-check" />
                </div>
                {/* Text */}
                <p>100+ components</p>
              </div>
              <div className="d-flex">
                {/* Badge */}
                <div className="badge badge-rounded-circle bg-success-soft mt-1 mr-4">
                  <i className="fe fe-check" />
                </div>
                {/* Text */}
                <p>Flexible licensing</p>
              </div>
              <div className="d-flex">
                {/* Badge */}
                <div className="badge badge-rounded-circle bg-success-soft mt-1 mr-4">
                  <i className="fe fe-check" />
                </div>
                {/* Text */}
                <p>Speedy build tooling</p>
              </div>
              <div className="d-flex">
                {/* Badge */}
                <div className="badge badge-rounded-circle bg-success-soft mt-1 mr-4">
                  <i className="fe fe-check" />
                </div>
                {/* Text */}
                <p className="mb-5">6 months free support</p>
              </div>
              {/* Button */}
              <a href="#!" className="btn btn-block btn-primary">
                Start with Standard <i className="fe fe-arrow-right ml-3" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          {/* Card */}
          <div className="card shadow-lg mb-md-0">
            <div className="card-body">
              {/* Preheading */}
              <div className="text-center mb-3">
                <span className="badge rounded-pill bg-primary-soft">
                  <span className="h6 text-uppercase">Premium</span>
                </span>
              </div>
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
              <p className="text-center text-muted mb-5">per seat</p>
              {/* List */}
              <div className="d-flex">
                {/* Badge */}
                <div className="badge badge-rounded-circle bg-success-soft mt-1 mr-4">
                  <i className="fe fe-check" />
                </div>
                {/* Text */}
                <p>Rich landing pages</p>
              </div>
              <div className="d-flex">
                {/* Badge */}
                <div className="badge badge-rounded-circle bg-success-soft mt-1 mr-4">
                  <i className="fe fe-check" />
                </div>
                {/* Text */}
                <p>100+ components</p>
              </div>
              <div className="d-flex">
                {/* Badge */}
                <div className="badge badge-rounded-circle bg-success-soft mt-1 mr-4">
                  <i className="fe fe-check" />
                </div>
                {/* Text */}
                <p>Flexible licensing</p>
              </div>
              <div className="d-flex">
                {/* Badge */}
                <div className="badge badge-rounded-circle bg-success-soft mt-1 mr-4">
                  <i className="fe fe-check" />
                </div>
                {/* Text */}
                <p>Speedy build tooling</p>
              </div>
              <div className="d-flex">
                {/* Badge */}
                <div className="badge badge-rounded-circle bg-success-soft mt-1 mr-4">
                  <i className="fe fe-check" />
                </div>
                {/* Text */}
                <p>6 months free support</p>
              </div>
              <div className="d-flex">
                {/* Badge */}
                <div className="badge badge-rounded-circle bg-success-soft mt-1 mr-4">
                  <i className="fe fe-check" />
                </div>
                {/* Text */}
                <p>256-bit encryption</p>
              </div>
              <div className="d-flex">
                {/* Badge */}
                <div className="badge badge-rounded-circle bg-success-soft mt-1 mr-4">
                  <i className="fe fe-check" />
                </div>
                {/* Text */}
                <p>Guaranteed 100% uptime</p>
              </div>
              <div className="d-flex">
                {/* Badge */}
                <div className="badge badge-rounded-circle bg-success-soft mt-1 mr-4">
                  <i className="fe fe-check" />
                </div>
                {/* Text */}
                <p className="mb-5">Unlimited users</p>
              </div>
              {/* Button */}
              <a href="#!" className="btn btn-block btn-primary-soft">
                Start with Premium <i className="fe fe-arrow-right ml-3" />
              </a>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </section>
  {/* ENTERPRISE */}
  <section className="py-8 py-md-11">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 text-center">
          {/* Badge */}
          <span className="badge rounded-pill bg-primary-desat-soft mb-3">
            <span className="h6 text-uppercase">Enterprise</span>
          </span>
          {/* Heading */}
          <h2>
            Business grade quality{" "}
            <span className="font-weight-bold text-primary-desat">
              for all plans
            </span>
            .
          </h2>
          {/* Text */}
          <p className="font-size-lg text-muted mb-7 mb-md-9">
            Build a beautiful, modern website with our flexible Bootstrap
            components all built from scratch.
          </p>
        </div>
      </div>{" "}
      {/* / .row */}
      <div className="row">
        <div className="col-12 col-md-4 text-center">
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
        <div className="col-12 col-md-4 text-center">
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
        <div className="col-12 col-md-4 text-center">
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
  {/* SHAPE */}
  <div className="position-relative">
    <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
      {"{"}
      {"{"}&gt; curves/curve-1{"}"}
      {"}"}
    </div>
  </div>
  {/* FAQ */}
  <section className="py-8 py-md-11 bg-white border-bottom">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-md-8 text-center">
          {/* Badge */}
          <span className="badge rounded-pill bg-primary-desat-soft mb-3">
            <span className="h6 text-uppercase">FAQ</span>
          </span>
          {/* Heading */}
          <h2>Frequently asked questions.</h2>
          {/* Text */}
          <p className="font-size-lg text-muted mb-7 mb-md-9">
            Let us help answer the most common questions you might have.
          </p>
        </div>
      </div>{" "}
      {/* / .row */}
      <div className="row">
        <div className="col-12 col-md-6">
          {/* Heading */}
          <h3>Can I use Landkit for my clients?</h3>
          {/* Text */}
          <p className="text-gray-800 mb-6 mb-md-8">
            Absolutely. The Bootstrap Themes license allows you to build a
            websites for personal use or for a client. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Donec in nibh nec erat tincidunt
            porta. Donec ac mauris ullamcorper quam ullamcorper cursus eu in
            dui. Aliquam cursus accumsan laoreet.
          </p>
          {/* Heading */}
          <h3>Is there a money back guarantee?</h3>
          {/* Text */}
          <p className="text-gray-800 mb-6 mb-md-8">
            Yup! Bootstrap Themes come with a satisfaction guarantee. Submit a
            return and get your money back. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Donec in nibh nec erat tincidunt porta.
            Donec ac mauris ullamcorper quam ullamcorper cursus eu in dui.
            Aliquam cursus accumsan laoreet.
          </p>
          {/* Heading */}
          <h3>Do I get free updates?</h3>
          {/* Text */}
          <p className="text-gray-800 mb-6 mb-md-0">
            Yes. We update all of our themes with each Bootstrap update, plus
            are constantly adding new components, pages, and features to our
            themes. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec in nibh nec erat tincidunt porta. Donec ac mauris ullamcorper.
          </p>
        </div>
        <div className="col-12 col-md-6">
          {/* Heading */}
          <h3>Does it work with Rails? React? Laravel?</h3>
          {/* Text */}
          <p className="text-gray-800 mb-6 mb-md-8">
            Yes. Landkit has basic CSS/JS files you can include. If you want to
            enable deeper customization, you can integrate it into your assets
            pipeline or build processes. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Donec in nibh nec erat tincidunt porta. Donec ac
            mauris ullamcorper.
          </p>
          {/* Heading */}
          <h3>Can I use Landkit for my clients?</h3>
          {/* Text */}
          <p className="text-gray-800 mb-6 mb-md-8">
            Absolutely. The Bootstrap Themes license allows you to build a
            websites for personal use or for a client. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Donec in nibh nec erat tincidunt
            porta. Donec ac mauris ullamcorper quam ullamcorper cursus eu in
            dui. Aliquam cursus accumsan laoreet.
          </p>
          {/* Heading */}
          <h3>Is there a money back guarantee?</h3>
          {/* Text */}
          <p className="text-gray-800 mb-0">
            Yup! Bootstrap Themes come with a satisfaction guarantee. Submit a
            return and get your money back. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Donec in nibh nec erat tincidunt porta.
            Donec ac mauris ullamcorper quam ullamcorper cursus eu in dui.
            Aliquam cursus accumsan laoreet.
          </p>
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
              className="img-fluid mb-5 mb-md-7 svg-shim mx-auto "
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
</div>

  )
}
