import React,{useState} from "react";

const WatchlistTableValues = ({tableData}) => {

    const [prevBuyPrice, setPrevBuyPrice] = useState(tableData.BUY_PRICE);
    const [prevSellPrice, setPrevSellPrice] = useState(tableData.SELL_PRICE);
    const [prevLTP, setPrevLTP] = useState(tableData.LTP);

  return (
    <tr style={{ color: "#fff", background: "#000"}}>
      <th>{tableData.DESCRIPTION}</th>
      <th>{tableData.VOLUME}</th>
      <th>{tableData.BUY_QTY}</th>
      <th bgColor={tableData.BUY_PRICE > prevBuyPrice ? "blue" : (tableData.BUY_PRICE < prevBuyPrice && "red")}>{tableData.BUY_PRICE}</th>
      <th bgColor={tableData.SELL_PRICE > prevSellPrice ? "blue" : (tableData.SELL_PRICE < prevSellPrice && "red")}>{tableData.SELL_PRICE}</th>
      <th bgColor={tableData.LTP > prevLTP ? "blue" : (tableData.LTP < prevLTP && "red")}>{tableData.LTP}</th>
      <th>{tableData.SELL_QTY}</th>
      <th>{tableData.NET_CHANGE}</th>
      <th>{tableData.O_OPEN}</th>
      <th>{tableData.HIGH}</th>
      <th>{tableData.LOW}</th>
      <th>{tableData.C_CLOSE}</th>
      <th>{tableData.INDICATOR}</th>
      <th>{tableData.PER_CHANGE}</th>
    </tr>
  );
};

export default WatchlistTableValues;
