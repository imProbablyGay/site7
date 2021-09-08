// click anchors
const anchors = document.querySelectorAll('.scrollspy-item')
let navbarTop = document.querySelector('.navbar').offsetHeight - document.querySelector('.navbar-collapse').offsetHeight;
let navbar = document.querySelector('.navbar-nav');

for (let key in anchors) {
  let elem = anchors[key];

  elem.onclick = (e) => {
    e.preventDefault();
    
    const blockID = anchors[key].getAttribute('href').substr(1);

    window.scrollTo({
      top: document.getElementById(blockID).offsetTop - navbarTop * 2,
      behavior: "smooth",
      transition: 1
    })

    if (elem.parentNode.tagName == "LI") {
      anchors.forEach(el => {
        el.classList.remove('_active');
      })
  
      anchors[key].classList.add('_active');
    }
  }
}

// auto anchors
let sections = document.querySelectorAll('.anchors-section');

window.addEventListener('scroll' , windowScroll);


function windowScroll(e) {
  sections.forEach((el,i) => {
    if (pageYOffset >= el.offsetTop - navbarTop *2 && pageYOffset <= el.offsetTop + el.offsetHeight - navbarTop * 2) {
      anchors.forEach(el2 => {
        el2.classList.remove('_active');
      })

      anchors[i].classList.add('_active');
    }
  })
  
  if (pageYOffset + window.innerHeight + 400 >= document.body.offsetHeight) {
    document.querySelector('.scrollspy-item._active').classList.remove('_active');
    document.querySelector('.last-scrollspy-item').classList.add('_active')
  }
}