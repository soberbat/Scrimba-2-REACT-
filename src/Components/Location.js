import React from "react";

function Location(props) {
  return (
    <div className="card">
      <img src={props.imageUrl} alt="" />
      <section>
        <div>
          <h5> {props.location} </h5>
          <a href={props.googleMapsUrl}>View On Google Maps</a>
        </div>
        <h1> {props.title} </h1>
        <span>
          {props.startDate} - {props.endDate}
        </span>
        <p></p>
      </section>
    </div>
  );
}

export default Location;
