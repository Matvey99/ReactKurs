import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./componets/Footer";
import Page from "./componets/Page";
import Home from "./componets/Home";
import Navbar from "./componets/Navbar";
import "./style/style.css";
import About from "./componets/About";
import React from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import articles from './data/articles.json';

function App() {

    const slider =
        <Swiper
            modules={[Autoplay]}
            //arrow
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            spaceBetween={50}
            //бесконечный слайдер
            loop={true}
            slidesPerView={3}
            //по центру
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            //по центру слайды в слайдере
            centeredSlides={true}
            onSwiper={(swiper) => console.log(swiper)}
            //скрыm, стрелки и точки
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                480: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },

                640: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            }}
        >

            <SwiperSlide>
                <div className="slide">
                    <div className="slide_img">
                        <img
                            src="https://www.abt-sportsline.de/fileadmin/abt-sportsline/Modelle/VW/Bus/T6/Heroteaser/t6-heck.jpg"
                            alt=""
                        />
                    </div>
                    <div className="slide_title">Volkswagen T6 Multivan</div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide">
                    <div className="slide_img">
                        <img
                            src="https://www.ls-felgendesign.de/bilder/popup/2500x1550/h-und-r-gewindefahrwerk-t5-t6-vw-bus-9x20-2753520-alufelgen.jpg"
                            alt=""
                        />
                    </div>
                    <div className="slide_title">Volkswagen T6 Multivan</div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide">
                    <div className="slide_img">
                        <img
                            src="https://i.pinimg.com/originals/c3/7c/01/c37c01ec6ae18d7d690f6d2cbf216850.jpg"
                            alt=""
                        />
                    </div>
                    <div className="slide_title">Volkswagen T6 Multivan</div>
                </div>
            </SwiperSlide>
        </Swiper>,
        content =
            <>
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
            </> 

    return (
        <div className="App">
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={
                        <Home
                            /*Композиция*/
                            slider={slider}
                        />} />
                    <Route path="/history" element={
                        <Page
                            /*Композиция*/
                            title={"История Volkswagen Multivan"}
                            main_image={"https://t6-t7.com/media/tz_portfolio/article/cache/tuning-volkswagen-multivan-147-0_L.jpg"}
                            content={content}
                        />} />
                    <Route path="/about" element={<About/>} />
                </Routes>
                <ToastContainer/>
                <Footer/>
            </BrowserRouter>
        </div>

    );
}
export default App;
