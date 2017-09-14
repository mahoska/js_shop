function createGallery(){
		//create main img
		createMainImg(0);
		
	var j=0;
	for(var i=1; i<=kol_img; i++){	
		var div = document.createElement("div");
		div.setAttribute('class','miniature thumbnail');
		var img_m = document.createElement("img");
		img_m.setAttribute('src',imges[j]);
		img_m.setAttribute('class','img-responsive');
		img_m.setAttribute('data-num',(i-1));
		div.appendChild(img_m);
		document.querySelector(".mini").appendChild(div);
		j++;
	}
}

document.querySelectorAll(".miniature img").forEach(function(el){
	el.addEventListener('click', function(){
		var num = el.dataset.num;
		active();
		main_pic.innerHTML ="";		
		createMainImg(num);

		document.querySelectorAll(".miniature img").forEach(function(el){
			if(el.classList.contains('notvisbl')) el.classList.remove = 'notvisbl';
			el.className = 'visbl';
		});
		el.className = 'notvisbl';
	})
});

document.querySelector("#main_pic").addEventListener('mouseover', showCursor);

function showCursor(){
	var active = document.querySelector(".active");
	var num = active.dataset.num;

	if (!(kol_img==1 || num == 0))
		left_cur.setAttribute('class','block')
	else
		left_cur.setAttribute('class','none')
		
	if (!(num == kol_img-1))
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
	if(num != 0){
		main_pic.innerHTML ="";
		createMainImg(num-1);
	}

	showCursor()
});

right_cur.addEventListener('click', function(){
	var num = active();
	if(num != kol_img-1){
		main_pic.innerHTML ="";
		createMainImg(num+1)
	}

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

function createMainImg(num){
		var img = document.createElement("img");
		img.setAttribute('src',imges[num]);
		img.setAttribute('class','img-responsive active');
		img.setAttribute('data-num',num);
		main_pic.appendChild(img);
}


function carusel(){
	if(!i) i=0;
	if(i==kol_img) i=0;
	main_pic.innerHTML ="";
	createMainImg(i);

	document.querySelectorAll(".miniature img").forEach(function(el){
		if(el.classList.contains('notvisbl')) el.classList.remove = 'notvisbl';
		el.className = 'visbl';
		if(el.dataset.num == i) el.className = 'notvisbl';
	});

	i++;
}
