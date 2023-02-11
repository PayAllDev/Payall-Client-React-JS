// * Dependencies Required 


export const getMarketInfo = (marketCategory) => {

    const APIURL = ''

    return new Promise(async resolve => {

        fetch(APIURL, {
            method: "POST",
            body: JSON.stringify({ "elementInCategory": marketCategory }),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then(response => response.json())
            .then(json => resolve(json));

    })

}