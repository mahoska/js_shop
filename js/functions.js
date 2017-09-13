function createProductsArr(products){
	var prod = {};
	var product_arr = [];
	products.forEach(function(product, key){
		prod = new Product(product.id, product.img, product.name, product.price, product.category, product.size, product.color, product.description);
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




