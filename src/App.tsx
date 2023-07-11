import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" />
      <div className="container my-3">
        {/* <nav>
          <ul>
            <li>
              <link to='./components/TextForm'>TextForm</link></li>
            <li><link to='./components/About"'>About</link></li>
          </ul>
        </nav> */}
        <TextForm heading="Enter the text to analyze." />
        {/* <About /> */}
      </div>

    </>
  );
}

export default App;
