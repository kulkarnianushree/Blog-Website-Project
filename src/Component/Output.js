import React from "react";
import "./Output.css";  // Import the CSS file

const Output = (props) => {
    const deleteHandler = (index) => {
        const updatedData = props.data.filter((item, idx) => !(idx === index));
        props.setData(updatedData);
        props.onDelete();
    };
    return (
        <div className="output-container">
            {props.data.map((item, index) => (
                <div key={index} className="output-item">
                    <h2 className="output-title">{item.enteredTitle}</h2>
                    <img src={item.enteredUrl} alt={item.enteredTitle} className="output-image" />
                    <p className="output-description">{item.enteredDescription}</p>
                    <div className="output-buttons">
                        <button className="output-button" type="button">Edit</button>
                        <button 
                            className="output-button delete-button" 
                            type="button" 
                            onClick={() => deleteHandler(index)}

                        >Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Output;
