import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


export default function Overview() {
  return (
    <div>
  <section className="pt-4 pt-md-11">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12 col-md-5 order-md-2">
          {/* Image */}
          <img
            src="assets/img/illustrations/illustration-1.png"
            className="img-fluid mb-6 mb-md-0"
            alt="..."
          />
        </div>
        <div className="col-12 col-md-7 order-md-1">
          {/* Heading */}
          <h1 className="display-4">
            Ship pre-designed layouts. <br />
            <span className="text-primary">Imagine entirely new ones.</span>
          </h1>
          {/* Text */}
          <p className="lead text-muted mb-0">
            How you use Landkit is up to you. Our design begins with atomic
            elements which are combined to create components and then composed
            into layouts.
          </p>
        </div>
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </section>
  {/* LANDING PAGES */}
  <section className="pt-8 pt-md-11">
    <div className="container">
      <div className="row">
        <div className="col-12">
          {/* Heading */}
          <h2 className="mb-1">Landing Pages</h2>
          {/* Text */}
          <p className="font-size-lg text-muted mb-6 mb-md-8">
            From rich starting points to simple single pagers, anything is
            possible.
          </p>
        </div>
      </div>{" "}
      {/* / .row */}
      <div className="row">
        <div className="col-12 col-md-6">
          {/* Card */}
          <a
            className="card text-reset text-decoration-none lift lift-lg shadow-light-lg mb-6 mb-md-8"
            href="index.html"
          >
            <img
              src="assets/img/screenshots/landkit/landing/homepage.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex align-items-center">
              {/* Heading */}
              <h5 className="mb-0 mr-auto">Basic</h5>
              {/* Chevron */}
              <span className="collapse-chevron text-gray-400">
                <i className="fe fe-lg fe-chevron-right" />
              </span>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-6">
          {/* Card */}
          <a
            className="card text-reset text-decoration-none lift lift-lg shadow-light-lg mb-6 mb-md-8"
            href="coworking.html"
          >
            <img
              src="assets/img/screenshots/landkit/landing/coworking.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex align-items-center">
              {/* Heading */}
              <h5 className="mb-0 mr-auto">Coworking</h5>
              {/* Chevron */}
              <span className="collapse-chevron text-gray-400">
                <i className="fe fe-lg fe-chevron-right" />
              </span>
            </div>
          </a>
        </div>
      </div>{" "}
      {/* / .row */}
      <div className="row">
        <div className="col-12 col-md-6">
          {/* Card */}
          <a
            className="card text-reset text-decoration-none lift lift-lg shadow-light-lg mb-6 mb-md-8"
            href="job.html"
          >
            <img
              src="assets/img/screenshots/landkit/landing/jobs.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex align-items-center">
              {/* Heading */}
              <h5 className="mb-0 mr-auto">Job Listing</h5>
              {/* Chevron */}
              <span className="collapse-chevron text-gray-400">
                <i className="fe fe-lg fe-chevron-right" />
              </span>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-6">
          {/* Card */}
          <a
            className="card text-reset text-decoration-none lift lift-lg shadow-light-lg mb-6 mb-md-8"
            href="service.html"
          >
            <img
              src="assets/img/screenshots/landkit/landing/service.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex align-items-center">
              {/* Heading */}
              <h5 className="mb-0 mr-auto">Service</h5>
              {/* Chevron */}
              <span className="collapse-chevron text-gray-400">
                <i className="fe fe-lg fe-chevron-right" />
              </span>
            </div>
          </a>
        </div>
      </div>{" "}
      {/* / .row */}
      <div className="row">
        <div className="col-12 col-md-6">
          {/* Card */}
          <a
            className="card text-reset text-decoration-none lift lift-lg shadow-light-lg mb-6 mb-md-8"
            href="desktop-app.html"
          >
            <img
              src="assets/img/screenshots/landkit/landing/desktop.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex align-items-center">
              {/* Heading */}
              <h5 className="mb-0 mr-auto">Desktop App</h5>
              {/* Chevron */}
              <span className="collapse-chevron text-gray-400">
                <i className="fe fe-lg fe-chevron-right" />
              </span>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-6">
          {/* Card */}
          <a
            className="card text-reset text-decoration-none lift lift-lg shadow-light-lg mb-6 mb-md-8"
            href="rental.html"
          >
            <img
              src="assets/img/screenshots/landkit/landing/rental.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex align-items-center">
              {/* Heading */}
              <h5 className="mb-0 mr-auto">Home Rental</h5>
              {/* Chevron */}
              <span className="collapse-chevron text-gray-400">
                <i className="fe fe-lg fe-chevron-right" />
              </span>
            </div>
          </a>
        </div>
      </div>{" "}
      {/* / .row */}
      <div className="row">
        <div className="col-12 col-md-6">
          {/* Card */}
          <a
            className="card text-reset text-decoration-none lift lift-lg shadow-light-lg mb-6 mb-md-8"
            href="mobile-app.html"
          >
            <img
              src="assets/img/screenshots/landkit/landing/mobile.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex align-items-center">
              {/* Heading */}
              <h5 className="mb-0 mr-auto">Mobile App</h5>
              {/* Chevron */}
              <span className="collapse-chevron text-gray-400">
                <i className="fe fe-lg fe-chevron-right" />
              </span>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-6">
          {/* Card */}
          <a
            className="card text-reset text-decoration-none lift lift-lg shadow-light-lg mb-6 mb-md-8"
            href="cloud.html"
          >
            <img
              src="assets/img/screenshots/landkit/landing/cloud.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex align-items-center">
              {/* Heading */}
              <h5 className="mb-0 mr-auto">Cloud Hosting</h5>
              {/* Chevron */}
              <span className="collapse-chevron text-gray-400">
                <i className="fe fe-lg fe-chevron-right" />
              </span>
            </div>
          </a>
        </div>
      </div>{" "}
      {/* / .row */}
      <div className="row">
        <div className="col-12 col-md-6">
          {/* Card */}
          <a
            className="card text-reset text-decoration-none lift lift-lg shadow-light-lg mb-6 mb-md-8"
            href="enterprise.html"
          >
            <img
              src="assets/img/screenshots/landkit/landing/enterprise.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex align-items-center">
              {/* Heading */}
              <h5 className="mb-0 mr-auto">Enterprise</h5>
              {/* Chevron */}
              <span className="collapse-chevron text-gray-400">
                <i className="fe fe-lg fe-chevron-right" />
              </span>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-6">
          {/* Card */}
          <a
            className="card text-reset text-decoration-none lift lift-lg shadow-light-lg mb-6 mb-md-8"
            href="agency.html"
          >
            <img
              src="assets/img/screenshots/landkit/landing/agency.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex align-items-center">
              {/* Heading */}
              <h5 className="mb-0 mr-auto">Agency</h5>
              {/* Chevron */}
              <span className="collapse-chevron text-gray-400">
                <i className="fe fe-lg fe-chevron-right" />
              </span>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-6">
          {/* Card */}
          <a
            className="card text-reset text-decoration-none lift lift-lg shadow-light-lg mb-6 mb-md-8"
            href="startup.html"
          >
            <img
              src="assets/img/screenshots/landkit/landing/startup.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex align-items-center">
              {/* Heading */}
              <h5 className="mb-0 mr-auto">Startup</h5>
              {/* New Indicator */}
              <span className="badge rounded-pill bg-success-soft mr-2">
                <span className="h6 text-uppercase">New</span>
              </span>
              {/* Chevron */}
              <span className="collapse-chevron text-gray-400">
                <i className="fe fe-lg fe-chevron-right" />
              </span>
            </div>
          </a>
        </div>
      </div>{" "}
      {/* / .container */}
    </div>
  </section>
  {/* SECONDARY PAGES */}
  <section className="pt-8 pt-md-11">
    <div className="container">
      <div className="row">
        <div className="col-12">
          {/* Heading */}
          <h2 className="mb-1">Secondary Pages</h2>
          {/* Text */}
          <p className="font-size-lg text-muted mb-6 mb-md-8">
            These are the supporting pages to supplement the main landings.
          </p>
        </div>
      </div>{" "}
      {/* / .row */}
      <div className="row">
        <div className="col-12 col-md-6">
          {/* Card */}
          <a
            className="card text-reset text-decoration-none lift lift-lg shadow-light-lg mb-6 mb-md-8"
            href="about.html"
          >
            <img
              src="assets/img/screenshots/landkit/pages/about.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex align-items-center">
              {/* Heading */}
              <h5 className="mb-0 mr-auto">About</h5>
              {/* Chevron */}
              <span className="collapse-chevron text-gray-400">
                <i className="fe fe-lg fe-chevron-right" />
              </span>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-6">
          {/* Card */}
          <a
            className="card text-reset text-decoration-none lift lift-lg shadow-light-lg mb-6 mb-md-8"
            href="pricing.html"
          >
            <img
              src="assets/img/screenshots/landkit/pages/pricing.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex align-items-center">
              {/* Heading */}
              <h5 className="mb-0 mr-auto">Pricing</h5>
              {/* Chevron */}
              <span className="collapse-chevron text-gray-400">
                <i className="fe fe-lg fe-chevron-right" />
              </span>
            </div>
          </a>
        </div>
      </div>{" "}
      {/* / .row */}
      <div className="row">
        <div className="col-12 col-md-6">
          {/* Card */}
          <a
            className="card text-reset text-decoration-none lift lift-lg shadow-light-lg mb-6 mb-md-8"
            href="help-center.html"
          >
            <img
              src="assets/img/screenshots/landkit/pages/help-center.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex align-items-center">
              {/* Heading */}
              <h5 className="mb-0 mr-auto">Help Center</h5>
              {/* Chevron */}
              <span className="collapse-chevron text-gray-400">
                <i className="fe fe-lg fe-chevron-right" />
              </span>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-6">
          {/* Card */}
          <a
            className="card text-reset text-decoration-none lift lift-lg shadow-light-lg mb-6 mb-md-8"
            href="help-center-article.html"
          >
            <img
              src="assets/img/screenshots/landkit/pages/help-center-article.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex align-items-center">
              {/* Heading */}
              <h5 className="mb-0 mr-auto">Help Center Article</h5>
              {/* Chevron */}
              <span className="collapse-chevron text-gray-400">
                <i className="fe fe-lg fe-chevron-right" />
              </span>
            </div>
          </a>
        </div>
      </div>{" "}
      {/* / .row */}
      <div className="row">
        <div className="col-12 col-md-6">
          {/* Card */}
          <a
            className="card text-reset text-decoration-none lift lift-lg shadow-light-lg mb-6 mb-md-8"
            href="contact-alt.html"
          >
            <img
              src="assets/img/screenshots/landkit/pages/contact-alt.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex align-items-center">
              {/* Heading */}
              <h5 className="mb-0 mr-auto">Contact (Alternative)</h5>
              {/* Chevron */}
              <span className="collapse-chevron text-gray-400">
                <i className="fe fe-lg fe-chevron-right" />
              </span>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-6">
          {/* Card */}
          <a
            className="card text-reset text-decoration-none lift lift-lg shadow-light-lg mb-6 mb-md-8"
            href="contact.html"
          >
            <img
              src="assets/img/screenshots/landkit/pages/contact.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex align-items-center">
              {/* Heading */}
              <h5 className="mb-0 mr-auto">Contact</h5>
              {/* Chevron */}
              <span className="collapse-chevron text-gray-400">
                <i className="fe fe-lg fe-chevron-right" />
              </span>
            </div>
          </a>
        </div>
      </div>{" "}
      {/* / .row */}
      <div className="row">
        <div className="col-12 col-md-6">
          {/* Card */}
          <a
            className="card text-reset text-decoration-none lift lift-lg shadow-light-lg mb-6 mb-md-8"
            href="careers.html"
          >
            <img
              src="assets/img/screenshots/landkit/pages/career.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex align-items-center">
              {/* Heading */}
              <h5 className="mb-0 mr-auto">Career Listing</h5>
              {/* Chevron */}
              <span className="collapse-chevron text-gray-400">
                <i className="fe fe-lg fe-chevron-right" />
              </span>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-6">
          {/* Card */}
          <a
            className="card text-reset text-decoration-none lift lift-lg shadow-light-lg mb-6 mb-md-8"
            href="career-single.html"
          >
            <img
              src="assets/img/screenshots/landkit/pages/career-listing.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex align-items-center">
              {/* Heading */}
              <h5 className="mb-0 mr-auto">Career Opening</h5>
              {/* Chevron */}
              <span className="collapse-chevron text-gray-400">
                <i className="fe fe-lg fe-chevron-right" />
              </span>
            </div>
          </a>
        </div>
      </div>{" "}
      {/* / .row */}
      <div className="row">
        <div className="col-12 col-md-6">
          {/* Card */}
          <a
            className="card text-reset text-decoration-none lift lift-lg shadow-light-lg mb-6 mb-md-8"
            href="terms-of-service.html"
          >
            <img
              src="assets/img/screenshots/landkit/pages/terms.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex align-items-center">
              {/* Heading */}
              <h5 className="mb-0 mr-auto">Terms of Service</h5>
              {/* Chevron */}
              <span className="collapse-chevron text-gray-400">
                <i className="fe fe-lg fe-chevron-right" />
              </span>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-6">
          {/* Card */}
          <a
            className="card text-reset text-decoration-none lift lift-lg shadow-light-lg mb-6 mb-md-8"
            href="blog.html"
          >
            <img
              src="assets/img/screenshots/landkit/pages/blog-rich.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex align-items-center">
              {/* Heading */}
              <h5 className="mb-0 mr-auto">Blog Listing</h5>
              {/* Chevron */}
              <span className="collapse-chevron text-gray-400">
                <i className="fe fe-lg fe-chevron-right" />
              </span>
            </div>
          </a>
        </div>
      </div>{" "}
      {/* / .row */}
      <div className="row">
        <div className="col-12 col-md-6">
          {/* Card */}
          <a
            className="card text-reset text-decoration-none lift lift-lg shadow-light-lg mb-6 mb-md-8"
            href="blog-post.html"
          >
            <img
              src="assets/img/screenshots/landkit/pages/blog-post.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex align-items-center">
              {/* Heading */}
              <h5 className="mb-0 mr-auto">Blog Post</h5>
              {/* Chevron */}
              <span className="collapse-chevron text-gray-400">
                <i className="fe fe-lg fe-chevron-right" />
              </span>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-6">
          {/* Card */}
          <a
            className="card text-reset text-decoration-none lift lift-lg shadow-light-lg mb-6 mb-md-8"
            href="blog-showcase.html"
          >
            <img
              src="assets/img/screenshots/landkit/pages/blog-showcase.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex align-items-center">
              {/* Heading */}
              <h5 className="mb-0 mr-auto">Blog Showcase</h5>
              {/* Chevron */}
              <span className="collapse-chevron text-gray-400">
                <i className="fe fe-lg fe-chevron-right" />
              </span>
            </div>
          </a>
        </div>
      </div>{" "}
      {/* / .row */}
      <div className="row">
        <div className="col-12 col-md-6">
          {/* Card */}
          <a
            className="card text-reset text-decoration-none lift lift-lg shadow-light-lg mb-6 mb-md-8"
            href="blog-search.html"
          >
            <img
              src="assets/img/screenshots/landkit/pages/blog-search.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex align-items-center">
              {/* Heading */}
              <h5 className="mb-0 mr-auto">Blog Search</h5>
              {/* Chevron */}
              <span className="collapse-chevron text-gray-400">
                <i className="fe fe-lg fe-chevron-right" />
              </span>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-6">
          {/* Card */}
          <a
            className="card text-reset text-decoration-none lift lift-lg shadow-light-lg mb-6 mb-md-8"
            href="portfolio-masonry.html"
          >
            <img
              src="assets/img/screenshots/landkit/pages/portfolio-masonry.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex align-items-center">
              {/* Heading */}
              <h5 className="mb-0 mr-auto">Portfolio Masonry</h5>
              {/* Chevron */}
              <span className="collapse-chevron text-gray-400">
                <i className="fe fe-lg fe-chevron-right" />
              </span>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-6">
          {/* Card */}
          <a
            className="card text-reset text-decoration-none lift lift-lg shadow-light-lg mb-6 mb-md-8"
            href="portfolio-grid-rows.html"
          >
            <img
              src="assets/img/screenshots/landkit/pages/portfolio-grid-rows.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex align-items-center">
              {/* Heading */}
              <h5 className="mb-0 mr-auto">Portfolio Grid Rows</h5>
              {/* Chevron */}
              <span className="collapse-chevron text-gray-400">
                <i className="fe fe-lg fe-chevron-right" />
              </span>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-6">
          {/* Card */}
          <a
            className="card text-reset text-decoration-none lift lift-lg shadow-light-lg mb-6 mb-md-8"
            href="portfolio-parallax.html"
          >
            <img
              src="assets/img/screenshots/landkit/pages/portfolio-parallax.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex align-items-center">
              {/* Heading */}
              <h5 className="mb-0 mr-auto">Portfolio Parallax</h5>
              {/* Chevron */}
              <span className="collapse-chevron text-gray-400">
                <i className="fe fe-lg fe-chevron-right" />
              </span>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-6">
          {/* Card */}
          <a
            className="card text-reset text-decoration-none lift lift-lg shadow-light-lg mb-6 mb-md-8"
            href="portfolio-case-study.html"
          >
            <img
              src="assets/img/screenshots/landkit/pages/portfolio-case-study.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex align-items-center">
              {/* Heading */}
              <h5 className="mb-0 mr-auto">Portfolio Case Study</h5>
              {/* Chevron */}
              <span className="collapse-chevron text-gray-400">
                <i className="fe fe-lg fe-chevron-right" />
              </span>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-6">
          {/* Card */}
          <a
            className="card text-reset text-decoration-none lift lift-lg shadow-light-lg mb-6 mb-md-8"
            href="portfolio-sidebar.html"
          >
            <img
              src="assets/img/screenshots/landkit/pages/portfolio-sidebar.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex align-items-center">
              {/* Heading */}
              <h5 className="mb-0 mr-auto">Portfolio Sidebar</h5>
              {/* Chevron */}
              <span className="collapse-chevron text-gray-400">
                <i className="fe fe-lg fe-chevron-right" />
              </span>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-6">
          {/* Card */}
          <a
            className="card text-reset text-decoration-none lift lift-lg shadow-light-lg mb-6 mb-md-8"
            href="portfolio-sidebar-fluid.html"
          >
            <img
              src="assets/img/screenshots/landkit/pages/portfolio-sidebar-fluid.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex align-items-center">
              {/* Heading */}
              <h5 className="mb-0 mr-auto">Portfolio Sidebar Fluid</h5>
              {/* Chevron */}
              <span className="collapse-chevron text-gray-400">
                <i className="fe fe-lg fe-chevron-right" />
              </span>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-6">
          {/* Card */}
          <a
            className="card text-reset text-decoration-none lift lift-lg shadow-light-lg mb-6 mb-md-8"
            href="portfolio-grid.html"
          >
            <img
              src="assets/img/screenshots/landkit/pages/portfolio-basic-grid.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex align-items-center">
              {/* Heading */}
              <h5 className="mb-0 mr-auto">Portfolio Basic Grid</h5>
              {/* Chevron */}
              <span className="collapse-chevron text-gray-400">
                <i className="fe fe-lg fe-chevron-right" />
              </span>
            </div>
          </a>
        </div>
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </section>
  {/* SECONDARY PAGES */}
  <section className="pt-8 pt-md-11">
    <div className="container">
      <div className="row">
        <div className="col-12">
          {/* Heading */}
          <h2 className="mb-1">Account Pages</h2>
          {/* Text */}
          <p className="font-size-lg text-muted mb-6 mb-md-8">
            These pages are used for basic authentication management.
          </p>
        </div>
      </div>{" "}
      {/* / .row */}
      <div className="row">
        <div className="col-12 col-md-6">
          {/* Card */}
          <a
            className="card text-reset text-decoration-none lift lift-lg shadow-light-lg mb-6 mb-md-8"
            href="account-general.html"
          >
            <img
              src="assets/img/screenshots/landkit/account/general.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex align-items-center">
              {/* Heading */}
              <h5 className="mb-0 mr-auto">General</h5>
              {/* New Indicator */}
              <span className="badge rounded-pill bg-success-soft mr-2">
                <span className="h6 text-uppercase">New</span>
              </span>
              {/* Chevron */}
              <span className="collapse-chevron text-gray-400">
                <i className="fe fe-lg fe-chevron-right" />
              </span>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-6">
          {/* Card */}
          <a
            className="card text-reset text-decoration-none lift lift-lg shadow-light-lg mb-6 mb-md-8"
            href="account-security.html"
          >
            <img
              src="assets/img/screenshots/landkit/account/security.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex align-items-center">
              {/* Heading */}
              <h5 className="mb-0 mr-auto">Security</h5>
              {/* New Indicator */}
              <span className="badge rounded-pill bg-success-soft mr-2">
                <span className="h6 text-uppercase">New</span>
              </span>
              {/* Chevron */}
              <span className="collapse-chevron text-gray-400">
                <i className="fe fe-lg fe-chevron-right" />
              </span>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-6">
          {/* Card */}
          <a
            className="card text-reset text-decoration-none lift lift-lg shadow-light-lg mb-6 mb-md-8"
            href="account-notifications.html"
          >
            <img
              src="assets/img/screenshots/landkit/account/notifications.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex align-items-center">
              {/* Heading */}
              <h5 className="mb-0 mr-auto">Notifications</h5>
              {/* New Indicator */}
              <span className="badge rounded-pill bg-success-soft mr-2">
                <span className="h6 text-uppercase">New</span>
              </span>
              {/* Chevron */}
              <span className="collapse-chevron text-gray-400">
                <i className="fe fe-lg fe-chevron-right" />
              </span>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-6">
          {/* Card */}
          <a
            className="card text-reset text-decoration-none lift lift-lg shadow-light-lg mb-6 mb-md-8"
            href="billing-plans-and-payment.html"
          >
            <img
              src="assets/img/screenshots/landkit/account/plans-and-payments.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex align-items-center">
              {/* Heading */}
              <h5 className="mb-0 mr-auto">Plans and Payment</h5>
              {/* New Indicator */}
              <span className="badge rounded-pill bg-success-soft mr-2">
                <span className="h6 text-uppercase">New</span>
              </span>
              {/* Chevron */}
              <span className="collapse-chevron text-gray-400">
                <i className="fe fe-lg fe-chevron-right" />
              </span>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-6">
          {/* Card */}
          <a
            className="card text-reset text-decoration-none lift lift-lg shadow-light-lg mb-6 mb-md-8"
            href="billing-users.html"
          >
            <img
              src="assets/img/screenshots/landkit/account/users.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex align-items-center">
              {/* Heading */}
              <h5 className="mb-0 mr-auto">Users</h5>
              {/* New Indicator */}
              <span className="badge rounded-pill bg-success-soft mr-2">
                <span className="h6 text-uppercase">New</span>
              </span>
              {/* Chevron */}
              <span className="collapse-chevron text-gray-400">
                <i className="fe fe-lg fe-chevron-right" />
              </span>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-6">
          {/* Card */}
          <a
            className="card text-reset text-decoration-none lift lift-lg shadow-light-lg mb-6 mb-md-8"
            href="signin-cover.html"
          >
            <img
              src="assets/img/screenshots/landkit/account/signin-cover.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex align-items-center">
              {/* Heading */}
              <h5 className="mb-0 mr-auto">Sign In (Cover)</h5>
              {/* Chevron */}
              <span className="collapse-chevron text-gray-400">
                <i className="fe fe-lg fe-chevron-right" />
              </span>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-6">
          {/* Card */}
          <a
            className="card text-reset text-decoration-none lift lift-lg shadow-light-lg mb-6 mb-md-8"
            href="signin-illustration.html"
          >
            <img
              src="assets/img/screenshots/landkit/account/signin-illustration.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex align-items-center">
              {/* Heading */}
              <h5 className="mb-0 mr-auto">Sign In (Illustration)</h5>
              {/* Chevron */}
              <span className="collapse-chevron text-gray-400">
                <i className="fe fe-lg fe-chevron-right" />
              </span>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-6">
          {/* Card */}
          <a
            className="card text-reset text-decoration-none lift lift-lg shadow-light-lg mb-6 mb-md-8"
            href="signin.html"
          >
            <img
              src="assets/img/screenshots/landkit/account/signin.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex align-items-center">
              {/* Heading */}
              <h5 className="mb-0 mr-auto">Sign In</h5>
              {/* Chevron */}
              <span className="collapse-chevron text-gray-400">
                <i className="fe fe-lg fe-chevron-right" />
              </span>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-6">
          {/* Card */}
          <a
            className="card text-reset text-decoration-none lift lift-lg shadow-light-lg mb-6 mb-md-8"
            data-toggle="modal"
            href="#modalSigninHorizontal"
          >
            <img
              src="assets/img/screenshots/landkit/account/signin-modal-horizontal.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex align-items-center">
              {/* Heading */}
              <h5 className="mb-0 mr-auto">Sign In (Horz. Modal)</h5>
              {/* Chevron */}
              <span className="collapse-chevron text-gray-400">
                <i className="fe fe-lg fe-chevron-right" />
              </span>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-6">
          {/* Card */}
          <a
            className="card text-reset text-decoration-none lift lift-lg shadow-light-lg mb-6 mb-md-8"
            data-toggle="modal"
            href="#modalSigninVertical"
          >
            <img
              src="assets/img/screenshots/landkit/account/signin-modal-vertical.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex align-items-center">
              {/* Heading */}
              <h5 className="mb-0 mr-auto">Sign In (Vert. Modal)</h5>
              {/* Chevron */}
              <span className="collapse-chevron text-gray-400">
                <i className="fe fe-lg fe-chevron-right" />
              </span>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-6">
          {/* Card */}
          <a
            className="card text-reset text-decoration-none lift lift-lg shadow-light-lg mb-6 mb-md-8"
            href="signup-cover.html"
          >
            <img
              src="assets/img/screenshots/landkit/account/signup-cover.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex align-items-center">
              {/* Heading */}
              <h5 className="mb-0 mr-auto">Sign Up (Cover)</h5>
              {/* Chevron */}
              <span className="collapse-chevron text-gray-400">
                <i className="fe fe-lg fe-chevron-right" />
              </span>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-6">
          {/* Card */}
          <a
            className="card text-reset text-decoration-none lift lift-lg shadow-light-lg mb-6 mb-md-8"
            href="signup-illustration.html"
          >
            <img
              src="assets/img/screenshots/landkit/account/signup-illustration.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex align-items-center">
              {/* Heading */}
              <h5 className="mb-0 mr-auto">Sign Up (Illustration)</h5>
              {/* Chevron */}
              <span className="collapse-chevron text-gray-400">
                <i className="fe fe-lg fe-chevron-right" />
              </span>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-6">
          {/* Card */}
          <a
            className="card text-reset text-decoration-none lift lift-lg shadow-light-lg mb-6 mb-md-8"
            href="signup.html"
          >
            <img
              src="assets/img/screenshots/landkit/account/signup.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex align-items-center">
              {/* Heading */}
              <h5 className="mb-0 mr-auto">Sign Up</h5>
              {/* Chevron */}
              <span className="collapse-chevron text-gray-400">
                <i className="fe fe-lg fe-chevron-right" />
              </span>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-6">
          {/* Card */}
          <a
            className="card text-reset text-decoration-none lift lift-lg shadow-light-lg mb-6 mb-md-8"
            data-toggle="modal"
            href="#modalSignupHorizontal"
          >
            <img
              src="assets/img/screenshots/landkit/account/signup-modal-horizontal.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex align-items-center">
              {/* Heading */}
              <h5 className="mb-0 mr-auto">Sign Up (Horz. Modal)</h5>
              {/* Chevron */}
              <span className="collapse-chevron text-gray-400">
                <i className="fe fe-lg fe-chevron-right" />
              </span>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-6">
          {/* Card */}
          <a
            className="card text-reset text-decoration-none lift lift-lg shadow-light-lg mb-6 mb-md-8"
            data-toggle="modal"
            href="#modalSignupVertical"
          >
            <img
              src="assets/img/screenshots/landkit/account/signup-modal-vertical.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex align-items-center">
              {/* Heading */}
              <h5 className="mb-0 mr-auto">Sign Up (Vert. Modal)</h5>
              {/* Chevron */}
              <span className="collapse-chevron text-gray-400">
                <i className="fe fe-lg fe-chevron-right" />
              </span>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-6">
          {/* Card */}
          <a
            className="card text-reset text-decoration-none lift lift-lg shadow-light-lg mb-6 mb-md-8"
            href="password-reset-cover.html"
          >
            <img
              src="assets/img/screenshots/landkit/account/password-reset-cover.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex align-items-center">
              {/* Heading */}
              <h5 className="mb-0 mr-auto">Password Reset (Cover)</h5>
              {/* Chevron */}
              <span className="collapse-chevron text-gray-400">
                <i className="fe fe-lg fe-chevron-right" />
              </span>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-6">
          {/* Card */}
          <a
            className="card text-reset text-decoration-none lift lift-lg shadow-light-lg mb-6 mb-md-8"
            href="password-reset-illustration.html"
          >
            <img
              src="assets/img/screenshots/landkit/account/password-reset-illustration.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex align-items-center">
              {/* Heading */}
              <h5 className="mb-0 mr-auto">Password Reset (Illustration)</h5>
              {/* Chevron */}
              <span className="collapse-chevron text-gray-400">
                <i className="fe fe-lg fe-chevron-right" />
              </span>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-6">
          {/* Card */}
          <a
            className="card text-reset text-decoration-none lift lift-lg shadow-light-lg mb-6 mb-md-8"
            href="password-reset.html"
          >
            <img
              src="assets/img/screenshots/landkit/account/password-reset.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex align-items-center">
              {/* Heading */}
              <h5 className="mb-0 mr-auto">Password Reset</h5>
              {/* Chevron */}
              <span className="collapse-chevron text-gray-400">
                <i className="fe fe-lg fe-chevron-right" />
              </span>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-6">
          {/* Card */}
          <a
            className="card text-reset text-decoration-none lift lift-lg shadow-light-lg mb-6 mb-md-8"
            href="error-cover.html"
          >
            <img
              src="assets/img/screenshots/landkit/account/error-cover.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex align-items-center">
              {/* Heading */}
              <h5 className="mb-0 mr-auto">Error (Cover)</h5>
              {/* Chevron */}
              <span className="collapse-chevron text-gray-400">
                <i className="fe fe-lg fe-chevron-right" />
              </span>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-6">
          {/* Card */}
          <a
            className="card text-reset text-decoration-none lift lift-lg shadow-light-lg mb-6 mb-md-8"
            href="error-illustration.html"
          >
            <img
              src="assets/img/screenshots/landkit/account/error-illustration.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex align-items-center">
              {/* Heading */}
              <h5 className="mb-0 mr-auto">Error (Illustration)</h5>
              {/* Chevron */}
              <span className="collapse-chevron text-gray-400">
                <i className="fe fe-lg fe-chevron-right" />
              </span>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-6">
          {/* Card */}
          <a
            className="card text-reset text-decoration-none lift lift-lg shadow-light-lg mb-6 mb-md-8"
            href="error.html"
          >
            <img
              src="assets/img/screenshots/landkit/account/error.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex align-items-center">
              {/* Heading */}
              <h5 className="mb-0 mr-auto">Error</h5>
              {/* Chevron */}
              <span className="collapse-chevron text-gray-400">
                <i className="fe fe-lg fe-chevron-right" />
              </span>
            </div>
          </a>
        </div>
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </section>
  {/* COMING SOON */}
  <section className="pt-8 pt-md-11 pb-8 pb-md-14">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-9 col-xl-8 text-center">
          {/* Heading */}
          <h3>...and more soon.</h3>
          {/* Text */}
          <p className="font-size-lg text-muted mb-0">
            Landkit is an ever-growing system of composable components. We’re
            consistently adding landing examples, improving components, and
            gathering feedback from customers to make their experience better.
          </p>
        </div>
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </section>
  {/* CURVE */}
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
