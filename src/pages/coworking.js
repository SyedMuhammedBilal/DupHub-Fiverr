import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


export default function Coworking() {
  return (
    <div>
  <section className="border-bottom">
    <div className="container">
      <div className="row align-items-stretch">
        <div className="col-12 col-md-6 offset-md-1 order-md-2">
          {/* Slider (mobile) */}
          <div
            className="d-md-none img-cover"
            data-flickity='{"imagesLoaded": true, "wrapAround": true, "prevNextButtons": false, "pageDots": false}'
          >
            <div className="w-100">
              {/* Image */}
              <img
                src="assets/img/covers/cover-12.jpg"
                alt="..."
                className="img-fluid"
              />
            </div>
            <div className="w-100">
              {/* Image */}
              <img
                src="assets/img/covers/cover-2.jpg"
                alt="..."
                className="img-fluid"
              />
            </div>
          </div>
          {/* Slider */}
          <div
            className="position-relative h-100 vw-50 d-none d-md-block"
            data-aos="fade-left"
          >
            {/* Slider */}
            <div
              className="flickity-button-bottom flickity-button-white h-100 w-100"
              data-flickity='{"imagesLoaded": true, "setGallerySize": false, "wrapAround": true, "pageDots": false}'
            >
              <div
                className="w-100 h-100 bg-cover"
                style={{
                  backgroundImage: "url(assets/img/covers/cover-9.jpg)"
                }}
              />
              <div
                className="w-100 h-100 bg-cover"
                style={{
                  backgroundImage: "url(assets/img/covers/cover-2.jpg)"
                }}
              />
            </div>
            {/* Shape */}
            <div className="shape shape-left shape-fluid-y svg-shim text-white">
              {"{"}
              {"{"}&gt; angles/angle-left{"}"}
              {"}"}
            </div>
          </div>
        </div>
        <div
          className="col-12 col-md-5 py-8 py-md-14 order-md-1"
          data-aos="fade-right"
        >
          {/* Heading */}
          <h1 className="display-3">
            Coworking spaces built for{" "}
            <span className="text-success">startups.</span>
          </h1>
          {/* Text */}
          <p className="lead text-muted mb-6 mb-md-8">
            We design and build coworking spaces tailored to the needs of
            growing teams.
          </p>
          {/* Text */}
          <p>Where are you located?</p>
          {/* Form */}
          <form>
            <div className="row gx-4">
              <div className="col-12 col-lg">
                {/* Search */}
                <div className="form-group mb-lg-0">
                  <input
                    type="search"
                    className="form-control"
                    defaultValue="Los Angeles"
                  />
                </div>
              </div>
              <div className="col-12 col-lg-auto">
                {/* Button */}
                <button
                  type="submit"
                  className="btn btn-block btn-primary shadow lift"
                >
                  Find space
                </button>
              </div>
            </div>{" "}
            {/* / .form-row */}
          </form>
        </div>
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </section>
  {/* FLEXIBILITY */}
  <section className="pt-8 pt-md-11 bg-gradient-light">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 text-center">
          {/* Badge */}
          <span className="badge rounded-pill bg-success-soft mb-3">
            <span className="h6 text-uppercase">Flexibility</span>
          </span>
          {/* Heading */}
          <h1>Spaces for any size of team.</h1>
          {/* Text */}
          <p className="font-size-lg text-gray-700 mb-7 mb-md-9">
            No matter what size your team, we have a solution. From single
            shared spaces to entire floors, it's available.
          </p>
        </div>
      </div>{" "}
      {/* / .row */}
      <div className="row">
        <div className="col-12 col-md-4" data-aos="fade-up">
          {/* Card */}
          <div className="card shadow-light-lg mb-6 mb-md-0 lift lift-lg">
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
                {"{"}&gt; curves/curve-1{"}"}
                {"}"}
              </div>
            </div>
            {/* Body */}
            <div className="card-body position-relative">
              {/* Badge */}
              <div className="position-relative text-right mt-n8 mr-n4 mb-3">
                <span className="badge rounded-pill bg-success">
                  <span className="h6 text-uppercase">$49/mo</span>
                </span>
              </div>
              {/* Heading */}
              <h3>Shared Coworking</h3>
              {/* Text */}
              <p className="text-muted">
                Open seating is available weekdays from 7am - 7pm and weekends
                from 9am - 5pm.
              </p>
              {/* Link */}
              <a href="#!" className="font-weight-bold text-decoration-none">
                Tour the space <i className="fe fe-arrow-right ml-3" />
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-12 col-md-4"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          {/* Card */}
          <div className="card shadow-light-lg mb-6 mb-md-0 lift lift-lg">
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
                {"{"}&gt; curves/curve-1{"}"}
                {"}"}
              </div>
            </div>
            {/* Body */}
            <div className="card-body position-relative">
              {/* Badge */}
              <div className="position-relative text-right mt-n8 mr-n4 mb-3">
                <span className="badge rounded-pill bg-warning">
                  <span className="h6 text-uppercase">$99/mo</span>
                </span>
              </div>
              {/* Heading */}
              <h3>Designated Desk</h3>
              {/* Text */}
              <p className="text-muted">
                A personal space to leave your computer, monitor, and supplies
                with unlimited access.
              </p>
              {/* Link */}
              <a href="#!" className="font-weight-bold text-decoration-none">
                Find a desk <i className="fe fe-arrow-right ml-3" />
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-12 col-md-4"
          data-aos="fade-up"
          data-aos-delay={200}
        >
          {/* Card */}
          <div className="card shadow-light-lg lift lift-lg">
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
                {"{"}&gt; curves/curve-1{"}"}
                {"}"}
              </div>
            </div>
            {/* Body */}
            <div className="card-body position-relative">
              {/* Badge */}
              <div className="position-relative text-right mt-n8 mr-n4 mb-3">
                <span className="badge rounded-pill bg-success">
                  <span className="h6 text-uppercase">$399/mo</span>
                </span>
              </div>
              {/* Heading */}
              <h3>Private Offices</h3>
              {/* Text */}
              <p className="text-muted">
                Need a private space? We have all sizes of offices from 400² ft.
                available up to 3100² ft.
              </p>
              {/* Link */}
              <a href="#!" className="font-weight-bold text-decoration-none">
                Tour the offices <i className="fe fe-arrow-right ml-3" />
              </a>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </section>
  {/* SCALABLE */}
  <section className="py-8 py-md-11 border-bottom">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 order-md-2">
          {/* Image */}
          <img
            src="assets/img/illustrations/illustration-1.png"
            alt="..."
            className="img-fluid mb-6 mb-md-0"
          />
        </div>
        <div className="col-12 col-md-6 order-md-1">
          {/* Badge */}
          <span className="badge rounded-pill bg-primary-soft mb-3">
            <span className="h6 text-uppercase">Scalable</span>
          </span>
          {/* Heading */}
          <h2>
            Flexible office space means <br />
            <span className="text-primary">growing your team is easy</span>.
          </h2>
          {/* Text */}
          <p className="font-size-lg text-gray-700 mb-6 mb-md-6">
            Rather than worrying about switching offices every couple years, you
            can instead stay in the same location and grow-up from your shared
            coworking space to an office that takes up an entire floor.
          </p>
          {/* List */}
          <div className="row">
            <div className="col-12 col-lg-6">
              {/* Item */}
              <div className="d-flex">
                {/* Check */}
                <div className="badge badge-rounded-circle bg-primary-soft mt-1 mr-4">
                  <i className="fe fe-check" />
                </div>
                {/* Text */}
                <p>Add space anytime</p>
              </div>
              {/* Item */}
              <div className="d-flex">
                {/* Check */}
                <div className="badge badge-rounded-circle bg-primary-soft mt-1 mr-4">
                  <i className="fe fe-check" />
                </div>
                <p className="mb-lg-0">Group discounts</p>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              {/* Item */}
              <div className="d-flex">
                {/* Check */}
                <span className="badge badge-rounded-circle bg-primary-soft mt-1 mr-4">
                  <i className="fe fe-check" />
                </span>
                {/* Text */}
                <p>Infinite flexibility</p>
              </div>
              {/* Item */}
              <div className="d-flex">
                {/* Check */}
                <div className="badge badge-rounded-circle bg-primary-soft mr-1 mr-4">
                  <i className="fe fe-check" />
                </div>
                {/* Text */}
                <p className="mb-0">Snacks included</p>
              </div>
            </div>
          </div>{" "}
          {/* / .row */}
        </div>
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </section>
  {/* LOCATION */}
  <section className="pt-8 pt-md-0 border-bottom">
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
          <div
            className="position-relative h-100 vw-50 float-right d-none d-md-block
      "
          >
            {/* Map */}
            <div
              className="w-100 h-100"
              data-map='{"center": [-118.244615, 34.052979], "zoom": 12}'
            />
            {/* Shape */}
            <div className="shape shape-right shape-fluid-y svg-shim text-white">
              {"{"}
              {"{"}&gt; angles/angle-right{"}"}
              {"}"}
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-5 offset-lg-1 py-8 py-md-11 py-lg-12">
          {/* Heading */}
          <h2>
            Over{" "}
            <span
              data-countup='{"startVal": 100}'
              data-to={400}
              data-aos
              data-aos-id="countup:in"
            >
              100
            </span>{" "}
            locations spread <br />
            <span className="text-success">across the entire planet</span>.
          </h2>
          {/* Text */}
          <p className="font-size-lg text-gray-700 mb-6 mb-md-6">
            We picked our office locations to maximize our availability to you!
            We try to keep locations in every major city, as well as common
            vacatino destinations in case you need to sneak work in on the side.
          </p>
          {/* Stats */}
          <div className="d-flex">
            <div className="pr-5">
              <h3 className="text-success mb-0">125</h3>
              <p className="text-gray-700 mb-0">Countries</p>
            </div>
            <div className="border-left" />
            <div className="px-5">
              <h3 className="text-success mb-0">312</h3>
              <p className="text-gray-700 mb-0">Cities</p>
            </div>
            <div className="border-left" />
            <div className="pl-5">
              <h3 className="text-success mb-0">40,000</h3>
              <p className="text-gray-700 mb-0">Desks</p>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </section>
  {/* FEATURES */}
  <section className="py-8 py-md-11 bg-light">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 text-center">
          {/* Heading */}
          <h2>
            <span className="text-primary">Everything</span> your team could
            need.
          </h2>
          {/* Text */}
          <p className="font-size-lg text-muted mb-7 mb-md-9 px-md-9">
            We make sure to include all the amenities and niceties that a
            growing startup could possibly need.
          </p>
        </div>
      </div>{" "}
      {/* / .row */}
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          {/* Card */}
          <div className="card accordion" id="featuresAccordion">
            <div className="card-body">
              {/* List group */}
              <div className="list-group list-group-flush">
                <div className="list-group-item">
                  {/* Toggle */}
                  <a
                    className="d-flex align-items-center text-reset text-decoration-none"
                    data-toggle="collapse"
                    href="#featuresOne"
                    role="button"
                    aria-expanded="true"
                    aria-controls="featuresOne"
                  >
                    <div className="mr-auto">
                      {/* Title */}
                      <p className="font-weight-bold mb-0">
                        Flexible access to facilities.
                      </p>
                      {/* Text */}
                      <p className="font-size-sm text-muted mb-0">
                        Our new key fobs make it so easy!
                      </p>
                    </div>
                    {/* Badge */}
                    <span className="badge rounded-pill bg-success-soft ml-4">
                      <span className="h6 text-uppercase">New</span>
                    </span>
                    {/* Chevron */}
                    <span className="collapse-chevron text-muted ml-4">
                      <i className="fe fe-lg fe-chevron-down" />
                    </span>
                  </a>{" "}
                  {/* / .row */}
                  {/* Collapse */}
                  <div
                    className="collapse show"
                    id="featuresOne"
                    data-parent="#featuresAccordion"
                  >
                    <div className="py-5 py-mb-6">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sunt rerum minima a possimus, amet perferendis,
                        temporibus obcaecati pariatur. Reprehenderit magnam
                        necessitatibus vel culpa provident quas nesciunt sunt
                        aut cupiditate fugiat! Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Sunt rerum minima a
                        possimus, amet perferendis, temporibus obcaecati
                        pariatur. Reprehenderit magnam necessitatibus vel culpa
                        provident quas nesciunt sunt aut cupiditate fugiat!
                      </p>
                      <a
                        href="#!"
                        className="font-weight-bold text-decoration-none"
                      >
                        Check it out <i className="fe fe-arrow-right ml-3" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="list-group-item">
                  {/* Toggle */}
                  <a
                    className="d-flex align-items-center text-reset text-decoration-none"
                    data-toggle="collapse"
                    href="#featuresTwo"
                    role="button"
                    aria-expanded="false"
                    aria-controls="featuresTwo"
                  >
                    <div className="mr-auto">
                      {/* Title */}
                      <p className="font-weight-bold mb-0">
                        Snacks, drinks, coffee, and more.
                      </p>
                      {/* Text */}
                      <p className="font-size-sm text-muted mb-0">
                        Keep your engine going with free food and drinks.
                      </p>
                    </div>
                    {/* Chevron */}
                    <span className="collapse-chevron text-muted ml-4">
                      <i className="fe fe-lg fe-chevron-down" />
                    </span>
                  </a>{" "}
                  {/* / .row */}
                  {/* Collapse */}
                  <div
                    className="collapse"
                    id="featuresTwo"
                    data-parent="#featuresAccordion"
                  >
                    <div className="py-5 py-md-6">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sunt rerum minima a possimus, amet perferendis,
                        temporibus obcaecati pariatur. Reprehenderit magnam
                        necessitatibus vel culpa provident quas nesciunt sunt
                        aut cupiditate fugiat! Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Sunt rerum minima a
                        possimus, amet perferendis, temporibus obcaecati
                        pariatur. Reprehenderit magnam necessitatibus vel culpa
                        provident quas nesciunt sunt aut cupiditate fugiat!
                      </p>
                      <a
                        href="#!"
                        className="font-weight-bold text-decoration-none"
                      >
                        Check it out <i className="fe fe-arrow-right ml-3" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="list-group-item">
                  {/* Toggle */}
                  <a
                    className="d-flex align-items-center text-reset text-decoration-none"
                    data-toggle="collapse"
                    href="#featuresThree"
                    role="button"
                    aria-expanded="false"
                    aria-controls="featuresThree"
                  >
                    <div className="mr-auto">
                      {/* Title */}
                      <p className="font-weight-bold mb-0">
                        On site tech support
                      </p>
                      {/* Text */}
                      <p className="font-size-sm text-muted mb-0">
                        Connectivity, power, and IT issues solved in no time.
                      </p>
                    </div>
                    {/* Chevron */}
                    <span className="collapse-chevron text-muted ml-4">
                      <i className="fe fe-lg fe-chevron-down" />
                    </span>
                  </a>{" "}
                  {/* / .row */}
                  {/* Collapse */}
                  <div
                    className="collapse"
                    id="featuresThree"
                    data-parent="#featuresAccordion"
                  >
                    <div className="py-5 py-md-6">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sunt rerum minima a possimus, amet perferendis,
                        temporibus obcaecati pariatur. Reprehenderit magnam
                        necessitatibus vel culpa provident quas nesciunt sunt
                        aut cupiditate fugiat! Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Sunt rerum minima a
                        possimus, amet perferendis, temporibus obcaecati
                        pariatur. Reprehenderit magnam necessitatibus vel culpa
                        provident quas nesciunt sunt aut cupiditate fugiat!
                      </p>
                      <a
                        href="#!"
                        className="font-weight-bold text-decoration-none"
                      >
                        Check it out <i className="fe fe-arrow-right ml-3" />
                      </a>
                    </div>
                  </div>
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
  {/* SHAPE */}
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
