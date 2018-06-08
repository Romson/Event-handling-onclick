// First reference
function handleClick() {
    document.getElementById("dateTarget").innerHTML = Date();
}

// Second reference 
document.getElementById('dateButton').onclick = handleClick;
function handleClick() {
    document.getElementById('dateTarget').innerHTML = Date();
}

// Named identifier
document.getElementById('dateButton').addEventListener('click', handleClick);
function handleClick() {
    document.getElementById('dateTarget').innerHTML = Date();
}

// Anonymous function
document.getElementById('dateButton').addEventListener('click', function handleClick() {
    document.getElementById('dateTarget').innerHTML = Date();
});
