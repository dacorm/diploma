import React, {useEffect, useState} from 'react';
import Header from "./components/Header/Header";
import './index.css'
import Search from "./components/Search/Search";
import Card from "./components/Card/Card";
import {moviesJSON} from "./@types/movies";
import axios from "axios";
import Button from "./components/Button/Button";
import Footer from "./components/Footer/Footer";
import smallFilmsToggle from "./store/smallFilmsToggle";
import {observer} from "mobx-react-lite";
import Preloader from "./components/Preloader/Preloader";
import notFound from './assets/images/blank.jpg'


const App = observer(() => {
    const [filmsLoading, setFilmsLoading] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [movies, setMovies] = useState<moviesJSON[]>([]);

    const fetchData = async () => {
        setIsLoading(true);
        const { data } = await axios.get('https://631c98b54fa7d3264cb258f0.mockapi.io/movies?page=1&limit=10');
        setMovies(data);
        setIsLoading(false);
    }

    const loadMoreFilms = async (pageCount: number) => {
        if (pageCount < 4) {
            setFilmsLoading(true);
            const { data } = await axios.get(`https://631c98b54fa7d3264cb258f0.mockapi.io/movies?page=${pageCount}&limit=10`);
            setMovies([...movies, ...data]);
            setFilmsLoading(false);
        }
        smallFilmsToggle.incrementPageCount();
    }

    const searchFilms = async (input: string) => {
        if (input) {
            setIsLoading(true);
            const { data } = await axios.get(`https://631c98b54fa7d3264cb258f0.mockapi.io/movies?nameRU=${input}`);
            setMovies(data);
            setIsLoading(false);
        } else {
            setIsLoading(true);
            fetchData();
            setIsLoading(false);
        }
    }

    const sortByDuration = async () => {
        let arr = [];
        let sortedArr: any[] = [];
        if (smallFilmsToggle.small) {
            setIsLoading(true);
            const { data } = await axios.get('https://631c98b54fa7d3264cb258f0.mockapi.io/movies');
            arr = [...data];
            arr.forEach(item => {
                if (item.duration <= 50) {
                    sortedArr.push(item)
                }
            })
            setMovies(sortedArr);
            setIsLoading(false);
        }
        if (!smallFilmsToggle.small) {
            setIsLoading(true);
            fetchData();
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    useEffect(() => {
        sortByDuration();
    }, [smallFilmsToggle.small])

    return (
        <div className="page">
            <Header/>
            <Search searchFunc={searchFilms}/>
            {isLoading && <Preloader />}
            {
                movies.map((item) => !isLoading && (<Card
                    key={item.id}
                    name={item.nameRU}
                    duration={item.duration}
                    img={item.image?.formats?.thumbnail?.url ?? notFound} />))
            }
            {filmsLoading && <Preloader />}
            <button className='button' onClick={() => loadMoreFilms(smallFilmsToggle.pageCount)} disabled={smallFilmsToggle.pageCount > 3}>
                <p className='buttonText' >Ещё</p>
            </button>
            <Footer />
        </div>
    );
})

export default App;
