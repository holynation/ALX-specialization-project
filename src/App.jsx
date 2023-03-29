import './App.css'
import { Home } from './pages';
import { BackgroundLayout, Files } from "./components";
import useFileData from './utility/useFileData';


const App = ()  => {
  const { uploadPayload, setUploadPayload } = useFileData();

  if(uploadPayload){
    return <Files  />
  }

  return (
    <BackgroundLayout>
      <Home setUploadPayload={setUploadPayload} />
    </BackgroundLayout>
  );
}

export default App
