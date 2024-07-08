import React from "react";
import { createRoot } from "react-dom/client";
import { ModalProvider, Theme } from "@tolokoban/ui";

import App from "./app";

import "./index.css";

function start() {
  Theme.apply();
  const container = document.getElementById("root") as HTMLElement;
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <ModalProvider>
        <App />
      </ModalProvider>
    </React.StrictMode>,
  );
  // Remove splash screen.
  removeSplashScreen();
}

function removeSplashScreen() {
  const SPLASH_VANISHING_DELAY = 900;
  const splash = document.getElementById("tgd-logo");
  if (!splash) return;

  splash.classList.add("vanish");
  window.setTimeout(() => {
    const parent = splash.parentNode;
    if (!parent) return;

    parent.removeChild(splash);
  }, SPLASH_VANISHING_DELAY);
}

void start();
