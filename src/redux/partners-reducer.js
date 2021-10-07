const ALL_THE_PARTNERS = 'ALL_THE_PARTNERS'

const initialState = {
    partners: [
        {allPartners: 'Все партнеры'},
        {popular: 'Популярное'},
        {superStore: 'Супермаркеты'},
        {cafe: 'Кафе и рестораны'},
        {taxi: 'Такси'},
        {beaty: 'Красота'},
        {electro: 'Электроника и бытовая техника'},
        {zoo: 'Зоотовары'},
        {cinema: 'Кино и театр'},
    ]
};


const PartnersReducer = (state = initialState, action) => {

    switch(action.type) {
        case ALL_THE_PARTNERS:
            return {...state, partners: state.partners}
        default:
            return state;
    }
}


export const PartnersAC = (partners) => ({type: ALL_THE_PARTNERS, partners})

export default PartnersReducer;