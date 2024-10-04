fetch('/docs/always.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('always-container').innerHTML = data;
    })
    .catch(error => console.error('Error loading header:', error));

