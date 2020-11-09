import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


export default function PortfolioStudy() {
  return (
    <div>
  <section
    data-jarallax
    data-speed=".8"
    className="py-12 py-md-15 bg-cover jarallax"
    style={{
      backgroundImage: "url(assets/img/portfolio/portfolio-cover-8.jpg)"
    }}
  />
  {/* WELCOME */}
  <section
    data-jarallax
    data-speed=".8"
    className="d-none pt-8 pt-md-12 pb-10 pb-md-14 overlay overlay-black overlay-60 bg-cover jarallax"
    style={{ backgroundImage: "url(assets/img/covers/cover-13.jpg)" }}
  >
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-7 text-center">
          {/* Headin */}
          <h1 className="display-2 font-weight-bold text-white">
            Landkit Redesign
          </h1>
          {/* Text */}
          <p className="lead text-white-75 mb-0">
            We design &amp; build products, apps, and sites for companies doing
            good things for the planet.
          </p>
        </div>
      </div>
      {/* / .row */}
    </div>
    {/* / .container */}
  </section>
  {/* WELCOME */}
  <section
    data-jarallax
    data-speed=".8"
    className="d-none pt-8 pt-md-12 pb-10 pb-md-14 bg-dark"
  >
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-7 text-center">
          {/* Headin */}
          <h1 className="display-2 font-weight-bold text-white">
            Landkit Redesign
          </h1>
          {/* Text */}
          <p className="lead text-white-75 mb-0">
            We design &amp; build products, apps, and sites for companies doing
            good things for the planet.
          </p>
        </div>
      </div>
      {/* / .row */}
    </div>
    {/* / .container */}
  </section>
  {/* SHAPE */}
  <div className="d-none position-relative">
    <div className="shape shape-bottom shape-fluid-x svg-shim text-light">
      {"{"}
      {"{"}&gt; curves/curve-1{"}"}
      {"}"}
    </div>
  </div>
  {/* HEADER */}
  <section className="pt-8 pt-md-11">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-9 col-xl-8">
          {/* Heading */}
          <h1 className="display-3 font-weight-bold text-center">
            The Be Bright Campaign
          </h1>
          {/* Text */}
          <p className="lead mb-7 text-center text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
            condimentum quam. Fusce pellentesque faucibus lorem at viverra.
            Integer at feugiat odio. In placerat euismod risus proin.
          </p>
          {/* Meta */}
          <div className="row align-items-center py-5 border-top border-bottom">
            <div className="col-auto">
              {/* Avatar */}
              <div className="avatar avatar-lg">
                <img
                  src="assets/img/avatars/avatar-1.jpg"
                  alt="..."
                  className="avatar-img rounded-circle"
                />
              </div>
            </div>
            <div className="col ml-n5">
              {/* Name */}
              <h6 className="text-uppercase mb-0">Ab Hadley</h6>
              {/* Date */}
              <time className="font-size-sm text-muted" dateTime="2019-05-20">
                Published on May 20, 2019
              </time>
            </div>
            <div className="col-auto">
              {/* Share */}
              <span className="h6 text-uppercase text-muted d-none d-md-inline mr-4">
                Share:
              </span>
              {/* Icons */}
              <ul className="d-inline list-unstyled list-inline list-social">
                <li className="list-inline-item list-social-item mr-3">
                  <a href="#!" className="text-decoration-none">
                    <img
                      src="./assets/img/icons/social/instagram.svg"
                      className="list-social-icon"
                      alt="..."
                    />
                  </a>
                </li>
                <li className="list-inline-item list-social-item mr-3">
                  <a href="#!" className="text-decoration-none">
                    <img
                      src="./assets/img/icons/social/facebook.svg"
                      className="list-social-icon"
                      alt="..."
                    />
                  </a>
                </li>
                <li className="list-inline-item list-social-item mr-3">
                  <a href="#!" className="text-decoration-none">
                    <img
                      src="./assets/img/icons/social/twitter.svg"
                      className="list-social-icon"
                      alt="..."
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* / .row */}
    </div>
    {/* / .container */}
  </section>
  {/* SECTION */}
  <section className="pt-6 pt-md-8">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-9 col-xl-8">
          {/* Text */}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
            reiciendis odio perferendis libero saepe voluptatum fugiat dolore
            voluptates aut, ut quas doloremque quo ad quis ipsum molestias neque
            pariatur commodi.
          </p>
          <p className="mb-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
            quidem, earum! Quo fugiat voluptates similique quidem dolorem ex non
            quibusdam odio suscipit error, maiores, itaque blanditiis vel, sed,
            cum velit?
          </p>
        </div>
      </div>
      {/* / .row */}
    </div>
    {/* / .container */}
  </section>
  {/* SECTION */}
  <section className="pt-6 pt-md-8">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-11 col-xl-10">
          {/* Fugure */}
          <figure className="figure mb-0">
            {/* Slider */}
            <div
              className="figure-img"
              data-flickity='{"wrapAround": true, "pageDots": false, "imagesLoaded": true, "adaptiveHeight": true}'
            >
              <div className="w-100">
                <img
                  src="assets/img/portfolio/portfolio-cover-3.jpg"
                  alt="..."
                  className="img-fluid rounded"
                />
              </div>
              <div className="w-100">
                <img
                  src="assets/img/portfolio/portfolio-cover-4.jpg"
                  alt="..."
                  className="img-fluid rounded"
                />
              </div>
              <div className="w-100">
                <img
                  src="assets/img/portfolio/portfolio-cover-5.jpg"
                  alt="..."
                  className="img-fluid rounded"
                />
              </div>
            </div>
            {/* Caption */}
            <figcaption className="figure-caption text-center">
              This is a caption on this photo for reference
            </figcaption>
          </figure>
        </div>
      </div>
      {/* / .row */}
    </div>
    {/* / .container */}
  </section>
  {/* SECTION */}
  <section className="pt-6 pt-md-8">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-9 col-xl-8">
          {/* Heading */}
          <h2 className="font-weight-bold">Big heading for a new topic</h2>
          {/* Text */}
          <p className="mb-7">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
            reiciendis odio perferendis libero saepe voluptatum fugiat dolore
            voluptates aut, ut quas doloremque quo ad quis ipsum molestias neque
            pariatur commodi.
          </p>
          {/* Divider */}
          <hr className="hr-md mb-7 mx-auto" />
          {/* Blockquote */}
          <blockquote className="blockquote mb-7">
            <p className="h2 mb-0 text-center text-primary-desat">
              “So many teams struggle to make their onboarding experience
              anywhere near as good as their core product, so the results of
              this is poor retention”
            </p>
          </blockquote>
          {/* Divider */}
          <hr className="hr-md mb-7 mx-auto" />
          {/* Text */}
          <p className="mb-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
            reiciendis odio perferendis libero saepe voluptatum fugiat dolore
            voluptates aut, ut quas doloremque quo ad quis ipsum molestias neque
            pariatur commodi.
          </p>
        </div>
      </div>
      {/* / .row */}
    </div>
    {/* / .container */}
  </section>
  {/* SECTION */}
  <section className="pt-6 pt-md-8">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10">
          <div className="row gx-4">
            <div className="col-6">
              {/* Image */}
              <a
                className="d-block mb-4"
                data-bigpicture='{"imgSrc": "assets/img/portfolio/portfolio-6.jpg"}'
                href="#"
              >
                <img
                  src="assets/img/portfolio/portfolio-6.jpg"
                  alt="..."
                  className="img-fluid rounded lift lift-lg"
                />
              </a>
              {/* Image */}
              <a
                className="d-block lift"
                data-bigpicture='{"imgSrc": "assets/img/portfolio/portfolio-12.jpg"}'
                href="#"
              >
                <img
                  src="assets/img/portfolio/portfolio-12.jpg"
                  alt="..."
                  className="img-fluid rounded lift lift-lg"
                />
              </a>
            </div>
            <div className="col-6">
              {/* Image */}
              <a
                className="d-block mb-4"
                data-bigpicture='{"imgSrc": "assets/img/portfolio/portfolio-15.jpg"}'
                href="#"
              >
                <img
                  src="assets/img/portfolio/portfolio-15.jpg"
                  alt="..."
                  className="img-fluid rounded lift lift-lg"
                />
              </a>
              {/* Image */}
              <a
                className="d-block"
                data-bigpicture='{"imgSrc": "assets/img/portfolio/portfolio-7.jpg"}'
                href="#"
              >
                <img
                  src="assets/img/portfolio/portfolio-7.jpg"
                  alt="..."
                  className="img-fluid rounded lift lift-lg"
                />
              </a>
            </div>
          </div>
          {/* / .row */}
        </div>
      </div>
    </div>
  </section>
  {/* SECTION */}
  <section className="py-6 py-md-8">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-9 col-xl-8">
          {/* Heading */}
          <h3 className="font-weight-bold">
            Small heading for a smaller transition
          </h3>
          {/* Text */}
          <p className="mb-7">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            ducimus provident, quos sint hic, quidem voluptatibus. Quasi,
            distinctio cupiditate, omnis vitae maxime nisi eum similique libero
            ad dolore sint tempora.
          </p>
          {/* List */}
          <ul className="list-unstyled mb-0">
            <li className="d-flex">
              {/* Check */}
              <div className="badge badge-rounded-circle bg-success-soft mt-1 mr-4">
                <i className="fe fe-check" />
              </div>
              {/* Text */}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Facilis quo labore, deleniti optio non, voluptate illo doloribus
                odio iure molestiae eos tempora nobis.
              </p>
            </li>
            <li className="d-flex">
              {/* Check */}
              <div className="badge badge-rounded-circle bg-success-soft mt-1 mr-4">
                <i className="fe fe-check" />
              </div>
              {/* Text */}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Facilis quo labore, deleniti optio non, voluptate illo doloribus
                odio iure molestiae eos tempora nobis.
              </p>
            </li>
            <li className="d-flex">
              {/* Check */}
              <div className="badge badge-rounded-circle bg-success-soft mt-1 mr-4">
                <i className="fe fe-check" />
              </div>
              {/* Text */}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Facilis quo labore, deleniti optio non, voluptate illo doloribus
                odio iure molestiae eos tempora nobis.
              </p>
            </li>
          </ul>
        </div>
      </div>
      {/* / .row */}
    </div>
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
            </div>
            {/* / .row */}
          </form>
        </div>
      </div>
      {/* / .row */}
    </div>
    {/* / .container */}
  </section>
</div>

  )
}
