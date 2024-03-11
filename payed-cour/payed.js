const link = document.querySelector('.link');
const circle = document.querySelector('.circle');

console.log(circle);

link.addEventListener('mouseover', (e) => {
	circle.style.left = e.pageX - link.offsetLeft + 'px';
	circle.style.top = e.pageY - link.offsetTop + 'px';
});

link.addEventListener('mouseout', (e) => {
	circle.style.left = e.pageX - link.offsetLeft + 'px';
	circle.style.top = e.pageY - link.offsetTop + 'px';
});
