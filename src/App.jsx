import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Nft from "./pages/nft";
import Governance from "./pages/governance";
import Layout from "./components/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/nft" element={<Nft />} />
          <Route path="/governance" element={<Governance />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
