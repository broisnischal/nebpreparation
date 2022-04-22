const route = (event) => {
	event = event || window.event;
	event.preventDefault();
	window.history.pushState({}, '', event.target.href);
	handleLocation();
};

const routes = {
	'/': 'pages/index.html',
	404: 'pages/404.html',
	'/about': 'pages/about.html',
	'/ask': 'pages/ask.html',
	'/exam': 'pages/exam.html',
	'/questions': 'pages/questions.html',
};

const handleLocation = async () => {
	const path = window.location.pathname;
	console.log(path);
	const route = routes[path] || routes['404'];
	const html = await fetch(route).then((data) => data.text());
	document.getElementById('main-page').innerHTML = html;
};
