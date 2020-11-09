import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


export default function AccountNotifications() {
  return (
    <div>
  {/* BREADCRUMB */}
  <nav className="bg-dark d-md-none">
    <div className="container-md">
      <div className="row align-items-center">
        <div className="col">
          {/* Breadcrumb */}
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <span className="text-white">Account</span>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <span className="text-white">Notifications</span>
            </li>
          </ol>
        </div>
        <div className="col-auto">
          {/* Toggler */}
          <div className="navbar-dark">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#sidenavCollapse"
              aria-controls="sidenavCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
          </div>
        </div>
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </nav>
  {/* HEADER */}
  <header className="bg-dark pt-9 pb-11 d-none d-md-block">
    <div className="container-md">
      <div className="row align-items-center">
        <div className="col">
          {/* Heading */}
          <h1 className="font-weight-bold text-white mb-2">Account Settings</h1>
          {/* Text */}
          <p className="font-size-lg text-white-75 mb-0">
            Settings for{" "}
            <a className="text-reset" href="mailto:dhgamache@gmail.com">
              dhgamache@gmail.com
            </a>
          </p>
        </div>
        <div className="col-auto">
          {/* Button */}
          <button className="btn btn-sm btn-gray-300-20">Log Out</button>
        </div>
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </header>
  {/* MAIN */}
  <main className="pb-8 pb-md-11 mt-md-n6">
    <div className="container-md">
      <div className="row">
        <div className="col-12 col-md-3">
          {/* Card */}
          <div className="card card-bleed border-bottom border-bottom-md-0 shadow-light-lg">
            {/* Collapse */}
            <div className="collapse d-md-block" id="sidenavCollapse">
              <div className="card-body">
                {/* Heading */}
                <h6 className="font-weight-bold text-uppercase mb-3">
                  Account
                </h6>
                {/* List */}
                <ul className="card-list list text-gray-700 mb-6">
                  <li className="list-item">
                    <a
                      className="list-link text-reset"
                      href="account-general.html"
                    >
                      General
                    </a>
                  </li>
                  <li className="list-item">
                    <a
                      className="list-link text-reset"
                      href="account-security.html"
                    >
                      Security
                    </a>
                  </li>
                  <li className="list-item active">
                    <a
                      className="list-link text-reset"
                      href="account-notifications.html"
                    >
                      Notifications
                    </a>
                  </li>
                </ul>
                {/* Heading */}
                <h6 className="font-weight-bold text-uppercase mb-3">
                  Billing
                </h6>
                {/* List */}
                <ul className="card-list list text-gray-700 mb-0">
                  <li className="list-item">
                    <a
                      className="list-link text-reset"
                      href="billing-plans-and-payment.html"
                    >
                      Plans &amp; Payment
                    </a>
                  </li>
                  <li className="list-item">
                    <a
                      className="list-link text-reset"
                      href="billing-users.html"
                    >
                      Users
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-9">
          {/* Card */}
          <div className="card card-bleed shadow-light-lg mb-6">
            <div className="card-header">
              {/* Title */}
              <h4 className="mb-0">Application Notifications</h4>
            </div>
            <div className="card-body">
              {/* List group */}
              <div className="list-group list-group-flush">
                <div className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col">
                      {/* Heading */}
                      <p className="mb-0">Direct messages</p>
                      {/* Text */}
                      <small className="text-gray-700">
                        Messages from people you follow
                      </small>
                    </div>
                    <div className="col-auto">
                      {/* Switch */}
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="switchOne"
                          defaultChecked
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col">
                      {/* Heading */}
                      <p className="mb-0">Reminders</p>
                      {/* Text */}
                      <small className="text-gray-700">
                        Wrap up emails about content you missed
                      </small>
                    </div>
                    <div className="col-auto">
                      {/* Select */}
                      <select
                        className="form-select form-select-xs"
                        data-choices
                      >
                        <option value="weekly">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="weekly">Monthly</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col">
                      {/* Heading */}
                      <p className="mb-0">Follower updates</p>
                      {/* Text */}
                      <small className="text-gray-700">
                        Changes to who’s following you
                      </small>
                    </div>
                    <div className="col-auto">
                      {/* Switch */}
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="switchTwo"
                          defaultChecked
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col">
                      {/* Heading */}
                      <p className="mb-0">Reposts</p>
                      {/* Text */}
                      <small className="text-gray-700">
                        When others repost your content
                      </small>
                    </div>
                    <div className="col-auto">
                      {/* Switch */}
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="switchThree"
                          defaultChecked
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Card */}
          <div className="card card-bleed shadow-light-lg">
            <div className="card-header">
              {/* Title */}
              <h4 className="mb-0">Marketing Communications</h4>
            </div>
            <div className="card-body">
              {/* List group */}
              <div className="list-group list-group-flush">
                <div className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col">
                      {/* Heading */}
                      <p className="mb-0">Sales &amp; Promotions</p>
                      {/* Text */}
                      <small className="text-gray-700">
                        We only notify you for significant promotions
                      </small>
                    </div>
                    <div className="col-auto">
                      {/* Switch */}
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="switchFour"
                          defaultChecked
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col">
                      {/* Heading */}
                      <p className="mb-0">Product updates</p>
                      {/* Text */}
                      <small className="text-gray-700">
                        Major changes in our product offering
                      </small>
                    </div>
                    <div className="col-auto">
                      {/* Switch */}
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="switchFive"
                          defaultChecked
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col">
                      {/* Heading */}
                      <p className="mb-0">Newsletter</p>
                      {/* Text */}
                      <small className="text-gray-700">
                        Updates on what’s going on here at Landkit.
                      </small>
                    </div>
                    <div className="col-auto">
                      {/* Switch */}
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="switchSix"
                          defaultChecked
                        />
                      </div>
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
  </main>
  {/* CURVE */}
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
