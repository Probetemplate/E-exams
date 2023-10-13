document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');

    // Function to load content from external HTML files
    const loadPage = (page) => {
        fetch(page)
            .then(response => response.text())
            .then(data => {
                content.innerHTML = data;
            });
    };

    
    // Handle navigation links
    document.getElementById('learn').addEventListener('click', () => loadPage('learn.html'));
   document.getElementById('about').addEventListener('click', () => loadPage('about.html'));
    document.getElementById('signIn').addEventListener('click', () => loadPage('sign-in.html'));
    document.getElementById('signUp').addEventListener('click', () => loadPage('sign-up.html'));
    
});
 


