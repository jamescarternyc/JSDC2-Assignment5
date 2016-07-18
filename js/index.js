//model 

var counter = {
	text: 0,
	color: "",
};

//view

var source = $('#countly-template').html();
var template = Handlebars.compile(source);	

var renderedTemplate = template(counter);
$('body').append(renderedTemplate);



//	$('p').html(renderedTemplate);

// controller
$("#countUp").on("click", function(){
	counter.text+=1;
	if (counter.text>100) {
	counter.color="red";
	$('p').css('color',counter.color);	
}
	console.log(counter);
	$('p').html(counter.text);
	

});

$("#countDown").on("click", function(){
	counter.text-=1;
	if (counter.text<0) {
	counter.color="blue";
	$('p').css('color',counter.color);	
}
	console.log(counter);
	$('p').html(counter.text);
});

$('#reset').on("click", function(){
	counter.text = 0;
	$('p').css('color','#000');	
	$('p').html(counter.text);
	
});



