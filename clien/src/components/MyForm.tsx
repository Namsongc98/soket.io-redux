import React, { useEffect, useState } from "react";
import { socket } from "../soket";

const MyForm = () => {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    socket.timeout(5000).emit("create-something", value, () => {
      setIsLoading(false);
    });
  }

  useEffect(() => {
    function onFooEvent(value) {
      // ...
    }
  
    socket.on('foo', onFooEvent);
  
    return () => {
      // BAD: missing event registration cleanup
    };
  }, []);
  return (
    <form onSubmit={onSubmit}>
      <input onChange={(e) => setValue(e.target.value)} />

      <button type="submit" disabled={isLoading}>
        Submit
      </button>
    </form>
  );
};

export default MyForm;
