// eslint-disable-next-line
import { Navbar, Home } from "./components";
import "./App.css";

const App = () => {
  return (
    <>
      <div className='main-container'>
        <Navbar />
        <Home />
      </div>
    </>
  );
};

export default App;
