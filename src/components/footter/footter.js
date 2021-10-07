import s from './footter.module.css'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Vector3 from '../../img/Vector3.png'
import Vector4 from '../../img/Vector4.png'
import ssss from '../../img/ssss.png'
import bbbb from '../../img/bbbb.png'
import eeee from '../../img/eeee.png'
import rrrr from '../../img/rrrr.png'
import aaaa from '../../img/aaaa.png'
import nnnn from '../../img/nnnn.png'
import k1k1 from '../../img/k1k1.png'
import k2k2 from '../../img/k2k2.png'
import VectorBlue from '../../img/VectorBlue.png'
import playTop from '../../img/playTop.png'
import playLow from '../../img/playLow.png'
import playRight from '../../img/playRight.png'
import apple from '../../img/apple.png'
import list from '../../img/list.png'
import ook from '../../img/ook.png'
import kok from '../../img/kok.png'
import face from '../../img/face.png'
import vk from '../../img/vk.png'
import instvect from '../../img/instvect.png'
import instarround from '../../img/instarround.png'
import instapoint from '../../img/instapoint.png'
import { useDispatch, useSelector } from 'react-redux'
// import lastVector from '../../img/lastVector.png'


const Footter = () => {

    const dispatch = useDispatch()
    const texts = useSelector(state => state.texts.texts)

    return <div className={s.footter}>
        <div className={s.mainText}>
            <h2 className={s.boldText}>900</h2>
            {texts.map(text =>
                <p className={s.text}>{text.cupons}
                                       {text.emoshion}
                                       {text.avia}
                                       {text.tickets}
                                       {text.hotels}
                                       {text.carsh}
                                       </p>)}

        </div>
        <p className={s.rf}>По России бесплатно</p>
        <div className={s.mainText2}>
        {texts.map(text =>
                <p className={s.text2}>{text.teatrs}
                                       {text.strah}
                                       {text.contact}
                                       {text.partners}
                                       </p>)}
            {/* <p className={s.text2}>Театры</p>
            <p className={s.text2}>Страхование</p>
            <p className={s.text2}>Как подключиться</p>
            <p className={s.text2}>Партнеры</p> */}
        </div>
        <div className={s.sber}>
           <img className={s.Vector4} src={Vector4}/>
           <img className={s.Vector3} src={Vector3}/>
           <img className={s.Vector2} src={Vector2}/>
           <img src={Vector1}/>
           <div className={s.sberWord}>
               <img src={ssss}/>
               <img src={bbbb}/>
               <img src={eeee}/>
               <img src={rrrr}/>
               <img src={bbbb}/>
               <img src={aaaa}/>
               <img src={nnnn}/>
               <img src={k1k1}/>
               <img src={k2k2}/>
           </div>
        </div>
        <div className={s.socialNetwork}>       
            <div className={s.play}>
                <img className={s.googleleft} src={VectorBlue}/>
                <img className={s.playTop} src={playTop}/>
                <img className={s.playLow} src={playLow}/>
                <img className={s.playRight} src={playRight}/>
                <p className={s.dostup}>ДОСТУПНО В</p>
                <p className={s.google}>Google Play</p>
            </div>
            <div className={s.play1}>
                <img className={s.apple} src={apple}/>
                <img className={s.list} src={list}/>
                <p className={s.download}>Загрузите в</p>
                <p className={s.app}>App Store</p>
            </div>
            <div className={s.classmates}>
                <img className={s.ook} src={ook}/>
                <img className={s.kok} src={kok}/>
            </div>
            <div className={s.face}>
                <img className={s.faceIcon} src={face}/>
            </div>
            <div className={s.vk}>
                <img className={s.vkIcon} src={vk}/>
            </div>
            <div className={s.insta}>
                <img className={s.instvect} src={instvect}/>
                <img className={s.instarround} src={instarround}/>
                <img className={s.instapoint} src={instapoint}/>
            </div>
        </div>
        <div className={s.low}>
            <p className={s.sberyear}>© 1997—2019 ПАО Сбербанк.</p>
            <div>
               <p className={s.politics}>Политика АО «ЦПЛ» в отношении</p>
               <p className={s.politics}>обработки персональных данных и Согласие на</p>
               <p className={s.politics}>обработку данных участника Программы</p>
               <p className={s.footText}>«Спасибо от Сбербанка»</p>
            </div>
        </div>
    </div>
}


export default Footter;