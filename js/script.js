const list = document.querySelectorAll('li')
const search = document.querySelector('.search')

const checkEngine = (e) => {
	const text = e.target.value

	list.forEach((el) => {
		if (el.textContent.toLowerCase().indexOf(text) !== -1) {
			el.style.display = 'block'
		} else {
			el.style.display = 'none'
		}
	})
}

search.addEventListener('keyup', checkEngine)
