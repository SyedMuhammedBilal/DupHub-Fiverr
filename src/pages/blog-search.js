import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


export default function BillingSearch() {
  return (
    <div>
  <nav className="bg-gray-200">
    <div className="container">
      <div className="row">
        <div className="col-12">
          {/* Breadcrumb */}
          <ol className="breadcrumb breadcrumb-scroll">
            <li className="breadcrumb-item">
              <a href="blog.html" className="text-gray-700">
                Blog
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Search Results
            </li>
          </ol>
        </div>
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </nav>
  {/* SEARCH */}
  <section className="py-6">
    <div className="container">
      <div className="row">
        <div className="col-12">
          {/* Form */}
          <form className="rounded shadow">
            <div className="input-group input-group-lg">
              {/* Text */}
              <span className="input-group-text border-0 pr-1">
                <i className="fe fe-search" />
              </span>
              {/* Input */}
              <input
                type="text"
                className="form-control border-0 px-1"
                aria-label="Search our blog..."
                placeholder="Search our blog..."
                defaultValue="Design Leadership"
              />
              {/* Text */}
              <span className="input-group-text border-0 py-0 pl-1 pr-3">
                {/* Text */}
                <span className="h6 text-uppercase text-muted d-none d-md-block mb-0 mr-5">
                  123 results
                </span>
                {/* Button */}
                <button type="submit" className="btn btn-sm btn-primary">
                  Search
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>{" "}
      {/* / .row */}
    </div>
  </section>
  {/* ARTICLES */}
  <section>
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4 d-flex">
          {/* Card */}
          <div className="card mb-6 shadow-light-lg lift lift-lg">
            {/* Image */}
            <a className="card-img-top" href="#!">
              {/* Image */}
              <img
                src="assets/img/photos/photo-15.jpg"
                alt="..."
                className="card-img-top"
              />
              {/* Shape */}
              <div className="position-relative">
                <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                  {"{"}
                  {"{"}&gt; curves/curve-3{"}"}
                  {"}"}
                </div>
              </div>
            </a>
            {/* Body */}
            <a className="card-body" href="#!">
              {/* Heading */}
              <h3>Cafe Coworking Has Become the Norm.</h3>
              {/* Text */}
              <p className="mb-0 text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                nec condimentum quam.
              </p>
            </a>
            {/* Meta */}
            <a className="card-meta mt-auto" href="#!">
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
              <h6 className="text-uppercase text-muted mr-2 mb-0">Ab Hadley</h6>
              {/* Date */}
              <p className="h6 text-uppercase text-muted mb-0 ml-auto">
                <time dateTime="2019-05-02">May 02</time>
              </p>
            </a>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 d-flex">
          {/* Card */}
          <div className="card mb-6 shadow-light-lg lift lift-lg">
            {/* Image */}
            <a className="card-img-top" href="#!">
              {/* Image */}
              <img
                src="assets/img/photos/photo-14.jpg"
                alt="..."
                className="card-img-top"
              />
              {/* Shape */}
              <div className="position-relative">
                <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                  {"{"}
                  {"{"}&gt; curves/curve-3{"}"}
                  {"}"}
                </div>
              </div>
            </a>
            {/* Body */}
            <a className="card-body" href="#!">
              {/* Heading */}
              <h3>Weekly Roundtable Meetings Saved Us.</h3>
              {/* Text */}
              <p className="mb-0 text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                nec condimentum quam.
              </p>
            </a>
            {/* Meta */}
            <a className="card-meta mt-auto" href="#!">
              {/* Divider */}
              <hr className="card-meta-divider" />
              {/* Avatar */}
              <div className="avatar avatar-sm mr-2">
                <img
                  src="assets/img/avatars/avatar-2.jpg"
                  alt="..."
                  className="avatar-img rounded-circle"
                />
              </div>
              {/* Author */}
              <h6 className="text-uppercase text-muted mr-2 mb-0">
                Adolfo Hess
              </h6>
              {/* Date */}
              <p className="h6 text-uppercase text-muted mb-0 ml-auto">
                <time dateTime="2019-05-02">May 02</time>
              </p>
            </a>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 d-flex">
          {/* Card */}
          <div className="card mb-6 shadow-light-lg lift lift-lg">
            {/* Image */}
            <a className="card-img-top" href="#!">
              {/* Image */}
              <img
                src="assets/img/photos/photo-7.jpg"
                alt="..."
                className="card-img-top"
              />
              {/* Shape */}
              <div className="position-relative">
                <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                  {"{"}
                  {"{"}&gt; curves/curve-3{"}"}
                  {"}"}
                </div>
              </div>
            </a>
            {/* Body */}
            <a className="card-body" href="#!">
              {/* Heading */}
              <h3>Nature Can Save Your Creative Side.</h3>
              {/* Text */}
              <p className="mb-0 text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                nec condimentum quam.
              </p>
            </a>
            {/* Meta */}
            <a className="card-meta mt-auto" href="#!">
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
              <h6 className="text-uppercase text-muted mr-2 mb-0">Ab Hadley</h6>
              {/* Date */}
              <p className="h6 text-uppercase text-muted mb-0 ml-auto">
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
              {/* Image */}
              <img
                src="assets/img/photos/photo-6.jpg"
                alt="..."
                className="card-img-top"
              />
              {/* Shape */}
              <div className="position-relative">
                <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                  {"{"}
                  {"{"}&gt; curves/curve-3{"}"}
                  {"}"}
                </div>
              </div>
            </a>
            {/* Body */}
            <a className="card-body" href="#!">
              {/* Heading */}
              <h3>Landkit is Moving to an Office In Austin, TX</h3>
              {/* Text */}
              <p className="mb-0 text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                nec condimentum quam.
              </p>
            </a>
            {/* Meta */}
            <a className="card-meta mt-auto" href="#!">
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
              <h6 className="text-uppercase text-muted mr-2 mb-0">Ab Hadley</h6>
              {/* Date */}
              <p className="h6 text-uppercase text-muted mb-0 ml-auto">
                <time dateTime="2019-05-02">May 02</time>
              </p>
            </a>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 d-flex">
          {/* Card */}
          <div className="card mb-6 mb-md-0 shadow-light-lg lift lift-lg">
            {/* Image */}
            <a className="card-img-top" href="#!">
              {/* Image */}
              <img
                src="assets/img/photos/photo-4.jpg"
                alt="..."
                className="card-img-top"
              />
              {/* Shape */}
              <div className="position-relative">
                <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                  {"{"}
                  {"{"}&gt; curves/curve-3{"}"}
                  {"}"}
                </div>
              </div>
            </a>
            {/* Body */}
            <a className="card-body" href="#!">
              {/* Heading */}
              <h3>Are Hot Desks Great for Digital Nomads?</h3>
              {/* Text */}
              <p className="mb-0 text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                nec condimentum quam.
              </p>
            </a>
            {/* Meta */}
            <a className="card-meta mt-auto" href="#!">
              {/* Divider */}
              <hr className="card-meta-divider" />
              {/* Avatar */}
              <div className="avatar avatar-sm mr-2">
                <img
                  src="assets/img/avatars/avatar-2.jpg"
                  alt="..."
                  className="avatar-img rounded-circle"
                />
              </div>
              {/* Author */}
              <h6 className="text-uppercase text-muted mr-2 mb-0">
                Adolfo Hess
              </h6>
              {/* Date */}
              <p className="h6 text-uppercase text-muted mb-0 ml-auto">
                <time dateTime="2019-05-02">May 02</time>
              </p>
            </a>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 d-flex">
          {/* Card */}
          <div className="card shadow-light-lg lift lift-lg">
            {/* Image */}
            <a className="card-img-top" href="#!">
              {/* Image */}
              <img
                src="assets/img/photos/photo-5.jpg"
                alt="..."
                className="card-img-top"
              />
              {/* Shape */}
              <div className="position-relative">
                <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                  {"{"}
                  {"{"}&gt; curves/curve-3{"}"}
                  {"}"}
                </div>
              </div>
            </a>
            {/* Body */}
            <a className="card-body" href="#!">
              {/* Heading */}
              <h3>Coffee Can Keep You Going, But At What Cost?</h3>
              {/* Text */}
              <p className="mb-0 text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                nec condimentum quam.
              </p>
            </a>
            {/* Meta */}
            <a className="card-meta mt-auto" href="#!">
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
              <h6 className="text-uppercase text-muted mr-2 mb-0">Ab Hadley</h6>
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
  {/* MORE */}
  <section className="py-7 py-md-10">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-9 col-lg-8 col-xl-7">
          {/* Button */}
          <a
            href="#!"
            className="btn btn-block btn-outline-gray-300 d-flex align-items-center"
          >
            <span className="mx-auto">Load more</span>{" "}
            <i className="fe fe-arrow-right" />
          </a>
        </div>
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </section>
  {/* SHAPE */}
  <div className="position-relative">
    <div className="shape shape-bottom shape-fluid-x svg-shim text-gray-200">
      {"{"}
      {"{"}&gt; curves/curve-1{"}"}
      {"}"}
    </div>
  </div>
  {/* CTA */}
  <section className="pt-6 pt-md-8 bg-gray-200">
    <div className="container pb-6 pb-md-8 border-bottom border-gray-300">
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
