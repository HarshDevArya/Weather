import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import "./searchBox.css";

// eslint-disable-next-line react/prop-types
export default function SearchBox({ city, handleSubmit, handleCityChange }) {
  return (
    <div className="searchBox">
      <h3>Search for the Weather</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          value={city}
          onChange={handleCityChange}
          required
        />
        <br />
        <br />
        <Button
          variant="contained"
          type="submit"
          className="submitButton"
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </form>
    </div>
  );
}
