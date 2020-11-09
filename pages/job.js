import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


export default function Job() {
  return (
    <div>
  <section
    data-jarallax
    data-speed=".8"
    className="pt-12 pb-10 pt-md-15 pb-md-14"
    style={{ backgroundImage: "url(assets/img/covers/cover-3.jpg)" }}
  >
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12 col-md-8 col-lg-6">
          {/* Heading */}
          <h1
            className="display-3 font-weight-bold text-white"
            id="welcomeHeadingSource"
          >
            Remote positions for <br />
            <span
              className="text-warning"
              data-typed='{"strings": ["UX Designers", "Ruby Developers", "Data Analysts", "Copywriters"]}'
            />
          </h1>
          {/* Text */}
          <p className="font-size-lg text-white-80 mb-6">
            We help place the world's top tech talent at the some of the
            greatest companies in the world.
          </p>
          {/* Form */}
          <form>
            <div className="input-group">
              <span className="input-group-text pr-0 border-right-0">
                <i className="fe fe-search" id="searchAddon" />
              </span>
              <input
                className="form-control pl-2 border-left-0"
                type="search"
                placeholder="Search for a job"
                aria-label="Search for a job"
                aria-describedby="searchAddon"
              />
            </div>
          </form>
        </div>
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </section>
  {/* BRANDS */}
  <section className="py-6 py-md-8 bg-warning">
    <div className="container">
      <div
        className="flickity-viewport-visible"
        data-flickity='{"imagesLoaded": true, "initialIndex": 6, "pageDots": false, "prevNextButtons": false, "contain": true}'
      >
        <div className="col-4 col-md-3 col-lg-2">
          {/* Brand */}
          <div className="img-fluid svg-shim text-dark">
            {"{"}
            {"{"}&gt; logotype/airbnb{"}"}
            {"}"}
          </div>
        </div>
        <div className="col-4 col-md-3 col-lg-2">
          {/* Brand */}
          <div className="img-fluid svg-shim text-dark">
            {"{"}
            {"{"}&gt; logotype/coinbase{"}"}
            {"}"}
          </div>
        </div>
        <div className="col-4 col-md-3 col-lg-2">
          {/* Brand */}
          <div className="img-fluid svg-shim text-dark">
            {"{"}
            {"{"}&gt; logotype/dribbble{"}"}
            {"}"}
          </div>
        </div>
        <div className="col-4 col-md-3 col-lg-2">
          {/* Brand */}
          <div className="img-fluid svg-shim text-dark">
            {"{"}
            {"{"}&gt; logotype/instagram{"}"}
            {"}"}
          </div>
        </div>
        <div className="col-4 col-md-3 col-lg-2">
          {/* Brand */}
          <div className="img-fluid svg-shim text-dark">
            {"{"}
            {"{"}&gt; logotype/netflix{"}"}
            {"}"}
          </div>
        </div>
        <div className="col-4 col-md-3 col-lg-2">
          {/* Brand */}
          <div className="img-fluid svg-shim text-dark">
            {"{"}
            {"{"}&gt; logotype/pinterest{"}"}
            {"}"}
          </div>
        </div>
        <div className="col-4 col-md-3 col-lg-2">
          {/* Brand */}
          <div className="img-fluid svg-shim text-dark">
            {"{"}
            {"{"}&gt; logotype/airbnb{"}"}
            {"}"}
          </div>
        </div>
        <div className="col-4 col-md-3 col-lg-2">
          {/* Brand */}
          <div className="img-fluid svg-shim text-dark">
            {"{"}
            {"{"}&gt; logotype/coinbase{"}"}
            {"}"}
          </div>
        </div>
        <div className="col-4 col-md-3 col-lg-2">
          {/* Brand */}
          <div className="img-fluid svg-shim text-dark">
            {"{"}
            {"{"}&gt; logotype/dribbble{"}"}
            {"}"}
          </div>
        </div>
        <div className="col-4 col-md-3 col-lg-2">
          {/* Brand */}
          <div className="img-fluid svg-shim text-dark">
            {"{"}
            {"{"}&gt; logotype/instagram{"}"}
            {"}"}
          </div>
        </div>
        <div className="col-4 col-md-3 col-lg-2">
          {/* Brand */}
          <div className="img-fluid svg-shim text-dark">
            {"{"}
            {"{"}&gt; logotype/netflix{"}"}
            {"}"}
          </div>
        </div>
        <div className="col-4 col-md-3 col-lg-2">
          {/* Brand */}
          <div className="img-fluid svg-shim text-dark">
            {"{"}
            {"{"}&gt; logotype/pinterest{"}"}
            {"}"}
          </div>
        </div>
      </div>
    </div>{" "}
    {/* / .container */}
  </section>
  {/* PROCESS */}
  <section className="pt-8 pt-md-11">
    <div className="container">
      <div className="row align-items-center justify-content-between">
        <div className="col-12 col-md-6">
          {/* Preheading */}
          <h6 className="text-uppercase text-primary font-weight-bold">
            Process
          </h6>
          {/* Heading */}
          <h2>
            Our process to find you a new job is fast and you can do it from
            home.
          </h2>
          {/* Text */}
          <p className="lead text-muted mb-6 mb-md-0">
            We keep everything as simple as possible by standardizing the
            application process for all jobs.
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
              <div className="w-150 p-1 bg-white shadow-lg" data-aos="fade-up">
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
    </div>{" "}
    {/* / .container */}
  </section>
  {/* STEPS */}
  <section className="pt-8 pb-9 pt-md-11 pb-md-13">
    <div className="container">
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
                  <hr className="d-none d-md-block mr-n7" />
                </div>
              </div>{" "}
              {/* / .row */}
            </div>
            <div className="col col-md-12 ml-n5 ml-md-0">
              {/* Heading */}
              <h3>Complete your application.</h3>
              {/* Text */}
              <p className="text-muted mb-6 mb-md-0">
                Fill out our standardized application on our platform. Most
                applicants finish in under an hour.
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
                  <hr className="d-none d-md-block mr-n7" />
                </div>
              </div>{" "}
              {/* / .row */}
            </div>
            <div className="col col-md-12 ml-n5 ml-md-0">
              {/* Heading */}
              <h3>Select companies.</h3>
              {/* Text */}
              <p className="text-muted mb-6 mb-md-0">
                We'll immediately match you with any relevant openings and you
                get to pick which ones you're interested in.
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
              <h3>Choose your offer.</h3>
              {/* Text */}
              <p className="text-muted mb-0">
                After 3 days all of your offers will arrive and you will have
                another 7 days to select your new company.
              </p>
            </div>
          </div>{" "}
          {/* / .row */}
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
      {"{"}&gt; curves/curve-2{"}"}
      {"}"}
    </div>
  </div>
  {/* LATEST POSTS */}
  <section className="py-8 py-md-11 bg-gradient-light">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12 col-md-6">
          {/* Preheading */}
          <h6 className="text-uppercase text-primary font-weight-bold">
            Latest posts
          </h6>
          {/* Heading */}
          <h2>Check out some recent postings.</h2>
          {/* Text */}
          <p className="text-muted mb-6 mb-md-8">
            We get thousands of job postings weekly, but only accept the
            openings at the top companies.
          </p>
        </div>
        <div className="col-12 col-md-6">
          {/* Image */}
          <img
            src="assets/img/illustrations/illustration-3.png"
            className="img-fluid"
            alt="..."
          />
        </div>
      </div>{" "}
      {/* / .row */}
      <div className="row">
        <div className="col-12 col-md-6">
          {/* Card */}
          <div
            className="card card-border border-primary shadow-light-lg mb-6 mb-md-8"
            data-aos="fade-up"
          >
            <div className="card-body">
              {/* Heading */}
              <h6 className="text-uppercase text-primary d-inline-block mb-5 mr-1">
                Design
              </h6>
              {/* Badge */}
              <span className="badge badge-rounded-circle bg-primary-soft">
                <span>3</span>
              </span>
              {/* List group */}
              <div>
                <div className="list-group list-group-flush">
                  <a
                    className="list-group-item text-reset text-decoration-none"
                    href="#!"
                  >
                    <p className="font-weight-bold mb-1">
                      Senior Visual Designer
                    </p>
                    <p className="font-size-sm text-muted mb-0">
                      5+ years experience · San Francisco
                    </p>
                  </a>
                  <a
                    className="list-group-item text-reset text-decoration-none"
                    href="#!"
                  >
                    <p className="font-weight-bold mb-1">
                      Motion Graphics Designer
                    </p>
                    <p className="font-size-sm text-muted mb-0">
                      2+ years experience · Paris
                    </p>
                  </a>
                  <a
                    className="list-group-item text-reset text-decoration-none"
                    href="#!"
                  >
                    <p className="font-weight-bold mb-1">Product Designer</p>
                    <p className="font-size-sm text-muted mb-0">
                      4+ years experience · Los Angeles
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Card */}
          <div
            className="card card-border border-danger shadow-light-lg mb-6 mb-md-8"
            data-aos="fade-up"
          >
            <div className="card-body">
              {/* Heading */}
              <h6 className="text-uppercase text-danger d-inline-block mb-5 mr-1">
                Engineering
              </h6>
              {/* Badge */}
              <span className="badge badge-rounded-circle bg-danger-soft">
                <span>3</span>
              </span>
              {/* List group */}
              <div>
                <div className="list-group list-group-flush">
                  <a
                    className="list-group-item text-reset text-decoration-none"
                    href="#!"
                  >
                    <p className="font-weight-bold mb-1">Ruby Engineer</p>
                    <p className="font-size-sm text-muted mb-0">
                      4+ years experience · New York
                    </p>
                  </a>
                  <a
                    className="list-group-item text-reset text-decoration-none"
                    href="#!"
                  >
                    <p className="font-weight-bold mb-1">
                      Senior Reliability Developer
                    </p>
                    <p className="font-size-sm text-muted mb-0">
                      8+ years experience · Pasadena
                    </p>
                  </a>
                  <a
                    className="list-group-item text-reset text-decoration-none"
                    href="#!"
                  >
                    <p className="font-weight-bold mb-1">QA Engineer</p>
                    <p className="font-size-sm text-muted mb-0">
                      2+ years experience · Oakland
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          {/* Card */}
          <div
            className="card card-border border-success shadow-light-lg mb-6 mb-md-8"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className="card-body">
              {/* Heading */}
              <h6 className="text-uppercase text-success d-inline-block mb-5 mr-1">
                Product
              </h6>
              {/* Badge */}
              <span className="badge badge-rounded-circle bg-success-soft">
                <span>5</span>
              </span>
              {/* List group */}
              <div>
                <div className="list-group list-group-flush">
                  <a
                    className="list-group-item text-reset text-decoration-none"
                    href="#!"
                  >
                    <p className="font-weight-bold mb-1">Project Manager</p>
                    <p className="font-size-sm text-muted mb-0">
                      3+ years experience · London
                    </p>
                  </a>
                  <a
                    className="list-group-item text-reset text-decoration-none"
                    href="#!"
                  >
                    <p className="font-weight-bold mb-1">Head of Product</p>
                    <p className="font-size-sm text-muted mb-0">
                      10+ years experience · San Francisco
                    </p>
                  </a>
                  <a
                    className="list-group-item text-reset text-decoration-none"
                    href="#!"
                  >
                    <p className="font-weight-bold mb-1">
                      Senior Product Manager
                    </p>
                    <p className="font-size-sm text-muted mb-0">
                      5+ years experience · Los Angeles
                    </p>
                  </a>
                  <a
                    className="list-group-item text-reset text-decoration-none"
                    href="#!"
                  >
                    <p className="font-weight-bold mb-1">
                      Junior Project Manager
                    </p>
                    <p className="font-size-sm text-muted mb-0">
                      No experience required · Paris
                    </p>
                  </a>
                  <a
                    className="list-group-item text-reset text-decoration-none"
                    href="#!"
                  >
                    <p className="font-weight-bold mb-1">
                      Application Coordinator
                    </p>
                    <p className="font-size-sm text-muted mb-0">
                      6+ years experience · Seattle
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Card */}
          <div
            className="card card-border border-gray-800 shadow-light-lg mb-6 mb-md-8"
            data-aos="fade-up"
          >
            <div className="card-body">
              {/* Heading */}
              <h6 className="text-uppercase text-gray-500 d-inline-block mb-5 mr-1">
                Support
              </h6>
              {/* Badge */}
              <span className="badge badge-rounded-circle bg-dark-soft">
                <span>1</span>
              </span>
              {/* List group */}
              <div>
                <div className="list-group list-group-flush">
                  <a
                    className="list-group-item text-reset text-decoration-none"
                    href="#!"
                  >
                    <p className="font-weight-bold mb-1">
                      Customer Support Specialist
                    </p>
                    <p className="font-size-sm text-muted mb-0">
                      4+ years experience · Anywhere
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* / .row */}
      <div className="row justify-content-center">
        <div className="col-12 col-md-6" data-aos="fade-up">
          {/* Button */}
          <a
            href="#!"
            className="btn btn-block btn-primary d-flex align-items-center lift"
          >
            View over 10,000 other postings{" "}
            <i className="fe fe-arrow-right ml-auto" />
          </a>
        </div>
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </section>
  {/* PLACEMENT RATES */}
  <section>
    <div className="container py-8 pt-md-11 pb-md-9 border-top">
      <div className="row">
        <div className="col-12 col-md-10 col-lg-8">
          {/* Preheading */}
          <h6 className="text-uppercase text-primary">Placement rates</h6>
          {/* Heading */}
          <h2 className="mb-6 mb-md-8">
            Landkit is the leading job placement site with the highest rate of
            success of any tech job board.
          </h2>
          {/* Stats */}
          <div className="d-flex">
            <div className="pr-5">
              <h3 className="mb-0">
                <span
                  data-countup='{"startVal": 0}'
                  data-to={74}
                  data-aos
                  data-aos-id="countup:in"
                >
                  0
                </span>
                k
              </h3>
              <p className="text-gray-700 mb-0">Placements</p>
            </div>
            <div className="px-5">
              <h3 className="mb-0">
                <span
                  data-countup='{"startVal": 0}'
                  data-to={124}
                  data-aos
                  data-aos-id="countup:in"
                >
                  0
                </span>
                k
              </h3>
              <p className="text-gray-700 mb-0">Positions</p>
            </div>
            <div className="pl-5">
              <h3 className="mb-0">
                <span
                  data-countup='{"startVal": "0.0", "decimalPlaces": 1}'
                  data-to="1.9"
                  data-aos
                  data-aos-id="countup:in"
                >
                  0.0
                </span>
                k
              </h3>
              <p className="text-gray-700 mb-0">Partnerships</p>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </section>
  {/* IMAGE */}
  <section
    data-jarallax
    data-speed=".8"
    className="py-14 py-lg-16 jarallax"
    style={{ backgroundImage: "url(assets/img/covers/cover-7.jpg)" }}
  >
    {/* Shape */}
    <div className="shape shape-top shape-fluid-x svg-shim text-white">
      {"{"}
      {"{"}&gt; angles/angle-top{"}"}
      {"}"}
    </div>
    {/* Shape */}
    <div className="shape shape-bottom shape-fluid-x svg-shim text-light">
      {"{"}
      {"{"}&gt; angles/angle-bottom{"}"}
      {"}"}
    </div>
  </section>
  {/* ABOUT */}
  <section className="py-8 py-md-11 bg-light">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12 col-md-5 col-lg-6 order-md-2">
          {/* iPhone + Macbook */}
          <div className="w-md-150 w-lg-130 mb-6 mb-md-0">
            <div className="device-combo device-combo-iphonex-macbook">
              {/* iPhone */}
              <div className="device device-iphonex">
                <img
                  src="assets/img/screenshots/mobile/jobs.jpg"
                  className="device-screen"
                  alt="..."
                />
                <img
                  src="assets/img/devices/iphonex.svg"
                  className="img-fluid"
                  alt="..."
                />
              </div>
              {/* Macbook */}
              <div className="device device-macbook">
                <img
                  src="assets/img/screenshots/desktop/jobs.jpg"
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
        </div>
        <div className="col-12 col-md-7 col-lg-6 order-md-1">
          {/* Heading */}
          <h2>
            Keep your job applications <br />
            <span className="text-primary">organized and up to date</span>.
          </h2>
          {/* Text */}
          <p className="font-size-lg text-muted mb-6">
            Landkit centralizes all your job applications, resumes, and work,
            whether they're from our platform or through another site or
            service.
          </p>
          {/* List */}
          <div className="d-flex">
            {/* Icon */}
            <div className="icon text-primary">
              {"{"}
              {"{"}&gt; general/clipboard{"}"}
              {"}"}
            </div>
            <div className="ml-5">
              {/* Heading */}
              <h4 className="mb-1">Magic Resume</h4>
              {/* Text */}
              <p className="text-muted mb-5">
                Magic Resume will adapt based on what positions the employer has
                available when it's shared.
              </p>
            </div>
          </div>
          <div className="d-flex">
            {/* Icon */}
            <div className="icon text-primary">
              {"{"}
              {"{"}&gt; files/folder-star{"}"}
              {"}"}
            </div>
            <div className="ml-5">
              {/* Heading */}
              <h4 className="mb-1">Employer Insights</h4>
              {/* Text */}
              <p className="text-muted mb-0">
                Learn about who's looking at your profile and what experience
                they're most interested in.
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
  <section className="pt-6 pt-md-8">
    <div className="container pb-6 pb-md-8 border-bottom">
      <div className="row align-items-center">
        <div className="col-12 col-md">
          {/* Heading */}
          <h3 className="mb-1">Apply in 15 minutes</h3>
          {/* Text */}
          <p className="font-size-lg text-muted mb-6 mb-md-0">
            Get your dream job without the hassle.
          </p>
        </div>
        <div className="col-12 col-md-auto">
          {/* Button */}
          <a href="#!" className="btn btn-primary-soft mr-1 lift">
            Learn more
          </a>
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
