import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useOne from "./Hooks/UseOne";
import useCounter from "./Hooks/UseCounter";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'



function Home(props) {
  useEffect(() => {
    document.title = "Главная";
    window.scrollTo(0, 0);
  }, []);

  useOne(() => {
    console.log("1 multivan был обкатан дилером")
  });

  const {counter, count} = useCounter(0);
  

  let newPostElement = React.createRef();

  let Source = () => {
    let word = newPostElement.current.value; 
    alert(word);
  }


  return (
    <div className="pad home">
      <div className="photo_main">
        <div className="wrapper">
          <h1 className="title">Volkswagen лучшие автомобили</h1>
          <div className="description">
            Новые и б/у автомобили в наличии
          </div>
        </div>
      </div>

      <div className="sliders">
        <div className="wrapper">
            {props.slider} 
        </div>
      </div>
      <div className="auto">
        <div className="wrapper">
          <div className="block">
            <div className="text">
              <h2>
                Об автомобилях <br /> Volkswagen
              </h2>
              <p className="description">
                Мы предлагаем широкий выбор автомобилей Volkswagen.
              </p>
              <button className="btn">
                <Link to="/history">Подробнее</Link>
              </button>
              <button className="btn2" onClick={count}>
                Volkswagen multivan был <br />{counter} <br />раз обкатан дилером
              </button>
            </div>
            <div className="img">
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/2a5e6984411031.5d5c25667c74b.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="block">
            <div className="img">
              <img
                src="https://tvoe-avto.com/wp-content/uploads/1474218819_volkswagen-predstavit-v-parizhe-novye-elekrokary-1.jpg"
                alt=""
              />
            </div>
            <div className="text">
              <h2>
                Об компании <br />
              </h2>
              <p className="description">Об автомобилях Volkswagen</p>
              <button className="btn">
                {" "}
                <Link to="/history">Подробнее</Link>
              </button>
              <textarea className="textAr" ref={newPostElement}></textarea>
              <button className="btn3" onClick={Source}>
                App post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
