var burgersList = [{name: "CLASSIC BURGER", price: "8.500dt", composants: "Served with lettuce, tomato, onion & pickles.100% Certified Angus Beef® & Black Bean burgers include American cheese, Smash Sauce & ketchup on a classic bun."},
{name: "BACON SMASH", price: "9.000dt", composants: "Applewood smoked bacon, American cheese, lettuce, tomato & mayo on a classic bun."},
{name: "BACON AVOCADO CLUB", price: "10.000dt", composants: "With lettuce, tomato, ranch dressing & mayo on a multi-grain bun."},
{name: "BBQ, BACON & CHEDDAR", price: "10.000dt", composants: "With haystack onions on a classic bun."},
{name: "SPICY JALAPEÑO BAJA", price: "12.000dt", composants: "With guacamole, pepper jack, lettuce, tomato, onion & chipotle mayo on a spicy chipotle bun."},
{name: "TRUFFLE MUSHROOM SWISS", price: "14.000dt", composants: "With sautéed crimini mushrooms & truffle mayo on a classic bun."}]

function prepare(body){
	body.html("");
  body.append(
  	$(`
  	<div class="contact">+216 85 478 123</div>
  	<div class="contact"><strong>Contact-Us: </strong></div>
	<div class="name">
		<span class="burger"><i class="yummy">YUMMY</i><img class="logoBurger" src="https://i.pinimg.com/originals/63/0d/96/630d96bbb40088587c50e1fc7307c10a.png">BURGER</span>
		<span class="slogan">Faster Than Your Hunger</span>
		<button id="chooseBurger">Choose Your Burger</button>
	</div>`)
	)
}


function mapper(burgersList){
	return _.map(burgersList, function(burger){
		var name = burger.name
		return $(`<div class= burgerContainer>
		<div class="burgerNameDiv"><span class = "burgerName">` + burger.name +
		 `</span>
		 <button class="addButton" onClick="addToOrder('`+ burger.name +`')" ><i class="fa fa-plus"></i></button></div>
		<div class = burgerComposant>` + burger.composants + `</div>
		<div class = burgerPrice>` + burger.price + `</div>
	</div>`)
	})
}

 function addToOrder(burgerName){
 	console.log({burgerName})
	var $container = $('#container')
	$container.append(burgerName + ' ')
 }



function createMenu(burgersList){
	var $body = $("body");
	_.each(mapper(burgersList), function(burger){
		$body.append(burger)
	})
}

$("#chooseBurger").on("click", function(){
	$('body').html("");
	$('body').append(`<div class= menu>Menu</div>`);
	createMenu(burgersList);
	$('body').append(`<div class="orderContainer">
		<div id="container">Your Order: </div>
		<br>
		<button id="order" class="button1">ORDER NOW</button>
		<button id="return" class="button1">RETURN</button>
	</div>`)

	$('#return').on("click", function(){
	location.reload()
})

	$('#order').on("click", function(){
		$('body').html("");
		$('body').append(`<div class="personalInformations">
		<div class= "fullName">
			<input class="informationButton" type="text" value="Full Name">
			<input class= "informationInput" type="text" placeholder="enter your full name">
		</div>
		<div class= "address">
			<input class="informationButton" type="text" value="Address">
			<input class="informationInput" type="text" placeholder="enter your address">
		</div>
		<div class= "phoneNumber">
			<input class="informationButton" type="text" value="Phone Number">
			<input class="informationInput" type="text" placeholder="enter your phone number">
		</div>
	</div>
	<div class="submitReturn">
		<button id="submit" class="button2">SUBMIT</button>
		<button id="returnButton" class="button2">RETURN</button>
	</div>
	`)

		$('#submit').on("click", function(){
			$('body').html("");
		$('body').append(`<div id="deliveryText">
		<div id="thankYou" class="thankText">Thank You for you Order!</div>
		<div class= "thankText">You will be delivered in "3jeja Time".</div>
		<div id="contactUs" class="thankText">
			<div>For more informations, contact us:</div>
			<div class="number">+216 85 478 123</div>
		</div>
	</div>`)
		})

		$('#returnButton').on("click", function(){
			location.reload()
		})
	})
})

