import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


export default function Startup() {
  return (
    <div>
  <section className="py-8 py-md-11 border-bottom">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 text-center">
          {/* Preheader */}
          <h6 className="text-uppercase text-primary" data-aos="fade-up">
            Global financing
          </h6>
          {/* Headin */}
          <h1
            className="display-1 font-weight-bold"
            data-aos="fade-up"
            data-aos-delay={50}
          >
            Banking for Startups.
          </h1>
          {/* Text */}
          <p
            className="lead text-muted mb-6"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            We created a simple, safe, and easy-to-use platform for managing the
            complex banking of startups.
          </p>
          {/* Button */}
          <p className="mb-7 mb-md-9" data-aos="fade-up" data-aos-delay={150}>
            <a className="btn btn-primary shadow lift" href="#!">
              Open an account <i className="fe fe-arrow-right ml-3" />
            </a>
          </p>
        </div>
      </div>{" "}
      {/* / .row */}
      <div className="row">
        <div className="col-12" data-aos="fade-up" data-aos-delay={200}>
          {/* Video */}
          <div className="embed-responsive embed-responsive-16by9">
            <video
              className="embed-responsive-item rounded-lg bg-light shadow-lg"
              src="assets/video/video-1.mp4"
              autoPlay
              loop
              muted
            >
              Sorry, your browser doesn't support embedded videos, but don't
              worry, you can <a href="assets/video/video-1.mp4">download it</a>
              and watch it with your favorite video player!
            </video>
          </div>
        </div>
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </section>
  {/* STEPS */}
  <div className="position-relative mt-n12 mt-md-n15">
    <div className="shape shape-bottom shape-fluid-x svg-shim text-black">
      {"{"}
      {"{"}&gt; angles/angle-bottom{"}"}
      {"}"}
    </div>
  </div>
  {/* STEPS */}
  <div className="section bg-black pt-12 pt-md-15 pb-8 pb-md-11">
    <div className="container">
      <div className="row justify-content-between align-items-center mb-5">
        <div className="col-12 col-md-4 order-md-2 text-center">
          {/* Image */}
          <img
            className="img-fluid w-75 w-md-100 mb-6 mb-md-0"
            src="assets/img/illustrations/illustration-1-dark.png"
            alt="..."
          />
        </div>
        <div className="col-12 col-md-7 order-md-1">
          {/* Heading */}
          <h2 className="text-white" style={{ maxWidth: 450 }}>
            We start with your needs and deliver a full banking solution.
          </h2>
          {/* Text */}
          <div className="lead text-muted-80 mb-0">
            Once you provide us with your company’s basic information, we handle
            the remainder of the process without questions.
          </div>
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
                  {/* Number */}
                  <a
                    className="btn btn-sm btn-rounded-circle btn-gray-400-10 disabled opacity-1"
                    href="#!"
                  >
                    <span>1</span>
                  </a>
                </div>
                <div className="col">
                  {/* Divider */}
                  <hr className="d-none d-md-block bg-gray-900-50 mr-n7" />
                </div>
              </div>{" "}
              {/* / .row */}
            </div>
            <div className="col col-md-12 ml-n5 ml-md-0">
              {/* Heading */}
              <h3 className="text-white">Fill out your intro survey</h3>
              {/* Text */}
              <p className="text-muted-80 mb-6 mb-md-0">
                We start with a short 3-step online survey to help us determine
                the best banking solution for your specific startup.
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
                  {/* Number */}
                  <a
                    href="#!"
                    className="btn btn-sm btn-rounded-circle btn-gray-400-10 disabled opacity-1"
                  >
                    <span>2</span>
                  </a>
                </div>
                <div className="col">
                  {/* Divider */}
                  <hr className="d-none d-md-block bg-gray-900-50 mr-n7" />
                </div>
              </div>{" "}
              {/* / .row */}
            </div>
            <div className="col col-md-12 ml-n5 ml-md-0">
              {/* Heading */}
              <h3 className="text-white">We build a banking stack.</h3>
              {/* Text */}
              <p className="text-muted-80 mb-6 mb-md-0">
                From your information, we generate a banking stack well suited
                to your company’s personalized needs.
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
                  {/* Number */}
                  <a
                    href="#!"
                    className="btn btn-sm btn-rounded-circle btn-gray-400-10 disabled opacity-1"
                  >
                    <span>3</span>
                  </a>
                </div>
              </div>{" "}
              {/* / .row */}
            </div>
            <div className="col col-md-12 ml-n5 ml-md-0">
              {/* Heading */}
              <h3 className="text-white">Registration and filings</h3>
              {/* Text */}
              <p className="text-muted-80 mb-0">
                We handle the creation of your actual account including
                registering with the financial and government agencies.
              </p>
            </div>
          </div>{" "}
          {/* / .row */}
        </div>
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container*/}
  </div>
  {/* STEPS */}
  <div className="position-relative">
    <div className="shape shape-top shape-fluid-x shape-flip-x svg-shim text-black">
      {"{"}
      {"{"}&gt; angles/angle-top{"}"}
      {"}"}
    </div>
  </div>
  {/* ABOUT */}
  <section>
    <div className="container">
      <div className="row justify-content-between align-items-center">
        <div className="col-12 col-md-6 col-lg-5 order-md-2">
          {/* Image grid */}
          <div className="d-flex flex-column w-md-130 mb-6 mb-md-0">
            {/* Image */}
            <img
              className="img-fluid rounded shadow align-self-start"
              data-jarallax-element={-20}
              src="assets/img/screenshots/ui/analytics-2.png"
              alt="..."
              style={{ minHeight: 1, maxWidth: "50%", marginLeft: "40%" }}
            />
            {/* Image */}
            <img
              className="img-fluid rounded shadow align-self-start"
              data-jarallax-element={-50}
              src="assets/img/screenshots/ui/analytics-1.png"
              alt="..."
              style={{ minHeight: 1, maxWidth: "50%", marginTop: "-35%" }}
            />
            {/* Image */}
            <img
              className=" img-fluid rounded shadow align-self-center"
              data-jarallax-element={-80}
              src="assets/img/screenshots/ui/analytics-3.png"
              alt="..."
              style={{ minHeight: 1, maxWidth: "50%", marginTop: "-20%" }}
            />
          </div>
        </div>
        <div className="col-12 col-md-6 order-md-1 pt-md-12">
          {/* Heading */}
          <h1>Powerful metrics to better understand your business.</h1>
          {/* Text */}
          <p className="font-size-lg text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            vehicula auctor ornare. Nulla non ullamcorper tellus. Vestibulum
            pulvinar eros nec tortor maximus, iaculis rutrum nibh mollis.
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
                <p className="text-success">Real-time data</p>
              </div>
              {/* Item */}
              <div className="d-flex">
                {/* Check */}
                <div className="badge badge-rounded-circle bg-success-soft mt-1 mr-4">
                  <i className="fe fe-check" />
                </div>
                <p className="text-success mb-lg-0">FDIC Insured</p>
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
                <p className="text-success">End-to-end encyption</p>
              </div>
              {/* Item */}
              <div className="d-flex">
                {/* Check */}
                <div className="badge badge-rounded-circle bg-success-soft mr-1 mr-4">
                  <i className="fe fe-check" />
                </div>
                {/* Text */}
                <p className="text-success mb-0">REST API enabled</p>
              </div>
            </div>
          </div>{" "}
          {/* / .row */}
        </div>
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </section>
  {/* ABOUT */}
  <section className="py-8 py-md-11">
    <div className="container">
      <div className="row justify-content-between align-items-center">
        <div className="col-12 col-md-6 img-skewed img-skewed-right">
          {/* Code */}
          <div className="card rounded-lg bg-black mb-6 mb-md-0 img-skewed-item screenshot">
            <div className="card-header border-white-10">
              {/* Controls */}
              <div className="d-flex">
                <span
                  className="bg-danger rounded-circle"
                  style={{ width: 10, height: 10 }}
                />
                <span
                  className="bg-warning rounded-circle ml-1"
                  style={{ width: 10, height: 10 }}
                />
                <span
                  className="bg-success rounded-circle ml-1"
                  style={{ width: 10, height: 10 }}
                />
              </div>
            </div>
            <div className="card-body">
              {/* Code */}
              <code
                className="highlight"
                data-typed='{"backSpeed":2, "strings": ["> $ npm install<br/><span class=\"text-success\">Everything is installed</span><br/><br/>> $ npm start<br/><span class=\"text-success\">scss watching</span><br/><span class=\"text-success\">LiveReload started</span><br/><span class=\"text-success\">Opening localhost:8080</span><br/><br/>> $ that’s it<br/><span class=\"text-success\">Yup, that’s it.</span>"]}'
                style={{ minHeight: 183 }}
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5">
          {/* Heading */}
          <h2>Universal access to your data is one of our core values.</h2>
          {/* Text */}
          <p className="font-size-lg text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            vehicula auctor ornare. Nulla non ullamcorper tellus.
          </p>
          {/* Link */}
          <a className="font-weight-bold text-decoration-none" href="#!">
            View our API <i className="fe fe-arrow-right ml-3" />
          </a>
        </div>
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </section>
  {/* DOWNLOAD */}
  <section className="border-top">
    <div className="container">
      <div className="row justify-content-between align-items-stretch">
        <div className="col-12 col-md-6 py-8 py-md-13">
          {/* Heading */}
          <h2>Corporate cards available on iOS and Android.</h2>
          {/* Text */}
          <p className="font-size-lg text-gray-700 mb-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            vehicula auctor ornare. Nulla non ullamcorper tellus. Vestibulum
            pulvinar eros nec tortor maximus, iaculis rutrum nibh mollis.
          </p>
          {/* Button */}
          <a className="text-reset d-inline-block mr-1" href="#!">
            <img
              src="assets/img/buttons/button-app.png"
              className="img-fluid"
              alt="..."
              style={{ maxWidth: 155 }}
            />
          </a>
          {/* Button */}
          <a className="text-reset d-inline-block" href="#!">
            <img
              src="assets/img/buttons/button-play.png"
              className="img-fluid"
              alt="..."
              style={{ maxWidth: 155 }}
            />
          </a>
        </div>
        <div className="col-12 col-md-5">
          {/* Image */}
          <div
            className="position-relative h-100 vw-50 bg-cover"
            style={{ backgroundImage: "url(assets/img/covers/cover-18.jpg)" }}
          >
            {/* Shape */}
            <div className="shape shape-left shape-fluid-y svg-shim text-white">
              {"{"}
              {"{"}&gt; angles/angle-left{"}"}
              {"}"}
            </div>
          </div>
        </div>
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </section>
  {/* BRANDS */}
  <section className="py-6 py-md-8 bg-primary">
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
  {/* INTEGRATIONS */}
  <section className="bg-black py-8 py-md-13">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 text-center">
          {/* Preheading */}
          <h6 className="text-uppercase text-warning">Integrations</h6>
          {/* Heading */}
          <h1 className="font-weight-bold text-white">
            Sync your banking data anywhere.
          </h1>
          {/* Text */}
          <p className="font-size-lg text-muted mb-9">
            Compliance, financial reviews, tax auditing, and any financial task
            has never been easier.
          </p>
        </div>
      </div>{" "}
      {/* / .row */}
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4 text-center">
          {/* Icon */}
          <div className="icon icon-lg mb-4">
            {"{"}
            {"{"}&gt; logomark/slack{"}"}
            {"}"}
          </div>
          {/* Heading */}
          <h3 className="font-weight-bold text-white">Slack</h3>
          {/* Text */}
          <p className="text-muted mb-8">
            Sync your team's work and activity to share automatically in a
            channel with a simple plugin.
          </p>
        </div>
        <div className="col-12 col-md-6 col-lg-4 text-center">
          {/* Icon */}
          <div className="icon icon-lg mb-4">
            {"{"}
            {"{"}&gt; logomark/mailchimp{"}"}
            {"}"}
          </div>
          {/* Heading */}
          <h3 className="font-weight-bold text-white">Mailchimp</h3>
          {/* Text */}
          <p className="text-muted mb-8 mb-lg-0">
            Communicate important messages to your users through Landkit using
            Mailchimp as the delivery service.
          </p>
        </div>
        <div className="col-12 col-md-6 col-lg-4 text-center">
          {/* Icon */}
          <div className="icon icon-lg mb-4">
            {"{"}
            {"{"}&gt; logomark/dropbox{"}"}
            {"}"}
          </div>
          {/* Heading */}
          <h3 className="font-weight-bold text-white">Dropbox</h3>
          {/* Text */}
          <p className="text-muted mb-8 mb-md-0">
            Sync any file store to Dropbox for automated sharing with people
            outside the company.
          </p>
        </div>
        <div className="col-12 col-md-6 col-lg-4 text-center">
          {/* Icon */}
          <div className="icon icon-lg mb-4">
            {"{"}
            {"{"}&gt; logomark/google-drive{"}"}
            {"}"}
          </div>
          {/* Heading */}
          <h3 className="font-weight-bold text-white">Google Drive</h3>
          {/* Text */}
          <p className="text-muted mb-8 mb-lg-0">
            Sync any file store to Google Drive for automated sharing with
            people outside the company.
          </p>
        </div>
        <div className="col-12 col-md-6 col-lg-4 text-center">
          {/* Icon */}
          <div className="icon icon-lg mb-4">
            {"{"}
            {"{"}&gt; logomark/google-ad-manager{"}"}
            {"}"}
          </div>
          {/* Heading */}
          <h3 className="font-weight-bold text-white">Google Ad Manager</h3>
          {/* Text */}
          <p className="text-muted mb-8 mb-md-0">
            Easily manage and edit any Adwords campaign inline to improve ROI
            with constant review.
          </p>
        </div>
        <div className="col-12 col-md-6 col-lg-4 text-center">
          {/* Icon */}
          <div className="icon icon-lg mb-4">
            {"{"}
            {"{"}&gt; logomark/atlassian{"}"}
            {"}"}
          </div>
          {/* Heading */}
          <h3 className="font-weight-bold text-white">Atlassian</h3>
          {/* Text */}
          <p className="text-muted mb-0">
            Keep your entire team in sync with development and easily manage
            tasks, goals, and deadlines.
          </p>
        </div>
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </section>
  {/* CTA */}
  <section className="bg-black">
    <div className="container py-6 py-md-8 border-top border-bottom border-gray-900-50">
      <div className="row align-items-center">
        <div className="col-12 col-md">
          {/* Heading */}
          <h3 className="font-weight-bold text-white mb-1">
            Register today. Banking tomorrow.
          </h3>
          {/* Text */}
          <p className="font-size-lg text-muted mb-5 mb-md-0">
            Avoid the nightmare and use our platform.
          </p>
        </div>
        <div className="col-12 col-md-auto">
          {/* Button */}
          <a href="#!" className="btn btn-primary lift">
            Get started
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
