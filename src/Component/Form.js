import React, { useState } from "react";
import "./Form.css";

const Form = (props) => {
    const [userInput, setUserInput] = useState({
        enteredUrl: '',
        enteredTitle: '',
        enteredDescription: ''
    });

    const ImageChangeHandler = (event) => {
        setUserInput((prevInput) => ({
            ...prevInput,
            enteredUrl: event.target.value
        }));
    };

    const TitleChangeHandler = (event) => {
        setUserInput((prevInput) => ({
            ...prevInput,
            enteredTitle: event.target.value
        }));
    };

    const DescriptionChangeHandler = (event) => {
        setUserInput((prevInput) => ({
            ...prevInput,
            enteredDescription: event.target.value
        }));
    };

    const FormSubmitHandler = (event) => {
        event.preventDefault();
        props.onSave(userInput);
        props.onCount();
        setUserInput({
            enteredUrl: '',
            enteredTitle: '',
            enteredDescription: ''
        });
    };

    return (
        <form className="form-container" onSubmit={FormSubmitHandler}>
            <div className="form-group">
                <label htmlFor="link" className="form-label">Image URL</label>
                <input
                    id="link"
                    type="url"
                    className="form-input"
                    value={userInput.enteredUrl}
                    onChange={ImageChangeHandler}
                />
            </div>
            <div className="form-group">
                <label htmlFor="name" className="form-label">Blog Title</label>
                <input
                    id="name"
                    type="text"
                    className="form-input"
                    value={userInput.enteredTitle}
                    onChange={TitleChangeHandler}
                />
            </div>
            <div className="form-group">
                <label htmlFor="description" className="form-label">Blog Description</label>
                <input
                    id="description"
                    type="text"
                    className="form-input"
                    value={userInput.enteredDescription}
                    onChange={DescriptionChangeHandler}
                />
            </div>
            <div className="form-group">
                <button type="submit" className="form-button">Post Button</button>
            </div>
        </form>
    );
};

export default Form;
