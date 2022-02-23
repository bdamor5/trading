import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/Watchlist.css";
import WatchlistTableValues from "./WatchlistTableValues";

const Watchlist = () => {
  const [watchlistData, setWatchlistData] = useState();

  var prevVals = [];

  var cellColor = [];

  useEffect(() => {
    axios
      .post("http://trial.staginserver.xyz/api/GetExchange?EXCHANGE=MCX")
      .then(({ data }) => {
        console.log(data);
        setWatchlistData(data);

        data.forEach((curr) =>
          prevVals.push({
            id: curr.SCRIPID,
            prevBP: curr.BUY_PRICE,
            prevSP: curr.SELL_PRICE,
            prevLTP: curr.LTP,
          })
        );
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setInterval(() => {
      axios
        .post("http://trial.staginserver.xyz/api/GetExchange?EXCHANGE=MCX")
        .then(({ data }) => {
          console.log(data);

          var colorBP = "";
          var colorSP = "";
          var colorLTP = "";
    
          data.forEach((curr) => {
            prevVals.forEach((ele) => {
              if (curr.SCRIPID === ele.id) {
                if (curr.BUY_PRICE > ele.prevBP) {
                  colorBP = "#0C51C4";
                } else {
                  colorBP = "#BF2114";
                }
    
                if (curr.SELL_PRICE > ele.prevSP) {
                  colorSP = "#0C51C4";
                } else {
                  colorSP = "#BF2114";
                }
    
                if (curr.LTP > ele.prevLTP) {
                  colorLTP = "#0C51C4";
                } else {
                  colorLTP = "#BF2114";
                }
    
                if (cellColor.find((cell) => cell.id === curr.SCRIPID)) {
                  cellColor.forEach((cell) => {
                    if (cell.id === curr.SCRIPID && colorBP !== "") {
                      cell.colorBP = colorBP;
                      cell.colorSP = colorSP;
                      cell.colorLTP = colorLTP;
                    }
                  });
                } else {
                  cellColor.push({ id: curr.SCRIPID, colorBP, colorSP, colorLTP });
                }
              }
            });
          });
    
          data.forEach((curr) => {
            prevVals.forEach((ele) => {
              if (curr.SCRIPID === ele.id) {
                ele.prevBP = curr.BUY_PRICE;
                ele.prevSP = curr.SELL_PRICE;
                ele.prevLTP = curr.LTP;
              }
            });
          });
    
          console.log(cellColor);
          localStorage.setItem("cellColor", JSON.stringify(cellColor));
          setWatchlistData(data);

        })
        .catch((err) => console.log(err));

     
    }, 2000);
  }, []);

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

          {watchlistData &&
            watchlistData.map((curr) => (
              <WatchlistTableValues tableData={curr} key={curr.SCRIPID} />
            ))}
        </table>
      </div>
    </>
  );
};

export default Watchlist;
