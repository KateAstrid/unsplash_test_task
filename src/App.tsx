import { useState } from 'react';
import DailyPictures from './pages/DailyPictures';
import Footer from './components/Footer'
import Favorites from './pages/Favorites';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css'

const getPage = () => localStorage.getItem('page') ?? 'home'

const App = () => {
    const [page, setPage] = useState<string>(getPage())
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/home"><DailyPictures /></Route>
                    <Route exact path="/favorites"><Favorites /></Route>
                </Switch>
                <Footer page={page} setPage={setPage} />
            </div>
        </Router>
    )
}

export default App;
