import React from "react";

const Footer = () => {
  return (
    <section id="footer" className="footer">
      <div className="container">
        <footer className="row row-cols-1 row-cols-sm-2  py-5 my-5 border-top">
          <div className="col mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={60}
              height={60}
              viewBox="0 0 24 24"
              style={{
                fill: "rgba(225, 225, 225, 1)",
                transform: "",
                msfilter: "",
              }}
            >
              <path d="M3 2h2v20H3zm16 0H6v20h13c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-1 10H9v-2h9v2zm0-4H9V6h9v2z" />
            </svg>

            <p className="text-body-secondary">© 2024</p>
          </div>
          <div className="About d-flex gap-2 flex-column">
            <div>
              <h4>About Us</h4>
              <h6>
                Discover a world of delicious recipes and culinary inspiration.
                Our mission is to make cooking enjoyable and accessible for
                everyone.
              </h6>
            </div>
            <div>
              <h4>Made by: Saurav Singh</h4>
              <div className="contact d-flex align-items-center">
                <h6>Contact info:</h6>
                <ul className="list-group mx-3 list-group-horizontal">
                  <li className="list-group-item bg-dark">
                    <a
                      href="https://github.com/South-IN"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={36}
                        height={36}
                        viewBox="0 0 24 24"
                        style={{
                          fill: "rgba(225, 225, 225, 1)",
                          transform: "",
                          msfilter: "",
                        }}
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                        />
                      </svg>
                    </a>
                  </li>
                  <li className="list-group-item bg-primary">
                    <a
                      href="https://www.linkedin.com/in/saurav-singh-228554281/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={36}
                        height={36}
                        viewBox="0 0 24 24"
                        style={{
                          fill: "rgba(225, 225, 225, 1)",
                          transform: "",
                          msfilter: "",
                        }}
                      >
                        <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
