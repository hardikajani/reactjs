import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/comments")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
        // console.log(data);
      });
  }, []);

  return (
    <>
      
        {data.map((item)=>(
          <div key={item.id}>
            <h1>{item.body}</h1>
            <h2>{item.id}</h2>

          </div>
        ))}
      
    </>
  );
}

export default App;
