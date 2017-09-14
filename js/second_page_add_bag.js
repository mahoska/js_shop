var id = localStorage['prod_id'];
var product = all_products.find(searchById);

if ( product != null ){
	var imges = product.img;

	var kol_img = imges.length;
	var main_pic = document.querySelector("#main_img");
	var left_cur = document.querySelector("#left_cur");
	var right_cur = document.querySelector("#right_cur");
	createGallery();

	var i;
	setInterval(carusel,2000);
	
	document.querySelector("#title").innerHTML = product.name;
	document.querySelector("#description").innerHTML = product.description;
	document.querySelector("#price").innerHTML = Math.min.apply(null, product.price) + " EUR";
	
	var products_categ_color = glodalfilter(product.color, null, product.category, null);
	var products = products_categ_color.filter(function(item) {
				return item.name == product.name;
	});
	
	var size_sel = document.querySelector("select[name=size]")
	BuildSelect(product.size, product.size, size_sel, "Choose size");
	
	var selected_size, selected_price;
	
	if(!selected_size){
		 document.querySelector("#a_bag").setAttribute('class','black block');
	}
	
}

function searchById(element) {
	if (element.id==id)
		return element;
	return null;
}

size_sel.addEventListener('change',function(){
	selected_size = this.value;
	var len = product.size.length;
	var i;
	for (i=0; i<len; i++){
		if (product.size[i] == selected_size) break;
	};
	selected_price = product.price[i];
	document.querySelector("#a_bag").setAttribute('class','none')
});


document.querySelector("#add_bag_btn").addEventListener('click',function(){
if(!selected_size) {
	var err= document.querySelector("#err");
	err.innerHTML = "Selected size";
	setTimeout("err.innerHTML = ''", 1500);
	return;
}

	
if(this.innerHTML == "Proceed to checkout"){
	document.location.href = "bag.html";
	return;
}
	
var product_buy = new Product(
							product.id,
							product.img[0],
							product.name,
							selected_price,
							product.category,
							selected_size,
							product.color,
							null);

var bag = [];							
if (localStorage['bag']) {
	bag = JSON.parse(localStorage['bag']);
}
bag.push(product_buy);
localStorage['bag'] = JSON.stringify(bag);

this.innerHTML = "Proceed to checkout";
});
