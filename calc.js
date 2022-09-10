
let firsNumber = ''
let secondNumber = ''
let sign = ''
let result = false

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
const action = ['-', '+', 'X', '/']

// ________________ClearAll function_______________________

const out = document.querySelector('.main_screen p')
console.log(out)

function clearAll() {
	firsNumber = ''
	secondNumber = ''
	sign = ''
	result = 0
	out.textContent = 0
}

document.querySelector('.ac').onclick = clearAll

// __________________Button is pressed_________________________

document.querySelector('.buttons').onclick = (event) => {
	if(event.target.classList.contains('ac')){
		return clearAll
	}
	if(!event.target.classList.contains('btn')) return

	out.textContent = ''

// ________________Implementation of calculations_________________

	const key = event.target.textContent // get the pressed button

	// ___if pressed 0-9____
	if(digit.includes(key)){ 
		if(secondNumber === '' && sign === ''){
			firsNumber += key
			out.textContent = firsNumber
			console.log(firsNumber, secondNumber, sign, result)
		} else if (firsNumber !== '' && secondNumber !== '' && result){
			secondNumber = key
			result = false
			out.textContent = secondNumber
		}else {
			secondNumber += key
			out.textContent = secondNumber
			console.log(firsNumber, secondNumber, sign, result)
		}
	}

	// if pressed sign
	if(action.includes(key)){
		sign = key
		out.textContent += key
		console.log(firsNumber, secondNumber, sign, result)
		return
	}

// if pressed =
	if(key === '='){
		switch(sign){
			case "+":
				firsNumber = (+firsNumber) + (+secondNumber)
				break
			case "-":
				firsNumber = (+firsNumber) - (+secondNumber)
				break
			case "X":
				firsNumber = (+firsNumber) * (+secondNumber)
				break
			case "/":
				firsNumber = (+firsNumber) / (+secondNumber)
				break
		}
		out.textContent = firsNumber
		result = true
		console.log(firsNumber, secondNumber, sign, result)
	}
}