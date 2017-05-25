function mCards(name, cost , image) {
	this.name = name
	this.cost = cost
	this.image = image
	this.tax = function(){
		return this.cost * 0.085
	}
}

var C1 = new mCards('Unmake', 1, "images/Unmake.jpeg")
var C2 = new mCards('All is Dust', 28, "images/allisdust.jpeg")
var C3 = new mCards('Ulamog, the Infinite Gyre', 17, 'images/Ulamog.jpeg')
var C4 = new mCards('Black Lotus (beta)', 12675, 'images/Lotus.jpg')

var C5 = new mCards('Mox Emerald', 2500, 'images/emerald.jpg')
var C6 = new mCards('Goblin Lackey', 15, 'images/goblin.jpeg')
var C7 = new mCards('Ugin, The Dragon Spirit', 110, 'images/ugin.jpeg')
var C8 = new mCards('Emrakul, The Aeons Torn', 31.50, 'images/emrakul.jpg')


var cardArray = [C1, C2, C3, C4, C5, C6, C7, C8]
//console.log(cardArray)

for (var i = 0; i < cardArray.length; i++) {
	console.log(cardArray[i].tax())

	// creating elements
	var newDiv = document.createElement('div')
	var newH2 = document.createElement('h2')
	var newH3 = document.createElement('h3')
	var newP = document.createElement('p')
	var newImg = document.createElement('img')
	var btn = document.createElement('button')
	// 
	var mBtn = document.createTextNode('Buy Now!')
	var h2Content = document.createTextNode(cardArray[i].name)
	var h3Content = document.createTextNode('Cost: ' + cardArray[i].cost)
	var pContent = document.createTextNode('Estimate Price: ' + (cardArray[i].cost + cardArray[i].tax()))
	//var newImg = document.createTextNode()

	// now to appendchild my create textnodes
	btn.appendChild(mBtn)
	newH2.appendChild(h2Content)
	newH3.appendChild(h3Content)
	newP.appendChild(pContent)
	newImg.src = cardArray[i].image
	//linking everything into the newDiv
	newDiv.appendChild(newH2)
	newDiv.appendChild(newH3)
	newDiv.appendChild(newP)
	newDiv.appendChild(newImg)
	newDiv.appendChild(btn)
	newDiv.className = "Magic Card: " + [i] + " thumbnail"

	document.getElementById('display').appendChild(newDiv)
	// this creates the id to the button
	btn.setAttribute('id', 'link',)
	// the onclick function...?
	btn.onclick = function(){
		window.location = 'http://www.tcgplayer.com/'
	}








	// adding classes
	newImg.className = 'img-responsive'
	newDiv.className = 'col-sm-3  crop'
	// button
	btn.className = 'btn-default'






}

