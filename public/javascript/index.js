
const hidden_canvas = document.querySelector('canvas'); //Deklareras högst upp i dokumentet
// Get video stream
const video= document.getElementById('camera-stream')


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


// Hämta ut knapparna
const take_photo_btn=document.getElementById('take-photo')
const save_photo_btn=document.getElementById('save-photo')

// Eventlistener
take_photo_btn.addEventListener('click', (e) =>{
	console.log("Clicked on take-photo")
	const snap= takeSnapShot() //anropa snapchot funktionen, den returnerar en bild
	const image_tag= document.getElementById('snap') // get image tag
	image_tag.setAttribute("src", snap) // set attribute src
	const save_photo_btn=document.getElementById('save-photo')
	save_photo_btn.setAttribute("href",snap) // set attribute href
	e.preventDefault();
})

// Eventlistener
save_photo_btn.addEventListener('click', (e) =>{
const save_photo_btn=document.getElementById('save-photo')
	save_photo_btn.setAttribute("href",snap) // set attribute href
	e.preventDefault();
})


//Function
const takeSnapShot = () => {
	// Read size, height and width
	const width= document.getElementById('camera-stream').width;
	const height= document.getElementById('camera-stream').height;
	//const size= document.getElementById('camera-stream').size;
	console.log("Width: " + width)
	console.log("Height: " + height)
	//console.log("Size: " + size)

	 // Grab elements, create settings, etc.
    const context = hidden_canvas.getContext("2d")
    context.drawImage(video,0,0,width,height)
    //const picture= context.toDataURL('image/png')
    const src=hidden_canvas.toDataURL("image/png") 
}

const saveSnapShot = () => {

}


//takeSnapShot()


