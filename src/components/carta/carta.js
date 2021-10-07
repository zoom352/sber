import s from './carta.module.css'
import applemusic from '../../img/applemusic.png'
import MMayak from '../../img/MMayak.png'
import Mayak from '../../img/Mayak.png'
import Llub from '../../img/Llub.png'
import Lub from '../../img/Lub.png'
import Bitmap from '../../img/Bitmap.png'


const Carta = () => {

    return <div>
        <div className={s.mainCard}>
            <div className={s.card1}>
                <div className={s.moscow}>
                    <img className={s.img} src={applemusic} />
                    <p className={s.big}>Москва, ул. Большая Татарская, 21</p>
                </div>
                <div className={s.metro}>
                    <img className={s.MMayak} src={MMayak} />
                    <img className={s.Mayak} src={Mayak} />
                    <img className={s.Llub} src={Llub}/>
                    <img className={s.Lub} src={Lub}/>
                </div>
              <p className={s.maykMetro}>Маяковская</p>
              <p className={s.lubMetro}>Лубянка</p>
              <p className={s.number}>+7 495 220-30-44</p>
              <p className={s.everyDay}>Ежедневно с 09:00 до 21:00</p>
              <p className={s.apple}>apple.com</p>
              <p className={s.route}>Проложить маршрут</p>
            </div>
            <div className={s.card2}>
            <div className={s.moscow}>
                    <img className={s.img} src={applemusic} />
                    <p className={s.big}>Москва, ул. Большая Татарская, 21</p>
                </div>
                <div className={s.metro}>
                    <img className={s.MMayak} src={MMayak} />
                    <img className={s.Mayak} src={Mayak} />
                    <img className={s.Llub} src={Llub}/>
                    <img className={s.Lub} src={Lub}/>
                </div>
              <p className={s.maykMetro}>Маяковская</p>
              <p className={s.lubMetro}>Лубянка</p>
              <p className={s.number}>+7 495 220-30-44</p>
              <p className={s.everyDay}>Ежедневно с 09:00 до 21:00</p>
              <p className={s.apple}>apple.com</p>
              <p className={s.route}>Проложить маршрут</p>
            </div>
            <div className={s.card3}>
            <div className={s.moscow}>
                    <img className={s.img} src={applemusic} />
                    <p className={s.big}>Москва, ул. Большая Татарская, 21</p>
                </div>
                <div className={s.metro}>
                    <img className={s.MMayak} src={MMayak} />
                    <img className={s.Mayak} src={Mayak} />
                    <img className={s.Llub} src={Llub}/>
                    <img className={s.Lub} src={Lub}/>
                </div>
              <p className={s.maykMetro}>Маяковская</p>
              <p className={s.lubMetro}>Лубянка</p>
              <p className={s.number}>+7 495 220-30-44</p>
              <p className={s.everyDay}>Ежедневно с 09:00 до 21:00</p>
              <p className={s.apple}>apple.com</p>
              <p className={s.route}>Проложить маршрут</p>
            </div>
        </div>
        <img className={s.Bitmap} src={Bitmap}/>
    </div>
}


export default Carta