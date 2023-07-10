import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";
import About from "./components/about";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" />
      <div className="container my-3">
        {/* <TextForm heading="Enter the text to analyze."/> */}
        <About></About>
      </div>
    </>
  );
}

export default App;
