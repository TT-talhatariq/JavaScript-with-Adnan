let country = document.querySelector('.country')
console.log(country)

country.innerHTML = 'USA'

/*

Select our classes
select id
we can select multiple element
*/

let nameElement = document.getElementById('name')
console.log(nameElement)

// // change styles
// nameElement.style.color = 'red'
// nameElement.style.backgroundColor = 'blue'
// nameElement.style.fontSize = '50px'

// nameElement.classList.remove('name')

// TO Change Content

// Inner HTML | InnerText
nameElement.innerText = 'Talha'

let link = document.querySelector('.link')
link.setAttribute('href', 'https://www.google.com')

// Add Element to HTML
let introElement = document.getElementsByClassName('introduction') // array [0]

let askAddress = document.createElement('p')
askAddress.innerHTML = 'Where are you living'

introElement[0].appendChild(askAddress)

/*

1. Selecting Element (ID, Class)
2. Changing Inner Content
3. Changing Attributes
4. Adding Styles
5. Adding or Removing Classes
6. Event Listeners

*/

let button = document.querySelector('.btn')

function outputName() {
  nameElement.innerHTML = 'Talha Tariq'
}

function resetName() {
  nameElement = 'Your Name'
}

button.addEventListener('mouseover', outputName)

button.addEventListener('onmouseout', resetName)
