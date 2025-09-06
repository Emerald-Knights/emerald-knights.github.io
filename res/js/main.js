// Year in footer
const yearSpan = document.getElementById('year');
if (yearSpan) yearSpan.textContent = new Date().getFullYear();


// Example: populate events list on Season page
const eventsList = document.getElementById('eventsList');
if (eventsList) {
const events = [
{ date: 'Sep 10', title: 'Build Night – CAD checkpoint', link: '#' },
{ date: 'Sep 14', title: 'Scrimmage @ Jade City HS', link: '#' },
{ date: 'Oct 12', title: 'League Meet #1', link: '#' },
];
events.forEach(e => {
const li = document.createElement('li');
li.className = 'list-group-item d-flex justify-content-between align-items-center';
li.innerHTML = `<span>${e.title}</span><span class="badge bg-jade-subtle text-jade">${e.date}</span>`;
if (e.link && e.link !== '#') {
li.innerHTML = `<a class="text-decoration-none" href="${e.link}">${li.innerHTML}</a>`;
}
eventsList.appendChild(li);
});
}


// Activate current nav link by URL (fallback if not set manually)
(function highlightActiveNav(){
const path = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.navbar .nav-link').forEach(a => {
const href = a.getAttribute('href');
if (href === path) a.classList.add('active');
});
})();