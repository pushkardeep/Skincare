import React, { useState } from "react";

// Pages
import Loader from "./Components/Loader.jsx";
import Landing from "./Pages/Landing";

function App() {
  const [activeContent, setActiveContent] = useState(false);
  const [disableLoader, setDisableLoader] = useState(false);
  return (
    <>
      {!disableLoader && (
        <Loader
          setDisableLoader={setDisableLoader}
          setActiveContent={setActiveContent}
        />
      )}
      {activeContent && <Landing />}
    </>
  );
}

export default App;
