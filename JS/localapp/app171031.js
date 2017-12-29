//<M>
//×-
//@-FILENÉV   : D3JS-V4 - app171031.js-@
//@-SZERZŐ    : AX07057-@
//@-LÉTREHOZVA: 2017. okt. 31.-@
//@-FÜGGŐSÉGEK:
//×-
// @-- jQuery.min.js-@
// @-- bootstrap.min.js-@
// @-- d3.min.js-@
// @-- ...-@
//-@
//-×
//-@
//@-LEÍRÁS    :
//Ez az javascript file készült arra a feladatra, hogy otthont adjon a mAIN app-nak.
//@-MÓDOSÍTÁSOK :
//×-
// @-- ... -@
//-×
//-×
//</M>

var APP171031 = APP171031 || {};


$(function(){
	console.log("Aktuális URL: " + window.location.href);
	if(window.location.href === "http://localhost:8080/D3JS_V4/PAGES/FirstExample001.html"){
		APP171031.fstExmpl();
	}
	APP171031.peterTest01();
});


APP171031.test01 = function(p1){
//<SF>
// 2017. nov. 1.<br>
// Csak egy tesztfüggvény...<br>
// PARAMÉTEREK:
//×-
// @-- @p1 ... = ... -@
//-×
//MÓDOSTÁSOK:
//×-
// @-- ... -@
//-×
//</SF>	
	if(p1 === undefined){
		p1 = "TESZTSZÖVEG";
	}
	
	console.info("Csak egy szövegkiírás: " + p1)
};

APP171031.fstExmpl = function(vrs){
//<SF>
// 2017. nov. 1.<br>
// A könyv első példája<br>
// PARAMÉTEREK:
//×-
// @-- @param ... = ... -@
//-×
//MÓDOSTÁSOK:
//×-
// @-- ... -@
//-×
//</SF>
	
	if(vrs === undefined){
		vrs = 0;
	}
	
	//<nn>
	//set the dims, and margins of the graph
	//</nn>
	var margin = {top:20, right:20, bottom:30,left:50}
	var width = 960 - margin.left - margin.right;
	var height = 500 - margin.bottom - margin.top;
	//<nn>
	//pares dat/time
	//</nn>
	var parseTime = d3.timeParse("%Y-%m-%d");
	
	//<nn>
	//set the ranges
	//</nn>
	var x = d3.scaleTime().range([0,width]);
	var y = d3.scaleLinear().range([height,0]);
	
	//<nn>
	//define the line
	//</nn>
	var valueline = d3.line()
		.x(function(d){return x(d.date);})
		.y(function(d){return y(d.close);});
	
	//<nn>
	//append the svg object to its container on the page
	//appends a group element to SVG
	//moves the group element to the top-left margin
	var svg = d3.select("#svg-cntnr").append('svg')
		.attr("width",width+margin.left+margin.right)
		.attr("height",height+margin.top+margin.bottom)
		.append("g")
			.attr("transform", "translate("+margin.left+","+margin.top+")");
	
	//<nn>
	//Get the data
	//</nn>
	d3.csv("/D3JS_V4/DATA/fstExData.csv", function(error,data){
		if(error){
			console.error("ERROR:");
			console.error("##================================================##");
			console.log(error);
			console.error("##================================================##");
		}
		
		//<nn>
		//format the data
		//</nn>
		data.forEach(function(d){
			d.date = parseTime(d.date);
			d.close = +d.close; 
		});
		
		//<nn>
		//Scale the range of the data
		//</nn>
		x.domain(d3.extent(data, function(d){return d.date;}));
		y.domain([0, d3.max(data, function(d){return d.close;})]);
		
		//<DEBUG>
		// Az adatok kiíratása, ha szükséges:<br>
		//<code>
		// console.log(data);
		//</code>
		//</DEBUG>
		
		
		//<nn>
		// Add the valueline path
		//</nn>
		svg.append("path")
			.data([data])
			.attr("class","line")
			.attr("d",valueline);
		
		
		//<nn>
		// Add the X axis
		//</nn>
		svg.append("g")
			.attr("transform","translate(0,"+height+")")
			.call(d3.axisBottom(x));
		
		//<nn>
		// Add the Y axis
		//</nn>
		svg.append("g")
			.call(d3.axisLeft(y));
		
	});
	
}

APP171031.peterTest01 = function(){
	console.log("peter test futott...");
}















