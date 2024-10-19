export default {
  "id": "drink2go menu",
  "viewports": [
    {
      "label": "mobile",
      "width": 320,
      "height": 290,
    },
  ],
  "resembleOutputOptions": {
    "ignoreAntialiasing": true,
    "usePreciseMatching": false
  },
  "onReadyScript": "onReady.js",
  "scenarios": [
    {
      "label": "index JS-1. open",
      "url": "http://localhost:3000/",
      "referenceUrl": "./reference/index.html",
      misMatchThreshold: 1,
      requireSameDimension: false,
      clickSelectors: ['.js-toggle-button'],
      postInteractionWait: 500,
      selectors: [`viewport`],
    },
    {
      "label": "index JS-1. close",
      "url": "http://localhost:3000/",
      "referenceUrl": "./reference/index.html",
      misMatchThreshold: 1,
      requireSameDimension: false,
      clickSelectors: ['.js-toggle-button', '.js-toggle-button'],
      postInteractionWait: 500,
      selectors: [`viewport`],
    },
  ],
  "paths": {
    "bitmaps_reference": "backstop_data/bitmaps_reference/test-menu",
    "bitmaps_test": "backstop_data/bitmaps_test",
    "engine_scripts": "engine_scripts",
    "html_report": "backstop_data/html_report",
  },
  "report": ["browser"],
  "engine": "puppeteer",
  "engineOptions": {
    "args": ["--no-sandbox"],
    "gotoParameters": { "waitUntil": ["load", "networkidle0"], timeout: 20000 },
  },
  "asyncCaptureLimit": 0,
  "debug": false,
  "debugWindow": false
}
