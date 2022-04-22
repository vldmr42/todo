import ReactDOM from "react-dom";
import {
  createRoot
} from "react-dom/client";

import App from './components/app'

// ReactDOM.render(App, document.getElementById("root"));
const container = document.getElementById("root");
const root = createRoot(container);
// eslint-disable-next-line jest/require-hook
root.render( < App /> );
