import React, {useEffect, useState} from 'react';
import Header from "./components/Header/Header";
import './index.css'
import Search from "./components/Search/Search";
import Card from "./components/Card/Card";
import {moviesJSON} from "./@types/movies";
import axios from "axios";
import Button from "./components/Button/Button";
import Footer from "./components/Footer/Footer";

function App() {
    const [movies, setMovies] = useState<moviesJSON[]>([]);

    const fetchData = async () => {
        const { data } = await axios.get('https://631c98b54fa7d3264cb258f0.mockapi.io/movies?page=1&limit=10');
        setMovies(data)
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="page">
            <Header/>
            <Search/>
            {
                movies.map((item) => (<Card name={item.nameRU} nameEng={item.nameEN} duration={item.duration} img={item.trailerLink} />))
            }
            <Button />
            <Footer />
        </div>
    );
}

export default App;
