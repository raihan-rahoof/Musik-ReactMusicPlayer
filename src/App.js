//styles
import './styles/app.scss';
//components
import Player from "./components/Player";
import Songs from "./components/Songs";


function App() {
  return (
    <div className="App">
      <Songs/>
      <Player/>
    </div>
  );
}

export default App;
