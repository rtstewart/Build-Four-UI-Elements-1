(function() {
  var wavesBtn = document.getElementsByClassName('btn')[0];

  var wavesClick = function () {
    return function(e) {
      // console.log(wavesBtn.firstChild);
      // console.log(ripple);
      if (wavesBtn.firstChild !== undefined) {
          // ripple.remove();
          wavesBtn.firstChild.remove();
      }

      // var ripple = document.getElementsByClassName('ripple')[0];
      // ripple.remove();
      var rect = wavesBtn.getBoundingClientRect();

      var posX = rect.left,
          posY = rect.top,
          buttonWidth = wavesBtn.offsetWidth,
          buttonHeight = wavesBtn.offsetHeight;

      var ripple = document.createElement('span');
      ripple.classList.add('ripple');
      wavesBtn.insertBefore(ripple, wavesBtn.firstChild);

      if(buttonWidth >= buttonHeight) {
        buttonHeight = buttonWidth;
      } else {
        buttonWidth = buttonHeight;
      }

      //Gets center of element
      var x = e.pageX - posX - buttonWidth / 2;
      var y = e.pageY - posY - buttonHeight / 2;

      ripple.style.width = buttonWidth + 'px';
      ripple.style.height = buttonHeight + 'px';
      ripple.style.top = y + 'px';
      ripple.style.left = x + 'px';

      ripple.classList.add('rippleEffect');
    };
  };

  wavesBtn.addEventListener('click', wavesClick(), false);

})();