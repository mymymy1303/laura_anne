$(document).ready(function () {
	$('.product-categories-toggle-button').on('click', (e) => {
		$(e.currentTarget.parentElement.parentElement).toggleClass('product-filter-categories-active')
	})
});