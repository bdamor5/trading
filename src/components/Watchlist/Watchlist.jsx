import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/Watchlist.css";
import WatchlistTableValues from "./WatchlistTableValues";

const Watchlist = () => {
  const [watchlistData, setWatchlistData] = useState([]);

  useEffect(() => {
    axios
      .post("http://trial.staginserver.xyz/api/GetExchange?EXCHANGE=MCX")
      .then(({ data }) => {
        console.log(data);
        setWatchlistData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  setInterval(() => {
    axios
      .post("http://trial.staginserver.xyz/api/GetExchange?EXCHANGE=MCX")
      .then(({ data }) => {
        console.log(data);
        setWatchlistData(data);
      })
      .catch((err) => console.log(err));
  }, 2000);

  return (
    <>
      <div
        style={{ background: "#22272B", minHeight: "100vh", padding: "5% 10%" }}
      >
        <table>
          <tr style={{ color: "#fff", background: "#696969" }}>
            <th>DESCRIPTION</th>
            <th>VOLUME</th>
            <th>BUY_QTY</th>
            <th>BUY_PRICE</th>
            <th>SELL_QTY</th>
            <th>SELL_PRICE</th>
            <th>LTP</th>
            <th>NET_CHANGE</th>
            <th>O_OPEN</th>
            <th>HIGH</th>
            <th>LOW</th>
            <th>C_CLOSE</th>
            <th>INDICATOR</th>
            <th>PER_CHANGE</th>
          </tr>

          {watchlistData.map((curr) => (
            <WatchlistTableValues tableData={curr} />
          ))}

        </table>
      </div>
    </>
  );
};

export default Watchlist;
