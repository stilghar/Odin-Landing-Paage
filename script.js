const PANELS = document.querySelectorAll('.panel');


PANELS.forEach(panel => {
    panel.addEventListener('click', () => {
        removeAllActive();
        panel.classList.add('active');
    })
});

function removeAllActive() {
    PANELS.forEach( panel => {
        panel.classList.remove('active');
    })
}