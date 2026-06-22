// Elemente auswählen
const menuToggle = document.getElementById('toggleMenu');
const extraMenu = document.getElementById('extraMenu');
const sizeSlider = document.getElementById('sizeSlider');
const targetBox = document.getElementById('targetBox');

const btnBounce = document.getElementById('btnBounce');
const btnSpin = document.getElementById('btnSpin');
const btnPulse = document.getElementById('btnPulse');

// 1. Schalter: Menü öffnen/schließen
menuToggle.addEventListener('change', () => {
    if (menuToggle.checked) {
        extraMenu.classList.add('show');
    } else {
        extraMenu.classList.remove('show');
    }
});

// 2. Schieberegler: Größe ändern
sizeSlider.addEventListener('input', () => {
    const val = sizeSlider.value;
    targetBox.style.width = val + 'px';
    targetBox.style.height = val + 'px';
});

// 3. Buttons: Animationen auslösen
function triggerAnimation(className) {
    // Klasse entfernen, falls sie schon da ist (um Neustart zu ermöglichen)
    targetBox.classList.remove('bounce', 'spin', 'pulse');
    
    // Kleiner Trick: Kurz warten, damit der Browser merkt, dass die Klasse weg war
    void targetBox.offsetWidth; 
    
    targetBox.classList.add(className);
    
    // Bei Bounce und Spin die Klasse nach Ende wieder entfernen (damit man sie neu klicken kann)
    if (className !== 'pulse') {
        setTimeout(() => {
            targetBox.classList.remove(className);
        }, 1000);
    }
}

btnBounce.onclick = () => triggerAnimation('bounce');
btnSpin.onclick = () => triggerAnimation('spin');
btnPulse.onclick = () => {
    if(targetBox.classList.contains('pulse')) {
        targetBox.classList.remove('pulse');
    } else {
        triggerAnimation('pulse');
    }
};
