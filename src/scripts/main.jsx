import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Component mapping
const components = {
  App,
};

// Mount React components
document.querySelectorAll("[data-react-component]").forEach((container) => {
  const componentName = container.dataset.reactComponent;
  const Component = components[componentName];

  if (Component) {
    const root = ReactDOM.createRoot(container);
    root.render(
      <React.StrictMode>
        <Component />
      </React.StrictMode>
    );
  }
});
