import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


export default function BillingUsers() {
  return (
    <div>
  <div className="alert alert-danger rounded-0 mb-0">
    <div className="container-md">
      <div className="row">
        <div className="col-12">
          {/* Text */}
          <p className="text-center mb-0">
            All seats used. Please{" "}
            <a className="text-reset" href="#!">
              upgrade your plan
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  </div>
  {/* BREADCRUMB */}
  <nav className="bg-dark d-md-none">
    <div className="container-md">
      <div className="row align-items-center">
        <div className="col">
          {/* Breadcrumb */}
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <span className="text-white">Billing</span>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <span className="text-white">Users</span>
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
                  <li className="list-item active">
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
          <div className="card card-bleed shadow-light-lg">
            <div className="card-header">
              <div className="row align-items-center">
                <div className="col">
                  {/* Heading */}
                  <h4 className="mb-0">Your Team</h4>
                </div>
                <div className="col-auto">
                  {/* Button */}
                  <button className="btn btn-xs btn-primary">Add</button>
                </div>
              </div>
            </div>
            <div className="card-body">
              {/* List group */}
              <div className="list-group list-group-flush">
                <div className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col-auto">
                      {/* Avatar */}
                      <div className="avatar avatar-xl">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/img/avatars/avatar-1.jpg"
                          alt="..."
                        />
                      </div>
                    </div>
                    <div className="col-6 ml-n5">
                      {/* Heading */}
                      <p className="mb-0">Ab Hadley</p>
                      {/* Text */}
                      <a
                        className="d-block small text-truncate text-gray-700"
                        href="mailto:ab.hadley@company.com"
                      >
                        ab.hadley@company.com
                      </a>
                    </div>
                    <div className="col-auto ml-auto">
                      {/* Select */}
                      <select
                        className="form-select form-select-xs"
                        data-choices
                      >
                        <option selected>Admin</option>
                        <option>Staff</option>
                        <option>Custom</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col-auto">
                      {/* Avatar */}
                      <div className="avatar avatar-xl">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/img/avatars/avatar-2.jpg"
                          alt="..."
                        />
                      </div>
                    </div>
                    <div className="col-6 ml-n5">
                      {/* Heading */}
                      <p className="mb-0">Adolfo Hess</p>
                      {/* Text */}
                      <a
                        className="d-block small text-truncate text-gray-700"
                        href="mailto:adolfo.hess@company.com"
                      >
                        adolfo.hess@company.com
                      </a>
                    </div>
                    <div className="col-auto ml-auto">
                      {/* Select */}
                      <select
                        className="form-select form-select-xs"
                        data-choices
                      >
                        <option>Admin</option>
                        <option selected>Staff</option>
                        <option>Custom</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col-auto">
                      {/* Avatar */}
                      <div className="avatar avatar-xl">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/img/avatars/avatar-3.jpg"
                          alt="..."
                        />
                      </div>
                    </div>
                    <div className="col-6 ml-n5">
                      {/* Heading */}
                      <p className="mb-0">Dianna Smiley</p>
                      {/* Text */}
                      <a
                        className="d-block small text-truncate text-gray-700"
                        href="mailto:dianna.smiley@company.com"
                      >
                        dianna.smiley@company.com
                      </a>
                    </div>
                    <div className="col-auto ml-auto">
                      {/* Select */}
                      <select
                        className="form-select form-select-xs"
                        data-choices
                      >
                        <option>Admin</option>
                        <option selected>Staff</option>
                        <option>Custom</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col-auto">
                      {/* Avatar */}
                      <div className="avatar avatar-xl">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/img/avatars/avatar-4.jpg"
                          alt="..."
                        />
                      </div>
                    </div>
                    <div className="col-6 ml-n5">
                      {/* Heading */}
                      <p className="mb-0">Daniela Dewitt</p>
                      {/* Text */}
                      <a
                        className="d-block small text-truncate text-gray-700"
                        href="mailto:daniela.dewitt@company.com"
                      >
                        daniela.dewitt@company.com
                      </a>
                    </div>
                    <div className="col-auto ml-auto">
                      {/* Select */}
                      <select
                        className="form-select form-select-xs"
                        data-choices
                      >
                        <option>Admin</option>
                        <option selected>Staff</option>
                        <option>Custom</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col-auto">
                      {/* Avatar */}
                      <div className="avatar avatar-xl">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/img/avatars/avatar-5.jpg"
                          alt="..."
                        />
                      </div>
                    </div>
                    <div className="col-6 ml-n5">
                      {/* Heading */}
                      <p className="mb-0">Miyah Myles</p>
                      {/* Text */}
                      <a
                        className="d-block small text-truncate text-gray-700"
                        href="mailto:miyah.myles@company.com"
                      >
                        miyah.myles@company.com
                      </a>
                    </div>
                    <div className="col-auto ml-auto">
                      {/* Select */}
                      <select
                        className="form-select form-select-xs"
                        data-choices
                      >
                        <option selected>Admin</option>
                        <option>Staff</option>
                        <option>Custom</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col-auto">
                      {/* Avatar */}
                      <div className="avatar avatar-xl">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/img/avatars/avatar-1.jpg"
                          alt="..."
                        />
                      </div>
                    </div>
                    <div className="col-6 ml-n5">
                      {/* Heading */}
                      <p className="mb-0">Ab Hadley</p>
                      {/* Text */}
                      <a
                        className="d-block small text-truncate text-gray-700"
                        href="mailto:ab.hadley@company.com"
                      >
                        ab.hadley@company.com
                      </a>
                    </div>
                    <div className="col-auto ml-auto">
                      {/* Select */}
                      <select
                        className="form-select form-select-xs"
                        data-choices
                      >
                        <option selected>Admin</option>
                        <option>Staff</option>
                        <option>Custom</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col-auto">
                      {/* Avatar */}
                      <div className="avatar avatar-xl">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/img/avatars/avatar-2.jpg"
                          alt="..."
                        />
                      </div>
                    </div>
                    <div className="col-6 ml-n5">
                      {/* Heading */}
                      <p className="mb-0">Adolfo Hess</p>
                      {/* Text */}
                      <a
                        className="d-block small text-truncate text-gray-700"
                        href="mailto:adolfo.hess@company.com"
                      >
                        adolfo.hess@company.com
                      </a>
                    </div>
                    <div className="col-auto ml-auto">
                      {/* Select */}
                      <select
                        className="form-select form-select-xs"
                        data-choices
                      >
                        <option>Admin</option>
                        <option selected>Staff</option>
                        <option>Custom</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col-auto">
                      {/* Avatar */}
                      <div className="avatar avatar-xl">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/img/avatars/avatar-3.jpg"
                          alt="..."
                        />
                      </div>
                    </div>
                    <div className="col-6 ml-n5">
                      {/* Heading */}
                      <p className="mb-0">Dianna Smiley</p>
                      {/* Text */}
                      <a
                        className="d-block small text-truncate text-gray-700"
                        href="mailto:dianna.smiley@company.com"
                      >
                        dianna.smiley@company.com
                      </a>
                    </div>
                    <div className="col-auto ml-auto">
                      {/* Select */}
                      <select
                        className="form-select form-select-xs"
                        data-choices
                      >
                        <option>Admin</option>
                        <option selected>Staff</option>
                        <option>Custom</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col-auto">
                      {/* Avatar */}
                      <div className="avatar avatar-xl">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/img/avatars/avatar-4.jpg"
                          alt="..."
                        />
                      </div>
                    </div>
                    <div className="col-6 ml-n5">
                      {/* Heading */}
                      <p className="mb-0">Daniela Dewitt</p>
                      {/* Text */}
                      <a
                        className="d-block small text-truncate text-gray-700"
                        href="mailto:daniela.dewitt@company.com"
                      >
                        daniela.dewitt@company.com
                      </a>
                    </div>
                    <div className="col-auto ml-auto">
                      {/* Select */}
                      <select
                        className="form-select form-select-xs"
                        data-choices
                      >
                        <option>Admin</option>
                        <option selected>Staff</option>
                        <option>Custom</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col-auto">
                      {/* Avatar */}
                      <div className="avatar avatar-xl">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/img/avatars/avatar-5.jpg"
                          alt="..."
                        />
                      </div>
                    </div>
                    <div className="col-6 ml-n5">
                      {/* Heading */}
                      <p className="mb-0">Miyah Myles</p>
                      {/* Text */}
                      <a
                        className="d-block small text-truncate text-gray-700"
                        href="mailto:miyah.myles@company.com"
                      >
                        miyah.myles@company.com
                      </a>
                    </div>
                    <div className="col-auto ml-auto">
                      {/* Select */}
                      <select
                        className="form-select form-select-xs"
                        data-choices
                      >
                        <option selected>Admin</option>
                        <option>Staff</option>
                        <option>Custom</option>
                      </select>
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
