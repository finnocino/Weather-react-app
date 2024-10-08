import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <footer>
        <p>
          This project was coded by{" "}
          <a href="https://github.com/finnocino" target="_blank" rel="noreferrer">
            Rita Bern
          </a>
          , is open-sourced on{" "}
          <a
            href="https://github.com/finnocino/weather-project"
            target="_blank" rel="noreferrer"
          >
            github
          </a>
          and{" "}
          <a href="https://weather-reactjs-application.netlify.app/" target="_blank" rel="noreferrer">
            hosted on Netlify
          </a>
        </p>
      </footer>
    </div>
  );
}