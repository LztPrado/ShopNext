const textToChange = document.getElementById('title-text-to-change');
const phrases = ["do e-commerce", "das vendas online", "das compras digitais", "das lojas virtuais", "das compras inteligentes", "da gestão de produtos", "da experiência do usuário", "dos negócios digitais", "das soluções modernas", "do comércio do futuro"]
let currentPhraseIndex = 0

function changePhrase() {
    textToChange.classList.add('hidden');
    setTimeout(() => {
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        textToChange.textContent = phrases[currentPhraseIndex];
        textToChange.classList.remove('hidden');
    }, 500);
}

textToChange.textContent = phrases[0]; 

setInterval(changePhrase, 4500);
