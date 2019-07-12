'use strict';

function LandingPage(parentElement) {
  this.parentElement = parentElement;
  this.elements = null;
  this.scrollCount = 0;
}

LandingPage.prototype.generate = function() {
  this.addScrollEvent();
  this.elements = `
    <section class="container container-landing">
      <h1 class="landing-titles slide-in-bottom">Worthless Wisdom</h1>
      <h2 class="landing-titles slide-in-bottom">A simple, utterly useless tool to help you deal with anxiety and depression.</h2>
    </section>
    <section class="container section-testimonials">
      <section class="testimonials-content">
        <h1>Don't just take our word for it</h1>
        <div>
          <img src="./images/quotation-marks-square-white.png">
        </div>  
        <h3>"In my module two during my webdev course I was feeling completely overwhelmed, and this bloody app did not help me at all. Looks dope, though. 1/5 stars"</h3>
        <p><i>Axel, un fiera de programación</i></p>
      </section>
    </section>
  `;
  this.render();
}

LandingPage.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
}

LandingPage.prototype.addScrollEvent = function(){
  window.addEventListener('scroll', (event)=>{
    this.addAnimations(window.scrollY);
  })
}

LandingPage.prototype.addAnimations = function(scrollAmount){
  var bottom = document.querySelector('.testimonials-content')
  scrollAmount > 140 && bottom.classList.add('slide-in-bottom');
}