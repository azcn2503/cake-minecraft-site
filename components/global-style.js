import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *::-webkit-scrollbar {
    background-color: black;
    width: 4px;
    height: 4px;
  }
  *::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, .87);
  }

  * {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }

  ol, ul {
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    color: rgba(255, 255, 255, .87);
  }

  h1, h2, h3, h4, h5, h6, p, li {
    margin: 0;
    margin-bottom: 1em;

    &:last-child {
      margin-bottom: 0;
    }
  }

  input, textarea, select {
    outline: none;
  }
  input[type=button], input[type=submit] {
    cursor: pointer;
  }

  input, textarea, select, body {
    background-color: black;
    font-family: "Droid Sans";
    font-size: 1em;
    line-height: 2em;
    color: white;
  }

  body {
    overflow: hidden;
    color: rgba(255, 255, 255, .53);
  }

  a {
    color: rgba(255, 255, 255, .87);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
