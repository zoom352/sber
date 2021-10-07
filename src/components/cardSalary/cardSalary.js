import s from './cardSalary.module.css'
import Burger from '../../img/Burger.png'
import five from '../../img/five.png'
import resp from '../../img/resp.png'
import megafon from '../../img/megafon.png'
import health from '../../img/health.png'
import lit from '../../img/lit.png'
import ozon from '../../img/ozon.png'
import tez from '../../img/tez.png'
import booking from '../../img/booking.png'
import sber from '../../img/sber.png'
import trip from '../../img/trip.png'
import dishes from '../../img/dishes.png'
import lamoda from '../../img/lamoda.png'
import toys from '../../img/toys.png'

const CardSalary = () => {

    return <div>
        <div className={s.card}>
            <img className={s.burger} src={Burger}/>
            <img className={s.five} src={five}/>
            <img className={s.resp} src={resp}/>
            <img className={s.megafon} src={megafon}/>
            <img className={s.megafon1} src={megafon}/>
        </div>
        <div className={s.podCard}>
            <p className={s.text}>Скидки за бонусы</p>
        </div>
        <div className={s.card1}>
            <img className={s.health} src={health}/>
            <img className={s.five1} src={five}/>
            <img className={s.lit} src={lit}/>
        </div>
        <div className={s.podCard1}>
            <p className={s.text}>большой % начисления</p>
        </div>
        <div className={s.card2}>
            <img className={s.dishes} src={dishes}/>
            <img className={s.lamoda} src={lamoda}/>
            <img className={s.toys} src={toys}/>
        </div>
        <div className={s.podCard2}>
            <p className={s.text}>большой % начисления</p>
        </div>
        <div className={s.card3}>
            <img className={s.ozon} src={ozon}/>
            <img className={s.tez} src={tez}/>
            <img className={s.booking} src={booking}/>
            <img className={s.sber} src={sber}/>
            <img className={s.trip} src={trip}/>
        </div>
        <div className={s.podCard3}>
            <p className={s.text}>Персональное исходя из трат</p>
        </div>
    </div>
}


export default CardSalary;