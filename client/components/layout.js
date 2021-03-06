import { Component } from "react";
import Head from "../components/head";
import Nav from "../components/nav";
import Footer from "../components/footer";
import { initGA, logPageView } from "../utils/analytics";

class Layout extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }

  render() {
    return (
      <>
        <Head title={this.props.title} description={this.props.description} />
        <Nav />
        <main>{this.props.children}</main>
        <Footer />
        {/* test, should see on auth */}

        <style jsx global>{`
          @import url("https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,500,600,700&display=swap");
          @import url("https://fonts.googleapis.com/css?family=Hind+Vadodara:300,400,500,600,700|Mukta:300,400,500,600,700&display=swap");

          html {
            line-height: 1.15; /* 1 */
            -webkit-text-size-adjust: 100%; /* 2 */
          }

          body {
            margin: 0;
            color: #1c262e;
            background: #fdfdfe;
            -webkit-font-smoothing: antialiased;
            font-family: "Hind Vadodara", sans-serif;
          }

          main {
            display: block;
          }

          h1 {
            font-size: 2em;
            margin: 0.67em 0;
          }

          hr {
            box-sizing: content-box; /* 1 */
            height: 0; /* 1 */
            overflow: visible; /* 2 */
          }

          pre {
            font-family: monospace, monospace; /* 1 */
            font-size: 1em; /* 2 */
          }

          a {
            background-color: transparent;
            color: rgb(39, 103, 168);
          }

          a:active {
            color: #003563;
          }

          abbr[title] {
            border-bottom: none; /* 1 */
            text-decoration: underline; /* 2 */
            text-decoration: underline dotted; /* 2 */
          }

          b,
          strong {
            font-weight: bolder;
          }

          code,
          kbd,
          samp {
            font-family: monospace, monospace; /* 1 */
            font-size: 1em; /* 2 */
          }

          small {
            font-size: 80%;
          }

          sub,
          sup {
            font-size: 75%;
            line-height: 0;
            position: relative;
            vertical-align: baseline;
          }

          sub {
            bottom: -0.25em;
          }

          sup {
            top: -0.5em;
          }

          img {
            border-style: none;
          }

          button,
          input,
          optgroup,
          select,
          textarea {
            font-family: inherit; /* 1 */
            font-size: 100%; /* 1 */
            line-height: 1.15; /* 1 */
            margin: 0; /* 2 */
          }

          button,
          input {
            /* 1 */
            overflow: visible;
          }

          button,
          select {
            /* 1 */
            text-transform: none;
          }

          button,
          [type="button"],
          [type="reset"],
          [type="submit"] {
            -webkit-appearance: button;
          }

          button::-moz-focus-inner,
          [type="button"]::-moz-focus-inner,
          [type="reset"]::-moz-focus-inner,
          [type="submit"]::-moz-focus-inner {
            border-style: none;
            padding: 0;
          }

          button:-moz-focusring,
          [type="button"]:-moz-focusring,
          [type="reset"]:-moz-focusring,
          [type="submit"]:-moz-focusring {
            outline: 1px dotted ButtonText;
          }

          fieldset {
            padding: 0.35em 0.75em 0.625em;
          }

          legend {
            box-sizing: border-box; /* 1 */
            color: inherit; /* 2 */
            display: table; /* 1 */
            max-width: 100%; /* 1 */
            padding: 0; /* 3 */
            white-space: normal; /* 1 */
          }

          progress {
            vertical-align: baseline;
          }

          textarea {
            overflow: auto;
          }

          [type="checkbox"],
          [type="radio"] {
            box-sizing: border-box; /* 1 */
            padding: 0; /* 2 */
          }

          [type="number"]::-webkit-inner-spin-button,
          [type="number"]::-webkit-outer-spin-button {
            height: auto;
          }

          /**
          * 1. Correct the odd appearance in Chrome and Safari.
          * 2. Correct the outline style in Safari.
          */

          [type="search"] {
            -webkit-appearance: textfield; /* 1 */
            outline-offset: -2px; /* 2 */
          }

          [type="search"]::-webkit-search-decoration {
            -webkit-appearance: none;
          }

          ::-webkit-file-upload-button {
            -webkit-appearance: button; /* 1 */
            font: inherit; /* 2 */
          }

          details {
            display: block;
          }

          summary {
            display: list-item;
          }

          template {
            display: none;
          }

          [hidden] {
            display: none;
          }

          html {
            font-size: 16px;
          }
          @media screen and (min-width: 320px) {
            html {
              font-size: calc(16px + 2 * ((100vw - 320px) / 680));
            }
          }
          @media screen and (min-width: 1000px) {
            html {
              font-size: 18px;
            }
          }

          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 15px 20px;
          }
        `}</style>
      </>
    );
  }
}

export default Layout;
