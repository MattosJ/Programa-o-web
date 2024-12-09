class MobileNavBar {
  constructor(mobileMenu,navList,navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeclass = "active";
    this.handleClick = this.handleClick.bind(this);
  }

  
  handleClick(){
    this.navList.classList.toggle(this.activeclass);
    this.mobileMenu.classList.toggle(this.activeclass);
    this.animateLinks();
  }

  addClickEvent(){
    this.mobileMenu.addEventListener("click", this.handleClick);

  }

  init(){
    if(this.mobileMenu){
      this.addClickEvent();
    }
  }

  animateLinks(){
    this.navLinks.forEach((link , index) =>{
      link.style.animation
      ?(link.style.animation = "")
      : (link.style.animation = `navLinkFade 0.5s ease forwards ${index/ 7 + 0.3}s`);
    });
  }
}

const mobileNavBar = new MobileNavBar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);

mobileNavBar.init();