/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [all, setAll] = useState([])
  const [loading, setLoading] = useState(true);
  const URL = 'https://staging-am.awalmula.co.id/rest/default/V1/categories';

  useEffect(()=> {
    const getData = async () => {
      const result = await axios.get(URL);
      setAll(result.data);
      setData(result.data);
      setLoading(false)
    }
    getData();
  }, []);

  const _handleCatalogue = list => {
    if(list.children_data.length > 0) {
      setData(list);
    } else {
      // setData(all)
    }
  }

  const _handleHome = () => {
    setData(all);
  }

  return (
    <div className="app bg-dark d-flex justify-content-center align-items-center">
      {loading ? (
        <div><p>loading...</p></div>
      ) : (
        <div className="container">
          <div className="text-light">
            {data !== all ? (
              <h6 onClick={_handleHome}>home</h6>
            ) : <div />}
          </div>
          {data.children_data.map((item) => (
            <div className="text-light text-center justify-content-center align-items-center list-catalogue">
              <h3 onClick={() => _handleCatalogue(item)}>{item.name}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;