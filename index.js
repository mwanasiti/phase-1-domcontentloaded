document.addEventListener( "DOMContentLoaded", function () {
    updateDOM()
  } );
  
  
  let updateDOM=() =>{
    document.getElementById( "text" )
      .innerHTML = "This is really cool!";
  }