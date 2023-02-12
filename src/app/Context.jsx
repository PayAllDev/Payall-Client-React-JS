// * Global App Context

// * Dependencies Required

import React from 'react';

// * Creating context

const AppContext = React.createContext();

const defaultContext = {
    app: {
        app_name: 'PayAll',
        current_view: 'Simulator',
        current_market: 'SNP500'
    },
    user: {
        is_session_created: false,
        user_name: '',
        user_profile_photo_url: '/src/assets/images/defaultUser.png',
    }
}

const AppProvider = (props) => {

    // * Getting context from LocalStorage

    const localContext = localStorage.getItem('localContext')

    // * In case there´s no context app saved into the localStorage the defaultContext will be returned

    if (!localContext) {

        const [context, setContext] = React.useState(defaultContext);

        return (
            <AppContext.Provider value={{ context, setContext }}>

                {props.children}

            </AppContext.Provider>
        )

    }

    // * Setting default context

    // ! Must improve context by saving it into the local Storage, in case there´s no data must set the default context



}

export { AppContext, AppProvider }