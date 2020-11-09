import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


export default function AccountGeneral() {
  return (
    <div>
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
                <span className="text-white">General</span>
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
                    <li className="list-item active">
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
                {/* Heading */}
                <h4 className="mb-0">Basic Information</h4>
              </div>
              <div className="card-body">
                {/* Form */}
                <form>
                  <div className="row">
                    <div className="col-12 col-md-6">
                      {/* Name */}
                      <div className="form-group">
                        <label className="form-label" htmlFor="name">
                          Name
                        </label>
                        <input
                          className="form-control"
                          id="name"
                          type="text"
                          placeholder="Full name"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      {/* Email */}
                      <div className="form-group">
                        <label className="form-label" htmlFor="email">
                          Email
                        </label>
                        <input
                          className="form-control"
                          id="email"
                          type="email"
                          placeholder="name@address.com"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      {/* Bio */}
                      <div className="form-group">
                        <label className="form-label">Bio</label>
                        <div data-quill='{"placeholder": "Quill WYSIWYG"}' />
                      </div>
                    </div>
                    <div className="col-12 col-md-auto">
                      {/* Button */}
                      <button className="btn btn-block btn-primary" type="submit">
                        Save changes
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* Card */}
            <div className="card card-bleed shadow-light-lg mb-6">
              <div className="card-header">
                {/* Heading */}
                <h4 className="mb-0">Your media</h4>
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
                      <div className="col ml-n5">
                        {/* Heading */}
                        <p className="mb-0">Your avatar</p>
                        {/* Text */}
                        <small className="text-gray-700">
                          PNG or JPG no larger than 1000px
                        </small>
                      </div>
                      <div className="col-12 col-md-auto">
                        {/* Button */}
                        <button className="btn btn-xs btn-block btn-primary mt-5 mt-md-0">
                          Upload
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="list-group-item">
                    {/* Heading */}
                    <p className="mb-0">Profile cover</p>
                    {/* Text */}
                    <p className="small text-gray-700">
                      PNG or JPG at 16:9 ratio no larger than 2MB
                    </p>
                    {/* Dropzone */}
                    <div
                      className="dropzone dropzone-single"
                      data-dropzone='{"url": "https://", "maxFiles": 1, "acceptedFiles": "image/*"}'
                    >
                      {/* Fallback */}
                      <div className="fallback">
                        <div className="custom-file">
                          <input
                            className="custom-file-input"
                            id="projectCoverUploads"
                            type="file"
                          />
                          <label
                            className="custom-file-label"
                            htmlFor="projectCoverUploads"
                          >
                            Choose file
                          </label>
                        </div>
                      </div>
                      {/* Preview */}
                      <div className="dz-preview dz-preview-single">
                        <div className="dz-preview-cover">
                          <img
                            className="dz-preview-img"
                            data-dz-thumbnail
                            src="data:image/svg+xml,%3csvg3c/svg%3e"
                            alt="..."
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Card */}
            <div className="card card-bleed shadow-light-lg mb-8">
              <div className="card-header">
                {/* Title */}
                <h4 className="mb-0">Privacy</h4>
              </div>
              <div className="card-body">
                {/* List group */}
                <div className="list-group list-group-flush">
                  <div className="list-group-item">
                    <div className="row align-items-center">
                      <div className="col">
                        {/* Heading */}
                        <p className="mb-0">Public Profile</p>
                        {/* Text */}
                        <small className="text-gray-700">
                          Making your profile public means anyone can see your
                          information.
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
                        <p className="mb-0">Expose your email</p>
                        {/* Text */}
                        <small className="text-gray-700">
                          This lets users find you by your email address.
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
                </div>
              </div>
            </div>
            {/* Text */}
            <p className="text-center mb-0">
              <small className="text-muted">
                If you no longer want to use Landkit, you can{" "}
                <a className="text-danger" href="#!">
                  delete your account
                </a>
                .
              </small>
            </p>
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
