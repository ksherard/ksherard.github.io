
// Height transition
var setMaxHeight = function() {
    const el = document.querySelector('.grow-content')
    const height = el.scrollHeight
    el.style.setProperty('--max-height', height + 'px')
}

document.addEventListener("DOMContentLoaded", () => {
    setMaxHeight();
});


