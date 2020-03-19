console.log("Welcome to JaveScript Events");

const family = document.getElementById("family");
const nsfw = document.getElementById("nsfw");
const water = document.getElementById("water");
const tupperware = document.getElementById("tupperware");
const my_input = document.getElementById("my_input");
const response = document.getElementById("response");

const btnClicked = (event) => {
    console.log(event.target.id)

    // response.innerHTML = my_input.value;

    switch(event.target.id) {
        case "family": 
            response.innerHTML = "Gotta love em";
            my_input.value = "";
            break;
        case "nsfw":
            response.innerHTML = "Edited to be family friendly";
            my_input.value = "";
            break;
        case "water":
            response.innerHTML = "Stay thirsty my friends";
            my_input.value = "";
            break;
        case "tupperware":
            response.innerHTML = "Thanks mom";
            my_input.value = "";
            break;

    }
}

family.addEventListener("click", btnClicked);
nsfw.addEventListener("click", btnClicked);
water.addEventListener("click", btnClicked);
tupperware.addEventListener("click", btnClicked);