import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ShowpContextProvider from "./context/ShowpContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ShowpContextProvider>
      <App />
    </ShowpContextProvider>
  </BrowserRouter>
);
