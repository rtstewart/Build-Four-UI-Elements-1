// (function() {
// using this IIFE will make variables in here out of window's scope
// without IIFE, i.e., just code below, all variables would be in window's scope

  var wavesBtn = document.getElementsByClassName('btn')[0];

  var wavesClick = function(e) {
    // console.log(wavesBtn.firstChild);
    /* ?? NOTE: discuss how below code worked even though it initiall
        references a text node following the <div> tag, i.e., the carriage
        return followed by tabs */
    // console.log(document.querySelector('span.ripple'));
    // console.log(ripple);
    // if (wavesBtn.firstChild !== undefined) {
    //     // ripple.remove();
    //     wavesBtn.firstChild.remove();
    // }

    /* this code specifically targets what gets added with each click
        which is also what we want to remove with each click so we
        don't "pile up" the span.ripple elements
    */
    if (document.querySelector('span.ripple') !== null) {
      document.querySelector('span.ripple').remove();
    }

    /* the following code kept adding span.ripple with each mouse click */
    // if (ripple !== undefined) {
    //   ripple.remove();
    // }

    // var ripple = document.getElementsByClassName('ripple')[0];
    // ripple.remove();
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
    /* below was used to get equivalent of jQuery $(el).offset(); as suggested
        in http://youmightnotneedjquery.com/
    */
    var rect = wavesBtn.getBoundingClientRect();
    console.log('rect:', rect);

    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetWidth
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetHeight
    var posX = rect.left,
        posY = rect.top,
        buttonWidth = wavesBtn.offsetWidth,
        buttonHeight = wavesBtn.offsetHeight;
        console.log('buttonWidth:', buttonWidth);
        console.log('buttonHeight:', buttonHeight);

    var ripple = document.createElement('span');
    /* look at style.css re: .ripple; it is given a width and height of zero,
        a scale of zero, and an opacity of 1;
        So our newly created element is given this class below;
        It will then have .rippleEffect added
    */
    ripple.classList.add('ripple');
    // wavesBtn.insertBefore(ripple, wavesBtn.firstChild);
    /* make note of why below works for insertion; it actually refers to the
        carriage return and tabs between <div class="btn"> and
        <p class="title">WAVES</p>in index.html as it is now;
    */
    wavesBtn.insertBefore(ripple, wavesBtn.firstChild);

    /* the following effectively creates equal dimensions for width and height
        which will be the greater of wavesBtn width and height;
        when assigned to .ripple with a border radius of 50%, this creates
        a circle with a diameter equal to the greater of the width or height
        of the wavesBtn;
        to make a smaller effect, change the >= to <=;
    */
    if(buttonWidth >= buttonHeight) {
      buttonHeight = buttonWidth;
    } else {
      buttonWidth = buttonHeight;
    }

    // Gets center of element
    // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageX
    console.log('e.pageX:', e.pageX, 'posX:', posX, 'buttonWidth:', buttonWidth);
    console.log('e.pageY:', e.pageY, 'posY:', posY, 'buttonHeight:', buttonHeight);
    /* the aim of these statements are ultimately to re-center the .ripple
        element, with width equal to height and equal to the greater of wavesBtn
        width and height, to where the x, y position click event took place;
    */
    var x = e.pageX - posX - buttonWidth / 2;
    var y = e.pageY - posY - buttonHeight / 2;

    // var x = buttonWidth / 2;
    // var y = buttonHeight / 2;

    // var x = 0;
    // var y = 0;

    console.log('x:', x, '; y:', y);

    ripple.style.width = buttonWidth + 'px';
    ripple.style.height = buttonHeight + 'px';
    ripple.style.top = y + 'px';
    ripple.style.left = x + 'px';
    console.log('ripple.style.top = ' + y + 'px');
    console.log('ripple.style.left = ' + x + 'px');

    /* run the animation */
    ripple.classList.add('rippleEffect');
  };

  wavesBtn.addEventListener('click', wavesClick, false);

// })();