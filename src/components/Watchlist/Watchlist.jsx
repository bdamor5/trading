import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/Watchlist.css";
import WatchlistTableValues from "./WatchlistTableValues";

const Watchlist = () => {
  const [watchlistData, setWatchlistData] = useState([
    {
      SCRIPID: 16669,
      DESCRIPTION: "ALUMINIUM 28Feb2022",
      VOLUME: 91.0,
      BUY_QTY: 1.0,
      BUY_PRICE: 264.0,
      SELL_QTY: 1.0,
      SELL_PRICE: 264.35,
      LTP: 264.0,
      NET_CHANGE: -2.05,
      O_OPEN: 266.15,
      HIGH: 266.85,
      LOW: 264.0,
      C_CLOSE: 266.05,
      INDICATOR: "-",
      PER_CHANGE: -0.77,
      LAST_UPDATED: "2022-02-23T13:48:16.523",
    },
  ]);

   // useEffect(() =>{
  //     axios.post('http://trial.staginserver.xyz/api/GetExchange?EXCHANGE=MCX')
  //     .then(({data}) => {
  //         console.log(data)
  //         // setWatchlistData(data)
  //     })
  //     .catch((err) => console.log(err))
  // },[])

//   setInterval(() => {
//     axios.post('http://trial.staginserver.xyz/api/GetExchange?EXCHANGE=MCX')
//         .then(({data}) => {
//             console.log(data)
//             // setWatchlistData(data)
//         })
//         .catch((err) => console.log(err))
// }, 2000);

  return (
    <>
      <div
        style={{ background: "#22272B", height: "100vh", padding: "5% 10%" }}
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

          {/* <tr style={{color:'#fff',background:'#000'}}>
            <th>{watchlistData.DESCRIPTION}</th>
            <th>{watchlistData.VOLUME}</th>
            <th>{watchlistData.BUY_QTY}</th>
            <th>{watchlistData.BUY_PRICE}</th>
            <th>{watchlistData.SELL_QTY}</th>
            <th>{watchlistData.SELL_PRICE}</th>
            <th>{watchlistData.LTP}</th>
            <th>{watchlistData.NET_CHANGE}</th>
            <th>{watchlistData.O_OPEN}</th>
            <th>{watchlistData.HIGH}</th>
            <th>{watchlistData.LOW}</th>
            <th>{watchlistData.C_CLOSE}</th>
            <th>{watchlistData.INDICATOR}</th>
            <th>{watchlistData.PER_CHANGE}</th>
        </tr> */}
        </table>
      </div>
    </>
  );
};

export default Watchlist;
