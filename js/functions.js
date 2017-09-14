function createProductsArr(products){
	var prod = {};
	var product_arr = [];
	products.forEach(function(product, key){
		prod = new Product(
							product.id,
							product.img,
							product.name,
							product.price,
							product.category,
							product.size,
							product.color,
							product.description);
		product_arr.push(prod);
	});
	return product_arr;
}

function BuildSelect(/*array*/inputsArr, /*array*/inputsVal, /*HTMLElement*/htmlSelect, /*string*/defselected, /*string*/selected) {
	htmlSelect.options.length = 0;
    var opt = null;
	var i = 0;
	opt = new Option(defselected,null);
	if (!selected) opt.selected = "selected";
	htmlSelect.options.add(opt, i);
    for (i = 0; i < inputsArr.length; i++) {
        opt = new Option(inputsArr[i], inputsVal[i]);//1-text 2-value      
        if (selected && inputsVal[i] === selected) {
            opt.selected = "selected";
        }
        htmlSelect.options.add(opt, i+1);
    }

    return true;
}


/*filters*/
function glodalfilter(color, size, category, sort){
	var product_arr = createProductsArr(all_products);	
	var filter_arr;
	if(color && color!=null){

		filter_arr = product_arr.filter(function(product) {
			return product.color == color;
		});	
		product_arr = filter_arr;
	}
	else{
		window.localStorage.removeItem("color_sel");
	}
	console.log(filter_arr)
	if(size && size!=null){
		filter_arr = product_arr.filter(function(product) {
		var kol = 0;
		var self = product;
				var pr = product.size.filter(function(sz){
					kol++;
					return sz == size;
				});
				if(pr.length!=0){
					product.price = [self.price[kol-1]];
					product.size = [self.size[kol-1]];
					return product;
				}
		});	
		product_arr = filter_arr;
	}
	else{
		window.localStorage.removeItem("size_sel");
	}
	console.log(filter_arr)		
	if(category && category!=null){
		var filter_arr = product_arr.filter(function(product) {
				return product.category == category;
		});	
		product_arr = filter_arr;
	}
	else{
		window.localStorage.removeItem("categ_sel");
	}
	console.log(filter_arr)		
	if(sort && sort!=null){
		if(sort == "low")
			sortProductUp(product_arr);
		if(sort == "hight")
			sortProductDown(product_arr);
	}
	console.log(product_arr)
	return product_arr;
}

function sortProductUp(product_arr){
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

function sortProductDown(product_arr){
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




