const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const linksContainer = document.querySelector(".links-container");

navToggle.addEventListener("click", function () {
 // linksContainer.classList.toggle("show-links");
 const  containerHeight = linksContainer.getBoundingClientRect().height;
	const linkHeight = links.getBoundingClientRect().height;
	if(containerHeight===0){
		linksContainer.style.height=`${linkHeight}px`;
	}else{
		linksContainer.style.height=0;
	}
 
});
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function(){
	const scrollHeight = window.pageYOffset;
	const navHeight = navbar.getBoundingClientRect().height;
	if(scrollHeight>navHeight){
		navbar.classList.add("fixed-nav");
	}else{
		navbar.classList.remove("fixed-nav");
	}
	if(scrollHeight>700){
		topLink.classList.add("show-link");
	}else{
		topLink.classList.remove("show-link");
	};
});
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function(link){
	link.addEventListener("click",function(e){
		e.preventDefault();
		
	const id = e.currentTarget.getAttribute("href").slice(1);
	const element = document.getElementById(id);
	
	const  containerHeight = linksContainer.getBoundingClientRect().height;
	console.log(containerHeight);
	const navHeight = navbar.getBoundingClientRect().height;
	console.log(navHeight);
	const fixedNav = navbar.classList.contains("fixed-nav");
	
	let  position = element.offsetTop-navHeight;
	console.log(position);
	
	if(navHeight>70.546875){
		position=position+containerHeight;
	}
	window.scrollTo({
		left:0,
		top:position,
	});
	linksContainer.style.height=0;
	})
});
/*menu....*/
const menu= [
	{
	id: 1,
	title: "buttermilk pancakes",
	category: "Breakfast",
	price: 50,
	img: "img/portfolio/01-large.jpg",
	desc: "Lorem ipsum dolor sit amet,consectetur adipising alit duis",
	},
	{
	id: 2,
	title: "dinner dubble",
	category: "lunch",
	price: 40,
	img: "img/portfolio/02-large.jpg",
	desc: "Lorem ipsum dolor sit amet,consectetur adipising alit duis",
	},
	{
	id: 3,
	title: "dinner delicious",
	category: "dinner",
	price: 30,
	img: "img/portfolio/03-large.jpg",
	desc: "Lorem ipsum dolor sit amet,consectetur adipising alit duis",
	},
	{
	id: 4,
	title: "dinner party",
	category: "lunch",
	price: 150,
	img: "img/portfolio/04-large.jpg",
	desc: "Lorem ipsum dolor sit amet,consectetur adipising alit duis",
	},
	{
	id: 5,
	title: "simple food",
	category: "Breakfast",
	price: 20,
	img: "img/portfolio/05-large.jpg",
	desc: "Lorem ipsum dolor sit amet,consectetur adipising alit duis",
	},
	{
	id: 6,
	title: "interesting dinner",
	category: "dinner",
	price: 170,
	img: "img/portfolio/06-large.jpg",
	desc: "Lorem ipsum dolor sit amet,consectetur adipising alit duis",
	},
	{
	id: 7,
	title: "lovely drink",
	category: "shakes",
	price: 60,
	img: "img/portfolio/13-large.jpg",
	desc: "Lorem ipsum dolor sit amet,consectetur adipising alit duis",
	},
	{
	id: 8,
	title: "interesting drink",
	category: "shakes",
	price: 70,
	img: "img/portfolio/14-large.jpg",
	desc: "Lorem ipsum dolor sit amet,consectetur adipising alit duis",
	}
	
	];
	const sectionCenter = document.querySelector(".menusection-center");
	const container = document.querySelector(".btn-container")
	
	
	
	window.addEventListener("DOMContentLoaded",function(){
		displayMenuItems(menu);
		const categories = menu.reduce(function(values,itemmm){
		if(!values.includes(itemmm.category)){
			values.push(itemmm.category);
			}
		return values;
		},["All"]);
		const categorybtns= categories.map(function(category){
		return `<button type="button" class="filter-button"data-id=${category}>${category}</button>`;
	
		}).join("");
		container.innerHTML=categorybtns;
		const filterbtns = document.querySelectorAll(".filter-button");
		filterbtns.forEach(function(btn){
			btn.addEventListener("click",function(e){
			const category= e.currentTarget.dataset.id;
			const menucategory = menu.filter(function(myitems){
			if(myitems.category===category){
			return myitems
			}
			});
			if(category==="All"){
				displayMenuItems(menu);
				}else{
				displayMenuItems(menucategory);
				};
			});
		});
		});
		
	function displayMenuItems(menuitems){
	let displaymenu = menuitems.map(function(item){
		//console.log(item);
		return `<article class="menu-item">
				<img src=${item.img} class="photo" width="100%" alt=${item.title}>
				<div class="item-info">
				<header>
				<h4>${item.title}</h4>
				<h4 class="price">${item.price}</h4>
				</header>
				<p class="item-text">${item.desc} </p>
				</div>
				</article>`;
				});
				displaymenu=displaymenu.join("")
		sectionCenter.innerHTML=displaymenu;
				}
//slide images////////////
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});
let counter = 0;
nextBtn.addEventListener("click", function () {
  counter++;
  carousel();
});

prevBtn.addEventListener("click", function () {
  counter--;
  carousel();
});

function carousel() {
  // working with slides
  // if (counter === slides.length) {
  //   counter = 0;
  // }
  // if (counter < 0) {
  //   counter = slides.length - 1;
  // }
  // working with buttons

  if (counter < slides.length - 1) {
    nextBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none";
  }
  if (counter > 0) {
    prevBtn.style.display = "block";
  } else {
    prevBtn.style.display = "none";
  }
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

prevBtn.style.display = "none";

//auto slide
/*
var slideIndex=0;
showSlides();
 function showSlides(){
	 let i;
	 for(i=0; i<slides.length; i++){
		 slides[i].style.display="none";
		 
	 }
	 slideIndex++;
	 if(slideIndex==slides.length){
		 slideIndex=1;
	 }
	 slides[slideIndex-1].style.display="block";
	 setTimeout(showSlides,2000);
 }
 */
 //about js
 const btns = document.querySelectorAll(".abouttab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click",function(e){
	const id =e.target.dataset.id;
	if(id){
		btns.forEach(function(btn){
			btn.classList.remove("active");
			e.target.classList.add("active");
		});
		articles.forEach(function(article){
			article.classList.remove("active");
		});
		const element= document.getElementById(id);
		element.classList.add("active");
	}
});