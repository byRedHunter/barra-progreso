function barraScroll() {
	const $barra = document.querySelector('#progress')

	// scroll que vamos haciendo
	let scrollVertical = window.scrollY
	// alto total de la pagina
	let totalHeight = document.body.scrollHeight
	// el total de scrool que puedo hacer
	let totalScroll = totalHeight - window.innerHeight

	let porcentaje = (scrollVertical * 100) / totalScroll

	$barra.style.width = `${porcentaje}%`
}

document.addEventListener('scroll', barraScroll)
