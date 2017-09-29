
const hidden_canvas = document.getElementById('canvas'); // Get canvas
const video= document.getElementById('camera-stream')// Get video stream

// Fetch video stream
navigator.getMedia = (navigator.getUserMedia ||
          navigator.webkitGetUserMedia ||
          navigator.mozGetUserMedia ||
          navigator.msGetUserMedia);
navigator.getMedia( { video: true }, (stream) => {
  video.src = window.URL.createObjectURL(stream);
  video.play();
  },
  (err) => {
    console.error(err);
  }
);

// Fetch the buttons
const take_photo_btn=document.querySelector('#take-photo')
const save_photo_btn=document.querySelector('#save-photo')
const delete_photo_btn=document.querySelector('#delete-photo')

// Eventlistener for take photo button
take_photo_btn.addEventListener('click', (e) =>{
	console.log("Clicked on take-photo")
	const snap= takeSnapShot() //anropa snapchot funktionen, den returnerar en bild
	const image_tag= document.getElementById('snap') // get image tag
	image_tag.setAttribute("src", snap) // set attribute src

	// Save photo
	const save_tag= document.getElementById('save-photo')
	save_tag.setAttribute("href", snap) // set attribute href
	e.preventDefault();
})

// Eventlistener for save button
save_photo_btn.addEventListener('click', (e) =>{
	console.log("save photo")
})

// Eventlistener for delete button
delete_photo_btn.addEventListener('click', (e) =>{
	const image_tag2= document.getElementById('snap') // get image tag
	image_tag2.setAttribute("src",'') // set attribute src

	// Save photo
	const save_tag2= document.getElementById('save-photo')
	save_tag2.setAttribute("href", '') // set attribute href
	console.log("Delete photo")
	e.preventDefault();
})


//Function
const takeSnapShot = () => {
	const width= document.getElementById('camera-stream').width; // get width of videostream
	const height= document.getElementById('camera-stream').height; //get height
	//const width=video.videoWidth;
	//const height=video.videoHeight; // fotot blev för stort när man använde dessa
	console.log("Width: " + width)
	console.log("Height: " + height)

	 // Grab elements, create settings, etc.
    const context = hidden_canvas.getContext("2d")
    context.drawImage(video,0,0,width,height)
    return hidden_canvas.toDataURL("image/png") // returnerar en bild

}



