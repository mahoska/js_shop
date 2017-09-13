var Product = function(_id, _img, _name, _price, _category, _size, _color, _description){
	this.id = _id;
	this.img = _img;
	this.name = _name;
	this.price = _price;
	this.category = _category;
	this.size = _size;
	this.color = _color;
	this.description = _description;
	
	this.draw = function()
	{
		var container = document.createElement("div");
		container.setAttribute('class','col-sm-4 col-md-3 ');
		var a = document.createElement("a");
		a.setAttribute('href', "product.html?id="+this.id)
		var thumb = document.createElement("div");
		thumb.setAttribute('class','thumbnail product_tabl_el');		
		var _img = document.createElement("img");
		_img.setAttribute('src',this.img[0]);
		var captn = document.createElement("div");	 
		captn.setAttribute('class','caption');
		var h = document.createElement("h4");
		h.innerHTML = this.name ;
		var p = document.createElement("p");
		p.innerHTML = "<strong>"+ this.price[0] + " EUR</strong>";
		
		thumb.appendChild(_img);	
		captn.appendChild(h);	
		captn.appendChild(p);			
		thumb.appendChild(captn);
		a.appendChild(thumb);	
		container.appendChild(a);
		return container;	
	}
}



