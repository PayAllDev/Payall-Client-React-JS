
const APIURL = 'http://api.webdesignnodes.com:2279/'

export const getMarketData = async (marketCategory) => {

    const response = await fetch(APIURL + 'api/v1/system/getMarketData', {

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ elementInCategory: marketCategory })

    })

    return await response.json();

}

export const getArticlesData = async () => {

    return await [
        { articleLink: 'https://blog.actinver.com/qu%C3%A9-es-invertir-en-fondos-de-inversi%C3%B3n', articleImages: 'https://blog.actinver.com/hubfs/Fondos%20de%20Inversi%C3%B3n.jpg#keepProtocol', articleName: '¿Qué es invertir en fondos de inversión?', articleSubtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, fuga, ipsam obcaecati repudiandae eaque voluptatum repellat consequuntur ipsa ratione, recusandae illum. Quis est inventore dignissimos nam autem, fugiat veniam maiores asperiores accusantium harum, mollitia maxime nobis. Alias minima, pariatur, aut amet esse sapiente explicabo sed accusantium enim cupiditate quod quidem.', articleAuthor:'Actinver' },
        { articleLink: 'https://blog.actinver.com/finanzas-en-familia', articleImages: 'https://blog.actinver.com/hubfs/finanzas%20en%20familia.jpeg#keepProtocol', articleName: 'Finanzas en familia', articleSubtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, fuga, ipsam obcaecati repudiandae eaque voluptatum repellat consequuntur ipsa ratione, recusandae illum. Quis est inventore dignissimos nam autem, fugiat veniam maiores asperiores accusantium harum, mollitia maxime nobis. Alias minima, pariatur, aut amet esse sapiente explicabo sed accusantium enim cupiditate quod quidem.', articleAuthor:'Actinver' },
        { articleLink: 'https://blog.actinver.com/el-desconocimiento-principal-barrera-para-no-invertir', articleImages: 'https://blog.actinver.com/hubfs/invertir-3.jpg#keepProtocol', articleName: 'El desconocimiento: principal barrera para no invertir', articleSubtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, fuga, ipsam obcaecati repudiandae eaque voluptatum repellat consequuntur ipsa ratione, recusandae illum. Quis est inventore dignissimos nam autem, fugiat veniam maiores asperiores accusantium harum, mollitia maxime nobis. Alias minima, pariatur, aut amet esse sapiente explicabo sed accusantium enim cupiditate quod quidem.', articleAuthor:'Actinver' },
        { articleLink: 'https://blog.actinver.com/el-desconocimiento-principal-barrera-para-no-invertir', articleImages: 'https://blog.actinver.com/hubfs/invertir-3.jpg#keepProtocol', articleName: 'El desconocimiento: principal barrera para no invertir', articleSubtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, fuga, ipsam obcaecati repudiandae eaque voluptatum repellat consequuntur ipsa ratione, recusandae illum. Quis est inventore dignissimos nam autem, fugiat veniam maiores asperiores accusantium harum, mollitia maxime nobis. Alias minima, pariatur, aut amet esse sapiente explicabo sed accusantium enim cupiditate quod quidem.', articleAuthor:'Actinver' },
        { articleLink: 'https://blog.actinver.com/el-desconocimiento-principal-barrera-para-no-invertir', articleImages: 'https://blog.actinver.com/hubfs/invertir-3.jpg#keepProtocol', articleName: 'El desconocimiento: principal barrera para no invertir', articleSubtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, fuga, ipsam obcaecati repudiandae eaque voluptatum repellat consequuntur ipsa ratione, recusandae illum. Quis est inventore dignissimos nam autem, fugiat veniam maiores asperiores accusantium harum, mollitia maxime nobis. Alias minima, pariatur, aut amet esse sapiente explicabo sed accusantium enim cupiditate quod quidem.', articleAuthor:'Actinver' },
        { articleLink: 'https://www.banamex.com/sitios/educacion-financiera/cursos-de-educacion-financiera/lecciones-de-educacion-financiera.html?leccion=1172', articleImages: 'https://uneg.edu.mx/wp-content/uploads/2021/04/licenciatura-en-finanzas-en-Universidad-de-Negocios-ISEC.jpg', articleName: '¿Qué perfil de inversionista tienes?', articleSubtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, fuga, ipsam obcaecati repudiandae eaque voluptatum repellat consequuntur ipsa ratione, recusandae illum. Quis est inventore dignissimos nam autem, fugiat veniam maiores asperiores accusantium harum, mollitia maxime nobis. Alias minima, pariatur, aut amet esse sapiente explicabo sed accusantium enim cupiditate quod quidem.', articleAuthor:'Actinver' }
    ]

}