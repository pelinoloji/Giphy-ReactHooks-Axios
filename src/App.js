import React, { useState, useEffect } from "react";
import "./App.scss";
import axios from "axios";

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const baseUrl = "https://pelin-gifs-api.herokuapp.com/";

  useEffect(async () => {
    const endpoint = "trending";
    const resultUrl = baseUrl + endpoint;

    const result = await axios.get(resultUrl); //trending scope
    if (!!result && result.status === 200) {
      setData(result.data.trending);
    }
  }, []);

  const loadSearchData = () => {
    const endpoint = "search";
    const parameters = `?searchKey=${search}`;
    const resultUrl = baseUrl + endpoint + parameters;

    axios
      .get(resultUrl)
      .then(data => {
        if (!!data && data.status === 200) {
          setData(data.data.search);
        }
      })
      .catch(error => {
        console.log(error, "error");
      });
  };

  return (
    <div className="App">
      <input
        className="Input"
        placeholder="Please Search Gifs"
        onChange={event => {
          setSearch(event.target.value);
        }}
      ></input>
      <button
        className="Button"
        disabled={!search}
        onClick={() => {
          loadSearchData();
        }}
      >
        Find
      </button>
      <div className="Gifs">
        {data.map(gif => {
          return (
            <div className="Gif" key={gif.id}>
              <iframe frameBorder={0} src={gif.embed_url} alt="loading..." />
              <p>{gif.title}</p>
              <span>{gif.import_datetime}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
