import React from "react";

export default function News({ imgUrl, title, source, date, description }) {
  function formatDate(dateString) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const date = new Date(dateString);

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month}, ${year}`;
  }
  return (
    <div className="card" style={{ width: "20rem", height: "23rem" }}>
      <img
        src={imgUrl || "https://cdn.ndtv.com/common/images/ogndtv.png"}
        className="card-img-top"
        style={{ height: "200px" }}
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title" style={{ fontSize: "20px" }}>
          {title && title.substr(0, 30)}...
        </h5>
        <p className="card-text" style={{ fontSize: "12px" }}>
          {description && description.substr(0, 70)}...
        </p>
        <span class="badge text-bg-warning mx-2">{source}</span>
        <span class="badge text-bg-info">{formatDate(date)}</span>
      </div>
    </div>
  );
}
