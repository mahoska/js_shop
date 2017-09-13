var product_table = document.querySelector(".product_table");
var color_select = document.querySelector("select[name=color]");
var size_select = document.querySelector("select[name=size]");
var categ_select = document.querySelector("select[name=category]");
var sort_select = document.querySelector("select[name=sort]");
var product_arr = [];


BuildSelect(colors, colors, color_select, "Colors");
BuildSelect(sizes, sizes, size_select, "Sizes");
BuildSelect(categories, categories, categ_select, "Categories");
BuildSelect(sort_text, sort_val, sort_select, "Sort");
product_arr = createProductsArr(all_products);

if(!localStorage['products']){
	localStorage['products'] = JSON.stringify(product_arr);
}

if(localStorage['products']){
	products = JSON.parse(localStorage['products']);
		product_arr = createProductsArr(products);
	if(localStorage['color_sel'])
		BuildSelect(colors, colors, color_select, "Colors",localStorage['color_sel']);
	if(localStorage['size_sel'])
		BuildSelect(sizes, sizes, size_select, "Sizes", localStorage['size_sel']);
	if(localStorage['categ_sel'])
		BuildSelect(categories, categories, categ_select, "Categories", localStorage['categ_sel']);
	if(localStorage['sort_sel'])
		BuildSelect(sort_text, sort_val, sort_select, "Sort", localStorage['sort_sel']);	
		
}

drawProductTable(product_arr);

//category filter
categ_select.addEventListener('change',function(){
	var filter_type = this.value;
	if(filter_type=="null"){
		drawProductTable(createProductsArr(all_products));
		return;
	}
	var filter_arr = product_arr.filter(function(product) {
			return product.category == filter_type;
	});	
	localStorage['products'] = JSON.stringify(filter_arr);
	localStorage['categ_sel'] = filter_type;
	drawProductTable(filter_arr);
	location.reload();
});


//color filter
color_select.addEventListener('change',function(){
	var filter_type = this.value;
	if(filter_type=="null"){
		drawProductTable(createProductsArr(all_products));
		return;
	}
	var filter_arr = product_arr.filter(function(product) {
			return product.color == filter_type;
	});	
	localStorage['products'] = JSON.stringify(filter_arr);
	localStorage['color_sel'] = filter_type;
	drawProductTable(filter_arr);
	location.reload();
});

//size filter
size_select.addEventListener('change',function(){
	var filter_type = this.value;
	if(filter_type=="null"){
		drawProductTable(createProductsArr(all_products));
		return;
	}
	
	var filter_arr = product_arr.filter(function(product) {
	var kol = 0;
	var self = product;
			var pr = product.size.filter(function(sz){
				kol++;
				return sz == filter_type;
			});
			console.log(kol);
			if(pr.length!=0){
				product.price = [self.price[kol-1]];
				product.size = [self.size[kol-1]];
				return product;
			}
	});	
	localStorage['products'] = JSON.stringify(filter_arr);
	localStorage['size_sel'] = filter_type;
	drawProductTable(filter_arr);
	location.reload();
});


//sort filter
sort_select.addEventListener('change',function(){
	var filter_type = this.value;
	if(filter_type=="null"){
		drawProductTable(createProductsArr(all_products));
		return;
	}
	if(filter_type == "low")
		sortProductUp();
	if(filter_type == "hight")
		sortProductDown();
	localStorage['products'] = JSON.stringify(product_arr);
	localStorage['sort_sel'] = filter_type;
	drawProductTable(product_arr);
	location.reload();
});

function sortProductUp(){
	product_arr.sort(function(a,b){
			if (a.price[0] < b.price[0] ) {
			return -1;
		  }
		  if (a.price[0] > b.price[0] ) {
			return 1;
		  }
		  return 0;
	})
}

function sortProductDown(){
	product_arr.sort(function(a,b){
			if (a.price[0] > b.price[0] ) {
			return -1;
		  }
		  if (a.price[0] < b.price[0] ) {
			return 1;
		  }
		  return 0;
	})
}

document.querySelector("#cear_filter").addEventListener('click',function(){
	window.localStorage.removeItem("products");
	window.localStorage.removeItem("color_sel");
	window.localStorage.removeItem("size_sel");
	window.localStorage.removeItem("categ_sel");
	window.localStorage.removeItem("sort_sel");
	var products = createProductsArr(all_products);
	localStorage['products'] = JSON.stringify(products);
	drawProductTable(products);
	location.reload();
});

document.querySelectorAll(".product_tabl_el").forEach(function(el){
	el.addEventListener('click',function(){
		localStorage['prod_id'] = this.dataset.id;
		document.location.href = "product.html";
	})
});
