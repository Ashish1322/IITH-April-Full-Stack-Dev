import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar bg-body-tertiary">
      <div
        style={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="https://w7.pngwing.com/pngs/898/590/png-transparent-newspaper-mobile-app-mailonline-android-news-files-free-miscellaneous-text-logo.png"
          alt="Logo"
          width={100}
          height={50}
          className="d-inline-block align-text-top"
        />
        <h3>News Bucket</h3>
      </div>
    </nav>
  );
}
