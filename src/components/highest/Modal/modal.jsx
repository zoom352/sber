import './modal.css'
import search from '../../../img/search.png'
import { useDispatch, useSelector } from 'react-redux'
import { SetAuthAC } from '../../../redux/auth-reducer'

const Modal = ({ active, setActive }) => {

    // const dispatch = useDispatch()
    // const auth = useSelector(state => state.auth.auth)

    

    return <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
        <div className={active ? 'modal__content active' : 'modal__content'}
            onClick={e => e.stopPropagation()}>
                <input placeholder='search' type='text' />
            <img className='search' src={search} />
        </div>
    </div>
}

export default Modal