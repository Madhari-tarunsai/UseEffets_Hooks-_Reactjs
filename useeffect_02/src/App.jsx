import React, { useEffect, useState } from 'react';
import './index.css'; 

const App = () => {
  const [state, setState] = useState([]);
  const [api, setApiData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(res => {
        setState(res);
        setApiData(res);
      });
  }, []);

  const handlerClick = (cat) => {
    if (cat === "api") {
      setApiData(state);
    } else {
      const filtered = state.filter(item => item.category === cat);
      setApiData(filtered);
    }
  };

  return (
    <div className="container">
      <div className="buttons">
        <button onClick={() => handlerClick("api")}>I'm From Api's</button>
        <button onClick={() => handlerClick("electronics")}>I'm Electronics</button>
        <button onClick={() => handlerClick("men's clothing")}>I'm Men's clothing</button>
        <button onClick={() => handlerClick("women's clothing")}>I'm Women's clothing</button>
      </div>

      <div className="card-grid">
        {api.map((x) => (
          <div className="card" key={x.id}>
            <img src={x.image} alt={x.title} />
            <h3>{x.title}</h3>
            <p>{x.category}</p>
            <p>${x.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
