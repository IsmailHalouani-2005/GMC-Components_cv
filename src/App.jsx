import logo from './logo.svg';
import './App.css';
import Adress from './Components/Profile/Adress.jsx'
import Photo from './Components/Profile/ProfilePhotos.jsx'
import Name from './Components/Profile/FullName.jsx'


function App() {
  return (
    <div className="App">
      <h1 className="Title">Introduction</h1>
      <div className="App-header">
        <Photo/>
        <Name/>
        <Adress/>
      </div>
    </div>
  );
}

export default App;
