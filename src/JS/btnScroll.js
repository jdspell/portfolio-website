function currentYPosition() {
  // Firefox, Chrome, Opera, Safari
  if (self.pageYOffset) return self.pageYOffset;
  // Internet Explorer 6 - standards mode
  if (document.documentElement && document.documentElement.scrollTop)
      return document.documentElement.scrollTop;
  // Internet Explorer 6, 7 and 8
  if (document.body.scrollTop) return document.body.scrollTop;
  return 0;
}

function elmYPosition(eID) {
  var elm = document.getElementById(eID);
  var y = elm.offsetTop;
  var node = elm;
  while (node.offsetParent && node.offsetParent != document.body) {
      node = node.offsetParent;
      y += node.offsetTop;
  } return y;
}

function smoothScroll(eID) {
  var startY = currentYPosition();
  var stopY = elmYPosition(eID);
  var distance = stopY > startY ? stopY - startY : startY - stopY;
  if (distance < 100) {
      scrollTo(0, stopY); return;
  }
  var speed = Math.round(distance / 100);
  if (speed >= 20) speed = 20;
  var step = Math.round(distance / 25);
  var leapY = stopY > startY ? startY + step : startY - step;
  var timer = 0;
  if (stopY > startY) {
      for ( var i=startY; i<stopY; i+=step ) {
          setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
          leapY += step; if (leapY > stopY) leapY = stopY; timer++;
      } return;
  }
  for ( var i=startY; i>stopY; i-=step ) {
      setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
      leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
  }
}

document.addEventListener('DOMContentLoaded', () => {

  //adds smooth scroll to navbar btns
  const aboutBtn = document.getElementById('about');
  aboutBtn.addEventListener('click', () => {
    currentYPosition();
    elmYPosition('about-section');
    smoothScroll('about-section');
  });
  const projectsBtn = document.getElementById('projects');
  projectsBtn.addEventListener('click', () => {
    currentYPosition();
    elmYPosition('projects-section');
    smoothScroll('projects-section');
  });
  const contactBtn = document.getElementById('contact');
  contactBtn.addEventListener('click', () => {
    currentYPosition();
    elmYPosition('contact-section');
    smoothScroll('contact-section');
  });

  //adds smooth scroll to explore btn
  const exploreBtn = document.getElementById('exploreBtn');
  exploreBtn.addEventListener('click', () => {
    currentYPosition();
    elmYPosition('about-section');
    smoothScroll('about-section');
  });


});