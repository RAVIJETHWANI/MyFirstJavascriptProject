const date= document.getElementById("date");
date.innerHTML= new Date().getFullYear();

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click",function(){
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
	if(scrollHeight>500){
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
	if(!fixedNav){
		position=position-navHeight;
	}
	if(navHeight>82){
		position=position+containerHeight;
	}
	window.scrollTo({
		left:0,
		top:position,
	});
	linksContainer.style.height=0;
	})
});