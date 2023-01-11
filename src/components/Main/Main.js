import './Main.css';
import { useEffect, useState } from 'react';
import Preloader from './Preloader/Preloader'
function Main() {

    let [cards, setCards] = useState([]);
    let [params, setParams] = useState('');
    let [title, setTitle] = useState('');
    let [loading, setLoading] = useState(true);

    let items;


    function getTitle(e) {
        setTitle(e.target.value);
    };


    function getParams(e) {
        //let phrase = e.target.dataset.type.replace(/ +/g, '%20')
        setParams(e.target.dataset.type);
    };

    useEffect(() => {
        getFetchSearch()
    }, [params]);

    function getFetchSearch() {

        console.log('https://www.omdbapi.com/?apikey=e060b931&s=' + title + '&type=' + params)
        if (title.length >= 1) {
            setLoading(true);
            fetch('https://www.omdbapi.com/?apikey=e060b931&s=' + title + '&type=' + params, { method: 'GET' })
                .then(response => { return response.json() })
                .then(response => { return response })
                .then(data => {
                    setCards(data.Search);
                    console.log(data.Search);
                    setLoading(false);
                })
                .catch(err => { console.error(err); setLoading(true) });
        }
    };




    //console.log('https://www.omdbapi.com/?apikey=e060b931&s=' + (title || 'Harry%20Potter') + '&type=' + params)

    useEffect(() => {
        setLoading(true);
        fetch('https://www.omdbapi.com/?apikey=e060b931&s=Harry%20Potter', { method: 'GET' })
            .then(response => { return response.json() })
            .then(response => { return response })
            .then(data => {
                setCards(data.Search);
                console.log(data);
                setLoading(false);
            })
            .catch(err => { console.error(err); setLoading(true) });
    }, []);


    if (cards) {
        items = cards.map((i) => {
            return (
                < div className='card_item' key={i.imdbID}>
                    <div className='card_poster'><a target='_blank' href={'https://www.imdb.com/title/' + i.imdbID}><img src={i.Poster} /></a></div>
                    <a target='_blank' href={'https://www.imdb.com/title/' + i.imdbID}><div className='card_title'>{i.Title}</div></a>
                    <div className='card_type_years'><span>{i.Type}</span><span>{i.Year}</span></div>
                </div >
            )
        });
    };




    return (
        <div className='main_container'>
            <div className='main_content'>
                <div className="input-field">
                    <input onChange={(e) => { getTitle(e) }} placeholder="введите название фильма на английском" className="shearch_header" />
                    <button onClick={() => { getFetchSearch() }} className='btn btn__primary'><span>Поиск</span></button>
                </div>
                <div className='field_radio'>
                    <div className='group-radio'>
                        <input onChange={(e) => { getParams(e); getFetchSearch() }} id='all' name='genre' type='radio' data-type='' className="switch_radio" />
                        <label htmlFor='all'> Все</label>
                        <div className="check"></div>
                    </div>
                    <div className='group-radio'>
                        <input onChange={(e) => { getParams(e); getFetchSearch() }} id='movie' name='genre' type='radio' data-type='movie' className="switch_radio" />
                        <label htmlFor='movie'>Фильмы</label>
                        <div className="check"><div className="inside"></div></div>

                    </div>
                    <div className='group-radio'>
                        <input onChange={(e) => { getParams(e); getFetchSearch() }} id='series' name='genre' type='radio' data-type='series' className="switch_radio" />
                        <label htmlFor='series'> Сериалы</label>
                        <div className="check"><div className="inside"></div></div>

                    </div>
                </div>
            </div>

            <div className='container_movies_react'>{loading ? < div className='preloader_main'><Preloader /> </div> : items != undefined ? items : 'Ничего не найдено'}</div>

        </div >
    );

}
export default Main;