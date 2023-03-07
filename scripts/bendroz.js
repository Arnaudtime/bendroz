
 
 
 /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
  function myFunction() {
    var x = document.getElementById("topnav");
    if (x.className === "topnav_barre") {
      x.className += " responsive";
    } else {
      x.className = "topnav_barre";
    }
  }

  function before(){
    document.getElementById('myImage')
    .src="img/photo1.jpg";
    document.getElementById('message')
    .innerHTML="Hii! GeeksforGeeks people";
  }
      
  function afterr(){
    document.getElementById('myImage')
    .src="img/photo2.jpg";
    document.getElementById('message')
    .innerHTML="Bye! GeeksforGeeks people";
  }



