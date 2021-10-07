import s from './Salarry.module.css'
import mac from '../../img/mac.png'
import applemusic from '../../img/applemusic.png'
import Carta from '../carta/carta'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'


const Salarry = () => {

    const dispatch = useDispatch()
    const salarry = useSelector(state => state.salarry.salarry)
    const insruction = useSelector(state => state.salarry.insruction)
    const rules = useSelector(state => state.salarry.rules)

    return <div className={s.item}>
        <div className={s.salarry}>
            <p className={s.text}>Скидочные купонны</p>
            <p className={s.text1}>Развлечения</p>
        </div>
        <div className={s.appleMain}>
            <h1 className={s.apple}>Apple Mussic за</h1>
            <h1 className={s.thanks}>СПАСИБО</h1>
        </div>
        <div className={s.image}>
            <img className={s.mac} src={mac}/>
            <div className={s.december}>
                <p className={s.december2018}>С 17 Декабря 2018 г.</p>
                <p className={s.december2019}>по 17 Декабря 2019 г.</p>
            </div>
        </div>
        <div className={s.main}>
            <div className={s.replace}>
                <p className={s.replace1}>Обменивайте 169 СПАСИБО на месяц подписки в Apple Music и наслаждайтесь любимой музыкой без перерыва.</p>

            </div>
            <ul className={s.test}>
                {salarry.map(s => 
                    <li className={s.test1}>{s.getAlboms} {s.exsclusive} {s.refuse} {s.download}</li>)}

            </ul>
            <p className={s.use}>Как использовать промо-код:</p>
            <div className={s.figures}>
                {insruction.map(st => 
                    <p>{st.insruction1}{st.insruction2}{st.insruction3}{st.insruction4}{st.insruction5}{st.insruction6}{st.insruction7}</p>)}
             
            </div>
            <div className={s.personal}>
                <p>
                Под персональными данными в целях настоящих Правил понимаются персональные данные Участников Акции
                 и иных лиц - субъектов персональных данных как они определены в Законе «О персональных данных».
                  Под обработкой персональных данных в настоящих 
                  <span className={s.rigths}>Правилах понимается любое действие</span> (операция), совершаемое в целях проведения Акции, или совокупность действий(операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных
                  данных, предоставленных Участником Акции Банку/ Уполномоченной Компании.
                </p>
            </div>
            <div className={s.moreinform}>
                {rules.map(r => 
                    <p className={s.inform}>{r.rules1}{r.rules2}</p>)}
            </div>
            <p className={s.finalText}>
               Только при оформлении индивидуальной подписки. По окончании пробного периода подписка будет продлена автоматически. 4 месяца бесплатно только для новых подписчиков. Срок действия кода истекает 31 января 2020 года. Это промокод, который не подлежит перепродаже, обмену на денежный эквивалент и замене в случае кражи или потери. Предложение действительно при оформлении индивидуальной подписки на Apple Music на территории Российской Федерации. Требуется учетная запись iTunes. Применяются соответствующие условия 
               (<span className={s.finalMore}>подробнее</span>).
               Промокодом может воспользоваться лицо старше 13 лет, чье местоположение совпадает 
               со страной/регионом магазина, в котором активируется код.
               Требуются совместимые продукты и сервисы. Apple Music — зарегистрированная торговая марка Apple. Apple не является участником или спонсором этой промоакции.
            </p>
        </div>
        <div className={s.applemusic}>
            <img className={s.apleimg} src={applemusic}/>
            <h1 className={s.h1apple}>Apple Music</h1>
        </div>
        <Carta/>
    </div>
}


export default Salarry

// 3.  Выберите индивидуальную подписку и нажмите «3 месяца бесплатно».
// 4. Перейдите в учетную запись.
// 5. Нажмите «Использовать код».
// 6. Введите 12-значный код.
// 7. Получите сообщение с подтверждением использования кода.