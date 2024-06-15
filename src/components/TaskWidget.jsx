import React, { useEffect, useState } from "react";

function TaskWidget({ task, setShowTaskWidget }) {
  const [action, setAction] = useState(task.toUpperCase());
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");

  //   useEffect(() => {
  //     const storedData = localStorage.getItem(inputValue);
  //     console.log(storedData);
  //     if (storedData) setData(storedData);
  //   }, []);

  const performTask = () => {
    if (!inputValue) return;
    switch (action) {
      case "ADD":
        if (!textareaValue) return;
        handleAdd();
        break;
      case "READ":
        handleRead();
        break;
      case "DELETE":
        handleDelete();
        break;
      case "UPDATE":
        if (!textareaValue) return;
        handleUpdate();
        break;
    }
  };

  const handleAdd = () => {
    const newData = textareaValue.toLowerCase();

    setData(newData);
    localStorage.setItem(inputValue.toLowerCase(), JSON.stringify(newData));
    setInputValue("");
  };

  const handleUpdate = (index) => {
    // const newData = data.map((item, i) => (i === index ? inputValue : item));
    // setData(newData);
    // localStorage.setItem("data", JSON.stringify(newData));
    // setInputValue("");
    // setEditIndex(null);

    const newData = textareaValue.toLowerCase();

    setData(newData);
    localStorage.setItem(inputValue.toLowerCase(), JSON.stringify(newData));
    alert("updated sucessfully..");
    setInputValue("");
  };

  const handleDelete = () => {
    localStorage.removeItem(inputValue.toLowerCase());
    alert("Removed successfully");
    setShowTaskWidget(false);
  };

  const handleRead = () => {
    const storedData = localStorage.getItem(inputValue.toLowerCase());
    setTextareaValue(storedData.toUpperCase().trimEnd().trimStart());
  };

  return (
    <div>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue.split('"').join("")}
        style={{
          width: "100%",
          marginBottom: "15px",
          borderRadius: "6px",
          fontSize: "1.3rem",
          padding: ".7rem",
        }}
        type="text"
        placeholder="Enter Word To Search"
      />
      <br />
      {action != "DELETE" && (
        <textarea
          onChange={(e) => setTextareaValue(e.target.value)}
          value={textareaValue}
          readOnly={action === "READ" ? true : false}
          style={{
            width: "100%",
            minHeight: "80px",
            borderRadius: "6px",
            fontSize: "1.3rem",
            padding: "1rem",
          }}
        />
      )}
      <button
        style={{ display: "block", marginLeft: "auto" }}
        onClick={() => {
          performTask();
          if (action !== "READ") setShowTaskWidget(false);
        }}
      >
        {action === "READ" ? "DONE" : action}
      </button>
      <button
        disabled={action !== "READ" ? true : false}
        style={{ display: "block", marginLeft: "auto" }}
        onClick={() => {
          setShowTaskWidget(false);
        }}
      >
        DONE READING
      </button>
    </div>
  );
}

export default TaskWidget;
