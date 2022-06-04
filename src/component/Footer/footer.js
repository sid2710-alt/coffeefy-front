import React from "react";
import {
  ImFacebook,
  ImTwitter,
  ImGoogle,
  ImGithub,
  ImTelegram,
  ImLinkedin2,
} from "react-icons/im";

import "./footer.css";

const footer = () => {

  // window.addEventListener("contextmenu", (e) => e.preventDefault());


  return (
    <>
      <footer class="footer footer-bottom bg-dark py-0">
        <div class="d-flex justify-content-center mt-4">
          <a class="mt-4 " href="#">
            <ImFacebook class="mr-4 fa-4x icon" size={20} />
          </a>

          <a class="mt-4" href="https://www.google.com/">
            <ImTwitter class="mr-5 icon" size={20} />{" "}
          </a>

          <a class="mt-4" href="https://www.google.com/">
            <ImGoogle class="mr-5 icon" size={20} />{" "}
          </a>

          <a class="mt-4" href="https://www.google.com/">
            <ImGithub class=" mr-5 icon" size={20} />
          </a>

          <a class="mt-4" href="https://www.google.com/">
            <ImTelegram class=" mr-5 icon" size={20} />
          </a>

          <a class="mt-4" href="https://www.google.com/">
            <ImLinkedin2 class="mr-3 icon" size={20} />
          </a>
        </div>

        <div
          class="footer-copyright text-center py-4"
          style={{ color: "wheat" }}
        >
          © 2020 Copyright:
          <a href="/" style={{ textDecoration: "none" }}>
            {" "}
            coffeefy
          </a>
        </div>
      </footer>
    </>
  );
};

export default footer;
