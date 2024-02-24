import React, { useState } from "react";

const Create=()=> {
  const [inputs, setInputs] = useState({});
  const handleChange = (e) => {
    setInputs((value) => ({ ...value, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/student", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputs),
    });
    console.log(response);
  };
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <label for="">name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            onChange={handleChange}
            aria-describedby="Username"
            placeholder="name"
          />
        </div>
        <div className="form-group">
          <label for="">Email address</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label for="">Phone</label>
          <input
            onChange={handleChange}
            type="text"
            name="phone"
            className="form-control"
            id=""
            placeholder="Phone"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default Create;
