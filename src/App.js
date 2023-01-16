import './App.css';
import Webimage from './WebImages';
import pic from "./images/rasmalai.jpg";
import d1 from "./images/dn1.jpg";
import d2 from "./images/dn2.JPG";
function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/* <a>Hii Dnyaneshwari here </a> */}
        {/* <div className="row">
          <div className="logo">
            <img src={logo} width="100" height="50" />
          </div>
      </div> */}
        {/* <div className="row"> */}
          <div className="logo">
            <div className="container">
               <div className="row">
                {/* <img src={d1} width="200" height="300" /> */}
               
               
            
            
              <img src={d2} width="200" height="300" />

              <a>Hello Ji Aaditya Here</a>
            </div>
            </div>
          </div>
      {/* </div> */}
      {/* <Webimage/>
      <a>Loves</a>
      <img src={pic}/> */}

      </header>
    </div>
  );
}

export default App;
