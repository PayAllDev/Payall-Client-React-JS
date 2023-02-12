
const APIURL = 'https://api.webdesignnodes.com/'

export const getMarketData = async (marketCategory) => {

    const response = await fetch(APIURL + 'api/v1/system/getMarketData', {

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ elementInCategory: marketCategory })

    })

    return await response.json();

}

export const getArticlesData = async () => {

    return [
        {
            "articleLink": "https://blog.actinver.com/por-qu%C3%A9-es-importante-capacitarte-en-temas-financieros",
            "articleImages": "https://blog.actinver.com/hs-fs/hubfs/Educaci%C3%B3n%20Financiera-1.jpg?width=3360&name=Educaci%C3%B3n%20Financiera-1.jpg",
            "articleName": "¿Por qué es importante capacitarte en temas financieros?",
            "articleSubtitle": "¿Quieres finanzas sanas? En el Blog Actinver te compartimos las ventajas de capacitarte en temas financieros.",
            "articleAuthor": "Actinver"
        },
        {
            "articleLink": "https://blog.actinver.com/qu%C3%A9-es-invertir-en-fondos-de-inversi%C3%B3n",
            "articleImages": "https://blog.actinver.com/hubfs/Fondos%20de%20Inversi%C3%B3n.jpg#keepProtocol",
            "articleName": "¿Qué es invertir en fondos de inversión?",
            "articleSubtitle": "¿Estás interesado en invertir? Conoce qué son los fondos de inversión y cómo pueden ayudarte a hacer crecer tu dinero.",
            "articleAuthor": "Actinver"
        },
        {
            "articleLink": "https://blog.actinver.com/qu%C3%A9-son-los-fondos-de-inversi%C3%B3n-globales",
            "articleImages": "https://blog.actinver.com/hubfs/fondos%20globales.jpg#keepProtocol",
            "articleName": "¿Qué son los fondos de inversión globales?",
            "articleSubtitle": "Descubre cómo invertir en mercados internacionales, es a través de los fondos de inversión globales. Descubre cómo en el Blog Actinver.",
            "articleAuthor": "Actinver"
        },
        {
            "articleLink": "https://blog.actinver.com/que-los-etfs-o-trackerson",
            "articleImages": "https://blog.actinver.com/hubfs/prima%20de%20riesgo-1.jpg#keepProtocol",
            "articleName": "Los básico de los ETF’s o Tracker",
            "articleSubtitle": "Los etf’s o tracker son fideicomisos de inversión cuya función es replicar. Descubre más sobre este instrumento en el blog Actinver.",
            "articleAuthor": "Actinver"
        },
        {
            "articleLink": "https://blog.actinver.com/consejos-para-invertir-en-la-bolsa",
            "articleImages": "https://blog.actinver.com/hubfs/invertir%20en%20la%20bolsa.jpg#keepProtocol",
            "articleName": "Consejos para invertir en la Bolsa",
            "articleSubtitle": "La Bolsa de Valores es un mercado en el que todos pueden participar, en el blog Actinver te compartimos consejos para invertir en la Bolsa.",
            "articleAuthor": "Actinver"
        },
        {
            "articleLink": "https://blog.actinver.com/el-desconocimiento-principal-barrera-para-no-invertir",
            "articleImages": "https://blog.actinver.com/hubfs/invertir-3.jpg#keepProtocol",
            "articleName": "El desconocimiento: principal barrera para no invertir",
            "articleSubtitle": "En México, la principal barrera para no invertir es el desconocimiento. Hoy te contamos lo que debes saber para quitarte el miedo a invertir.",
            "articleAuthor": "Actinver"
        },
        {
            "articleLink": "https://blog.actinver.com/finanzas-en-familia",
            "articleImages": "https://blog.actinver.com/hubfs/finanzas%20en%20familia.jpeg#keepProtocol",
            "articleName": "Finanzas en familia",
            "articleSubtitle": "Fomentar las finanzas en familia es trabajo de ambos padres. Recuerda que esto impactará en el futuro financiero de tus hijos.",
            "articleAuthor": "Actinver"
        }   
    ]

}