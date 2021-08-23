//Create a reference for canvas 

//Give specific height and width to the car image

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.

function add() {
	//upload car, and background images on the canvas.
}

function uploadBackground() {
	//Define function ‘uploadBackground’

}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	/if rover_y-=0
    {
        console.log( "when up arrow is pressed, x=" + rover_x + "| y= "| "+rover_y");
        uploadBackground();
        uploadwater();
        upLoadrover();
}

function down()
{
	if rover_y-=500
    {
        rover_y += 10;
        console.log( "when down arrow is pressed, x=" + rover_x + "| y= "| "+rover_y");
        uploadBackground();
        uploadwater();
        upLoadrover();
}

function left()
{
	if (rover_x >= 0)
{
    rover_y += 10;
    console.log( "when left arrow is pressed, x=" + rover_x + "| y= "| "+rover_y");
    uploadBackground();
    uploadwater();
    upLoadrover();
    function left ();
}
if (rover_x >= 700)
function right ()
{
    rover_y += 10;
    console.log( "when right arrow is pressed, x=" + rover_x + "| y= "| "+rover_y");
    uploadBackground();
    uploadwater();
    upLoadrover();
