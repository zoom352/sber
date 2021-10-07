import s from './highest.module.css'
import thanks from './../../img/thanks.png'
import triangle from '../../img/Triangle.png'
import search from '../../img/search.png'
import { useState } from 'react'
import Modal from './Modal/modal'
import { DecreaseAC, IncreaseAC, TextAC } from '../../redux/highest-reducer'
import { useDispatch, useSelector } from 'react-redux'

const Highest = () => {

    const dispatch = useDispatch()
    const texts = useSelector(state => state.texts.texts)
    const [modalActive, setModalActive] = useState(false)


    return <div className={s.highest}>
            <img className={s.image} src={thanks}/>
            <div className={s.mainText}>
                {texts.map(text => 
                <p className={s.text}>{text.cupons}
                {text.emoshion}
                {text.avia}
                {text.tickets}
                {text.hotels}</p>
                )}
                
                <div className={s.test}>
                    <img className={s.triangle} src={triangle} />
                    <p className={s.spb}>Санкт-Петербург</p>
                </div>
            </div>

            <div className={s.mainText2}>
                {texts.map(text => 
                    <p className={s.text}>{text.carsh}
                                          {text.teatrs}
                                          {text.strah}
                                          {text.contact}
                                                       </p>)}
                
                {texts.map(text =>
                    <p className={s.partners}>{text.partners}</p>)}
                
                <div className={s.test2}>
                    <img className={s.search}
                      src={search} onClick={() => setModalActive(true)}/>
                    <Modal active={modalActive} setActive={setModalActive}/>
                    <div className={s.enter}>
                        <p className={s.ahead}>Войти</p>
                    </div>
                </div>
            </div>
        </div>

}


export default Highest;