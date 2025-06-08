import { Routes, Route } from "react-router-dom";

import Gender from "./page/Gender";

function App() {
  return (
    <Routes>
      <Route path="/gender" element={<Gender />} />
    </Routes>
  );
}

export default App;