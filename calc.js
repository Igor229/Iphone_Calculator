
let firsNumber = ''
let secondNumber = ''
let sign = ''
let result = 0

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
const action = ['-', '+', 'X', '/']

let out = document.querySelector('.main_screen p')
console.log(out)

function clearAll() {
	firsNumber = ''
	secondNumber = ''
	sign = ''
	result = 0
	out.textContent = '777'
}

document.querySelector('.ac').onclick = clearAll