export function generatePreflightStyles(selector: string) {
  const outerSelector = selector ? `${selector} ` : ""

  return `
    ${outerSelector ? outerSelector : "html"} {
      line-height: 1.15; 
      -webkit-text-size-adjust: 100%; 
    }
    
    ${outerSelector}body {
      margin: 0;
    }
    
    ${outerSelector}main {
      display: block;
    }
    
    ${outerSelector}h1 {
      font-size: 2em;
      margin: 0.67em 0;
    }
    
    ${outerSelector}hr {
      box-sizing: content-box; 
      height: 0; 
      overflow: visible; 
    }
    
    ${outerSelector}pre {
      font-family: monospace, monospace; 
      font-size: 1em; 
    }
    
    ${outerSelector}a {
      background-color: transparent;
    }
    
    ${outerSelector}abbr[title] {
      border-bottom: none; 
      text-decoration: underline; 
      -webkit-text-decoration: underline dotted;
              text-decoration: underline dotted; 
    }
    
    ${outerSelector}b,
    ${outerSelector}strong {
      font-weight: bolder;
    }
    
    ${outerSelector}code,
    ${outerSelector}kbd,
    ${outerSelector}samp {
      font-family: monospace, monospace; 
      font-size: 1em; 
    }
    
    ${outerSelector}small {
      font-size: 80%;
    }
    
    ${outerSelector}sub,
    ${outerSelector}sup {
      font-size: 75%;
      line-height: 0;
      position: relative;
      vertical-align: baseline;
    }
    
    ${outerSelector}sub {
      bottom: -0.25em;
    }
    
    ${outerSelector}sup {
      top: -0.5em;
    }
    
    ${outerSelector}img {
      border-style: none;
    }
    
    ${outerSelector}button,
    ${outerSelector}input,
    ${outerSelector}optgroup,
    ${outerSelector}select,
    ${outerSelector}textarea {
      font-family: inherit; 
      font-size: 100%; 
      line-height: 1.15; 
      margin: 0; 
    }
    
    ${outerSelector}button,
    ${outerSelector}input { 
      overflow: visible;
    }
    
    ${outerSelector}button,
    ${outerSelector}select { 
      text-transform: none;
    }
    
    ${outerSelector}button,
    ${outerSelector}[type="button"],
    ${outerSelector}[type="reset"],
    ${outerSelector}[type="submit"] {
      -webkit-appearance: button;
    }
    
    ${outerSelector}button::-moz-focus-inner,
    ${outerSelector}[type="button"]::-moz-focus-inner,
    ${outerSelector}[type="reset"]::-moz-focus-inner,
    ${outerSelector}[type="submit"]::-moz-focus-inner {
      border-style: none;
      padding: 0;
    }
    
    ${outerSelector}button:-moz-focusring,
    ${outerSelector}[type="button"]:-moz-focusring,
    ${outerSelector}[type="reset"]:-moz-focusring,
    ${outerSelector}[type="submit"]:-moz-focusring {
      outline: 1px dotted ButtonText;
    }
    
    ${outerSelector}fieldset {
      padding: 0.35em 0.75em 0.625em;
    }
    
    ${outerSelector}legend {
      box-sizing: border-box; 
      color: inherit; 
      display: table; 
      max-width: 100%; 
      padding: 0; 
      white-space: normal; 
    }
    
    ${outerSelector}progress {
      vertical-align: baseline;
    }
    
    ${outerSelector}textarea {
      overflow: auto;
    }
    
    ${outerSelector}[type="checkbox"],
    ${outerSelector}[type="radio"] {
      box-sizing: border-box; 
      padding: 0; 
    }
    
    ${outerSelector}[type="number"]::-webkit-inner-spin-button,
    ${outerSelector}[type="number"]::-webkit-outer-spin-button {
      height: auto;
    }
    
    ${outerSelector}[type="search"] {
      -webkit-appearance: textfield; 
      outline-offset: -2px; 
    }
    
    ${outerSelector}[type="search"]::-webkit-search-decoration {
      -webkit-appearance: none;
    }
    
    ${outerSelector}::-webkit-file-upload-button {
      -webkit-appearance: button; 
      font: inherit; 
    }
    
    ${outerSelector}details {
      display: block;
    }
    
    ${outerSelector}summary {
      display: list-item;
    }
    
    ${outerSelector}template {
      display: none;
    }
    
    ${outerSelector}[hidden] {
      display: none;
    }
    
    ${outerSelector ? outerSelector : "html"} {
      box-sizing: border-box; 
      font-family: sans-serif; 
    }
    
    ${outerSelector}*,
    ${outerSelector}*::before,
    ${outerSelector}*::after {
      box-sizing: inherit;
    }
    
    ${outerSelector}blockquote,
    ${outerSelector}dl,
    ${outerSelector}dd,
    ${outerSelector}h1,
    ${outerSelector}h2,
    ${outerSelector}h3,
    ${outerSelector}h4,
    ${outerSelector}h5,
    ${outerSelector}h6,
    ${outerSelector}figure,
    ${outerSelector}p,
    ${outerSelector}pre {
      margin: 0;
    }
    
    ${outerSelector}button {
      background: transparent;
      padding: 0;
    }
    
    ${outerSelector}button:focus {
      outline: 1px dotted;
      outline: 5px auto -webkit-focus-ring-color;
    }
    
    ${outerSelector}fieldset {
      margin: 0;
      padding: 0;
    }
    
    ${outerSelector}ol,
    ${outerSelector}ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    
    ${outerSelector ? outerSelector : "html"} {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; 
      line-height: 1.5; 
    }
    
    ${outerSelector}*,
    ${outerSelector}*::before,
    ${outerSelector}*::after {
      border-width: 0;
      border-style: solid;
      border-color: #e2e8f0;
    }
    
    ${outerSelector}img {
      border-style: solid;
    }
    
    ${outerSelector}textarea {
      resize: vertical;
    }
    
    ${outerSelector}input:-ms-input-placeholder,
    ${outerSelector}textarea:-ms-input-placeholder {
      color: inherit;
      opacity: 0.5;
    }
    
    ${outerSelector}input::-ms-input-placeholder,
    ${outerSelector}textarea::-ms-input-placeholder {
      color: inherit;
      opacity: 0.5;
    }
    
    ${outerSelector}input::placeholder,
    ${outerSelector}textarea::placeholder {
      color: inherit;
      opacity: 0.5;
    }
    
    ${outerSelector}button,
    ${outerSelector}[role="button"] {
      cursor: pointer;
    }
    
    ${outerSelector}table {
      border-collapse: collapse;
    }
    
    ${outerSelector}h1,
    ${outerSelector}h2,
    ${outerSelector}h3,
    ${outerSelector}h4,
    ${outerSelector}h5,
    ${outerSelector}h6 {
      font-size: inherit;
      font-weight: inherit;
    }
    
    ${outerSelector}a {
      color: inherit;
      text-decoration: inherit;
    }
    
    ${outerSelector}button,
    ${outerSelector}input,
    ${outerSelector}optgroup,
    ${outerSelector}select,
    ${outerSelector}textarea {
      padding: 0;
      line-height: inherit;
      color: inherit;
    }
    
    ${outerSelector}pre,
    ${outerSelector}code,
    ${outerSelector}kbd,
    ${outerSelector}samp {
      font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    }
    
    ${outerSelector}img,
    ${outerSelector}svg,
    ${outerSelector}video,
    ${outerSelector}canvas,
    ${outerSelector}audio,
    ${outerSelector}iframe,
    ${outerSelector}embed,
    ${outerSelector}object {
      display: block;
      vertical-align: middle;
    }
    
    ${outerSelector}img,
    ${outerSelector}video {
      max-width: 100%;
      height: auto;
    }
  `
}
