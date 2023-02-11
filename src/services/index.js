
const APIURL = 'http://api.webdesignnodes.com:2279/'

export const getMarketData = async (marketCategory) => {

    const response = await fetch(APIURL + 'api/v1/system/getMarketData', {

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ elementInCategory: marketCategory })

    })

    return await response.json();

}