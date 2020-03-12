$(document).ready(function(){
var all_data;
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    all_data = JSON.parse(this.responseText);
	//sessionStorage.setItem("data",all_data);
	
	var oImg = document.createElement("img");
oImg.setAttribute('src', document.URL.substr(0,document.URL.lastIndexOf('/'))+'/images/'+all_data[0]);
oImg.setAttribute('id', 'slider');
oImg.setAttribute('alt', 'na');
oImg.setAttribute('height', '500px');
oImg.setAttribute('width', '500px');

document.getElementById("bg-container").appendChild(oImg);
//sliding
var count = 0,timer,speed; 
var width=1;
document.getElementById("getspeed").addEventListener("click", function(e) {
		speed=document.getElementById("speed").value;
 
}, false);
	  if(speed == null){
		  speed=500;
	  }
	document.getElementById("play").addEventListener("click", function(e) {
    if (timer) {
    clearInterval(timer);
    timer = null;
	document.getElementById("play").innerHTML='<i class="fas fa-play"></i>';
  } else {
	  document.getElementById("play").innerHTML='<i class="fas fa-pause"></i>';

    timer = setInterval( function() { 
   slide(count,all_data.length); 
   count = (count+1)%all_data.length;
}, speed);
  }
}, false);





function slide(count,l){
	document.getElementById("next").addEventListener("click", function(e) {
		if(count>l){
		count=0;	
		}
    count++;
	
	document.getElementById("slider").src=document.URL.substr(0,document.URL.lastIndexOf('/'))+"/images/"+all_data[count];
}, false);
document.getElementById("previous").addEventListener("click", function(e) {
	if(count<1){
		count=0;	
		}
    count--;
	
	document.getElementById("slider").src=document.URL.substr(0,document.URL.lastIndexOf('/'))+"/images/"+all_data[count];
}, false);
	document.getElementById("slider").src=document.URL.substr(0,document.URL.lastIndexOf('/'))+"/images/"+all_data[count];
	
    document.getElementById("progress").style.width=count+"%";
}






 }
};
xmlhttp.open("GET", "data/images.json", true);
xmlhttp.send();
});
