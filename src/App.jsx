import './App.css'
import { Dropzone, Footer, Navbar } from './components'

function App() {

  return (
    <div className="App">
      <div class="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Navbar />
      <div className='boxes'>
        
        <Dropzone className="box"/>
        <div className="box text__box">
          <h1>Simple, private file sharing</h1>
          <p>PrivShare, enables you to exchange files using end-to-end encryption and a link that expires automatically.
            So that you can ensure that what you post is private and that it isn't permanently online.
          </p>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
