import './App.css';

function App() {
  return (
    <div className="App">
      <div className="card">
        <img className="qr" src={require("./qr-code-component-main/images/image-qr-code.png")}/>
        <h2>Improve your front-end skills by building projects</h2>
        <p className="description">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </div>
  );
}

export default App;
