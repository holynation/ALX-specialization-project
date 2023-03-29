import './App.css'
import { Home } from './pages';
import { BackgroundLayout, Files } from "./components";


const App = ()  => {
  return (
    <BackgroundLayout>
      <Home />
      {/* <Files /> */}
    </BackgroundLayout>
  );
}

export default App
