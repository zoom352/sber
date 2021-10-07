import './CardSwitch.css'
import Mvideo from '../../img/Mvideo.png'
import Burger from '../../img/Burger.png'
import TehnoPark from '../../img/TehnoPark.png'
import Bork from '../../img/Bork.png'
import evro from '../../img/evro.png'


const CardSwitch = () => {

    return <div>
        <div className='main1'>
            <div className='take'>
                <p>Начисляют</p>
                <p className='thanks'>спасибо</p>
            </div>
            <div className='main'>
                <label className='switch'>
                    <input type='checkbox' />
                    <span className='slider round'></span>
                </label>
            </div>
            <div>
                <p className='textThanks'>Принимают</p>
                <p className='textThanks2'>спасибо</p>
            </div>
        </div>
        <div className='mainCard'>
            <div className='card'>
                <p className='figures'>1,5%</p>
                <p className='text'>Спасибо от суммы покупки</p>
                <img className='Mvideo' src={Mvideo} />
                <p className='textVideo'>М.Видео</p>
            </div>
            <div className='card'>
                <p className='figures'>3%</p>
                <p className='text'>Спасибо от суммы покупки</p>
                <img className='Mvideo' src={Burger} />
                <p className='textVideo'>М.Видео</p>
            </div>
            <div className='card'>
                <p className='figures'>4,5%</p>
                <p className='text'>Спасибо от суммы покупки</p>
                <img className='Mvideo' src={TehnoPark} />
                <p className='textVideo'>М.Видео</p>
            </div>
            <div className='card'>
                <p className='figures'>1,5%</p>
                <p className='text'>Спасибо от суммы покупки</p>
                <img className='Mvideo' src={Bork} />
                <p className='textVideo'>М.Видео</p>
            </div>
            <div className='card'>
                <p className='figures'>1,5%</p>
                <p className='text'>Спасибо от суммы покупки</p>
                <img className='Mvideo' src={evro} />
                <p className='textVideo'>М.Видео</p>
            </div>
        </div>
        <div className='btn'>
            <p className='textPart'>Ещё 4 партнера</p>
        </div>
    </div>
}


export default CardSwitch;