import React, { useState } from "react";
import Form from "./Component/Form";
import Output from "./Component/Output";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);
    const [userdata, setUserdata] = useState([]);

    const BlogCountHandler = () => {
        setCount(count + 1);
    };
     
    const CountManagingHandler = ()=>{
      setCount(count-1)
    }

    const SaveDataHandler = (InputData) => {
        setUserdata((prevdata) => [...prevdata, InputData]);
    };



    return (
        <div className="app-container">
            <h1 className="app-title">Blog Website</h1>
            <h3 className="app-subtitle">Total Blog: {count}</h3>
            <Form onSave={SaveDataHandler} onCount={BlogCountHandler} />
            <Output data={userdata} setData={setUserdata} onDelete={CountManagingHandler} />
        </div>
    );
}

export default App;
