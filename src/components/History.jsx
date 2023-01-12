import React, { useEffect } from "react";
import articles from '../data/articles.json';

function History(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
        window.document.title = "История Volkswagen Multivan ";
    }, []);


    return (
        <div className="pad">
            <div className="wrapper history">
                <div className="h1">История Volkswagen Multivan</div>
                <div className="img">
                    <img src="https://t6-t7.com/media/tz_portfolio/article/cache/tuning-volkswagen-multivan-147-0_L.jpg" />
                </div>
                <div className="text">
                    <p className="texthist">
                        Volkswagen (в переводе с немецкого — «народный автомобиль») —
                        немецкий автомобильный концерн, один из крупнейших в мире. Компания
                        была основана в 1937 году, но её история началась в 1931 году, когда
                        немецкий автопромышленник Фридрих Фолькс и его сын Фердинанд
                        основали компанию «Фольксваген-Аг», которая в 1934 году стала
                        производить автомобили. В 1937 году компания была переименована в
                        «Фольксваген-ГмбХ» (Volkswagenwerk GmbH), а в 1945 году в
                        «Фольксваген-Аг» (Volkswagenwerk AG). В 1967 году компания
                        переименовалась в «Фольксваген-Аг» (Volkswagen AG). В 2011 году
                        компания стала крупнейшим производителем автомобилей в мире.
                    </p>
                    <h1>Характеристики Volkswagen Multivan</h1>

                    <div className="img">
                        <img src="https://www.auto-horejsek.cz/images/modely-volkswagen/multivan-6-1/vw-multivan-6-1-trendline-seriova-vybava.jpg" />
                    </div>
                    <p className="harakt">Основные характеристики Multivan:</p>
                    <ul>
                        <li>Масса: 1 200 кг</li>
                        <li>Длина: 4 200 мм</li>
                        <li>Ширина: 1 700 мм</li>
                        <li>Высота: 1 500 мм</li>
                        <li>Колёсная база: 2 500 мм</li>
                        <li>Объём двигателя: 1 200 см³</li>
                        <li>Мощность двигателя: 75 л.с.</li>
                        <li>Максимальная скорость: 160 км/ч</li>
                        <li>Расход топлива: 6,5л/100 км</li>
                        <li>Тип топлива: бензин</li>
                    </ul>
                    <h1>Страна производства</h1>
                    <img
                        src="https://dtmto.ru/wp-content/uploads/1/e/7/1e7e19e6b04efecbb76c7ca6e608a808.jpeg"
                        alt="countries"
                    />
                    <p>Германия, Индия, Мексика, Польша, Россия, США, Южная Корея</p>
                    <h1>
                        Комплектации Volkswagen Multivan: StartLine, ComfortLine, HighLine
                    </h1>
                    <img src="https://s.auto.drom.ru/i24243/c/photos/fullsize/volkswagen/multivan/volkswagen_multivan_946739.jpg" />

                    {articles.map(item =>
                        <li key={item.id}>
                            <a className='SideBar-url' target='blank' href={item.href}>{item.title}</a>
                        </li>
                    )}
                </div>
            </div>
        </div>
    );
}

export default History;
