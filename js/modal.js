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