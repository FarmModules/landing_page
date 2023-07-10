"use client";

import { useState } from "react";

const FarmModuleInput = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation logic here
    if (!email || firstName.length < 2 || lastName.length < 2) {
      alert("Please fill in all required fields with valid values.");
      return;
    }

    // Perform additional validation or form submission
    // ...

    // Reset the form
    setEmail("");
    setFirstName("");
    setLastName("");
    setMessage("");
  };

  return (
    <div className="wrapper flex flex-col justify-center items-center" id="templateContainer">
      <div className="masthead">
        <img
          src="https://mcusercontent.com/b05e94f9647da65b3c325161c/images/24941f77-aa82-39ea-582c-682a2ecb4ce5.png"
          alt=""
          border="0"
          style={{
            border: "0px",
            borderColor: "",
            borderStyle: "",
            borderWidth: "0px",
            height: "56px",
            width: "432px",
            margin: "0",
            padding: "0",
          }}
          width="1432"
          height="236"
        />
      </div>
      <div id="templateBody" className="bodyContent rounded-6">
        <form
          onSubmit={handleSubmit}
          action="https://tech.us5.list-manage.com/subscribe/post"
          method="POST"
        >
          <div id="mergeTable" className="p-8">
            <div className="mergeRow dojoDndItem mergeRow-email flex items-center mb-4">
              <label htmlFor="MERGE0" className="mr-2 p-4">
                Email Address:
              </label>
              <input
                type="email"
                autoCapitalize="off"
                autoCorrect="off"
                name="MERGE0"
                id="MERGE0"
                size="25"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`border ${!email ? "border-red-500" : "border-gray-300"
                  } rounded p-2 w-full md:w-5/4`}
                required
              />
            </div>
            <div className="mergeRow dojoDndItem mergeRow-text flex items-center mb-4">
              <label htmlFor="firstName" className="mr-8 p-6">
                First Name:
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                size="25"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className={`border ${firstName.length < 2 ? "border-red-500" : "border-gray-300"
                  } rounded p-2 w-full md:w-5/4`}
                required
              />
            </div>
            <div className="mergeRow dojoDndItem mergeRow-text flex items-center mb-4">
              <label htmlFor="lastName" className="mr-8 p-6">
                Last Name:
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                size="25"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className={`border ${lastName.length < 2 ? "border-red-500" : "border-gray-300"
                  } rounded p-2 w-full md:w-7/4`}
                required
              />
            </div>
            <div className="mergeRow dojoDndItem mergeRow-textarea p-4">
              <label htmlFor="MERGE4" className="p-2">
                Message: 
              </label>
              <textarea
                name="MERGE4"
                id="MERGE4"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border border-gray-300 rounded p-4 w-full"
              ></textarea>
            </div>
            <div className="submit_container clear flex justify-center items-center mt-2">
              <input
                type="submit"
                className="formEmailButton bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
                name="submit"
                value="Send Enquiry"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FarmModuleInput;

