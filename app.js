// var likeMe = document.getElementById("likeme")

// var container = document.querySelector(".container")

// container.addEventListener("click", function(){
//     likeMe.classList.remove("hide")
// })
var car_image = document.getElementById('car-image');

car_image.addEventListener('dblclick',function () {
    var likeme = document.getElementById("heart")
    likeme.classList.add('animation')
    
    setTimeout(function(){
        likeme.classList.remove('animation')
    },2000)
})