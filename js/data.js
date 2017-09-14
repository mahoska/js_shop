var colors  = ["green", "black", "white", "yellow"];
var sizes = ["S", "M", "XL", "XXL"];
var categories = ["t-short", "leggines", "belts"];
var sort_text = ["Lowest price first", "Highest price first"];
var sort_val = ["low", "hight"];

var all_products = [
{
	id : 1,
	img : ["img/tshort/futbolka-Batman-1.jpg", "img/tshort/futbolka-Batman-2.jpg"], 
	name : "Футболка Batman", 
	price : [39.5, 40.5, 42.0],
	category : "t-short",
	size : ["S", "M", "XL"],
	color : "black", 
	description : "Футболка Batman for man"
},
{
	id : 2,
	img : ["img/tshort/futbolka-Linkin-Park-Chester-Bennington1.jpg", "img/tshort/futbolka-Linkin-Park-Chester-Bennington2.jpg"], 
	name : "Футболка Linkin Park (Chester Bennington) ", 
	price : [39.35, 55.5, 60.5],
	category : "t-short",
	size : ["S", "XL", "XXL"],
	color : "black", 
	description : "Футболка Linkin Park (Chester Bennington)  for man"
},
{
	id : 3,
	img : ["img/tshort/futbolka-ringer-Bob-Marley-1.jpg", "img/tshort/futbolka-ringer-Bob-Marley-2.jpg"], 
	name : "Футболка-рингер BOB MARLEY ", 
	price : [22.45, 25.45, 27.45],
	category : "t-short",
	size : ["S", "M", "XXL"],
	color : "yellow", 
	description : "Футболка-рингер BOB MARLEY  for man"
},
{
	id : 4,
	img : ["img/tshort/futbolka-total-AC-DC-RocknRoll-Train-olive-t-shirt1.jpg", "img/tshort/futbolka-total-AC-DC-RocknRoll-Train-olive-t-shirt2.jpg"], 
	name : "Футболка AC/DC \"Rock 'n' Roll Train \" ", 
	price : [29.45, 31.90],
	category : "t-short",
	size : ["XL", "XXL"],
	color : "green", 
	description : "Футболка AC/DC \"Rock 'n' Roll Train \"(olive t-shirt) for man"
},
{
	id : 5,
	img : ["img/tshort/futbolka-total-Pink-Floyd-The-Wall-melange-tshirt1.jpg", "img/tshort/futbolka-total-Pink-Floyd-The-Wall-melange-tshirt2.jpg"], 
	name : "Футболка Pink Floyd \"The Wall\"", 
	price : [38.40, 44.0],
	category : "t-short",
	size : ["M", "XXL"],
	color : "white", 
	description : "Футболка Pink Floyd \"The Wall\" (melange t-shirt)  for man"
},
{
	id : 6,
	img : ["img/legence/led-penta-1.jpg", "img/legence/legs-penta-2.jpg", "img/legence/legs-penta-3.jpg"], 
	name : "легинсы \"Пентаграмма УРОБОРОС\" ", 
	price : [12.0, 14.0],
	category : "leggines",
	size : ["S", "M"],
	color : "black", 
	description : "легинсы \"Пентаграмма УРОБОРОС\" (материал: Полиэстер/спандекс)  for women"
},
{
	id : 7,
	img : ["img/legence/leg-muerte-1.jpg", "img/legence/Muerte-2.jpg", "img/legence/Muerte-3.jpg"], 
	name : "легинсы \"MUERTE\"", 
	price : [15.0, 17.0],
	category : "leggines",
	size : ["S", "M"],
	color : "black", 
	description : "легинсы \"MUERTE\"  for women  (материал: Полиэстер/спандекс)"
},
{
	id : 8,
	img : ["img/legence/leg-bones-bio-White-1.jpg", "img/legence/leg-bones-bio-White-2.jpg", "img/legence/leg-bones-bio-White-3.jpg"], 
	name : "легинсы \"Кости биомеханика на белом фонеЕ\"", 
	price : [20.0, 22.0],
	category : "leggines",
	size : ["M", "XL"],
	color : "white", 
	description : "легинсы \"Кости биомеханика на белом фоне\"  for women  (материал: Полиэстер/спандекс)"
},
{
	id : 9,
	img : ["img/legence/leg.jpg"], 
	name : "легинсы \"Кресты\"", 
	price : [19.0], 
	category : "leggines",
	size : ["XL"], 
	color : "white", 
	description : "легинсы \"Кресты\"  for women  (материал: Полиэстер/спандекс)"
},
{
	id : 10,
	img : ["img/legence/leg1.jpg"], 
	name : "легинсы \"Скелеты\"", 
	price : [21.5], 
	category : "leggines",
	size : ["S"], 
	color : "white", 
	description : "легинсы \"Скелеты\"  for women  (материал: Полиэстер/спандекс)"
},
{
	id : 11,
	img : ["img/belts/1-1.jpg","img/belts/1-2.jpg","img/belts/1-3.jpg"], 
	name : "Ремень 2 ряда пирамида (кожа)", 
	price : [50.5], 
	category : "belts",
	size : ["M"], 
	color : "black", 
	description : "Ремень-пирамида   for man"
},
{
	id : 12,
	img : ["img/belts/oduct-pictures-0821-rem2-1.jpg","img/belts/oduct-pictures-0821-rem2-2.jpg","img/belts/oduct-pictures-0821-rem2-3.jpg"], 
	name : "Ремень 3 ряда пирамида (кожа)", 
	price : [70.5], 
	category : "belts",
	size : ["XL"], 
	color : "black", 
	description : "Ремень-пирамида   for man"
},
{
	id : 13,
	img : ["img/belts/oduct-pictures-0821-rem1-1.jpg","img/belts/oduct-pictures-0821-rem1-2.jpg","img/belts/oduct-pictures-0821-rem1-3.jpg"], 
	name : "Ремень 4 ряда пирамида (кожа)", 
	price : [85.25, 90.25], 
	category : "belts",
	size : ["S","XXL"], 
	color : "black", 
	description : "Ремень-пирамида   for man"
},
{
	id : 14,
	img : ["img/tshort/udl-bezryk-Ram-White-Urbanist-2.jpg", "img/tshort/udl-bezryk-Ram-White-Urbanist-4.jpg","img/tshort/udl-bezryk-Ram-White-Urbanist-girl-back.jpg"], 
	name : "Удлиненния безрукавка RAM (URBANIST)", 
	price : [35.45, 45.45, 55.45],
	category : "t-short",
	size : ["S", "M", "XL"],
	color : "white", 
	description : "Удлиненния безрукавка RAM белая (URBANIST)  for women"
},
{
	id : 15,
	img : ["img/tshort/udl-bezryk-Sphynx-Urbanist-2.jpg", "img/tshort/udl-bezryk-Sphynx-Urbanist-4.jpg","img/tshort/udl-bezryk-Sphynx-Urbanist-5.jpg"], 
	name : "Удлиненная безрукавка Sphynx (Urbanist)", 
	price : [54.45, 64.45],
	category : "t-short",
	size : ["XL", "XXL"],
	color : "black", 
	description : "Удлиненная безрукавка Sphynx (Urbanist)  for women"
}
];