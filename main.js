

$(document).ready( function() {
	function add(x,y) {
		return x + y
	}

var bool1 = true; 

$(".ratty").on('click', function() {
	alert("Are you SURE you want to go to the Ratty? Better check the menu first...") })

$(".vdub").on('click', function() {
  alert("Vdub. Better choice. But just to make sure...")
// 	if(bool1) {
// 	$("#square1").css("background-color", "pink")
// 	// bool1 = false; } 
// } else {
// 	$("#square1").css("background-color", "green")
// 	bool1 = true ;
// }
}) 

var currentdate = new Date();
// var datetime = "Last Sync: " + currentdate.getDay() + "/"+currentdate.getMonth() 
// + "/" + currentdate.getFullYear() + " @ " 
// + currentdate.getHours() + ":" 
// + currentdate.getMinutes() + ":" + currentdate.getSeconds();

var dayofweek = new Date().getDay();
switch(dayofweek){
   case 0:
   $('#dayofweek').html("<h2>Happy Sunday!</h2><h3>Cure that hangover with some <a href='http://www.brown.edu/Student_Services/Food_Services/eateries/refectory_menu.php'>good ol' Ratty</a></h3>");
   break;
   case 1:
   $('#dayofweek').html("<h2>It's Monday...</h2><h3>Start the week with some decent food at <a href='http://www.brown.edu/Student_Services/Food_Services/eateries/andrews.php'>Andrews</a></h3>");
   break;
  case 2:
    $('#dayofweek').html("<h2>Tuesday?</h2><h3>Feels like a day for <a href='http://www.brown.edu/Student_Services/Food_Services/eateries/verneywoolley_menu.php#1'>the V-Dub</a></h3>");
   break;

    case 3:
   $('#dayofweek').html("<h2>Happy Hump Day!</h2><h3>Prep for Whisco with a meal at <a href='http://www.brown.edu/Student_Services/Food_Services/eateries/refectory_menu.php'>the Ratty</a></h3>");
   break;
   // $('#dayofweek').html('Its Friday');
   // $('#dayofweeklink').html('go to Vdub');
   // $('#dayofweeklink').attr('href','http:/jasdfjasjfaskjf');

    case 4:
   $('#dayofweek').html("<h2>ONE MORE DAY TIL FRIDAY!</h2><h3>Celebrate with some <a href='http://www.brown.edu/Student_Services/Food_Services/eateries/andrews'>Andrews</a></h3>");
   break;
  case 5:
   $('#dayofweek').html("<h2>Yay! It's Friday :)</h2><h3>Go to <a href='http://www.brown.edu/Student_Services/Food_Services/eateries/verneywoolley_menu.php#1'>Chicken Finger Friday at the V-Dub!</a></h3>");   
   break;
   case 6:
   $('#dayofweek').html("<h2>Happy Saturday!</h2><h3>Cure that hangover with some <a href='http://www.brown.edu/Student_Services/Food_Services/eateries/refectory_menu.php'>good ol' Ratty</a></h3>");
   break;
  
}

var hour = currentdate.getHours();
var minutes = currentdate.getMinutes();
var month = currentdate.getMonth() + 1;
var day = currentdate.getDay() + 1;
var year = currentdate.getFullYear(); 

var datequery = "https://api.students.brown.edu/dining/find?client_id=hackathon" 

$.ajax({
        url: "https://api.students.brown.edu/dining/find?client_id=hackathon",
        data: {year: year, month: month, day: day, hour: hour, minute: minutes, food: "scrambled eggs"},
        dataType: 'jsonp',
        success: function(data){
        	console.log('here')
            console.log(data);
        }
    });
})

var test = {
  "food": "", 
  "num_results": 1, 
  "results": [
    {
      "bistro": [
        "scrambled eggs", 
        "pancakes", 
        "french toast", 
        "chocolate chip pancakes", 
        "tater tots", 
        "grilled breakfast ham", 
        "hard boiled eggs", 
        "grapefruit halves", 
        "cinnamon cupcake buns"
      ], 
      "chef's corner": [
        "closed for breakfat"
      ], 
      "daily sidebars": [
        "omelette bar", 
        "steel cut oatmeal w/ toppings bar"
      ], 
      "day": 7, 
      "eatery": "ratty", 
      "end_hour": 11, 
      "end_minute": 0, 
      "grill": [
        "closed for breakfast"
      ], 
      "meal": "breakfast", 
      "month": 2, 
      "roots & shoots": [
        "closed for breakfast", 
        ""
      ], 
      "start_hour": 7, 
      "start_minute": 30, 
      "year": 2015
    }
  ]
}
