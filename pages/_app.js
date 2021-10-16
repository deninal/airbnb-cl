import "tailwindcss/tailwind.css";
import "../styles/global.css";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";

// progress bar on page load // library @badrap/bar-of-progress
const progress = new ProgressBar({
  size: 4,
  color: "#FE595E",
  className: "z-index: 50",
  delay: 100,
});

// implement progress bar on router changes
Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
