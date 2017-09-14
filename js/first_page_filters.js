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

if(localStorage['color_sel'])
	BuildSelect(colors, colors, color_select, "Colors",localStorage['color_sel']);	
if(localStorage['size_sel'])
	BuildSelect(sizes, sizes, size_select, "Sizes", localStorage['size_sel']);
if(localStorage['categ_sel'])
	BuildSelect(categories, categories, categ_select, "Categories", localStorage['categ_sel']);	
if(localStorage['sort_sel'])
	BuildSelect(sort_text, sort_val, sort_select, "Sort", localStorage['sort_sel']);	
		

product_arr = glodalfilter(localStorage['color_sel'], localStorage['size_sel'],
			 localStorage['categ_sel'],localStorage['sort_sel']);
drawProductTable(product_arr);	


//category change
categ_select.addEventListener('change',function(){
	var filter_type = this.value;
	if(filter_type=="null")
		window.localStorage.removeItem("categ_sel");
	else
	localStorage['categ_sel'] = filter_type;
	product_arr = glodalfilter(localStorage['color_sel'], localStorage['size_sel'],
				 localStorage['categ_sel'],localStorage['sort_sel']);
	drawProductTable(product_arr);	
});


//color change
color_select.addEventListener('change',function(){
	var filter_type = this.value;
	if(filter_type=="null")
		window.localStorage.removeItem("color_sel");
	else
	localStorage['color_sel'] = filter_type;
	product_arr = glodalfilter(localStorage['color_sel'], localStorage['size_sel'],
				 localStorage['categ_sel'],localStorage['sort_sel']);
	drawProductTable(product_arr);	
});

//size change
size_select.addEventListener('change',function(){
	var filter_type = this.value;
	if(filter_type=="null")
		window.localStorage.removeItem("size_sel");
	else
	localStorage['size_sel'] = filter_type;
	product_arr = glodalfilter(localStorage['color_sel'], localStorage['size_sel'],
				 localStorage['categ_sel'],localStorage['sort_sel']);
	drawProductTable(product_arr);	
});


//sort change
sort_select.addEventListener('change',function(){
	var filter_type = this.value;
	if(filter_type=="null")
		window.localStorage.removeItem("sort_sel");
	else
		localStorage['sort_sel'] = filter_type;

	product_arr = glodalfilter(localStorage['color_sel'], localStorage['size_sel'],
				 localStorage['categ_sel'],localStorage['sort_sel']);
	drawProductTable(product_arr);	
});


document.querySelector("#cear_filter").addEventListener('click',function(){
	window.localStorage.removeItem("color_sel");
	window.localStorage.removeItem("size_sel");
	window.localStorage.removeItem("categ_sel");
	window.localStorage.removeItem("sort_sel");
	var products = createProductsArr(all_products);
	drawProductTable(products);
	location.reload();
});

document.querySelectorAll(".product_tabl_el").forEach(function(el){
	el.addEventListener('click',function(){
		localStorage['prod_id'] = this.dataset.id;
		document.location.href = "add_bag.html";
	})
});


function drawProductTable(product_arr){
product_table.innerHTML = "";
var i=0;
	product_arr.forEach(function(product, key){
		if (i==4) i=0;
		if(i==0){
			row = document.createElement("div");
			row.setAttribute('class','row');
			product_table.appendChild(row);
		}
		var _div = product.draw();
			row.appendChild(_div);
		i++;
	});
}

