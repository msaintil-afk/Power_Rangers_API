const getData = async () => {
    let response = await axios.get(`https://my-json-server.typicode.com/CodingTemple/Power-Rangers-API-Json/rangers`)
    console.log(response.data)
    return response.data
} 


// target the html section
const DOM_Elements = {
    rangers: '.ranger-list'
}

//Create HTML for a ranger
const createranger = (id, name, color, coin, season ) => {
    const html = `<a href='#' class= 'list-group-item list-group-item-action list-group-item-light' id="${id}">${name}, ${color}, ${coin}, ${season}</a> `;
    // Paste that html on the document section specified 
    document.querySelector(DOM_Elements.rangers).insertAdjacentHTML('beforeend', html)
}

//create a function to loop over respone data and create an element for each
const loadData = async () => {

    const rangerList = await getData();
    rangerList.forEach( ranger => createranger(ranger.id, ranger.name, ranger.color, ranger['power-coin'], ranger.season))
        
    }

    const clearData = () => document.querySelector(DOM_Elements.rangers).innerHTML = '';


/*
Other DOM Stuff
*/
console.log(document.getElementsByTagName('h1')[0].innerText = 'Hola Mundo!!!')

colorButton = document.getElementById('color-button')

let colorChange = () => {
    let header = document.getElementsByTagName('h1')[0]
    header.className != 'color-changed text-center' ? header.className = 'color-changed text-center' : header.className = 'text-center'
}

// add event listener to colorbutton
colorButton.addEventListener('click', colorChange)

// Append a button to the document 

let button = document.createElement('button')
let buttonDisplay = document.createElement('h2')

button.innerHTML = 'SUPER CLICKABLE'

button.className = 'btn btn-warning buttoney m-3'
document.body.append(button)

buttonDisplay.innerHTML = 'Click it like a boss'
button.addEventListener('mouseover', () => document.body.append(buttonDisplay))
button.addEventListener('mouseleave', () => buttonDisplay.remove())


const form = document.querySelector('#testform')

form.addEventListener('sumbit', (event)=>{
    event.preventDefault()
    let email = document.querySelector('#email')
    let password = document.querySelector('#password')

    console.log(email.value)
    console.log(password)
    let pass = event.path[0][1].value
    console.log(pass)
    console.log(event)

})




// const moreData = async (email, pass) =>{
//     let respone = await axios.
// }