import './Main.css';

function Main() {

    return (
        <div className='main_container'>
            <div className='main_content'>
                <div className="input-field">
                    <input placeholder="введите название фильма на английском" className="shearch_header" />
                    <button className='btn btn__primary'><span>Поиск</span></button>
                </div>
                <div className='field_radio'>
                    <div className='group-radio'>
                        <input id='all' name='genre' type='radio' data-type='all' className="switch_radio" />
                        <label htmlFor='all'> Все</label>
                        <div className="check"></div>
                    </div>
                    <div className='group-radio'>
                        <input id='movies' name='genre' type='radio' data-type='movies' className="switch_radio" />
                        <label htmlFor='movies'>Фильмы</label>
                        <div className="check"><div className="inside"></div></div>

                    </div>
                    <div className='group-radio'>
                        <input id='series' name='genre' type='radio' data-type='series' className="switch_radio" />
                        <label htmlFor='series'> Сериалы</label>
                        <div className="check"><div className="inside"></div></div>

                    </div>
                </div>
            </div>

            <div>НИЧЕГО НЕ НАЙДЕНО</div>
        </div>

    );

}
export default Main;