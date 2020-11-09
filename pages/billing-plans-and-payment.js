import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


export default function BillingPayment() {
  return (
    <div>
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
              <span className="text-white">Plans &amp; Payment</span>
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
                  <li className="list-item active">
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
                  <h4 className="mb-0">Current Plan</h4>
                </div>
                <div className="col-auto">
                  {/* Price */}
                  <span className="h4 font-weight-bold">$29/mo</span>
                </div>
              </div>
            </div>
            <div className="card-body">
              {/* Header */}
              <div className="row mb-5">
                <div className="col">
                  {/* Heading */}
                  <h4 className="mb-0">Starter Plan</h4>
                  {/* Text */}
                  <small className="text-gray-700">
                    Next payment on 03/03/2020
                  </small>
                </div>
                <div className="col-auto">
                  {/* Button */}
                  <a className="btn btn-xs btn-primary" href="pricing.html">
                    Change plan
                  </a>
                </div>
              </div>
              {/* Item */}
              <div className="d-flex">
                {/* Check */}
                <div className="badge badge-rounded-circle bg-success-soft mt-1 mr-4">
                  <i className="fe fe-check" />
                </div>
                {/* Text */}
                <p>
                  <small>Completely firewall 246-encryption</small>
                </p>
              </div>
              {/* Item */}
              <div className="d-flex">
                {/* Check */}
                <div className="badge badge-rounded-circle bg-success-soft mt-1 mr-4">
                  <i className="fe fe-check" />
                </div>
                {/* Text */}
                <p>
                  <small>TPSK-1 Compliant</small>
                </p>
              </div>
              {/* Item */}
              <div className="d-flex">
                {/* Check */}
                <div className="badge badge-rounded-circle bg-success-soft mt-1 mr-4">
                  <i className="fe fe-check" />
                </div>
                {/* Text */}
                <p className="mb-0">
                  White-label available for free
                  <small />
                </p>
              </div>
            </div>
          </div>
          {/* Card */}
          <div className="card card-bleed shadow-light-lg mb-6">
            <div className="card-header">
              <div className="row align-items-center">
                <div className="col">
                  {/* Heading */}
                  <h4 className="mb-0">Payment Methods</h4>
                </div>
                <div className="col-auto">
                  {/* Button */}
                  <button
                    className="btn btn-xs btn-primary"
                    data-toggle="modal"
                    data-target="#modalPayment"
                  >
                    Add new
                  </button>
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
                      <img
                        className="img-fluid"
                        src="assets/img/icons/payment-methods/visa.svg"
                        alt="..."
                        style={{ maxWidth: 40 }}
                      />
                    </div>
                    <div className="col ml-n5">
                      {/* Heading */}
                      <p className="mb-0">Visa ending in 1234</p>
                      {/* Text */}
                      <small className="text-gray-700">Expires 03/2024</small>
                    </div>
                    <div className="col-auto mr-n5">
                      {/* Badge */}
                      <span className="badge rounded-pill bg-secondary-soft">
                        <span className="h6 text-uppercase font-weight-bold">
                          Default
                        </span>
                      </span>
                    </div>
                    <div className="col-auto">
                      {/* Dropdown */}
                      <div className="dropdown">
                        <a
                          className="text-gray-400 text-decoration-none"
                          data-toggle="dropdown"
                          href="#"
                        >
                          <i className="fe fe-more-vertical" />
                        </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col-auto">
                      {/* Icon */}
                      <img
                        className="img-fluid"
                        src="assets/img/icons/payment-methods/mastercard.svg"
                        alt="..."
                        style={{ maxWidth: 40 }}
                      />
                    </div>
                    <div className="col ml-n5">
                      {/* Heading */}
                      <p className="mb-0">Mastercard ending in 1234</p>
                      {/* Text */}
                      <small className="text-gray-700">Expires 07/2026</small>
                    </div>
                    <div className="col-auto">
                      {/* Dropdown */}
                      <div className="dropdown">
                        <a
                          className="text-gray-400 text-decoration-none"
                          data-toggle="dropdown"
                          href="#"
                        >
                          <i className="fe fe-more-vertical" />
                        </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </div>
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
              {/* Heading */}
              <h4 className="mb-0">Invoice History</h4>
            </div>
            <div className="card-body">
              {/* List group */}
              <div className="list-group list-group-flush">
                <div className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col">
                      {/* Heading */}
                      <p className="mb-0">
                        <a href="#!">Invoice #91240</a>
                      </p>
                      {/* Text */}
                      <small className="text-gray-700">
                        Billed Apr, 24, 2020
                      </small>
                    </div>
                    <div className="col-auto">
                      {/* Button */}
                      <button className="btn btn-xs btn-outline-white">
                        Pay now
                      </button>
                    </div>
                  </div>
                </div>
                <div className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col">
                      {/* Heading */}
                      <p className="mb-0">
                        <a href="#!">Invoice #89283</a>
                      </p>
                      {/* Text */}
                      <small className="text-gray-700">
                        Billed Apr, 24, 2020
                      </small>
                    </div>
                    <div className="col-auto">
                      {/* Badge */}
                      <span className="badge rounded-pill bg-success-soft">
                        <span className="h6 text-uppercase font-weight-bold">
                          Paid
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col">
                      {/* Heading */}
                      <p className="mb-0">
                        <a href="#!">Invoice #89283</a>
                      </p>
                      {/* Text */}
                      <small className="text-gray-700">
                        Billed Apr, 24, 2020
                      </small>
                    </div>
                    <div className="col-auto">
                      {/* Badge */}
                      <span className="badge rounded-pill bg-success-soft">
                        <span className="h6 text-uppercase font-weight-bold">
                          Paid
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col">
                      {/* Heading */}
                      <p className="mb-0">
                        <a href="#!">Invoice #89283</a>
                      </p>
                      {/* Text */}
                      <small className="text-gray-700">
                        Billed Apr, 24, 2020
                      </small>
                    </div>
                    <div className="col-auto">
                      {/* Badge */}
                      <span className="badge rounded-pill bg-success-soft">
                        <span className="h6 text-uppercase font-weight-bold">
                          Paid
                        </span>
                      </span>
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
