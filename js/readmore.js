document.getElementById('readMoreBtn').addEventListener('click', function() {
    let content = document.getElementById('readMoreContent');
    let btn = document.getElementById('readMoreBtn');
    
    if (content.style.display === 'none') {
        content.style.display = 'block';
        btn.innerHTML = 'Read Less';
    } else {
        content.style.display = 'none';
        btn.innerHTML = 'Read More';
    }
});