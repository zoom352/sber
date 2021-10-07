import s from './partners.module.css'
import points from '../../img/points.png'
import CardSwitch from '../CardSwitch/CardSwitch';
import Offer from '../offer/offer';
import CardSalary from '../cardSalary/cardSalary';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


const Partners = () => {

    const dispatch = useDispatch()
    const partners = useSelector(state => state.partners.partners)


    return <div>
        <div className={s.main}>
          <h1 className={s.partners}>Партнеры</h1>
          <h1 className={s.partners1}>и предложения</h1>
        </div>
        <div className={s.btnMain}>
            <div className={s.btnPart}>
                {partners.map(p => 
                    <p key={p.allPartners} className={s.text1}>{p.allPartners}</p>)}
            </div>
            <div className={s.btnPop}>
            {partners.map(p => 
                    <p key={p.popular} className={s.text}>{p.popular}</p>)}
            </div>
            <div className={s.btnSup}>
            {partners.map(p => 
                    <p key={p.superStore} className={s.text}>{p.superStore}</p>)}
            </div>
            <div className={s.btnCafe}>
            {partners.map(p => 
                    <p key={p.cafe} className={s.text}>{p.cafe}</p>)}
            </div>
            <div className={s.btnTaxi}>
            {partners.map(p => 
                    <p key={p.taxi} className={s.text}>{p.taxi}</p>)}
            </div>
            <div className={s.btnButy}>
            {partners.map(p => 
                    <p key={p.beaty} className={s.text}>{p.beaty}</p>)}
            </div>
        </div>
        <div className={s.btnMainLow}>
            <div className={s.btnElectro}>
            {partners.map(p => 
                    <p key={p.electro} className={s.textEl}>{p.electro}</p>)} 
            </div>
            <div className={s.btnZoo}>
            {partners.map(p => 
                    <p key={p.zoo} className={s.text}>{p.zoo}</p>)}
            </div>
            <div className={s.btnCinema}>
            {partners.map(p => 
                    <p key={p.cinema} className={s.text}>{p.cinema}</p>)}
            </div>
            <div className={s.btnPoint}>
                <img className={s.textPoint} src={points} />
            </div>
        </div>
        <CardSwitch/>
        <Offer/>
        <CardSalary/>
    </div>
}


export default Partners;