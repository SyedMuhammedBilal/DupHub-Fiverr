import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


export default function AccountSecurity() {
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
              <span className="text-white">Security</span>
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
                  <li className="list-item active">
                    <a
                      className="list-link text-reset"
                      href="account-security.html"
                    >
                      Security
                    </a>
                  </li>
                  <li className="list-item">
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
              <div className="row align-items-center">
                <div className="col">
                  {/* Heading */}
                  <h4 className="mb-0">Two Factor</h4>
                </div>
                <div className="col-auto mr-n5">
                  {/* Text */}
                  <small className="text-gray-700">Requred?</small>
                </div>
                <div className="col-auto">
                  {/* Switch */}
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="twoFactorSwitch"
                      defaultChecked
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              {/* List group */}
              <div className="list-group list-group-flush">
                <div className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col">
                      {/* Heading */}
                      <p className="mb-0">Authenticator App</p>
                      {/* Text */}
                      <small className="text-gray-700">
                        Google auth or 1Password
                      </small>
                    </div>
                    <div className="col-auto">
                      {/* Button */}
                      <button className="btn btn-xs btn-outline-white">
                        Setup
                      </button>
                    </div>
                  </div>
                </div>
                <div className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col">
                      {/* Heading */}
                      <p className="mb-0">
                        SMS Recovery{" "}
                        <i
                          className="fe fe-info text-gray-500"
                          data-toggle="tooltip"
                          title="We use the the phone number you provide in General"
                        />
                      </p>
                      {/* Text */}
                      <small className="text-gray-700">
                        Standard messaging rates apply
                      </small>
                    </div>
                    <div className="col-auto">
                      {/* Button */}
                      <button className="btn btn-xs btn-danger">Disable</button>
                    </div>
                  </div>
                </div>
                <div className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col">
                      {/* Heading */}
                      <p className="mb-0">
                        Recovery Codes{" "}
                        <i
                          className="fe fe-info text-gray-500"
                          data-toggle="tooltip"
                          title="We use the the phone number you provide in General"
                        />
                      </p>
                      {/* Text */}
                      <small className="text-gray-700">
                        One time use safety codes
                      </small>
                    </div>
                    <div className="col-auto">
                      {/* Button */}
                      <button className="btn btn-xs btn-outline-white">
                        Reveal
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Card */}
          <div className="card card-bleed shadow-light-lg mb-6">
            <div className="card-header">
              <div className="row align-items-center">
                <div className="col">
                  {/* Heading */}
                  <h4 className="mb-0">Password</h4>
                </div>
                <div className="col-auto">
                  {/* Link */}
                  <a className="small text-gray-700" href="#!">
                    Forgot your password?
                  </a>
                </div>
              </div>
            </div>
            <div className="card-body">
              {/* Current password */}
              <div className="form-group">
                <label className="form-label" htmlFor="currentPassword">
                  Current Password
                </label>
                <input
                  className="form-control"
                  id="currentPassword"
                  type="password"
                />
              </div>
              {/* New password */}
              <div className="form-group">
                <label className="form-label" htmlFor="newPassword">
                  New Password
                </label>
                <input
                  className="form-control"
                  id="newPassword"
                  type="password"
                />
              </div>
              {/* Confirm password */}
              <div className="form-group">
                <label className="form-label" htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <input
                  className="form-control"
                  id="confirmPassword"
                  type="password"
                />
              </div>
              <div className="row">
                <div className="col-12 col-md-auto">
                  {/* Button */}
                  <button className="btn btn-block btn-primary" type="submit">
                    Update Password
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Card */}
          <div className="card card-bleed shadow-light-lg">
            <div className="card-header">
              <div className="row align-items-center">
                <div className="col">
                  {/* Heading */}
                  <h4 className="mb-0">Device History</h4>
                </div>
                <div className="col-auto">
                  {/* Link */}
                  <a className="small text-gray-700" href="#!">
                    Log out all
                  </a>
                </div>
              </div>
            </div>
            <div className="card-body">
              {/* List group */}
              <div className="list-group list-group-flush">
                <div className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col-auto">
                      {/* Icon */}
                      <div className="icon icon-sm text-gray-400">
                        {"{"}
                        {"{"}&gt; devices/iphone-x{"}"}
                        {"}"}
                      </div>
                    </div>
                    <div className="col ml-n5">
                      {/* Heading */}
                      <p className="mb-0">iPhone 11</p>
                      {/* Text */}
                      <small className="text-gray-700">
                        Los Angeles, CA · April 20 at 4:16PM
                      </small>
                    </div>
                    <div className="col-auto">
                      {/* Button */}
                      <button className="btn btn-xs btn-outline-white">
                        Log out
                      </button>
                    </div>
                  </div>
                </div>
                <div className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col-auto">
                      {/* Icon */}
                      <div className="icon icon-sm text-gray-400">
                        {"{"}
                        {"{"}&gt; devices/imac{"}"}
                        {"}"}
                      </div>
                    </div>
                    <div className="col ml-n5">
                      {/* Heading */}
                      <p className="mb-0">iMac OSX · Chrome v80.02</p>
                      {/* Text */}
                      <small className="text-gray-700">
                        Los Angeles, CA · April 20 at 4:16PM
                      </small>
                    </div>
                    <div className="col-auto">
                      {/* Button */}
                      <button className="btn btn-xs btn-outline-white">
                        Log out
                      </button>
                    </div>
                  </div>
                </div>
                <div className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col-auto">
                      {/* Icon */}
                      <div className="icon icon-sm text-gray-400">
                        {"{"}
                        {"{"}&gt; devices/iphone-x{"}"}
                        {"}"}
                      </div>
                    </div>
                    <div className="col ml-n5">
                      {/* Heading */}
                      <p className="mb-0">iPhone 11</p>
                      {/* Text */}
                      <small className="text-gray-700">
                        Los Angeles, CA · April 20 at 4:16PM
                      </small>
                    </div>
                    <div className="col-auto">
                      {/* Button */}
                      <button className="btn btn-xs btn-outline-white">
                        Log out
                      </button>
                    </div>
                  </div>
                </div>
                <div className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col-auto">
                      {/* Icon */}
                      <div className="icon icon-sm text-gray-400">
                        {"{"}
                        {"{"}&gt; devices/imac{"}"}
                        {"}"}
                      </div>
                    </div>
                    <div className="col ml-n5">
                      {/* Heading */}
                      <p className="mb-0">iMac OSX · Chrome v80.02</p>
                      {/* Text */}
                      <small className="text-gray-700">
                        Los Angeles, CA · April 20 at 4:16PM
                      </small>
                    </div>
                    <div className="col-auto">
                      {/* Button */}
                      <button className="btn btn-xs btn-outline-white">
                        Log out
                      </button>
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
