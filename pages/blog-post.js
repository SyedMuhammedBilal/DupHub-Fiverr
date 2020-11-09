import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


export default function BlogPost() {
  return (
    <div>
  <section
    data-jarallax
    data-speed=".8"
    className="py-12 py-md-15 bg-cover jarallax"
    style={{ backgroundImage: "url(assets/img/covers/cover-8.jpg)" }}
  />
  {/* HEADER */}
  <section className="pt-8 pt-md-11">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-9 col-xl-8">
          {/* Heading */}
          <h1 className="display-4 text-center">
            Remote Work is the Future, but Should You Go Remote?
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
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </section>
  {/* SECTION */}
  <section className="pt-6 pt-md-8">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-9 col-xl-8">
          {/* Fugure */}
          <figure className="figure mb-7">
            {/* Image */}
            <img
              className="figure-img img-fluid rounded lift lift-lg"
              src="assets/img/photos/photo-27.jpg"
              alt="..."
            />
            {/* Caption */}
            <figcaption className="figure-caption text-center">
              This is a caption on this photo for reference
            </figcaption>
          </figure>
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
      </div>{" "}
      {/* / .row */}
    </div>{" "}
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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
            reiciendis odio perferendis libero saepe voluptatum fugiat dolore
            voluptates aut, ut quas doloremque quo ad quis ipsum molestias neque
            pariatur commodi.
          </p>
          <ul className="mb-0">
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
              voluptatem nihil labore, recusandae, at nobis cumque repellendus
              saepe maiores aperiam fuga vel tenetur placeat. Officia, natus,
              cupiditate! Natus facere, explicabo?
            </li>
            <li className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
              dolorem modi corrupti excepturi quo enim odit deserunt culpa
              blanditiis quidem doloribus, iusto aspernatur quisquam quod
              numquam consequatur asperiores? Sint, dolor!
            </li>
          </ul>
        </div>
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </section>
  {/* SECTION */}
  <section className="pt-6 pt-md-8">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-11 col-xl-10">
          {/* Slider */}
          <div data-flickity='{"wrapAround": true, "pageDots": false, "imagesLoaded": true, "adaptiveHeight": true}'>
            <div className="w-100">
              <img
                src="assets/img/photos/photo-28.jpg"
                alt="..."
                className="img-fluid rounded"
              />
            </div>
            <div className="w-100">
              <img
                src="assets/img/photos/photo-29.jpg"
                alt="..."
                className="img-fluid rounded"
              />
            </div>
            <div className="w-100">
              <img
                src="assets/img/photos/photo-30.jpg"
                alt="..."
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </section>
  {/* SECTION */}
  <section className="pt-6 pt-md-8">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-9 col-xl-8">
          {/* Heading */}
          <h3 className="font-weight-bold">
            Small heading for a smaller transition
          </h3>
          {/* Text */}
          <p className="mb-7">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
            reiciendis odio perferendis libero saepe voluptatum fugiat dolore
            voluptates aut, ut quas doloremque quo ad quis ipsum molestias neque
            pariatur commodi.
          </p>
          {/* Divider */}
          <hr className="hr-md mb-7" />
          {/* Blockquote */}
          <blockquote className="blockquote mb-7">
            <p className="h2 mb-0 text-center text-primary-desat">
              “So many teams struggle to make their onboarding experience
              anywhere near as good as their core product, so the results of
              this is poor retention”
            </p>
          </blockquote>
          {/* Divider */}
          <hr className="hr-md mb-7" />
          {/* Text */}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            ducimus provident, quos sint hic, quidem voluptatibus. Quasi,
            distinctio cupiditate, omnis vitae maxime nisi eum similique libero
            ad dolore sint tempora.
          </p>
          {/* List */}
          <ul className="list-unstyled mb-7">
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
          {/* Grid */}
          <div className="row gx-4">
            <div className="col-6">
              {/* Image */}
              <a
                className="d-block"
                data-bigpicture='{"imgSrc": "assets/img/covers/cover-15.jpg"}'
                href="#"
              >
                <img
                  src="assets/img/covers/cover-15.jpg"
                  alt="..."
                  className="img-fluid rounded"
                />
              </a>
            </div>
            <div className="col-6">
              {/* Image */}
              <a
                className="d-block lift lift-lg mb-4"
                data-bigpicture='{"imgSrc": "assets/img/photos/photo-29.jpg"}'
                href="#"
              >
                <img
                  src="assets/img/photos/photo-29.jpg"
                  alt="..."
                  className="img-fluid rounded"
                />
              </a>
              {/* Image */}
              <a
                className="d-block lift lift-lg"
                data-bigpicture='{"imgSrc": "assets/img/photos/photo-30.jpg"}'
                href="#"
              >
                <img
                  src="assets/img/photos/photo-30.jpg"
                  alt="..."
                  className="img-fluid rounded"
                />
              </a>
            </div>
          </div>{" "}
          {/* / .row */}
        </div>
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </section>
  {/* SECTION */}
  <section className="pt-6 pt-md-8">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-9 col-xl-8">
          {/* Heading */}
          <h3 className="font-weight-bold">
            Small heading for a smaller transition
          </h3>
          {/* Text */}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
            reiciendis odio perferendis libero saepe voluptatum fugiat dolore
            voluptates aut, ut quas doloremque quo ad quis ipsum molestias neque
            pariatur commodi.
          </p>
          <p className="mb-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim quos,
            commodi fugiat? Repellat accusantium error quisquam autem magni.
            Placeat ea dolorem voluptatem sequi veritatis, fugit nisi omnis,
            aspernatur sint quidem.
          </p>
        </div>
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </section>
  {/* SECTION */}
  <section className="pt-6 pt-md-8">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-11 col-xl-10">
          {/* Card */}
          <div className="card card-row shadow-light-lg">
            <div className="row gx-0">
              <div
                className="col-12 col-md-6 bg-cover card-img-left"
                style={{
                  backgroundImage: "url(assets/img/photos/photo-16.jpg)"
                }}
              >
                {/* Image (placeholder) */}
                <img
                  src="assets/img/photos/photo-16.jpg"
                  alt="..."
                  className="img-fluid d-md-none invisible"
                />
                {/* Shape */}
                <div className="shape shape-right shape-fluid-y svg-shim text-white d-none d-md-block">
                  {"{"}
                  {"{"}&gt; curves/curve-4{"}"}
                  {"}"}
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="card-body">
                  {/* Heading */}
                  <h3 className="font-weight-bold">Freelance guide</h3>
                  {/* Text */}
                  <p className="text-muted">
                    Find out the best tricks and tips to living life anywhere
                    you want.
                  </p>
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
                    <div className="mt-6">
                      <button
                        className="btn btn-block btn-success lift"
                        type="submit"
                      >
                        Download the Guide
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </section>
  {/* SECTION */}
  <section className="pt-6 pt-md-8 pb-8 pb-md-11">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-9 col-xl-8">
          {/* Text */}
          <p className="mb-7">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, quod a
            illum, cumque recusandae quae ea tempore, fugit, expedita vero natus
            aliquam nulla accusamus! Commodi culpa quibusdam accusamus
            aspernatur eveniet.
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
  {/* ARTICLES */}
  <section className="pt-7 pt-md-10 bg-light">
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
