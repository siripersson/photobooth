


// Get html elements
const video= document.getElementById('video')// Get video stream
const canvas = document.getElementById('canvas'); // Get canvas
const image=document.getElementById('image');

// Get buttons
const takePhotoButton=document.getElementById('take-photo')
const deleteButton=document.getElementById('delete-photo')
const saveButton=document.getElementById('save-photo')


// Fetch video stream
navigator.mediaDevices.getUserMedia({ video: true })
	.then(function(stream){
		video.src = window.URL.createObjectURL(stream);
		video.play();
	})
	.catch(function(err){
		console.error(err);
	});

//Function to take the snapshot
const takeSnapShot = () => {
	const width= video.width; // get width of videostream
	const height= video.height; // get height
    const context = canvas.getContext("2d") // set context
    context.drawImage(video,0,0,width,height) // draw image
    return canvas.toDataURL("image/png") // return image
}

// Eventlistener for take photo button
takePhotoButton.addEventListener('click', (e) =>{
	const picture= takeSnapShot() //call snapchot function
	image.style.display = "inline"; // place the snapshot beside the video
	image.setAttribute("src", picture) // set attribute src

	// To create a flash
	document.getElementById("flash").style.display = "inline";
	setTimeout(function () {
		document.getElementById("flash").style.display = "none";
	}, 200);

	// Save photo
	saveButton.setAttribute("href", picture) // set attribute href
	e.preventDefault(); 
})

// Eventlistener for delete button
deleteButton.addEventListener('click', (e) =>{
	image.setAttribute("src",'') // set attribute src
	image.style.display = "none"; // set display to none

	// Delete saved photo
	saveButton.setAttribute("href", '') // set attribute href 
	e.preventDefault(); 
}) 




