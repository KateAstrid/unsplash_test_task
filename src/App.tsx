import { useState } from 'react';
import './App.css'
import DailyPictures from './pages/DailyPictures';
import Footer from './components/Footer'

const App = () => {
    const [page, setPage] = useState<string>('Home')
    return (
        <div className="App">
            <DailyPictures />
            <Footer page={page} setPage={setPage} />
        </div>
    )
}

export default App;
