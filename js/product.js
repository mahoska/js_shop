var id = localStorage['prod_id'];

var product = all_products[id-1];
var imges = product.img;

var main_pic = document.querySelector("#main_img");
var kol_img = imges.length;

var left_cur = document.querySelector("#left_cur");
var right_cur = document.querySelector("#right_cur");



var j=0;
for(var i=1; i<=kol_img; i++){
	//create main img
    var img = document.createElement("img");
	img.setAttribute('src',imges[j]);
	img.setAttribute('class','img-responsive active');
	img.setAttribute('data-num',i);
	if(i>1)img.setAttribute('class','none');
	main_pic.appendChild(img);
	
	var div = document.createElement("div");
	div.setAttribute('class','miniature thumbnail');
	var img_m = document.createElement("img");
	img_m.setAttribute('src',imges[j]);
	img_m.setAttribute('class','img-responsive');
	img_m.setAttribute('data-num',i);
	div.appendChild(img_m);
	document.querySelector(".mini").appendChild(div);
	j++;
}

document.querySelectorAll(".miniature img").forEach(function(el){
	el.addEventListener('click', function(){
		var num = el.dataset.num;
		active()	
		document.querySelectorAll("#main_img img").forEach(function(el){
			if(el.dataset.num == num ){
				elementHide(el);	
			}
		});

	})
});

document.querySelector("#main_pic").addEventListener('mouseover', showCursor);

function showCursor(){
	var active = document.querySelector(".active");
	var num = active.dataset.num;

	if (!(kol_img==1 || num == 1))
		left_cur.setAttribute('class','block')
	else
		left_cur.setAttribute('class','none')
		
	if (!(num == kol_img))
		right_cur.setAttribute('class','block')
	else
		right_cur.setAttribute('class','none')
}


document.querySelector("#main_pic").addEventListener('mouseout', hideCursor);

function hideCursor(){
	left_cur.setAttribute('class','none')
	right_cur.setAttribute('class','none')
}


left_cur.addEventListener('click', function(){
	var num = active();	
	document.querySelectorAll("#main_img img").forEach(function(el){
		if(el.dataset.num == num-1 && num != 1 ){
			elementHide(el);
		}
	});
	showCursor()
});

right_cur.addEventListener('click', function(){
	var num = active()
	document.querySelectorAll("#main_img img").forEach(function(el){
		if(el.dataset.num == (num+1) && num != kol_img){
			elementHide(el);			
		}
	});
	showCursor()
	
});


function active(){
	var active = document.querySelector(".active");
	active.classList.remove("active");
	active.setAttribute('class','none');
	return parseInt(active.dataset.num);
}

function elementHide(el){
	el.setAttribute('class','img-responsive active');
}



