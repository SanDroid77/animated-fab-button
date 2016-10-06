window.addEventListener('load', function(){
  var circle = document.querySelector('.circle');
  circle.addEventListener('click', function(){
    if (circle.classList.contains('pressed'))
      circle.classList.remove('pressed');
    else
      circle.classList.add('pressed');
  }, false);
}, false);