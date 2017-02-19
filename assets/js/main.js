
const likes = document.getElementById('heart').classList;
let count = 0


// The like function
// removing and adding classes
function newLikes() {
	if (likes.contains("fa-heart-o")) {
	likes.remove("fa-heart-o")
	count ++
	} else {
		likes.add("fa-heart-o")
		count --
	}

	if (likes.contains("fa-heart")) {
	likes.remove("fa-heart")
	} else {
		likes.add("fa-heart")
	}

	document.getElementById('count-likes').innerHTML = count;
} 

let theComment = document.querySelector('.comment');
// Posting comment
document.addEventListener('keyup', function postComment(e) {
	// check to confrim if the enter key is pressed
	if (e.which === 13) {

		let commenting = theComment.value;
		const newElement = this.createElement("H4");
		const newText = this.createTextNode(commenting);
		newElement.appendChild(newText);
		this.querySelector('.default-post').appendChild(newElement);
		// Clear text area after pressing enter		
		theComment.value = "";

	}
});
