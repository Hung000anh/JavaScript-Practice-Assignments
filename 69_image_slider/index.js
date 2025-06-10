const slides = document.querySelectorAll(".slides img")
let interval = null;
let slideIndex = 0;

console.log(slides.length)
document.addEventListener("DOMContentLoaded", initializeSlider)
function initializeSlider(){
    slides[slideIndex].classList.add("displaySlide")
    interval = setInterval(nextSlide, 5000);
}
function showSlide(index)
{
    if(index >= slides.length) //>=3
    {
        index = 0; 
    }
    else if(index < 0)
    {
        index = slides.length - 1
    }
    
    console.log(`index: ${index}`)
    slides.forEach(element => {
        element.classList.remove("displaySlide")
    });
    slides[index].classList.add("displaySlide")

    slideIndex = index
}

function nextSlide()
{
    clearInterval(interval);
    slideIndex++;
    console.log(`slideIndex: ${slideIndex}`)
    showSlide(slideIndex);
    
}

function prevSlide()
{
    clearInterval(interval);
    slideIndex--;
    console.log(`slideIndex: ${slideIndex}`)
    showSlide(slideIndex);
    
}