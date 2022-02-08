console.log(customers)

const customer = customers [0]
const customersDiv = document.getElementById('customers')

let names = customer.name
console.log('Name: ', names)


const h2El = document.createElement('h2')
h2El.classList.add('Customers-Heading')
console.log(h2El)

const h2Text = document.createTextNode(names)

h2El.appendChild(h2Text)

customersDiv.appendChild(h2El)

let srcURL = customers.picture
console.log('src is ', srcURL)