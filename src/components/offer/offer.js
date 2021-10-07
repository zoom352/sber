import s from './offer.module.css'
import blender from './../../img/blender.png'
import evroSalary from './../../img/evroSalary.png'
import MvideoSalary from './../../img/MvideoSalary.png'
import TehnoPark from '../../img/TehnoPark.png'
import evro from '../../img/evro.png'
import Mvideo from '../../img/Mvideo.png'


const Offer = () => {

    return <div>
        <div className={s.mainText}>
            <div className={s.electroText}>
                <h1 className={s.text}>3 предложения</h1>
                <h1 className={s.text2}>в категории</h1>
                <h1 className={s.text3}>«Электроника и</h1>
            </div>
            <h1 className={s.text1}>бытовая техника»</h1>
        </div>
        <div className={s.pictures}>
            <div>
                <img className={s.img} src={blender} />
                <div>
                    <img className={s.tehno} src={TehnoPark} />
                    <p className={s.tehnoText}>Технопарк</p>
                    <p className={s.tehnoText1}>20% спасибо за технику Electrolux</p>
                </div>
            </div>
            <div>
                <img className={s.img} src={evroSalary} />
                <div>
                    <img className={s.tehno} src={evro} />
                    <p className={s.tehnoText}>Евросеть</p>
                    <p className={s.tehnoText1}>10% спасибо за покупки в черную пятницу</p>
                </div>
            </div>
            <div>
                <img className={s.img} src={MvideoSalary} />
                <div>
                    <img className={s.tehno} src={Mvideo} />
                    <p className={s.tehnoText}>М.Видео</p>
                    <p className={s.tehnoText1}>15% спасибо для студентов</p>
                </div>
            </div>
        </div>
        <div className={s.btnOffer}>
            <p className={s.textOffer}>Ещё 4 предложения</p>
        </div>
    </div>
}

export default Offer;