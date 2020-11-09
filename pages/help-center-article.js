import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


export default function HelpCenterArticle() {
  return (
    <div>
  <nav className="bg-gray-200">
    <div className="container">
      <div className="row">
        <div className="col-12">
          {/* Breadcrumb */}
          <ol className="breadcrumb breadcrumb-scroll">
            <li className="breadcrumb-item">
              <a href="#!" className="text-gray-700">
                Help Center
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Account
            </li>
          </ol>
        </div>
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </nav>
  {/* CONTENT */}
  <section className="pt-6 pt-md-8 pb-8 mb-md-8">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="row mb-6 mb-md-8">
            <div className="col-auto">
              {/* Icon */}
              <div className="icon-circle bg-primary text-white">
                <i className="fe fe-users" />
              </div>
            </div>
            <div className="col ml-n4">
              {/* Heading */}
              <h2 className="font-weight-bold mb-0">Account</h2>
              {/* Text */}
              <p className="font-size-lg text-gray-700 mb-0">
                Let’s try to fix your account issues.
              </p>
            </div>
          </div>{" "}
          {/* / .row */}
          {/* Card */}
          <div
            className="card shadow-light-lg accordion mb-5 mb-md-6"
            id="helpAccordionOne"
          >
            <div className="list-group">
              <div className="list-group-item">
                {/* Header */}
                <div className="d-flex align-items-center">
                  <div className="mr-auto">
                    {/* Heading */}
                    <h4 className="font-weight-bold mb-0">
                      Authentication Issues
                    </h4>
                    {/* Text */}
                    <p className="font-size-sm text-muted mb-0">
                      Issues related to logging in, out, or about multiple
                      devices.
                    </p>
                  </div>
                  {/* Badge */}
                  <span className="badge rounded-pill bg-success-soft ml-4">
                    <span className="h6 text-uppercase">4 answers</span>
                  </span>
                </div>
              </div>
              <div className="list-group-item">
                {/* Toggle */}
                <a
                  className="d-flex align-items-center text-reset text-decoration-none"
                  data-toggle="collapse"
                  href="#helpOne"
                  role="button"
                  aria-expanded="false"
                  aria-controls="helpOne"
                >
                  {/* Title */}
                  <span className="mr-4">
                    Why doesn’t my account stay logged in?
                  </span>
                  {/* Metadata */}
                  <div className="text-muted ml-auto">
                    {/* Text */}
                    <span className="font-size-sm mr-4 d-none d-md-inline">
                      Updated last week
                    </span>
                    {/* Chevron */}
                    <span className="collapse-chevron text-muted">
                      <i className="fe fe-lg fe-chevron-down" />
                    </span>
                  </div>
                </a>
                {/* Collapse */}
                <div
                  className="collapse"
                  id="helpOne"
                  data-parent="#helpAccordionOne"
                >
                  <div className="py-5">
                    {/* Text */}
                    <p className="text-gray-700">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sunt rerum minima a possimus, amet perferendis, temporibus
                      obcaecati pariatur. Reprehenderit magnam necessitatibus
                      vel culpa provident quas nesciunt sunt aut cupiditate
                      fugiat! Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit. Sunt rerum minima a possimus, amet
                      perferendis, temporibus obcaecati pariatur. Reprehenderit
                      magnam necessitatibus vel culpa provident quas nesciunt
                      sunt aut cupiditate fugiat!
                    </p>
                    <div className="d-flex align-items-center">
                      {/* Vote */}
                      <div className="btn-group mr-4">
                        {/* Thumb down */}
                        <input
                          type="radio"
                          className="btn-check"
                          name="helpOneVote"
                          id="helpOneDown"
                          autoComplete="off"
                          defaultChecked
                        />
                        <label
                          className="btn btn-sm btn-white"
                          htmlFor="helpOneDown"
                        >
                          <i className="fe fe-thumbs-down" />
                        </label>
                        {/* Thumb up */}
                        <input
                          type="radio"
                          className="btn-check"
                          name="helpOneVote"
                          id="helpOneUp"
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-sm btn-white"
                          htmlFor="helpOneUp"
                        >
                          <i className="fe fe-thumbs-up" />
                        </label>
                      </div>
                      {/* Text */}
                      <span className="font-size-sm text-muted">
                        Did this help solve your issue?
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="list-group-item">
                {/* Toggle */}
                <a
                  className="d-flex align-items-center text-reset text-decoration-none"
                  data-toggle="collapse"
                  href="#helpTwo"
                  role="button"
                  aria-expanded="false"
                  aria-controls="helpTwo"
                >
                  {/* Title */}
                  <span className="mr-4">
                    I'd like to renew but I am getting a 404 error
                  </span>
                  {/* Metadata */}
                  <div className="text-muted ml-auto">
                    {/* Text */}
                    <span className="font-size-sm mr-4 d-none d-md-inline">
                      Updated 2 weeks ago
                    </span>
                    {/* Chevron */}
                    <span className="collapse-chevron text-muted">
                      <i className="fe fe-lg fe-chevron-down" />
                    </span>
                  </div>
                </a>{" "}
                {/* / .row */}
                {/* Collapse */}
                <div
                  className="collapse"
                  id="helpTwo"
                  data-parent="#helpAccordionOne"
                >
                  <div className="py-5">
                    {/* Text */}
                    <p className="text-gray-700">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sunt rerum minima a possimus, amet perferendis, temporibus
                      obcaecati pariatur. Reprehenderit magnam necessitatibus
                      vel culpa provident quas nesciunt sunt aut cupiditate
                      fugiat! Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit. Sunt rerum minima a possimus, amet
                      perferendis, temporibus obcaecati pariatur. Reprehenderit
                      magnam necessitatibus vel culpa provident quas nesciunt
                      sunt aut cupiditate fugiat!
                    </p>
                    <div className="d-flex align-items-center">
                      {/* Vote */}
                      <div className="btn-group mr-4">
                        {/* Thumb down */}
                        <input
                          type="radio"
                          className="btn-check"
                          name="helpTwoVote"
                          id="helpTwoDown"
                          autoComplete="off"
                          defaultChecked
                        />
                        <label
                          className="btn btn-sm btn-white"
                          htmlFor="helpTwoDown"
                        >
                          <i className="fe fe-thumbs-down" />
                        </label>
                        {/* Thumb up */}
                        <input
                          type="radio"
                          className="btn-check"
                          name="helpTwoVote"
                          id="helpTwoUp"
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-sm btn-white"
                          htmlFor="helpTwoUp"
                        >
                          <i className="fe fe-thumbs-up" />
                        </label>
                      </div>
                      {/* Text */}
                      <span className="font-size-sm text-muted">
                        Did this help solve your issue?
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="list-group-item">
                {/* Toggle */}
                <a
                  className="d-flex align-items-center text-reset text-decoration-none"
                  data-toggle="collapse"
                  href="#helpThree"
                  role="button"
                  aria-expanded="false"
                  aria-controls="helpThree"
                >
                  {/* Title */}
                  <span className="mr-4">Why can't I upgrade for free?</span>
                  {/* Metadata */}
                  <div className="text-muted ml-auto">
                    {/* Text */}
                    <span className="font-size-sm mr-4 d-none d-md-inline">
                      Updated yesterday
                    </span>
                    {/* Chevron */}
                    <span className="collapse-chevron text-muted">
                      <i className="fe fe-lg fe-chevron-down" />
                    </span>
                  </div>
                </a>{" "}
                {/* / .row */}
                {/* Collapse */}
                <div
                  className="collapse"
                  id="helpThree"
                  data-parent="#helpAccordionOne"
                >
                  <div className="py-5">
                    {/* Text */}
                    <p className="text-gray-700">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sunt rerum minima a possimus, amet perferendis, temporibus
                      obcaecati pariatur. Reprehenderit magnam necessitatibus
                      vel culpa provident quas nesciunt sunt aut cupiditate
                      fugiat! Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit. Sunt rerum minima a possimus, amet
                      perferendis, temporibus obcaecati pariatur. Reprehenderit
                      magnam necessitatibus vel culpa provident quas nesciunt
                      sunt aut cupiditate fugiat!
                    </p>
                    <div className="d-flex align-items-center">
                      {/* Vote */}
                      <div className="btn-group mr-4">
                        {/* Thumb down */}
                        <input
                          type="radio"
                          className="btn-check"
                          name="helpThreeVote"
                          id="helpThreeDown"
                          autoComplete="off"
                          defaultChecked
                        />
                        <label
                          className="btn btn-sm btn-white"
                          htmlFor="helpThreeDown"
                        >
                          <i className="fe fe-thumbs-down" />
                        </label>
                        {/* Thumb up */}
                        <input
                          type="radio"
                          className="btn-check"
                          name="helpThreeVote"
                          id="helpThreeUp"
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-sm btn-white"
                          htmlFor="helpThreeUp"
                        >
                          <i className="fe fe-thumbs-up" />
                        </label>
                      </div>
                      {/* Text */}
                      <span className="font-size-sm text-muted">
                        Did this help solve your issue?
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="list-group-item">
                {/* Toggle */}
                <a
                  className="d-flex align-items-center text-reset text-decoration-none"
                  data-toggle="collapse"
                  href="#helpFour"
                  role="button"
                  aria-expanded="false"
                  aria-controls="helpFour"
                >
                  {/* Title */}
                  <span className="mr-4">
                    Why doesn't my account stay logged in?
                  </span>
                  {/* Metadata */}
                  <div className="text-muted ml-auto">
                    {/* Text */}
                    <span className="font-size-sm mr-4 d-none d-md-inline">
                      Updated last month
                    </span>
                    {/* Chevron */}
                    <span className="collapse-chevron text-muted">
                      <i className="fe fe-lg fe-chevron-down" />
                    </span>
                  </div>
                </a>{" "}
                {/* / .row */}
                {/* Collapse */}
                <div
                  className="collapse"
                  id="helpFour"
                  data-parent="#helpAccordionOne"
                >
                  <div className="py-5">
                    {/* Text */}
                    <p className="text-gray-700">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sunt rerum minima a possimus, amet perferendis, temporibus
                      obcaecati pariatur. Reprehenderit magnam necessitatibus
                      vel culpa provident quas nesciunt sunt aut cupiditate
                      fugiat! Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit. Sunt rerum minima a possimus, amet
                      perferendis, temporibus obcaecati pariatur. Reprehenderit
                      magnam necessitatibus vel culpa provident quas nesciunt
                      sunt aut cupiditate fugiat!
                    </p>
                    <div className="d-flex align-items-center">
                      {/* Vote */}
                      <div className="btn-group mr-4">
                        {/* Thumb down */}
                        <input
                          type="radio"
                          className="btn-check"
                          name="helpFourVote"
                          id="helpFourDown"
                          autoComplete="off"
                          defaultChecked
                        />
                        <label
                          className="btn btn-sm btn-white"
                          htmlFor="helpFourDown"
                        >
                          <i className="fe fe-thumbs-down" />
                        </label>
                        {/* Thumb up */}
                        <input
                          type="radio"
                          className="btn-check"
                          name="helpFourVote"
                          id="helpFourUp"
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-sm btn-white"
                          htmlFor="helpFourUp"
                        >
                          <i className="fe fe-thumbs-up" />
                        </label>
                      </div>
                      {/* Text */}
                      <span className="font-size-sm text-muted">
                        Did this help solve your issue?
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Card */}
          <div className="card shadow-light-lg accordion" id="helpAccordionTwo">
            <div className="list-group">
              <div className="list-group-item">
                {/* Header */}
                <div className="d-flex align-items-center">
                  <div className="mr-auto">
                    {/* Heading */}
                    <h4 className="font-weight-bold mb-0">Billing</h4>
                    {/* Text */}
                    <p className="font-size-sm text-muted mb-0">
                      Issues related to payments or invoicing.
                    </p>
                  </div>
                  {/* Badge */}
                  <span className="badge rounded-pill bg-success-soft ml-4">
                    <span className="h6 text-uppercase">4 answers</span>
                  </span>
                </div>{" "}
                {/* / .row */}
              </div>
              <div className="list-group-item">
                {/* Toggle */}
                <a
                  className="d-flex align-items-center text-reset text-decoration-none"
                  data-toggle="collapse"
                  href="#helpFive"
                  role="button"
                  aria-expanded="false"
                  aria-controls="helpFive"
                >
                  {/* Title */}
                  <span className="mr-4">
                    I was double charged last month. Why is that?
                  </span>
                  {/* Metadata */}
                  <div className="text-muted ml-auto">
                    {/* Text */}
                    <span className="font-size-sm mr-4 d-none d-md-inline">
                      Updated 3 months ago
                    </span>
                    {/* Chevron */}
                    <span className="collapse-chevron text-muted">
                      <i className="fe fe-lg fe-chevron-down" />
                    </span>
                  </div>
                </a>{" "}
                {/* / .row */}
                {/* Collapse */}
                <div
                  className="collapse"
                  id="helpFive"
                  data-parent="#helpAccordionTwo"
                >
                  <div className="py-5">
                    {/* Text */}
                    <p className="text-gray-700">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sunt rerum minima a possimus, amet perferendis, temporibus
                      obcaecati pariatur. Reprehenderit magnam necessitatibus
                      vel culpa provident quas nesciunt sunt aut cupiditate
                      fugiat! Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit. Sunt rerum minima a possimus, amet
                      perferendis, temporibus obcaecati pariatur. Reprehenderit
                      magnam necessitatibus vel culpa provident quas nesciunt
                      sunt aut cupiditate fugiat!
                    </p>
                    <div className="d-flex align-items-center">
                      {/* Vote */}
                      <div className="btn-group mr-4">
                        {/* Thumb down */}
                        <input
                          type="radio"
                          className="btn-check"
                          name="helpFiveVote"
                          id="helpFiveDown"
                          autoComplete="off"
                          defaultChecked
                        />
                        <label
                          className="btn btn-sm btn-white"
                          htmlFor="helpFiveDown"
                        >
                          <i className="fe fe-thumbs-down" />
                        </label>
                        {/* Thumb up */}
                        <input
                          type="radio"
                          className="btn-check"
                          name="helpFiveVote"
                          id="helpFiveUp"
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-sm btn-white"
                          htmlFor="helpFiveUp"
                        >
                          <i className="fe fe-thumbs-up" />
                        </label>
                      </div>
                      {/* Text */}
                      <span className="font-size-sm text-muted">
                        Did this help solve your issue?
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="list-group-item">
                {/* Toggle */}
                <a
                  className="d-flex align-items-center text-reset text-decoration-none"
                  data-toggle="collapse"
                  href="#helpSix"
                  role="button"
                  aria-expanded="false"
                  aria-controls="helpSix"
                >
                  {/* Title */}
                  <span className="mr-4">
                    How do I change my default payment option?
                  </span>
                  {/* Metadata */}
                  <div className="text-muted ml-auto">
                    {/* Text */}
                    <span className="font-size-sm mr-4 d-none d-md-inline">
                      Updated today
                    </span>
                    {/* Chevron */}
                    <span className="collapse-chevron text-muted">
                      <i className="fe fe-lg fe-chevron-down" />
                    </span>
                  </div>
                </a>{" "}
                {/* / .row */}
                {/* Collapse */}
                <div
                  className="collapse"
                  id="helpSix"
                  data-parent="#helpAccordionTwo"
                >
                  <div className="py-5">
                    {/* Text */}
                    <p className="text-gray-700">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sunt rerum minima a possimus, amet perferendis, temporibus
                      obcaecati pariatur. Reprehenderit magnam necessitatibus
                      vel culpa provident quas nesciunt sunt aut cupiditate
                      fugiat! Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit. Sunt rerum minima a possimus, amet
                      perferendis, temporibus obcaecati pariatur. Reprehenderit
                      magnam necessitatibus vel culpa provident quas nesciunt
                      sunt aut cupiditate fugiat!
                    </p>
                    <div className="d-flex align-items-center">
                      {/* Vote */}
                      <div className="btn-group mr-4">
                        {/* Thumb down */}
                        <input
                          type="radio"
                          className="btn-check"
                          name="helpSixVote"
                          id="helpSixDown"
                          autoComplete="off"
                          defaultChecked
                        />
                        <label
                          className="btn btn-sm btn-white"
                          htmlFor="helpSixDown"
                        >
                          <i className="fe fe-thumbs-down" />
                        </label>
                        {/* Thumb up */}
                        <input
                          type="radio"
                          className="btn-check"
                          name="helpSixVote"
                          id="helpSixUp"
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-sm btn-white"
                          htmlFor="helpSixUp"
                        >
                          <i className="fe fe-thumbs-up" />
                        </label>
                      </div>
                      {/* Text */}
                      <span className="font-size-sm text-muted">
                        Did this help solve your issue?
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="list-group-item">
                {/* Toggle */}
                <a
                  className="d-flex align-items-center text-reset text-decoration-none"
                  data-toggle="collapse"
                  href="#helpSeven"
                  role="button"
                  aria-expanded="false"
                  aria-controls="helpSeven"
                >
                  {/* Title */}
                  <span className="mr-4">Can I still pay with PayPal?</span>
                  {/* Metadata */}
                  <div className="text-muted ml-auto">
                    {/* Text */}
                    <span className="font-size-sm mr-4 d-none d-md-inline">
                      Updated last week
                    </span>
                    {/* Chevron */}
                    <span className="collapse-chevron text-muted">
                      <i className="fe fe-lg fe-chevron-down" />
                    </span>
                  </div>
                </a>{" "}
                {/* / .row */}
                {/* Collapse */}
                <div
                  className="collapse"
                  id="helpSeven"
                  data-parent="#helpAccordionTwo"
                >
                  <div className="py-5">
                    {/* Text */}
                    <p className="text-gray-700">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sunt rerum minima a possimus, amet perferendis, temporibus
                      obcaecati pariatur. Reprehenderit magnam necessitatibus
                      vel culpa provident quas nesciunt sunt aut cupiditate
                      fugiat! Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit. Sunt rerum minima a possimus, amet
                      perferendis, temporibus obcaecati pariatur. Reprehenderit
                      magnam necessitatibus vel culpa provident quas nesciunt
                      sunt aut cupiditate fugiat!
                    </p>
                    <div className="d-flex align-items-center">
                      {/* Vote */}
                      <div className="btn-group mr-4">
                        {/* Thumb down */}
                        <input
                          type="radio"
                          className="btn-check"
                          name="helpSevenVote"
                          id="helpSevenDown"
                          autoComplete="off"
                          defaultChecked
                        />
                        <label
                          className="btn btn-sm btn-white"
                          htmlFor="helpSevenDown"
                        >
                          <i className="fe fe-thumbs-down" />
                        </label>
                        {/* Thumb up */}
                        <input
                          type="radio"
                          className="btn-check"
                          name="helpSevenVote"
                          id="helpSevenUp"
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-sm btn-white"
                          htmlFor="helpSevenUp"
                        >
                          <i className="fe fe-thumbs-up" />
                        </label>
                      </div>
                      {/* Text */}
                      <span className="font-size-sm text-muted">
                        Did this help solve your issue?
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="list-group-item">
                {/* Toggle */}
                <a
                  className="d-flex align-items-center text-reset text-decoration-none"
                  data-toggle="collapse"
                  href="#helpEight"
                  role="button"
                  aria-expanded="false"
                  aria-controls="helpEight"
                >
                  {/* Title */}
                  <span className="mr-4">
                    Can I use referral code to decrease my monthly fees?
                  </span>
                  {/* Metadata */}
                  <div className="text-muted ml-auto">
                    {/* Text */}
                    <span className="font-size-sm mr-4 d-none d-md-inline">
                      Updated 3 weeks ago
                    </span>
                    {/* Chevron */}
                    <span className="collapse-chevron text-muted">
                      <i className="fe fe-lg fe-chevron-down" />
                    </span>
                  </div>
                </a>{" "}
                {/* / .row */}
                {/* Collapse */}
                <div
                  className="collapse"
                  id="helpEight"
                  data-parent="#helpAccordionTwo"
                >
                  <div className="py-5">
                    {/* Text */}
                    <p className="text-gray-700">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sunt rerum minima a possimus, amet perferendis, temporibus
                      obcaecati pariatur. Reprehenderit magnam necessitatibus
                      vel culpa provident quas nesciunt sunt aut cupiditate
                      fugiat! Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit. Sunt rerum minima a possimus, amet
                      perferendis, temporibus obcaecati pariatur. Reprehenderit
                      magnam necessitatibus vel culpa provident quas nesciunt
                      sunt aut cupiditate fugiat!
                    </p>
                    <div className="d-flex align-items-center">
                      {/* Vote */}
                      <div className="btn-group mr-4">
                        {/* Thumb down */}
                        <input
                          type="radio"
                          className="btn-check"
                          name="helpEightVote"
                          id="helpEightDown"
                          autoComplete="off"
                          defaultChecked
                        />
                        <label
                          className="btn btn-sm btn-white"
                          htmlFor="helpEightDown"
                        >
                          <i className="fe fe-thumbs-down" />
                        </label>
                        {/* Thumb up */}
                        <input
                          type="radio"
                          className="btn-check"
                          name="helpEightVote"
                          id="helpEightUp"
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-sm btn-white"
                          htmlFor="helpEightUp"
                        >
                          <i className="fe fe-thumbs-up" />
                        </label>
                      </div>
                      {/* Text */}
                      <span className="font-size-sm text-muted">
                        Did this help solve your issue?
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Divider */}
          <hr className="border-gray-300 my-6 my-md-8" />
          {/* Header */}
          <h3 className="font-weight-bold">Related Help Center Categories</h3>
          {/* Text */}
          <p className="text-muted mb-6 mb-md-8">
            If you didn’t find what you needed, these could help!
          </p>
          {/* Categories */}
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              {/* Card */}
              <div className="card card-border border-dark shadow-lg mb-6 mb-md-8 mb-lg-0 lift lift-lg">
                <div className="card-body text-center">
                  {/* Icon */}
                  <div className="icon-circle bg-dark text-white mb-5">
                    <i className="fe fe-users" />
                  </div>
                  {/* Heading */}
                  <h4 className="font-weight-bold">Organizations</h4>
                  {/* Text */}
                  <p className="text-gray-700 mb-5">
                    Setting up and managing collections of users.
                  </p>
                  {/* Badge */}
                  <span className="badge rounded-pill bg-dark-soft">
                    <span className="h6 text-uppercase">11 entries</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              {/* Card */}
              <div className="card card-border border-primary-desat shadow-lg mb-6 mb-md-8 mb-lg-0 lift lift-lg">
                <div className="card-body text-center">
                  {/* Icon */}
                  <div className="icon-circle bg-primary-desat text-white mb-5">
                    <i className="fe fe-users" />
                  </div>
                  {/* Heading */}
                  <h4 className="font-weight-bold">Performance</h4>
                  {/* Text */}
                  <p className="text-gray-700 mb-5">
                    Improving your system's speed and reliability.
                  </p>
                  {/* Badge */}
                  <span className="badge rounded-pill bg-dark-soft">
                    <span className="h6 text-uppercase">7 entries</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              {/* Card */}
              <div className="card card-border border-danger shadow-lg lift lift-lg">
                <div className="card-body text-center">
                  {/* Icon */}
                  <div className="icon-circle bg-danger text-white mb-5">
                    <i className="fe fe-users" />
                  </div>
                  {/* Heading */}
                  <h4 className="font-weight-bold">Customizing</h4>
                  {/* Text */}
                  <p className="text-gray-700 mb-5">
                    Building custom modules on top of our platform.
                  </p>
                  {/* Badge */}
                  <span className="badge rounded-pill bg-dark-soft">
                    <span className="h6 text-uppercase">14 entries</span>
                  </span>
                </div>
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
