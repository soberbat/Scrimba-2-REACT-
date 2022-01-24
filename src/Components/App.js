import React from "react";
import data from "../data";
import Location from "./Location";

console.log(data);
let locations = data.map((item) => {
  return <Location {...item} key={item.title} />;
});
function App() {
  return <div className="listWrapper">{locations}</div>;
}

export default App;
