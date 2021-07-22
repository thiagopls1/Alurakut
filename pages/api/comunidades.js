import { SiteClient } from 'datocms-client'

export default async function recebedorDeRequests(request, response){

    if(request.method === 'POST'){
        const TOKEN = 'fcc89a42c58592e51934accc7612a8';
        const client = new SiteClient(TOKEN);
    
        const registroCriado = await client.items.create({
            itemType: "980741", // ID do Model de "Community" no DatoCMS
            ...request.body,
            /*title:"Comunidade de teste",
            imageUrl:"https://github.com/thiagopls1.png",
            creatorSlug: "thiagopls1"*/
        })

        console.log(registroCriado)
    
        response.json({
            dados: 'Algum dado qualquer',
            registroCriado: registroCriado,
        })
        return;
    }

    response.status(404).json({
        message: 'Ainda não temos nada no GET, mas no POST tem!'
    })
}