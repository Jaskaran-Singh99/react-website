//Components
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/footer'
import Contact from './components/contact'

//Styles
import './style/App.scss'
import './style/home.scss'
import './style/contact.scss'
import './style/mediaquery.scss'

//Router
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
     <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route exact path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
     </Router>
  );
}

export default App;
