function filterReports() {
    let input = document.getElementById('stockSearch').value.toUpperCase();
    let cards = document.getElementsByClassName('stock-card');
    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].innerText.toUpperCase();
        cards[i].style.display = title.includes(input) ? "" : "none";
    }
}

const acc = document.getElementsByClassName("accordion-header");
for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        const content = this.nextElementSibling;
        const arrow = this.querySelector('.arrow');
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            arrow.style.transform = "rotate(0deg)";
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            arrow.style.transform = "rotate(180deg)";
        }
    });
}

window.onclick = function(event) {
    if (!event.target.matches('button') && !event.target.closest('#contactDropdown') && !event.target.matches('#stockSearch')) {
        document.getElementById("contactDropdown").style.display = "none";
    }
}
