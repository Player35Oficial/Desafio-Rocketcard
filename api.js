


function getApiGithub() {
    fetch(`https://api.github.com/users/Player35Oficial`)
    .then(async res => {
        if(!res.ok) {
            throw new Error(res.status)
        }
        
        var data = await res.json()
        console.log(data)
        






    
    }).catch(e => console.log(e))
}
getApiGithub();
