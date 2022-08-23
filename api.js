// User
const username = document.getElementById("username")
const userImage = document.querySelector(".user-image")
// Info
const following = document.getElementById("following")
const followers = document.getElementById("followers")
const repository = document.getElementById("repository")
const company = document.getElementById("company")
const local = document.getElementById("location")



function getApiGithub() {
    fetch(`https://api.github.com/users/Player35Oficial`)
    .then(async res => {
        if(!res.ok) {
            throw new Error(res.status)
        }
        
        var data = await res.json()
        console.log(data)
        
        username.innerText = data.name
        following.innerText = data.following
        followers.innerText = data.followers
        repository.innerText = data.public_repos
        company.innerText = data.company || "Iniciante"
        local.innerText = data.location
        userImage.setAttribute("src", data.avatar_url)





    
    }).catch(e => console.log(e))
}
getApiGithub();
