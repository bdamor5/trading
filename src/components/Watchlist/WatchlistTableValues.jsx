import React, { useState } from "react";

const WatchlistTableValues = ({ tableData, cellColor }) => {
  var BPcolor;
  var SPcolor;
  var LTPcolor;

    var cellColor = JSON.parse(localStorage.getItem('cellColor'));

  console.log(cellColor);

  cellColor &&
    cellColor.map((curr) => {
      console.log(curr);
      if (curr.id === tableData.SCRIPID) {
        BPcolor = curr.colorBP;
        SPcolor = curr.colorSP;
        LTPcolor = curr.colorLTP;
      }
    });

  return (
    <>
      <tr style={{ color: "#fff", background: "#000" }}>
        <th>{tableData.DESCRIPTION}</th>
        <th>{tableData.VOLUME}</th>
        <th>{tableData.BUY_QTY}</th>
        <th bgcolor={BPcolor}>{tableData.BUY_PRICE}</th>
        <th bgcolor={SPcolor}>{tableData.SELL_PRICE}</th>
        <th bgcolor={LTPcolor}>{tableData.LTP}</th>
        <th>{tableData.SELL_QTY}</th>
        <th>{tableData.NET_CHANGE}</th>
        <th>{tableData.O_OPEN}</th>
        <th>{tableData.HIGH}</th>
        <th>{tableData.LOW}</th>
        <th>{tableData.C_CLOSE}</th>
        <th>{tableData.INDICATOR}</th>
        <th>{tableData.PER_CHANGE}</th>
      </tr>
    </>
  );
};

export default WatchlistTableValues;
