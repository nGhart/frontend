import React, { useState, useEffect, useRef } from 'react';

const InvoiceForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput('');
  };
  return (
    <form className="to-do-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <div>
          <input
            type="text"
            placeholder="Update"
            value={input}
            id="input"
            name="text"
            className="to-do-input"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="to-do-button" onClick={handleSubmit}>
            Save
          </button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Add a To Do"
            value={input}
            name="text"
            className="to-do-input"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="to-do-button" onClick={handleSubmit}>
            Add
          </button>
        </div>
      )}
    </form>
  );
};
export default InvoiceForm;
