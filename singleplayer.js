function checkans() {
    const ansPanelText = document.querySelector(`#q${slideIndex}`);
    
    var input = document.getElementById(`userInput${slideIndex}`).value;
    var _srcn = document.getElementById(`sat${slideIndex}`).src.slice(29, -5).split('_');
    var _src = _srcn.toString().replace(/%20/g, " ");
    console.log(_src);
    if (_src.includes(input.toLowerCase())) 
        {alert("CORRECT ANSWER!");
        score += 4;
        ansPanelText.textContent = "Answered";
        document.getElementById(`q${slideIndex}`).style.color = "lime";
        document.getElementById(`userInput${slideIndex}`).style.backgroundColor = "lightgreen";} else
         {alert("WRONG ANSWER!")
         score -= 1;
         ansPanelText.textContent = "Wrong Answer";
         document.getElementById(`q${slideIndex}`).style.color = "red";
         document.getElementById(`userInput${slideIndex}`).style.backgroundColor = "coral"};
         console.log(score);
         
}

document.getElementById("countdown-timer").innerHTML = "02:00";
startTimer();
function startTimer() {
    var time = document.getElementById("countdown-timer").innerHTML;
    var TimeArr = time.split(/[:]+/);
    var min = TimeArr[0];
    var sec = checkSec((TimeArr[1]-1));
    if (sec == 59) {
        min -= 1;
    }
    if (min == 0 && sec == 59) {
        min = "0" + min;
    }
    if (min<0){
        alert(`Your score is ${score}\nClick on OK to play again`);
        location.reload();
        return
    }

    document.getElementById("countdown-timer").innerHTML = min + ":" + sec;
    setTimeout(startTimer, 1000);
}

function checkSec(sec) {
    if (sec < 10 && sec >= 0) {
        sec = "0" + sec;
    }

    if (sec < 0) {
        sec = "59";
    }
    return sec;
}

var score = 0;


window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft"){
       SlideChange(-1);
    } else if (e.key === "ArrowRight"){
       SlideChange(1);
    }
 })

var slideIndex = 1;
showSlides(slideIndex);
function SlideChange(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("satelliteimage");
    console.log(slides);
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    document.getElementById(`userInput${slideIndex}`).focus();
}

var locations = [
    "cities/mumbai1.png",
    "cities/mumbai2.png",
    "cities/mumbai3.png",
    "cities/mumbai4.png",
    "cities/mumbai5.png",
    "cities/kolkata1.png",
    "cities/kolkata2.png",
    "cities/kolkata3.png",
    "cities/kolkata4.png",
    "cities/kolkata5.png",
    "cities/chennai1.png",
    "cities/chennai2.png",
    "cities/chennai3.png",
    "cities/chennai4.png",
    "cities/chennai5.png",
    "cities/bangalore_bengaluru1.png",
    "cities/bangalore_bengaluru2.png",
    "cities/bangalore_bengaluru3.png",
    "cities/bangalore_bengaluru4.png",
    "cities/bangalore_bengaluru5.png",
    "cities/new_delhi1.png",
    "cities/new_delhi2.png",
    "cities/new_delhi3.png",
    "cities/new_delhi4.png",
    "cities/new_delhi5.png",
    "cities/new_delhi6.png",
    "cities/gurugram_gurgaon1.png",
    "cities/gurugram_gurgaon2.png",
    "cities/gurugram_gurgaon3.png",
    "cities/gurugram_gurgaon4.png",
    "cities/gurugram_gurgaon5.png",
    "cities/ahmedabad1.png",
    "cities/ahmedabad2.png",
    "cities/ahmedabad3.png",
    "cities/ahmedabad4.png",
    "cities/ahmedabad5.png",
    "cities/hyderabad1.png",
    "cities/hyderabad2.png",
    "cities/hyderabad3.png",
    "cities/hyderabad4.png",
    "cities/hyderabad5.png",
    "cities/miami1.png",
    "cities/miami2.png",
    "cities/miami3.png",
    "cities/miami4.png",
    "cities/miami5.png",
    "cities/rio de janeiro1.png",
    "cities/rio de janeiro2.png",
    "cities/rio de janeiro3.png",
    "cities/rio de janeiro4.png",
    "cities/rio de janeiro5.png",
    "cities/london1.png",
    "cities/london2.png",
    "cities/london3.png",
    "cities/london4.png",
    "cities/london5.png",
    "cities/tokyo1.png",
    "cities/tokyo2.png",
    "cities/tokyo3.png",
    "cities/tokyo4.png",
    "cities/tokyo5.png",
    "cities/new york city1.png",
    "cities/new york city2.png",
    "cities/new york city3.png",
    "cities/new york city4.png",
    "cities/new york city5.png",
    "cities/sydney1.png",
    "cities/sydney2.png",
    "cities/sydney3.png",
    "cities/sydney4.png",
    "cities/sydney5.png",
    "cities/los angeles1.png",
    "cities/los angeles2.png",
    "cities/los angeles3.png",
    "cities/los angeles4.png",
    "cities/los angeles5.png",
    "cities/paris1.png",
    "cities/paris2.png",
    "cities/paris3.png",
    "cities/paris4.png",
    "cities/paris5.png",
    "cities/moscow1.png",
    "cities/moscow2.png",
    "cities/moscow3.png",
    "cities/moscow4.png",
    "cities/moscow5.png",
    "cities/buenos aires1.png",
    "cities/buenos aires2.png",
    "cities/buenos aires3.png",
    "cities/buenos aires4.png",
    "cities/buenos aires5.png",
    "cities/istanbul1.png",
    "cities/istanbul2.png",
    "cities/istanbul3.png",
    "cities/istanbul4.png",
    "cities/istanbul5.png",
    "cities/madrid1.png",
    "cities/madrid2.png",
    "cities/madrid3.png",
    "cities/madrid4.png",
    "cities/madrid5.png"
];

for (var satelliteimagecount = 1; satelliteimagecount <= 10; satelliteimagecount++) {
    let i = Math.floor(Math.random()*locations.length);
    eval('if (typeof sat' + satelliteimagecount + '.src !== String) {sat' + satelliteimagecount + '.src = locations[i]}');
    eval('console.log(`Image ${sat' + satelliteimagecount + '.src}`);');
    delete locations[i];
    locations = locations.filter(e => e.length);
}

console.log(locations);
