import DailyPictures from './pages/DailyPictures'
import Footer from './components/Footer'
import Favorites from './pages/Favorites'
import Details from './pages/Details'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css'

const App = () => {
    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route exact path="/home"><DailyPictures /></Route>
                    <Route exact path="/favorites"><Favorites /></Route>
                    <Route exact path ="/details/:id"><Details /></Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}

export default App;
