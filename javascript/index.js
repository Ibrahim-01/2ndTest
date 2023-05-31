const url = "https://randomuser.me/api/"
const fullName = document.getElementById("myname")
const address = document.getElementById("address")
const phoneNum = document.getElementById("phone")
const email = document.getElementById("email")
const button = document.getElementById("button")
newProfile = () =>{
    fetch(url).then(data => {
        return data.json()
    }).then(data => {
        fullName.textContent = data.results[0].name.title + "  "+ data.results[0].name.first + "  "+ data.results[0].name.last
        address.textContent = data.results[0].location.street.number + " " + data.results[0].location.street.number
        phoneNum.textContent = data.results[0].phone
        email.textContent = data.results[0].email
    })
}
button.onclick.newProfile()