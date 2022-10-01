import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom'
import HomeScreen from "./screens/HomeScreen.js"
import BooksScreen from "./screens/BooksScreen.js"
import PrettyBooksScreen from "./screens/PrettyBooksScreen.js"
import HybridScreen from "./screens/HybridScreen.js"
import HolisticScreen from "./screens/HolisticScreen.js"
import NewsScreen from "./screens/NewsScreen"
import "./bootstrap.min (10).css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import BioScreen from './screens/BioScreen.js'


function App() {
  return (
      <Router className="app ">
        <Header />
        <Route path="/headlines" component={NewsScreen} exact />
        <Route path="/hybrid" component={HybridScreen} exact />
        <Route path="/holistic" component={HolisticScreen} exact />
        <Route path="/books" component={PrettyBooksScreen} exact />
        <Route path="/allbooks" component={BooksScreen} exact />
        <Route path="/bio" component={BioScreen} exact />
        <Route path="/" component={HomeScreen} exact />
        <Footer />
      </Router>
  );
}

export default App;