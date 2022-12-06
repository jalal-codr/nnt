document.addEventListener('DOMContentLoaded', () => {
    document
        .getElementById('list')
        .addEventListener('input', handleSelect);
});

function handleSelect(ev) {
    let select = ev.target;
    console.log(select.value);
    let choices = [];
    for (let i = 0; i < select.selectedOptions.length; i++) {
        choices.push(select.selectedOptions[i].value);
    }
    console.log(choices)
}

function handleSelect(ev) {
    let theInput = ev.target;
}