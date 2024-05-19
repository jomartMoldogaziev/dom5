const zag = () => {
	let inp = document.getElementById('zagalov').value
	let h1 = document.createElement('h1')

	h1.append(inp)
    h1.setAttribute('joma','m')
	h.append(h1)
	console.log(h1)
}

const podzag = () => {
	let inp = document.getElementById('h3').value
	let h3 = document.createElement('h3')

	h3.append(inp)
    h3.setAttribute('tema', 't')
	h.append(h3)
	console.log(h3)
}

const createText = () => {
	let inp = document.getElementById('todoText').value
	let li = document.createElement('li')

	li.append(inp)
	li.setAttribute('argen', 'a')
	h.append(li)
	console.log(li)
}

const par = () => {
	let inp = document.getElementById('paragraf').value
	let p = document.createElement('p')

	p.append(inp)
	h.append(p)
	console.log(p)
}
