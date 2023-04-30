function hamIntFunction(){
    var dropDownContent = document.getElementById("ham_int_dropdown");
    if(dropDownContent.classList.contains("show") == true){
      dropDownContent.classList.add("hide");
      dropDownContent.classList.remove("show");
    }
    else{
      dropDownContent.classList.add("show");
      dropDownContent.classList.remove("hide");
    }
    
    var hamLeft = document.getElementById("ham_left");
    hamLeft.classList.toggle("ham_left_move");
    
    var hamRight = document.getElementById("ham_right");
    hamRight.classList.toggle("ham_right_move"); 
}