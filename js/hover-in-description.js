document.addEventListener('DOMContentLoaded', () => {
    const heroDescription = document.getElementsByClassName('hero-description')[0];
    const textContent = heroDescription.textContent.trim();
    
    let newHTML = '';
    const words = textContent.split(' ');
    
    words.forEach(word => {
        newHTML += `<span>${word}</span> `;
    });
    
    heroDescription.innerHTML = newHTML.trim();
});


