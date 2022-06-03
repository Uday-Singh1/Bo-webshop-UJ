function showModal(name) {
  var modalname = name;
  modalname.style.display = "block";

  window.onclick = function(event) {
    if (event.target == modalname) {
      modalname.style.display = "none";
    }
  };
}

function closeModal(name) {
    // When the user clicks on <span> (x), close the modal
    var modalname = name;
    modalname.style.display = "none";
};

let arrowButtons = document.getElementsByClassName("arrow");
let reviews = document.getElementsByClassName("review");
let modus = "one-two-three";

for(let i = 0; i < arrowButtons.length; i++){
    arrowButtons[i].onclick = function(){
        if(modus === "one-two-three"){
            reviews[0].style.display = "none";
            reviews[1].style.display = "none";
            reviews[2].style.display = "none";
            reviews[3].style.display = "block";
            reviews[4].style.display = "block";
            reviews[5].style.display = "block";
            modus = "four-five-six";
        }
        else{
            reviews[0].style.display = "block";
            reviews[1].style.display = "block";
            reviews[2].style.display = "block";
            reviews[3].style.display = "none";
            reviews[4].style.display = "none";
            reviews[5].style.display = "none";
            modus = "one-two-three";
        }
    }
}