import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


export default function Enterprise() {
  return (
    <div>
  <section className="py-10 py-md-14 bg-primary" id="welcome">
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
          <h1 className="display-2 font-weight-bold text-white">
            Teamwork Made Easy.
          </h1>
          {/* Text */}
          <p className="lead text-white mb-8">
            Forward-thinking businesses use Landkit to create collaborative
            workspaces for their projects.
          </p>
          {/* Button */}
          <a href="#!" className="btn btn-white shadow lift">
            Create your workspace
          </a>
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
  {/* ABOUT */}
  <section className="pt-8 pt-md-10" id="about">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          {/* Button */}
          <a
            href="#about"
            className="btn btn-white btn-rounded-circle shadow mt-n12 mt-md-n14"
            data-scroll
          >
            <i className="fe fe-arrow-down" />
          </a>
        </div>
      </div>{" "}
      {/* / .row */}
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 text-center">
          {/* Heading */}
          <h2 className="font-weight-bold">
            The hub for all your{" "}
            <span className="text-primary">communication and work</span>.
          </h2>
          {/* Text */}
          <p className="font-size-lg text-muted mb-9">
            Landkit is where your team can come together to get stuff done.
            Chat, files, wikis, documentation, and more.
          </p>
        </div>
      </div>{" "}
      {/* / .row */}
      <div className="row">
        <div className="col-12 col-lg-6">
          {/* Item */}
          <div className="row align-items-center mb-8" data-aos="fade-up">
            <div className="col-4 col-lg-5">
              {/* Image */}
              <img
                src="assets/img/illustrations/illustration-4.png"
                alt="..."
                className="img-fluid"
              />
            </div>
            <div className="col-8 col-lg-7">
              {/* Heading */}
              <h3 className="font-weight-bold mb-2">Conversations</h3>
              {/* Text */}
              <p className="text-gray-700 mb-0">
                Communicate with your team in public or private chats with
                individuals or groups.
              </p>
            </div>
          </div>{" "}
          {/* / .row */}
          {/* Item */}
          <div className="row align-items-center mb-8" data-aos="fade-up">
            <div className="col-4 col-lg-5">
              {/* Image */}
              <img
                src="assets/img/illustrations/illustration-8.png"
                alt="..."
                className="img-fluid"
              />
            </div>
            <div className="col-8 col-lg-7">
              {/* Heading */}
              <h3 className="font-weight-bold mb-2">Unified</h3>
              {/* Text */}
              <p className="text-gray-700 mb-0">
                Keep everything in one place and feel at peace and organized
                rather than scattered.
              </p>
            </div>
          </div>{" "}
          {/* / .row */}
        </div>
        <div className="col-12 col-lg-6">
          {/* Item */}
          <div className="row align-items-center mb-8" data-aos="fade-up">
            <div className="col-4 col-lg-5">
              {/* Image */}
              <img
                src="assets/img/illustrations/illustration-7.png"
                alt="..."
                className="img-fluid"
              />
            </div>
            <div className="col-8 col-lg-7">
              {/* Heading */}
              <h3 className="font-weight-bold mb-2">Analytics</h3>
              {/* Text */}
              <p className="text-gray-700 mb-0">
                Keep track of what's happening in your company from a
                centralized dashboard.
              </p>
            </div>
          </div>{" "}
          {/* / .row */}
          {/* Item */}
          <div className="row align-items-center mb-8" data-aos="fade-up">
            <div className="col-4 col-lg-5">
              {/* Image */}
              <img
                src="assets/img/illustrations/illustration-6.png"
                alt="..."
                className="img-fluid"
              />
            </div>
            <div className="col-8 col-lg-7">
              {/* Heading */}
              <h3 className="font-weight-bold mb-2">Permissions</h3>
              {/* Text */}
              <p className="text-gray-700 mb-0">
                Control who has access to which projects and data through our
                control panel.
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
  {/* UNIFIED */}
  <section className="py-8 py-md-11">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 col-lg-5" data-aos="fade-up">
          {/* Badge */}
          <span className="badge rounded-pill bg-success-soft mb-3">
            <span className="h6 text-uppercase">Unified</span>
          </span>
          {/* Heading */}
          <h2 className="font-weight-bold">
            Replace your microservices <br />
            <span className="text-success">with one simple app</span>.
          </h2>
          {/* Text */}
          <p className="font-size-lg text-gray-700">
            Using our single innovative platform you can remove all your
            communication dependencies and the messy rat's nest of email, calls,
            texts, wikis, and apps you currently have.
          </p>
          {/* Form */}
          <form className="mb-8">
            <div className="row gx-4">
              <div className="col-12 col-md">
                {/* Input */}
                <div className="form-group mb-md-0">
                  <input
                    type="url"
                    className="form-control bg-light border-0"
                    placeholder="www.yoursite.com"
                  />
                </div>
              </div>
              <div className="col-12 col-md-auto">
                {/* Submit */}
                <button className="btn btn-success-soft">Get started</button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-12 col-md-6 col-lg-6 offset-lg-1">
          {/* Card */}
          <div
            className="card card-border border-success shadow-lg mb-5"
            data-aos="fade-up"
          >
            <div className="card-body">
              {/* List group */}
              <div className="list-group list-group-flush">
                <div className="list-group-item d-flex align-items-center">
                  {/* Text */}
                  <div className="mr-auto">
                    {/* Heading */}
                    <p className="font-weight-bold mb-1">
                      Unlimited users. One price.
                    </p>
                    {/* Text */}
                    <p className="font-size-sm text-muted mb-0">
                      We don't charge per seat, just per service.
                    </p>
                  </div>
                  {/* Check */}
                  <div className="badge badge-rounded-circle bg-success-soft ml-4">
                    <i className="fe fe-check" />
                  </div>
                </div>
                <div className="list-group-item d-flex align-items-center">
                  {/* Text */}
                  <div className="mr-auto">
                    {/* Heading */}
                    <p className="font-weight-bold mb-1">
                      Guaranteed 100% uptime
                    </p>
                    {/* Text */}
                    <p className="font-size-sm text-muted mb-0">
                      Our server network never goes down.
                    </p>
                  </div>
                  {/* Check */}
                  <div className="badge badge-rounded-circle bg-success-soft ml-4">
                    <i className="fe fe-check" />
                  </div>
                </div>
                <div className="list-group-item d-flex align-items-center">
                  {/* Text */}
                  <div className="mr-auto">
                    {/* Heading */}
                    <p className="font-weight-bold mb-1">Lifetime storage *</p>
                    {/* Text */}
                    <p className="font-size-sm text-muted mb-0">
                      We store all your data forever. No extra charge.
                    </p>
                  </div>
                  {/* Check */}
                  <div className="badge badge-rounded-circle bg-success-soft ml-4">
                    <i className="fe fe-check" />
                  </div>
                </div>
                <div className="list-group-item d-flex align-items-center">
                  {/* Text */}
                  <div className="mr-auto">
                    {/* Heading */}
                    <p className="font-weight-bold mb-1">256-bit encryption</p>
                    {/* Text */}
                    <p className="font-size-sm text-muted mb-0">
                      Keep your communication and data safe.
                    </p>
                  </div>
                  {/* Check */}
                  <div className="badge badge-rounded-circle bg-success-soft ml-4">
                    <i className="fe fe-check" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Text */}
          <p className="font-size-sm text-center text-gray-500 mb-0">
            * Limited to the life of the company
          </p>
        </div>
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </section>
  {/* TESTIMONIALS */}
  <section
    data-jarallax
    data-speed=".8"
    className="py-15 overlay overlay-black overlay-60 jarallax"
    style={{ backgroundImage: "url(assets/img/covers/cover-1.jpg)" }}
  >
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-7">
          {/* Blockquote */}
          <blockquote className="blockquote mb-0">
            {/* Text */}
            <p className="h2 text-white">
              "Our team turned to Landkit to solve our communication issues and
              it has been such a pleasure. Now that we're all on it we can never
              look back."
            </p>
            {/* Footer */}
            <footer className="blockquote-footer text-white-50 mb-0">
              Casey Fyfe of Airbnb
            </footer>
          </blockquote>
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
      {"{"}&gt; curves/curve-2{"}"}
      {"}"}
    </div>
  </div>
  {/* CASE STUDIES */}
  <section className="pt-10">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 text-center">
          {/* Badge */}
          <span className="badge rounded-pill bg-success-soft mb-3">
            <span className="h6 text-uppercase">Case Studies</span>
          </span>
          {/* Heading */}
          <h2 className="font-weight-bold">Used by your favorite companies</h2>
          {/* Text */}
          <p className="font-size-lg text-gray-700 mb-9">
            Many of the greatest startups in the world are already using Landkit
            to help them get work done and solve their communication needs.
          </p>
        </div>
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </section>
  {/* CASE STUDIES (CAROUSEL) */}
  <section>
    <div className="container">
      <div className="row">
        <div className="col-12">
          {/* Flickity */}
          <div
            className="flickity-viewport-visible pt-2 pb-9"
            data-flickity='{"cellAlign": "left", "imagesLoaded": true, "pageDots": false, "prevNextButtons": false, "contain": true}'
          >
            <div className="col-12 col-md-5 col-lg-4">
              {/* Card */}
              <div
                className="card card-border shadow-light-lg lift lift-lg"
                style={{ borderTopColor: "#FF5A5F" }}
              >
                <div className="card-body text-center">
                  {/* Icon */}
                  <div
                    className="img-fluid mb-5 w-50 svg-shim mx-auto"
                    style={{ color: "#FF5A5F" }}
                  >
                    {"{"}
                    {"{"}&gt; logotype/airbnb{"}"}
                    {"}"}
                  </div>
                  {/* Text */}
                  <p className="text-gray-700 mb-5">
                    Uses Landkit to keep their remote teams from around the
                    world in sync.
                  </p>
                  {/* Link */}
                  <a href="#!" style={{ color: "#FF5A5F" }}>
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-5 col-lg-4">
              {/* Card */}
              <div
                className="card card-border shadow-light-lg lift lift-lg"
                style={{ borderTopColor: "#B81D24" }}
              >
                <div className="card-body text-center">
                  {/* Icon */}
                  <div
                    className="img-fluid mb-5 w-50 svg-shim mx-auto"
                    style={{ color: "#B81D24" }}
                  >
                    {"{"}
                    {"{"}&gt; logotype/netflix{"}"}
                    {"}"}
                  </div>
                  {/* Text */}
                  <p className="text-gray-700 mb-5">
                    Uses Landkit to document their processes for acquiring
                    shows.
                  </p>
                  {/* Link */}
                  <a href="#!" style={{ color: "#B81D24" }}>
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-5 col-lg-4">
              {/* Card */}
              <div
                className="card card-border shadow-light-lg lift lift-lg"
                style={{ borderTopColor: "#0081C9" }}
              >
                <div className="card-body text-center">
                  {/* Icon */}
                  <div
                    className="img-fluid mb-5 w-50 svg-shim mx-auto"
                    style={{ color: "#0081C9" }}
                  >
                    {"{"}
                    {"{"}&gt; logotype/coinbase{"}"}
                    {"}"}
                  </div>
                  {/* Text */}
                  <p className="text-gray-700 mb-5">
                    Uses Landkit to share their brand assets across their teams.
                  </p>
                  {/* Link */}
                  <a href="#!" style={{ color: "#0081C9" }}>
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-5 col-lg-4">
              {/* Card */}
              <div
                className="card card-border shadow-light-lg lift lift-lg"
                style={{ borderTopColor: "#6772E5" }}
              >
                <div className="card-body text-center">
                  {/* Icon */}
                  <div
                    className="img-fluid mb-5 w-50 svg-shim mx-auto"
                    style={{ color: "#6772E5" }}
                  >
                    {"{"}
                    {"{"}&gt; logotype/stripe{"}"}
                    {"}"}
                  </div>
                  {/* Text */}
                  <p className="text-gray-700 mb-5">
                    Uses Landkit to plan their product development with
                    engineering.
                  </p>
                  {/* Link */}
                  <a href="#!" style={{ color: "#6772E5" }}>
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-5 col-lg-4">
              {/* Card */}
              <div
                className="card card-border shadow-light-lg lift lift-lg"
                style={{ borderTopColor: "#CB2027" }}
              >
                <div className="card-body text-center">
                  {/* Icon */}
                  <div
                    className="img-fluid mb-5 w-50 svg-shim mx-auto"
                    style={{ color: "#CB2027" }}
                  >
                    {"{"}
                    {"{"}&gt; logotype/pinterest{"}"}
                    {"}"}
                  </div>
                  {/* Text */}
                  <p className="text-gray-700 mb-5">
                    Uses Landkit to share financial projections with their
                    investors.
                  </p>
                  {/* Link */}
                  <a href="#!" style={{ color: "#CB2027" }}>
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-5 col-lg-4">
              {/* Card */}
              <div
                className="card card-border shadow-light-lg lift lift-lg"
                style={{ borderTopColor: "#DA5988" }}
              >
                <div className="card-body text-center">
                  {/* Icon */}
                  <div
                    className="img-fluid mb-5 w-50 svg-shim mx-auto"
                    style={{ color: "#DA5988" }}
                  >
                    {"{"}
                    {"{"}&gt; logotype/dribbble{"}"}
                    {"}"}
                  </div>
                  {/* Text */}
                  <p className="text-gray-700 mb-5">
                    Uses Landkit to plan their priorities for the company
                    quarterly and annually.
                  </p>
                  {/* Link */}
                  <a href="#!" style={{ color: "#DA5988" }}>
                    Read more
                  </a>
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
  {/* INTEGRATIONS */}
  <section className="pt-8 pt-md-11">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 text-center">
          {/* Badge */}
          <span className="badge rounded-pill bg-success-soft mb-3">
            <span className="h6 text-uppercase">Integrations</span>
          </span>
          {/* Heading */}
          <h2 className="font-weight-bold">
            Integrated with your favorite platforms
          </h2>
          {/* Text */}
          <p className="font-size-lg text-gray-700 mb-9">
            Your data should be connected and portable. Landkit connects with
            other sources to help you get more done.
          </p>
        </div>
      </div>{" "}
      {/* / .row */}
      <div className="row">
        <div
          className="col-12 col-md-6 col-lg-4 text-center"
          data-aos="fade-up"
        >
          {/* Icon */}
          <div className="icon icon-lg mb-4">
            {"{"}
            {"{"}&gt; logomark/slack{"}"}
            {"}"}
          </div>
          {/* Heading */}
          <h3 className="font-weight-bold">Slack</h3>
          {/* Text */}
          <p className="text-muted mb-8">
            Sync your team's work and activity to share automatically in a
            channel with a simple plugin.
          </p>
        </div>
        <div
          className="col-12 col-md-6 col-lg-4 text-center"
          data-aos="fade-up"
        >
          {/* Icon */}
          <div className="icon icon-lg mb-4">
            {"{"}
            {"{"}&gt; logomark/mailchimp{"}"}
            {"}"}
          </div>
          {/* Heading */}
          <h3 className="font-weight-bold">Mailchimp</h3>
          {/* Text */}
          <p className="text-muted mb-8 mb-lg-0">
            Communicate important messages to your users through Landkit using
            Mailchimp as the delivery service.
          </p>
        </div>
        <div
          className="col-12 col-md-6 col-lg-4 text-center"
          data-aos="fade-up"
        >
          {/* Icon */}
          <div className="icon icon-lg mb-4">
            {"{"}
            {"{"}&gt; logomark/dropbox{"}"}
            {"}"}
          </div>
          {/* Heading */}
          <h3 className="font-weight-bold">Dropbox</h3>
          {/* Text */}
          <p className="text-muted mb-8 mb-md-0">
            Sync any file store to Dropbox for automated sharing with people
            outside the company.
          </p>
        </div>
        <div
          className="col-12 col-md-6 col-lg-4 text-center"
          data-aos="fade-up"
        >
          {/* Icon */}
          <div className="icon icon-lg mb-4">
            {"{"}
            {"{"}&gt; logomark/google-drive{"}"}
            {"}"}
          </div>
          {/* Heading */}
          <h3 className="font-weight-bold">Google Drive</h3>
          {/* Text */}
          <p className="text-muted mb-8">
            Sync any file store to Google Drive for automated sharing with
            people outside the company.
          </p>
        </div>
        <div
          className="col-12 col-md-6 col-lg-4 text-center"
          data-aos="fade-up"
        >
          {/* Icon */}
          <div className="icon icon-lg mb-4">
            {"{"}
            {"{"}&gt; logomark/google-ad-manager{"}"}
            {"}"}
          </div>
          {/* Heading */}
          <h3 className="font-weight-bold">Google Ad Manager</h3>
          {/* Text */}
          <p className="text-muted mb-8">
            Easily manage and edit any Adwords campaign inline to improve ROI
            with constant review.
          </p>
        </div>
        <div
          className="col-12 col-md-6 col-lg-4 text-center"
          data-aos="fade-up"
        >
          {/* Icon */}
          <div className="icon icon-lg mb-4">
            {"{"}
            {"{"}&gt; logomark/atlassian{"}"}
            {"}"}
          </div>
          {/* Heading */}
          <h3 className="font-weight-bold">Atlassian</h3>
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
  {/* REGISTRATION */}
  <section className="py-11">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          {/* Card */}
          <div
            className="card card-border border-primary shadow-light-lg"
            data-jarallax-element={-40}
          >
            <div className="card-body">
              <div className="row justify-content-center">
                <div className="col-12 col-xl-11">
                  {/* Image */}
                  <div className="text-center">
                    <img
                      src="assets/img/illustrations/illustration-1.png"
                      alt="..."
                      className="img-fluid mb-3"
                      style={{ width: 200 }}
                    />
                  </div>
                  {/* Heading */}
                  <h2 className="font-weight-bold text-center mb-1">
                    Schedule a demo with us
                  </h2>
                  {/* Text */}
                  <p className="font-size-lg text-center text-muted mb-6 mb-md-8">
                    We can help you solve company communication.
                  </p>
                  {/* Form */}
                  <form>
                    <div className="row">
                      <div className="col-12 col-md-6">
                        {/* First name */}
                        <div className="form-label-group">
                          <input
                            type="text"
                            className="form-control form-control-flush"
                            id="registrationFirstName"
                            placeholder="First name"
                          />
                          <label htmlFor="registrationFirstName">
                            First name
                          </label>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        {/* Last name */}
                        <div className="form-label-group">
                          <input
                            type="text"
                            className="form-control form-control-flush"
                            id="registrationLastName"
                            placeholder="Last name"
                          />
                          <label htmlFor="registrationLastName">
                            Last name
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-md-6">
                        {/* Email */}
                        <div className="form-label-group">
                          <input
                            type="email"
                            className="form-control form-control-flush"
                            id="registrationEmail"
                            placeholder="Email"
                          />
                          <label htmlFor="registrationEmail">Email</label>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        {/* Password */}
                        <div className="form-label-group">
                          <input
                            type="password"
                            className="form-control form-control-flush"
                            id="registrationPassword"
                            placeholder="Password"
                          />
                          <label htmlFor="registrationPassword">Password</label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        {/* Submit */}
                        <button className="btn btn-block btn-primary mt-3 lift">
                          Request a demo
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>{" "}
              {/* / .row */}
            </div>
          </div>
        </div>
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </section>
  {/* CURVE */}
  <div className="position-relative mt-n16">
    <div className="shape shape-bottom shape-fluid-x svg-shim text-dark">
      {"{"}
      {"{"}&gt; curves/curve-1{"}"}
      {"}"}
    </div>
  </div>
  {/* FOOTER */}
  <section className="pt-16 bg-dark">
    {"{"}
    {"{"}&gt; partials/footer classList="bg-dark border-top border-gray-800-50"
    {"}"}
    {"}"}
  </section>
</div>

  )
}
