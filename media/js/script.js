async function getCz(){

    let apiKey = 'aALXCCCIRKPMeqNoial0NWjPn6ps6kxp_YhMhZXM01M'
    let url = `https://api.newscatcherapi.com/v2/latest_headlines?countries=CZ`

    fetch(url, {
        headers: {
            'x-api-key': apiKey
        }
    }).then((res)=>{
        return res.json()
    }).then((data) => {
        console.log("data",data)
        for(let i = 0; i < data.articles.length; i++){

            try {
                document.getElementById("news").innerHTML += `
                <div class="news-box">
                    <h2>${data.articles[i].title}</h2>
                    <img class="news-image" style='border-radius: 10px; width: 300px' src='${data.articles[i].media}'>
                </div>`
                
            } catch (error) {
                console.log(error)
            }
        }
        
    })

}

getCz()