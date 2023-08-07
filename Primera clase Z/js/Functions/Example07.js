const showName = function (name){
    console.log(name);

}
showName("John")

const showName2 = (name) => {
    console.log(name);
}
showName2("John2")

const auth = false
const message = true

console.log(auth && message ? "Authentication": "No authentication")

console.log(auth ? message ? "Authentication": "Authentication but i can't send messages" :
    "No authentication and i can't send messages")

