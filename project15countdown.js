const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let futureDate = new Date(2021,6,31,11,10,0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
let month = futureDate.getMonth();
month=months[month];
let date = futureDate.getDate();
let weekday = weekdays[futureDate.getDay()];
giveaway.innerText = `giveaway ends on ${weekday} ${date} ${month} ${year} ${hours}:${minutes}am`;

const futureTime = futureDate.getTime();
console.log(futureTime);

function getRemainingTime(){
	const today = new Date().getTime();
	console.log(today);
	const t = futureTime-today;
	console.log(t);
	const oneday= 24*60*60*1000;
	const onehour=60*60*1000;
	const oneminute=60*1000;
	let days = t/oneday;
	days= Math.floor(days);
	let hours = Math.floor((t%oneday/onehour));
	let minutes = Math.floor((t%onehour/oneminute));
	let seconds = Math.floor((t%oneminute/1000));
	console.log(seconds);
	
	function format(item){
		if(item<10){
			return (item=`0${item}`);
		}
		return item;
	};
	const values = [days,hours,minutes,seconds];
	items.forEach(function(item,index){
		item.innerHTML=format(values[index]);
		console.log(item);
	});
	if(t<0){
		clearInterval(countdown);
		deadline.innerHTML=`<h4 class="expired">sorry,this giveaway has expired</h4>`
	}
};

let countdown = setInterval(getRemainingTime,1000);
getRemainingTime();