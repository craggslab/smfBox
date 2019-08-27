function openTab(evt, tabName) {
    let tabcontent = document.getElementsByClassName("tabcontent");

    Array.from(tabcontent).forEach(element => {
        element.style.display = "none"
    });

    let tablinks = document.getElementsByClassName("tablinks");

    Array.from(tablinks).forEach(element => {
        element.className = element.className.replace(" active", "");
    })

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

