const ALL_THE_TEXTS = 'ALL_THE_TEXTS'


const initialState = {
    texts: [
        {cupons: 'Купоны и сертификаты'},
        {emoshion: 'Впечатления'},
        {avia: 'Авиабилеты'},
        {tickets: 'Ж/д билеты'},
        {hotels: 'Отели'},
        {carsh: 'Каршеринг'},
        {teatrs: 'Театры'},
        {strah: 'Страхование'},
        {contact: 'Как подключиться'},
        {partners: 'Партнеры'},
    ],
};

const HighestReducer = (state = initialState, action) => {

    switch(action.type) {
        case 'ALL_THE_TEXTS':
            return {...state, texts: state.texts}
        default:
            return state;
    }
}



export const TextAC = (texts) => ({type: ALL_THE_TEXTS, texts})


export default HighestReducer 