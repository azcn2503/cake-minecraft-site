import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    color: rgba(255, 255, 255, .87);
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  body {
    background-color: black;
    font-size: 24px;
    line-height: 34px;
    color: rgba(255, 255, 255, .53);
    overflow: hidden;
    text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.87);
  }

  a {
    color: rgba(255, 255, 255, .87);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
