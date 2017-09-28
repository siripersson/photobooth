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


// Eventlistener
const take_photo_btn=document.querySelector('#take-photo')

take_photo_btn.addEventListener('click', (a) =>{
	e.preventDefault();
	console.log("Clicked on take-photo")
})

const takeSnapShot = () => {
	// Read size, height and width
	const width= document.getElementById('camera-stream').width;
	const height= document.getElementById('camera-stream').height;
	const size= document.getElementById('camera-stream').size;
	console.log("Width: " + width)
	console.log("Height: " + height)
	console.log("Size: " + size)
}

takeSnapShot()