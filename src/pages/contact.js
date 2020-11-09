import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default function Contact() {

  return (
    <div>
  <section
    className="py-10 py-md-14 overlay overlay-black overlay-60 bg-cover"
    style={{ backgroundImage: "url(assets/img/covers/cover-5.jpg)" }}
  >
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 text-center">
          {/* Heading */}
          <h1 className="display-2 font-weight-bold text-white">
            We’re Here to Help.
          </h1>
          {/* Text */}
          <p className="lead text-white-75 mb-0">
            We always want to hear from you! Let us know how we can best help
            you and we'll do our very best.
          </p>
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
  {/* INFO */}
  <section className="py-7 py-md-9 border-bottom border-gray-300" id="info">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          {/* Button */}
          <a
            href="#info"
            className="btn btn-white btn-rounded-circle shadow mt-n11 mt-md-n13"
            data-scroll
          >
            <i className="fe fe-arrow-down" />
          </a>
        </div>
      </div>{" "}
      {/* / .row */}
      <div className="row">
        <div className="col-12 col-md-4 text-center border-right border-gray-300">
          {/* Heading */}
          <h6 className="text-uppercase text-gray-700 mb-1">Message us</h6>
          {/* Link */}
          <div className="mb-5 mb-md-0">
            <a href="#!" className="h4 text-primary">
              Start a chat!
            </a>
          </div>
        </div>
        <div className="col-12 col-md-4 text-center border-right border-gray-300">
          {/* Heading */}
            <div>
              <h6 className="text-uppercase text-gray-700 mb-1">Email</h6>
              <div className="mb-5 mb-md-0">
                <a href="#!" className="h4">
                  Email
                </a>
              </div>
            </div>
        </div>
        <div className="col-12 col-md-4 text-center border-right border-gray-300">
          {/* Heading */}
            <div>
              <h6 className="text-uppercase text-gray-700 mb-1">Telephone</h6>
              <div className="mb-5 mb-md-0">
                <a href="#!" className="h4">
                  +1 8317647617198
                </a>
              </div>
            </div>
        </div>
      </div>
      {/* / .row */}
    </div>
  </section>
  {/* FORM */}
  <section className="pt-8 pt-md-11 pb-8 pb-md-14">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 text-center">
          {/* Heading */}
          <h2 className="font-weight-bold">Let us hear from you directly!</h2>
          {/* Text */}
          <p className="font-size-lg text-muted mb-7 mb-md-9">
            We always want to hear from you! Let us know how we can best help
            you and we'll do our very best.
          </p>
        </div>
      </div>{" "}
      {/* / .row */}
      <div className="row justify-content-center">
        <div className="col-12 col-md-12 col-lg-10">
          {/* Form */}
          <form>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="form-group mb-5">
                  {/* Label */}
                  <label className="form-label" htmlFor="contactName">
                    Full name
                  </label>
                  {/* Input */}
                  <input
                    className="form-control"
                    id="contactName"
                    type="text"
                    placeholder="Full name"
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-group mb-5">
                  {/* Label */}
                  <label className="form-label" htmlFor="contactEmail">
                    Email
                  </label>
                  {/* Input */}
                  <input
                    className="form-control"
                    id="contactEmail"
                    type="email"
                    placeholder="hello@domain.com"
                  />
                </div>
              </div>
            </div>  
            {/* / .row */}
            <div className="row">
              <div className="col-12">
                <div className="form-group mb-7 mb-md-9">
                  {/* Label */}
                  <label className="form-label" htmlFor="contactMessage">
                    What can we help you with?
                  </label>
                  {/* Input */}
                  <textarea
                    className="form-control"
                    id="contactMessage"
                    rows={5}
                    placeholder="Tell us what we can help you with!"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>{" "}
            {/* / .row */}
            <div className="row justify-content-center">
              <div className="col-auto">
                {/* Submit */}
                <button type="submit" className="btn btn-primary lift">
                  Send message
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
  {/* SHAPE */}
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
