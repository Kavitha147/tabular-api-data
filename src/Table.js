import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './table.css';

const Table = () => {
    const [dataSet, setData] = useState([]);

    const getData = async () => {
        const data = await axios.get("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo");
        const timeDetails = data.data['Time Series (5min)'];
        setData(timeDetails);
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className='root'>
            <h1>Table Data</h1>
            <table className='tablediv'>
                <tr>
                    <th>DateTime </th>
                    <th>Open </th>
                    <th>High </th>
                    <th>Low </th>
                    <th>Close </th>
                    <th>Volume </th>
                </tr>
                {Object.keys(dataSet).map((item) => (
                        <tr>
                            <td>{item} </td>
                            <td>{dataSet[item]['1. open']} </td>
                            <td>{dataSet[item]['2. high']}  </td>
                            <td>{dataSet[item]['3. low']}  </td>
                            <td>{dataSet[item]['4. close']}  </td>
                            <td>{dataSet[item]['5. volume']}  </td>
                        </tr>
                ))}
            </table>
        </div>
    )
}
export default Table;