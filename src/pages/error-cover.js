import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


export default function ErrorCover() {
  return (
    <section>
  <div className="container d-flex flex-column">
    <div className="row align-items-center justify-content-center gx-0 min-vh-100">
      <div className="col-12 col-md-6 col-lg-4 py-8 py-md-11">
        {/* Heading */}
        <h1 className="display-3 font-weight-bold">Uh Oh.</h1>
        {/* Text */}
        <p className="mb-5 text-muted">
          We ran into an issue, but don’t worry, we’ll take care of it for sure.
        </p>
        {/* Link */}
        <a className="btn btn-primary" href="#!">
          Back to safety
        </a>
      </div>
      <div className="col-lg-7 offset-lg-1 align-self-stretch d-none d-lg-block">
        {/* Image */}
        <div
          className="h-100 w-cover bg-cover"
          style={{ backgroundImage: "url(assets/img/covers/cover-16.jpg)" }}
        />
        {/* Shape */}
        <div className="shape shape-left shape-fluid-y svg-shim text-white">
          {"{"}
          {"{"}&gt; angles/angle-left{"}"}
          {"}"}
        </div>
      </div>
    </div>{" "}
    {/* / .row */}
  </div>{" "}
  {/* / .container */}
</section>

  )
}
