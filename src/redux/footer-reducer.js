const FOOT_TEXT = 'FOOT_TEXT'

const initialState = {
    footText: [
        {}
    ]
}


const footerReducer = (state = initialState, action) => {

    switch(action.type) {
        case FOOT_TEXT: 
           return {
               ...state,
               footText: state.footText
           }
           default:
               return state
    }
}


export const FooterAC = (footText) => ({type: FOOT_TEXT, footText})

export default footerReducer