console.log("Welcome to JaveScript Events");

const family = document.getElementById("family");
const nsfw = document.getElementById("nsfw");
const water = document.getElementById("water");
const tupperware = document.getElementById("tupperware");
const my_input = document.getElementById("my_input");
const response = document.getElementById("response");

const btnClicked = (event) => {
    console.log(event.target.id)
}

