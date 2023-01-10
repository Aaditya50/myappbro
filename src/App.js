import './App.css';
import Webimage from './WebImages';
import pic from "./images/rasmalai.jpg";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a>Hii vaishnavi here </a>
        {/* <div className="row">
          <div className="logo">
            <img src={logo} width="100" height="50" />
          </div>
      </div> */}

      <Webimage/>
      <a>Loves</a>
      <img src={pic}/>
      </header>
    </div>
  );
}

export default App;
