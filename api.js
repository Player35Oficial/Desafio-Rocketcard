// User
const username = document.getElementById("username")
const userImage = document.querySelector(".user-image")
const userLink = document.getElementById("user-link")
const userLinkButton = document.getElementById("user-link-button")
// Info
const following = document.getElementById("following")
const followers = document.getElementById("followers")
const repository = document.getElementById("repository")
const company = document.getElementById("company")
const local = document.getElementById("location")


function getApiGithub() {
    const url = `https://api.github.com/users/${userLink.value}`
    fetch(url)
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
        company.innerText = data.company || "Não declarado"
        local.innerText = data.location || "Não declarado"
        userImage.setAttribute("src", data.avatar_url)

    }, ).catch(e => {
        console.log(e)
        if (e = 404) {
            alert("Usuário Não Encontrado!")
        }
    })
}


