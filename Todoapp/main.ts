let todo = document.querySelector( '#todolist' ),
    form = document.querySelector( 'form' ),
    field = document.querySelector( '#newitem' );
    form.addEventListener( 'submit', function( ev ) {
  let text = (<HTMLInputElement>document.getElementById("newitem")).value;
  if ( text !== '' ) {
    todo.innerHTML += '<li>' + text + '</li>';
   // field.value = '';
   (<HTMLInputElement>document.getElementById("newitem")).value='';
   
    //field.focus();
  }ev.preventDefault();
}, false);
