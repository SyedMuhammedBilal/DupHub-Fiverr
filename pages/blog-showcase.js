import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


export default function BlogShowcase() {
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
            We want to showcase all <br />
            <span className="text-primary">the rich blog post options.</span>
          </h1>
          {/* Text */}
          <p className="lead text-muted mb-0">
            How you use Landkit's blog cards is up to you! Our design begins
            with atomic elements which are easily combined to create rich blog
            post components.
          </p>
        </div>
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </section>
  {/* ARTICLES */}
  <section className="pt-8 pt-md-11">
    <div className="container">
      <div className="row">
        <div className="col-12">
          {/* Heading */}
          <h2 className="mb-0">Horizontal articles</h2>
          {/*  */}
          <p className="mb-5 text-muted">
            These span the grid's entire width with several options.
          </p>
        </div>
      </div>{" "}
      {/* / .row */}
      <div className="row">
        <div className="col-12">
          {/* Card */}
          <div className="card card-row shadow-light-lg mb-6">
            <div className="row gx-0">
              <div className="col-12">
                {/* Badge */}
                <span className="badge rounded-pill bg-gray-600 badge-float badge-float-outside">
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
                  <h3>Photo on Right.</h3>
                  {/* Text */}
                  <p className="mb-0 text-muted">
                    This is the body text of the blog post to give visitors an
                    idea of what the post is about beyond just the title. It can
                    be a long snippet, a short snippet, whatever you prefer the
                    size of card and description to be.
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
                    <time dateTime="2019-05-31">May 31</time>
                  </p>
                </a>
              </div>
            </div>{" "}
            {/* / .row */}
          </div>
          {/* Card */}
          <div className="card card-row shadow-light-lg mb-6">
            <div className="row gx-0">
              <div className="col-12">
                {/* Badge */}
                <span className="badge rounded-pill bg-gray-600 badge-float badge-float-outside">
                  <span className="h6 text-uppercase">Featured</span>
                </span>
              </div>
              <a
                className="col-12 col-md-6 bg-cover card-img-left"
                style={{
                  backgroundImage: "url(assets/img/photos/photo-28.jpg)"
                }}
                href="#!"
              >
                {/* Image (placeholder) */}
                <img
                  src="assets/img/photos/photo-28.jpg"
                  alt="..."
                  className="img-fluid d-md-none invisible"
                />
                {/* Shape */}
                <div className="shape shape-right shape-fluid-y svg-shim text-white d-none d-md-block">
                  {"{"}
                  {"{"}&gt; curves/curve-4{"}"}
                  {"}"}
                </div>
              </a>
              <div className="col-12 col-md-6">
                {/* Body */}
                <a className="card-body" href="#!">
                  {/* Heading */}
                  <h3>Photo on Left.</h3>
                  {/* Text */}
                  <p className="mb-0 text-muted">
                    This is the body text of the blog post to give visitors an
                    idea of what the post is about beyond just the title. It can
                    be a long snippet, a short snippet, whatever you prefer the
                    size of card and description to be.
                  </p>
                </a>
                {/* Meta */}
                <a className="card-meta" href="#!">
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
                    <time dateTime="2019-05-29">May 29</time>
                  </p>
                </a>
              </div>
            </div>
          </div>
          {/* Card */}
          <div
            className="card card-row shadow-light-lg bg-cover overlay overlay-dark overlay-80 text-white mb-6"
            style={{ backgroundImage: "url(assets/img/covers/cover-8.jpg)" }}
          >
            <div className="row gx-0">
              <div className="col-12 col-md-6">
                {/* Body */}
                <a className="card-body" href="#!">
                  {/* Heading */}
                  <h3>Background Photo + 80% Dark Overlay.</h3>
                  {/* Text */}
                  <p className="mb-0 text-white-80">
                    It's easy to add a background image for the entire card,
                    plus make text more legible by adding an overlay across the
                    background with simple utility classes. These are all
                    generated from the theme's variables!
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
                    Ab Hadley
                  </h6>
                  {/* Date */}
                  <p className="h6 text-uppercase text-white-80 mb-0 ml-auto">
                    <time dateTime="2019-05-02">May 02</time>
                  </p>
                </a>
              </div>
            </div>{" "}
            {/* / .row */}
          </div>
          {/* Card */}
          <div
            className="card card-row shadow-light-lg bg-cover overlay overlay-gradient-dark-right overlay-60 text-white mb-6"
            style={{ backgroundImage: "url(assets/img/photos/photo-30.jpg)" }}
          >
            <div className="row gx-0 justify-content-end">
              <div className="col-12 col-md-6">
                {/* Body */}
                <a className="card-body" href="#!">
                  {/* Heading */}
                  <h3>Background Photo + Gradient Overlay.</h3>
                  {/* Text */}
                  <p className="mb-0 text-white-80">
                    This blog card example shows a background image, but instead
                    of an even wash across the entire background, it's a
                    gradient from right to left controlled by another simple
                    utility class.
                  </p>
                </a>
                {/* Meta */}
                <a className="card-meta" href="#!">
                  {/* Divider */}
                  <hr className="card-meta-divider bg-white-20" />
                  {/* Avatar */}
                  <div className="avatar avatar-sm mr-2">
                    <img
                      src="assets/img/avatars/avatar-2.jpg"
                      alt="..."
                      className="avatar-img rounded-circle"
                    />
                  </div>
                  {/* Author */}
                  <h6 className="text-uppercase text-white-80 mr-2 mb-0">
                    Adolfo Hess
                  </h6>
                  {/* Date */}
                  <p className="h6 text-uppercase text-white-80 mb-0 ml-auto">
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
  <section className="pb-8 pt-7 pb-md-11 pt-md-10">
    <div className="container">
      <div className="row">
        <div className="col-12">
          {/* Heading */}
          <h2 className="mb-0">Vertical articles</h2>
          {/* Text */}
          <p className="mb-5 text-muted">
            These can be split into smaller grid sizes, though we recommend half
            or thirds
          </p>
        </div>
      </div>{" "}
      {/* / .row */}
      <div className="row">
        <div className="col-12 col-md-6 d-flex">
          {/* Card */}
          <div className="card shadow-light-lg mb-6">
            {/* Badge */}
            <span className="badge rounded-pill bg-gray-600 badge-float badge-float-outside">
              <span className="h6 text-uppercase">Featured</span>
            </span>
            {/* Image */}
            <a className="card-img-top" href="#!">
              <img
                src="assets/img/photos/photo-28.jpg"
                alt="..."
                className="img-fluid"
              />
            </a>
            {/* Shape */}
            <div className="position-relative">
              <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                {"{"}
                {"{"}&gt; curves/curve-3{"}"}
                {"}"}
              </div>
            </div>
            {/* Body */}
            <a className="card-body" href="#!">
              {/* Heading */}
              <h3>Photo on Top + 50% Width.</h3>
              {/* Text */}
              <p className="mb-0 text-muted">
                The markup for vertical articles is the same for a half and
                thirds split, it's controlled with columns.
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
          <div
            className="card pt-14 bg-cover overlay overlay-primary overlay-80 text-white shadow-light-lg mb-6"
            style={{ backgroundImage: "url(assets/img/covers/cover-17.jpg)" }}
          >
            {/* Badge */}
            <span className="badge rounded-pill bg-light badge-float badge-float-inside">
              <span className="h6 text-uppercase">Featured</span>
            </span>
            {/* Body */}
            <a className="card-body mt-auto" href="#!">
              {/* Heading */}
              <h3 className="mt-auto">Background Photo + Primary Overlay</h3>
              {/* Text */}
              <p className="mb-0 text-white-80">
                Background photos are super easy to add and overlays can be
                added with utilities for legibility.
              </p>
            </a>
            {/* Meta */}
            <a className="card-meta" href="#!">
              {/* Divider */}
              <hr className="card-meta-divider bg-white-20" />
              {/* Avatar */}
              <div className="avatar avatar-sm mr-2">
                <img
                  src="assets/img/avatars/avatar-2.jpg"
                  alt="..."
                  className="avatar-img rounded-circle"
                />
              </div>
              {/* Author */}
              <h6 className="text-uppercase text-white-80 mr-2 mb-0">
                Adolfo Hess
              </h6>
              {/* Date */}
              <p className="h6 text-uppercase text-white-80 mb-0 ml-auto">
                <time dateTime="2019-05-02">May 02</time>
              </p>
            </a>
          </div>
        </div>
      </div>{" "}
      {/* / .row */}
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4 d-flex">
          {/* Card */}
          <div
            className="card mb-6 mb-lg-0 pt-14 overlay overlay-black overlay-30 bg-cover shadow-light-lg"
            style={{ backgroundImage: "url(assets/img/photos/photo-8.jpg)" }}
          >
            {/* Body */}
            <a className="card-body mt-auto" href="#!">
              {/* Heading */}
              <h3 className="text-white">
                Background Photo + 30% Dark Overlay
              </h3>
              {/* Text */}
              <p className="mb-0 text-white">
                A much lighter overlay work on darker photos, and is easy to
                control with utilities.
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
                Ab Hadley
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
          <div className="card mb-6 mb-lg-0 shadow-light-lg">
            {/* Image */}
            <a className="card-img-top" href="#!">
              <img
                src="assets/img/photos/photo-7.jpg"
                alt="..."
                className="card-img-top"
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
              <h3>Photo on Top + 33.3% Width.</h3>
              {/* Text */}
              <p className="mb-0 text-muted">
                The markup for this card is identical to that for the 50% Width
                article above.
              </p>
            </a>
            {/* Meta */}
            <a className="card-meta" href="#!">
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
        <div className="col-12 col-lg-4 d-flex">
          {/* Card */}
          <div className="card shadow-light-lg">
            {/* Body */}
            <a className="card-body my-auto" href="#!">
              {/* Heading */}
              <h3 className="mt-auto">All Text Card.</h3>
              {/* Text */}
              <p className="mb-0 text-muted">
                Notice how this card stays the same height as its siblings and
                this text is vertically centered (at desktop sizes). This keeps
                layouts looking consistent no matter what type of content
                occupies each sibling card.
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
