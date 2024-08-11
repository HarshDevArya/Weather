/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import Loading from "./Loading";
import "./infoBox.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
export default function InfoBox({ weatherData, error, issubmitted }) {
  return (
    <div className="InfoBox">
      <h1>Information box</h1>
      {issubmitted && <Loading />}
      {error && <p>{error}</p>}
      {/* {weatherData && (
        <div className="weatherInfo">
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Min Temperature: {weatherData.main.temp_min}°C</p>
          <p>Max Temperature: {weatherData.main.temp_max}°C</p>
          <p>Humidity: {weatherData.main.humidity}</p>
          <p>Temperature: {weatherData.main.feels_like}</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      )} */}
      {weatherData && (
        <div className="card">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://images.unsplash.com/photo-1514632595-4944383f2737?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D" // Consider changing the image to something more relevant to weather
              title="Weather"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {weatherData ? weatherData.name : "City"}
              </Typography>
              {weatherData && (
                <>
                  <Typography variant="body2" color="text.secondary">
                    Temperature: {weatherData.main.temp}°C
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Min Temperature: {weatherData.main.temp_min}°C
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Max Temperature: {weatherData.main.temp_max}°C
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Humidity: {weatherData.main.humidity}%
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Feels Like: {weatherData.main.feels_like}°C
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Weather: {weatherData.weather[0].description}
                  </Typography>
                </>
              )}
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </div>
      )}
    </div>
  );
}
