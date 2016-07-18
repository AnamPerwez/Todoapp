var todo = document.querySelector('#todolist'), form = document.querySelector('form'), field = document.querySelector('#newitem');
form.addEventListener('submit', function (ev) {
    var text = document.getElementById("newitem").value;
    if (text !== '') {
        todo.innerHTML += '<li>' + text + '</li>';
        // field.value = '';
        document.getElementById("newitem").value = '';
    }
    ev.preventDefault();
}, false);
