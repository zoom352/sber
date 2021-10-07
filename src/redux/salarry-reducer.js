const TEXT_SALARRY = 'TEXT_SALARRY'


const initialState = {
    salarry: [
        {getAlboms: 'Получите доступ к миллионам альбомов, исполнителей и песен'},
        {exsclusive: 'Эксклюзивный и оригинальный контент'},
        {refuse: 'Вы можете отказаться от подписки в любой момент'},
        {download: 'Скачивайте любимую музыку и слушайте офлайн'},
    ],
    insruction: [
        {insruction1: '1. Откройте приложение «Музыка» и введите существующий Apple ID и пароль для входа в учетную запись. (Если у вас нет Apple ID, вам будет предложено его создать)'},
        {insruction2: '2. Нажмите на «3 месяца бесплатно» (специальное предложение для новых пользователей).'},
        {insruction3: '3. Выберите индивидуальную подписку и нажмите «3 месяца бесплатно».'},
        {insruction4: '4. Перейдите в учетную запись.'},
        {insruction5: '5. Нажмите «Использовать код».'},
        {insruction6: '6. Введите 12-значный код.'},
        {insruction7: '7. Получите сообщение с подтверждением использования кода.'}
    ],
    rules: [
        {rules1: 'Подробнее об Apple Music для Android'},
        {rules2: 'Правила акции'}
    ]
}


const SalarryReducer = (state = initialState, action) => {

    switch(action.type){
        case TEXT_SALARRY: 
        return {...state, salarry: state.salarry}
        default:
            return state
    }
}


export const SalarryAC = (salarry) => ({type: TEXT_SALARRY, salarry})



export default SalarryReducer;