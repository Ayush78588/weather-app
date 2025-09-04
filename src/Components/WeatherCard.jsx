import React from "react";

function WeatherCard({ data }) {
  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "20px",
    marginTop: "20px",
    textAlign: "center",
    boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
    background: "#f9f9f9",
    width: "250px"
  };

  const titleStyle = {
    fontSize: "20px",
    marginBottom: "10px",
    fontWeight: "bold"
  };

  const detailStyle = {
    fontSize: "16px",
    margin: "5px 0"
  };

  return (
    <div style={cardStyle}>
      <div style={titleStyle}>
        {data.city}, {data.country}
      </div>
      <div style={detailStyle}> Temp: {data.temperature}°C</div>
      <div style={detailStyle}> Wind: {data.windspeed} km/h</div>
      <div style={detailStyle}> Time: {data.time}</div>
    </div>
  );
}

export default WeatherCard;
