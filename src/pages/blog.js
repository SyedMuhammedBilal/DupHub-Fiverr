import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


export default function Blog() {
  return (
    <div>
  section data-jarallax data-speed=".8" class="py-10 py-md-14 overlay
  overlay-black overlay-60 bg-cover jarallax" style="background-image:
  url(assets/img/covers/cover-13.jpg);"&gt;
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-12 col-md-10 col-lg-7 text-center">
        {/* Heading */}
        <h1 className="display-2 font-weight-bold text-white">Our Newsroom</h1>
        {/* Text */}
        <p className="lead mb-0 text-white-75">
          Keep up to date with what we're working on! Landkit is an ever
          evolving theme with regular updates.
        </p>
      </div>
    </div>{" "}
    {/* / .row */}
  </div>{" "}
  {/* / .container */}
  {/* SHAPE */}
  <div className="position-relative">
    <div className="shape shape-bottom shape-fluid-x svg-shim text-light">
      {"{"}
      {"{"}&gt; curves/curve-1{"}"}
      {"}"}
    </div>
  </div>
  {/* SEARCH */}
  <section className="mt-n6">
    <div className="container">
      <div className="row">
        <div className="col-12">
          {/* Form */}
          <form className="rounded shadow mb-4">
            <div className="input-group input-group-lg">
              {/* Text */}
              <span className="input-group-text border-0 pr-1">
                <i className="fe fe-search" />
              </span>
              {/* Input */}
              <input
                className="form-control border-0 px-1"
                type="text"
                aria-label="Search our blog..."
                placeholder="Search our blog..."
              />
              {/* Text */}
              <span className="input-group-text border-0 py-0 pl-1 pr-3">
                <a className="btn btn-sm btn-primary" href="blog-search.html">
                  Search
                </a>
              </span>
            </div>
          </form>
          {/* Badges */}
          <div className="row align-items-center">
            <div className="col-auto">
              {/* Heading */}
              <h6 className="font-weight-bold text-uppercase text-muted mb-0">
                Tags:
              </h6>
            </div>
            <div className="col ml-n5">
              {/* Badges */}
              <a
                className="badge rounded-pill bg-secondary-soft"
                href="blog-search.html"
              >
                <span className="h6 text-uppercase">Design</span>
              </a>
              <a
                className="badge rounded-pill bg-secondary-soft"
                href="blog-search.html"
              >
                <span className="h6 text-uppercase">Product</span>
              </a>
              <a
                className="badge rounded-pill bg-secondary-soft"
                href="blog-search.html"
              >
                <span className="h6 text-uppercase">UX</span>
              </a>
              <a
                className="badge rounded-pill bg-secondary-soft"
                href="blog-search.html"
              >
                <span className="h6 text-uppercase">Resources</span>
              </a>
            </div>
          </div>{" "}
          {/* / .row */}
        </div>
      </div>{" "}
      {/* / .row */}
    </div>
  </section>
  {/* ARTICLES */}
  <section className="pt-7 pt-md-10">
    <div className="container">
      <div className="row">
        <div className="col-12">
          {/* Card */}
          <div className="card card-row shadow-light-lg mb-6 lift lift-lg">
            <div className="row gx-0">
              <div className="col-12">
                {/* Badge */}
                <span className="badge rounded-pill bg-light badge-float badge-float-inside">
                  <span className="h6 text-uppercase">Featured</span>
                </span>
              </div>
              <a
                className="col-12 col-md-6 order-md-2 bg-cover card-img-right"
                style={{
                  backgroundImage: "url(assets/img/photos/photo-27.jpg)"
                }}
                href="#!"
              >
                {/* Image (placeholder) */}
                <img
                  src="assets/img/photos/photo-27.jpg"
                  alt="..."
                  className="img-fluid d-md-none invisible"
                />
                {/* Shape */}
                <div className="shape shape-left shape-fluid-y svg-shim text-white d-none d-md-block">
                  {"{"}
                  {"{"}&gt; curves/curve-5{"}"}
                  {"}"}
                </div>
              </a>
              <div className="col-12 col-md-6 order-md-1">
                {/* Body */}
                <a className="card-body" href="#!">
                  {/* Heading */}
                  <h3>Travel Can Keep You Creatively Inspired.</h3>
                  {/* Text */}
                  <p className="mb-0 text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis nec condimentum quam. Fusce pellentesque faucibus lorem
                    at viverra. Integer at feugiat odio. In placerat euismod
                    risus proin erat purus.
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
                    Ab Hadley
                  </h6>
                  {/* Date */}
                  <p className="h6 text-uppercase text-muted mb-0 ml-auto">
                    <time dateTime="2019-05-02">May 02</time>
                  </p>
                </a>
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
  {/* ARTICLES */}
  <section className="pt-7 pt-md-10">
    <div className="container">
      <div className="row align-items-center mb-5">
        <div className="col-12 col-md">
          {/* Heading */}
          <h3 className="mb-0">Latest Stories</h3>
          {/* Text */}
          <p className="mb-0 text-muted">
            Here’s what we've been up to recently.
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
          <div className="card mb-6 mb-lg-0 shadow-light-lg lift lift-lg">
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
          <div className="card mb-6 mb-lg-0 shadow-light-lg lift lift-lg">
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
          <div className="card mb-6 mb-md-0 shadow-light-lg lift lift-lg">
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
          <div className="card d-lg-none shadow-light-lg lift lift-lg">
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
  {/* ARTICLES */}
  <section className="pt-7 pt-md-10">
    <div className="container">
      <div className="row align-items-center mb-5">
        <div className="col-12 col-md">
          {/* Heading */}
          <h3 className="mb-0">Case Studies</h3>
          {/* Text */}
          <p className="mb-0 text-muted">In-depth looks at our work.</p>
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
              <div className="col-12 col-md-6 position-static">
                {/* Slider */}
                <div
                  className="position-static"
                  data-flickity='{"wrapAround": true, "pageDots": false, "imagesLoaded": true, "adaptiveHeight": true}'
                  id="blogSlider"
                >
                  <div className="w-100">
                    {/* Body */}
                    <a className="card-body" href="#!">
                      {/* Heading */}
                      <h3>
                        Spending Time Outside the Office with Coworkers Is Great
                        for Productivity.
                      </h3>
                      {/* Text */}
                      <p className="mb-0 text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis nec condimentum quam. Fusce pellentesque faucibus
                        lorem at viverra. Integer at feugiat odio. In placerat
                        euismod risus proin erat purus.
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
                  <div className="w-100">
                    {/* Body */}
                    <a className="card-body" href="#!">
                      {/* Heading */}
                      <h3>
                        Working in Cafes Doesn't Inspire You. It Kills Your
                        Output and Costs Money.
                      </h3>
                      {/* Text */}
                      <p className="mb-0 text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis nec condimentum quam. Fusce pellentesque faucibus
                        lorem at viverra. Integer at feugiat odio. In placerat
                        euismod risus proin erat purus.
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
                      <h6 className="text-uppercase text-muted mr-2 mb-0">
                        Ab Hadley
                      </h6>
                      {/* Date */}
                      <p className="h6 text-uppercase text-muted mb-0 ml-auto">
                        <time dateTime="2019-05-02">May 02</time>
                      </p>
                    </a>
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
  {/* ARTICLES */}
  <section className="pt-7 pt-md-10">
    <div className="container">
      <div className="row">
        <div className="col-12">
          {/* Heading */}
          <h3 className="mb-0">Popular Stories</h3>
          {/* Text */}
          <p className="mb-5 text-muted">Here’s what’s big in the past week!</p>
        </div>
      </div>{" "}
      {/* / .row */}
      <div className="row">
        <div className="col-12 col-md-6 d-flex">
          {/* Card */}
          <div className="card mb-6 shadow-light-lg lift lift-lg">
            {/* Image */}
            <a className="card-img-top" href="#!">
              {/* Image */}
              <img
                src="assets/img/photos/photo-28.jpg"
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
              <h3>Greece Is Having A Tech Renaissance.</h3>
              {/* Text */}
              <p className="mb-0 text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                nec condimentum quam. Fusce pellentesque faucibus lorem at
                viverra. Integer at feugiat odio. In placerat euismod risus
                proin erat purus.
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
        <div className="col-12 col-md-6 d-flex">
          {/* Card */}
          <div className="card mb-6 shadow-light-lg lift lift-lg">
            {/* Image */}
            <a className="card-img-top" href="#!">
              {/* Image */}
              <img
                src="assets/img/photos/photo-29.jpg"
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
              <h3>Is Failing Actually Bad for Business?</h3>
              {/* Text */}
              <p className="mb-0 text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                nec condimentum quam. Fusce pellentesque faucibus lorem at
                viverra. Integer at feugiat odio. In placerat euismod risus
                proin erat purus.
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
          <div className="card mb-6 mb-lg-0 shadow-light-lg lift lift-lg">
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
          <div className="card mb-6 mb-md-0 shadow-light-lg lift lift-lg">
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
        <div className="col-12 col-md-6 col-lg-4 d-flex">
          {/* Card */}
          <div className="card d-lg-none shadow-light-lg lift lift-lg">
            {/* Image */}
            <a className="card-img-top" href="#!">
              {/* Image */}
              <img
                src="assets/img/photos/photo-27.jpg"
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
              <h3>Travel Can Keep You Creatively Inspired.</h3>
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
