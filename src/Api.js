export class Api{
    static baseURL = "http://localhost:4000";

    static getPictuers(){
        return this.get('/pictures');
    }

    static addPicture(picture){
        return this.post('/pictures/',picture);
    }

///////////////////////////////////////////////////////////////


    static get(url){
        return fetch(Api.baseURL + url,{
            method:"GET"
        })
            .then(res=>res.json())
    }

    static post(url,body){
        return fetch(Api.baseURL + url,{
            method:"POST",
            body:JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }

        })
            .then(res=>res.json())
    }
}