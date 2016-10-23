(function() {

  var modal1Trigger = function() {
    return function(e) {
      e.preventDefault();
      // alert('it works!');
      console.log('it works!');
      // document.body.style.backgroundColor = 'rgba(0,0,0,0.5)';
      document.getElementsByClassName('modal')[0].style.zIndex = '11';
      document.getElementsByClassName('modal')[0].classList.add('expose');
      document.getElementById('modal-bg').style.zIndex = '10';
      document.getElementById('modal-bg').classList.add('cover');
    };
  };

  function showInterface() {
    document.getElementById('modal-bg').classList.remove('cover');
    document.getElementsByClassName('modal')[0].classList.remove('expose');
  }

  var showNormal = function() {
    return function(e) {
      e.preventDefault();
      document.getElementById('modal-bg').classList.remove('cover');
      document.getElementsByClassName('modal')[0].classList.remove('expose');
    };

  };

  var modalAction = function() {
     return function(e) {
      /* may, or may not, want to use e.preventDefault() here;
        may actually want to use default anchor-click functionality;
        that's why I made this function similar to showNormal, but
        it can be added to to take into account whatever action; */
      e.preventDefault();
      /* possible action code here for anchor click */
      document.getElementById('modal-bg').classList.remove('cover');
      document.getElementsByClassName('modal')[0].classList.remove('expose');
    };
  };

  window.document.getElementsByClassName('modal-trigger')[0].addEventListener('click', modal1Trigger(), false);

  window.document.getElementById('modal-bg').addEventListener('click', showNormal(), false);

  /* assign eventListeners to modal-action classes */
  var modalActionAnchors = window.document.getElementsByClassName('modal-action');
  for (var i=0; i<modalActionAnchors.length; i++) {
    console.log(modalActionAnchors[i]);
    modalActionAnchors[i].addEventListener('click', modalAction(), false);
  }

})();