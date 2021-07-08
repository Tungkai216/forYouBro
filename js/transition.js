window.onload =() => {
	const transition_el = document.querySelector('.transition');
	const anchor = document.querySelectorAll('a')
	setTimeout(() => {
		transition_el.classList.remove('is-active')
	}, 5)

	for (let i = 0; i <anchor.length; i++){
		const anchor = anchors(i);

		anchor.addEventListener('click', e => {
			e.preventDefault();
			let target = e.target.href;

			transition_el.classList.add('is-active');

			setTimeout(() => {
				window.location.href = target;		
			}, 5)
		});
	}
	
}