import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


export default function About() {
  return (
    <div>
    <section className="py-8 py-md-11 border-bottom">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 text-center">
            {/* Headin */}
            <h1 className="display-2">Small team. Big hearts.</h1>
            {/* Text */}
            <p className="lead text-muted mb-7 mb-md-9">
              Our focus is always on finding the best people to work with. Our bar
              is high, but you look ready to take on the challenge.
            </p>
          </div>
        </div>{" "}
        {/* / .row */}
        <div className="row">
          <div className="col-12">
            {/* Image */}
            <div className="row gx-4">
              <div className="col-4">
                <img
                  className="img-fluid rounded shadow-lg"
                  src="assets/img/photos/photo-16.jpg"
                  alt="..."
                />
              </div>
              <div className="col-3">
                <img
                  className="img-fluid rounded shadow-lg mb-4"
                  src="assets/img/photos/photo-17.jpg"
                  alt="..."
                />
                <img
                  className="img-fluid rounded shadow-lg"
                  src="assets/img/photos/photo-18.jpg"
                  alt="..."
                />
              </div>
              <div className="col-5">
                <div className="row gx-5 mb-4">
                  <div className="col-5">
                    <img
                      className="img-fluid rounded shadow-lg"
                      src="assets/img/photos/photo-19.jpg"
                      alt="..."
                    />
                  </div>
                  <div className="col-7">
                    <img
                      className="img-fluid rounded shadow-lg"
                      src="assets/img/photos/photo-20.jpg"
                      alt="..."
                    />
                  </div>
                </div>{" "}
                {/* / .row */}
                <img
                  className="img-fluid rounded shadow-lg"
                  src="assets/img/photos/photo-21.jpg"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>{" "}
        {/* / .row */}
      </div>{" "}
      {/* / .container */}
    </section>
    {/* LOCATION */}
    <section className="pt-8 pt-md-0 border-bottom bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            {/* Map (mobile) */}
            <div className="embed-responsive embed-responsive-1by1 d-md-none">
              <div
                className="embed-responsive-item"
                data-map='{"center": [-118.244615, 34.052979], "zoom": 12}'
              />
            </div>
            {/* Map */}
            <div className="position-relative h-100 vw-50 float-right d-none d-md-block">
              {/* Map */}
              <div
                className="h-100 w-100"
                data-map='{"center": [-118.244615, 34.052979], "zoom": 12}'
              />
              {/* Shape */}
              <div className="shape shape-right shape-fluid-y svg-shim text-light">
                {"{"}
                {"{"}&gt; angles/angle-right{"}"}
                {"}"}
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-5 offset-lg-1 py-8 py-md-11 py-lg-12">
            {/* Heading */}
            <h2>
              Located in Los Angeles.
              <br />
              <span className="text-success">
                Enjoy{" "}
                <span data-typed='{"strings": ["cultural diversity", "white sand beaches", "sunny weekends"]}' />
                .
              </span>
            </h2>
            {/* Text */}
            <p className="font-size-lg text-gray-700 mb-6">
              We picked our office location to maximize our team's enjoyment! LA's
              best restaurants are within walking distance, as well are some of
              the finest coffee shops in the world. Come visit us and you'll
              agree.
            </p>
            {/* Stats */}
            <div className="d-flex">
              <div className="pr-5">
                <h3 className="text-success mb-0">
                  <span
                    data-countup='{"startVal": 0}'
                    data-to={100}
                    data-aos
                    data-aos-id="countup:in"
                  >
                    0
                  </span>
                  %
                </h3>
                <p className="text-gray-700 mb-0">Approval</p>
              </div>
              <div className="border-left border-gray-300" />
              <div className="px-5">
                <h3 className="text-success mb-0">
                  <span
                    data-countup='{"startVal": 0}'
                    data-to={85}
                    data-aos
                    data-aos-id="countup:in"
                  >
                    0
                  </span>
                  %
                </h3>
                <p className="text-gray-700 mb-0">Sunny days</p>
              </div>
              <div className="border-left border-gray-300" />
              <div className="pl-5">
                <h3 className="text-success mb-0">
                  <span
                    data-countup='{"startVal": 0}'
                    data-to={52}
                    data-aos
                    data-aos-id="countup:in"
                  >
                    0
                  </span>
                  /
                  <span
                    data-countup='{"startVal": 0}'
                    data-to={48}
                    data-aos
                    data-aos-id="countup:in"
                  >
                    0
                  </span>
                </h3>
                <p className="text-gray-700 mb-0">Gender ratio</p>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* / .row */}
      </div>{" "}
      {/* / .container */}
    </section>
    {/* COMPANIES */}
    <section className="py-8 py-md-11">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-7 text-center">
            {/* Heading */}
            <h2>
              We strive to work with the best. <br />
              The best companies in the world.
            </h2>
            {/* Text */}
            <p className="font-size-lg text-muted mb-7 mb-md-9">
              Landkit is a best place to work with some of the greatest tech
              companies in the world.
            </p>
          </div>
        </div>{" "}
        {/* / .row */}
        <div className="row">
          <div className="col-4 col-md-2">
            <div
              className="img-fluid img-fluid mb-6 mb-md-8 svg-shim"
              style={{ color: "#FF5A5F" }}
            >
              {"{"}
              {"{"}&gt; logotype/airbnb{"}"}
              {"}"}
            </div>
          </div>
          <div className="col-4 col-md-2">
            <div
              className="img-fluid img-fluid mb-6 mb-md-8 svg-shim"
              style={{ color: "#0081C9" }}
            >
              {"{"}
              {"{"}&gt; logotype/coinbase{"}"}
              {"}"}
            </div>
          </div>
          <div className="col-4 col-md-2">
            <div
              className="img-fluid img-fluid mb-6 mb-md-8 svg-shim"
              style={{ color: "#DA5988" }}
            >
              {"{"}
              {"{"}&gt; logotype/dribbble{"}"}
              {"}"}
            </div>
          </div>
          <div className="col-4 col-md-2">
            <div
              className="img-fluid img-fluid mb-6 mb-md-8 svg-shim"
              style={{ color: "#3F5D87" }}
            >
              {"{"}
              {"{"}&gt; logotype/instagram{"}"}
              {"}"}
            </div>
          </div>
          <div className="col-4 col-md-2">
            <div
              className="img-fluid img-fluid mb-6 mb-md-8 svg-shim"
              style={{ color: "#B81D24" }}
            >
              {"{"}
              {"{"}&gt; logotype/netflix{"}"}
              {"}"}
            </div>
          </div>
          <div className="col-4 col-md-2">
            <div
              className="img-fluid img-fluid mb-6 mb-md-8 svg-shim"
              style={{ color: "#CB2027" }}
            >
              {"{"}
              {"{"}&gt; logotype/pinterest{"}"}
              {"}"}
            </div>
          </div>
          <div className="col-4 col-md-2">
            <div
              className="img-fluid img-fluid mb-6 mb-md-8 svg-shim"
              style={{ color: "#6772E5" }}
            >
              {"{"}
              {"{"}&gt; logotype/stripe{"}"}
              {"}"}
            </div>
          </div>
          <div className="col-4 col-md-2">
            <div
              className="img-fluid img-fluid mb-6 mb-md-8 svg-shim"
              style={{ color: "#004F9D" }}
            >
              {"{"}
              {"{"}&gt; logotype/facebook{"}"}
              {"}"}
            </div>
          </div>
          <div className="col-4 col-md-2">
            <div
              className="img-fluid img-fluid mb-6 mb-md-8 svg-shim"
              style={{ color: "#CB2027" }}
            >
              {"{"}
              {"{"}&gt; logotype/pinterest{"}"}
              {"}"}
            </div>
          </div>
          <div className="col-4 col-md-2">
            <div
              className="img-fluid img-fluid mb-6 mb-md-8 svg-shim"
              style={{ color: "#1F8DED" }}
            >
              {"{"}
              {"{"}&gt; logotype/intercom{"}"}
              {"}"}
            </div>
          </div>
          <div className="col-4 col-md-2">
            <div
              className="img-fluid img-fluid mb-6 mb-md-8 svg-shim"
              style={{ color: "#7289DA" }}
            >
              {"{"}
              {"{"}&gt; logotype/discord{"}"}
              {"}"}
            </div>
          </div>
          <div className="col-4 col-md-2">
            <div
              className="img-fluid img-fluid mb-6 mb-md-8 svg-shim"
              style={{ color: "#0080FF" }}
            >
              {"{"}
              {"{"}&gt; logotype/digital-ocean{"}"}
              {"}"}
            </div>
          </div>
        </div>{" "}
        {/* / .row */}
      </div>{" "}
      {/* / .container */}
    </section>
    {/* SLIDER */}
    <section>
      <div
        className="flickity-button-white flickity-button-inset"
        data-flickity='{"imagesLoaded": true, "wrapAround": true, "pageDots": false}'
      >
        <div className="w-100">
          {/* Image */}
          <img
            src="assets/img/covers/cover-11.jpg"
            className="img-fluid w-100"
            alt="..."
          />
          {/* Shape */}
          <div className="shape shape-top shape-fluid-x svg-shim text-white">
            {"{"}
            {"{"}&gt; waves/wave-1{"}"}
            {"}"}
          </div>
        </div>
        <div className="w-100">
          {/* Image */}
          <img
            src="assets/img/covers/cover-3.jpg"
            className="img-fluid w-100"
            alt="..."
          />
          {/* Shape */}
          <div className="shape shape-top shape-fluid-x svg-shim text-white">
            {"{"}
            {"{"}&gt; waves/wave-1{"}"}
            {"}"}
          </div>
        </div>
      </div>
    </section>
    {/* CTA */}
    <section className="pt-6 pt-md-8">
      <div className="container pb-6 pb-md-8 border-bottom">
        <div className="row align-items-center">
          <div className="col-12 col-md">
            {/* Heading */}
            <h3 className="font-weight-bold mb-1">
              Interested in joining our team?
            </h3>
            {/* Text */}
            <p className="font-size-lg text-muted mb-5 mb-md-0">
              Hit us up and we'll get in touch with you.
            </p>
          </div>
          <div className="col-12 col-md-auto">
            {/* Button */}
            <a href="#!" className="btn btn-primary lift">
              Apply now
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
