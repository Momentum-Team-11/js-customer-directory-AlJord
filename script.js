console.log(customers)

const customer = customers [0]
const customersDiv = document.getElementById('customers');
console.log(customersDiv)
for( let customer of customers) {
let names = customer.name
console.log('Name: ', names)


const h2El = document.createElement('h2')
h2El.classList.add('Customers-Heading')
console.log(h2El)

const h2Text = document.createTextNode(names.first)
console.log(h2Text)

h2El.appendChild(h2Text)

customersDiv.appendChild(h2El)

let srcURL = customer.picture.large
console.log('src is ', srcURL)

let customerPicture = document.createElement('img')

customersDiv.innerHTML += `
<div>
    <img class='customer-img' src=${srcURL} />
    </div>
    `
}