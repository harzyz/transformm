let vul = false
var val = document.getElementById("dropDown")
var vel = document.getElementById("pages")
var hell = document.querySelector('.menuDrop')
var vil = document.getElementById("dropDownE")
var vol = document.getElementById("elements")

var pen = document.getElementById("dropDownB")
var biro = document.getElementById("blogs")

var paint = document.getElementById("dropDownG")
var ball = document.getElementById("gallery")

vel.addEventListener("mouseover", myFeatures);
vel.addEventListener("mouseout", myBread);
val.addEventListener("mouseover", myFeatures);
val.addEventListener("mouseout", myBread);

vol.addEventListener("mouseover", myRice);
vol.addEventListener("mouseout", myBeans);
vil.addEventListener("mouseover", myRice);
vil.addEventListener("mouseout", myBeans);

hell.addEventListener("click", myCoke);

biro.addEventListener("mouseover", myPen);
biro.addEventListener("mouseout", myBiro);
pen.addEventListener("mouseover", myPen);
pen.addEventListener("mouseout", myBiro);

ball.addEventListener("mouseover", myPaint);
ball.addEventListener("mouseout", myBall);
paint.addEventListener("mouseover", myPaint);
paint.addEventListener("mouseout", myBall);

function myFeatures() {
     var val = document.getElementById("dropDown")
     val.style.display = 'block'
}


function myBread() {
     var pink = document.getElementById("dropDown")
     pink.style.display = 'none'
}


function myRice() {
     var pink = document.getElementById("dropDownE")
     pink.style.display = 'block'
}

function myCoke(){
     vul = !vul;

     var pink = document.querySelector('.nav-bar')
     

     if(vul === true){
          pink.style.display = 'block'
      }else{
          pink.style.display = 'none'
      }
}


function myBeans() {
     var pink = document.getElementById("dropDownE")
     pink.style.display = 'none'
}

function myPen() {
     var pink = document.getElementById("dropDownB")
     pink.style.display = 'block'
}


function myBiro() {
     var pink = document.getElementById("dropDownB")
     pink.style.display = 'none'
}

function myPaint() {
     var pink = document.getElementById("dropDownG")
     pink.style.display = 'block'
}


function myBall() {
     var pink = document.getElementById("dropDownG");
     pink.style.display = 'none';
}
 
function darkMode() {
     const thirdContainer = document.querySelector('.thirdContainer')
     vul = !vul
     if(vul === true){
          document.body.style.backgroundColor = 'black'
          document.body.style.color = 'white'
          thirdContainer.style.backgroundColor = 'black'
     } else {
          document.body.style.backgroundColor = 'white'
          document.body.style.color = 'black'
          thirdContainer.style.backgroundColor = 'white'  
     }
}

let i = 0
var time = 3000;
const track = document.querySelector('.carousel_track')
const slides = Array.from(track.children)
const nextButton = document.querySelector('.carousel_button--right');
const prevButton = document.querySelector('.carousel_button--left');
const dotsNav = document.querySelector('.carousel_nav');
const dots = Array.from(dotsNav.children)
const allText = document.querySelector('.text')
const indText = Array.from(allText.children)

const slideWidth = slides[0].getBoundingClientRect().width

const setSlidePosition = (slide, index) => {
     slide.style.left = slideWidth * index + 'px'
}
 
slides.forEach(setSlidePosition)

window.onload = moveToSlide();
function moveToSlide(){
     const targetSlide = slides[i];
     var len = indText.length;

     var current = indText[i];
     var previous = indText[(i+len-1)%len];
     var next = indText[(i+1)%len];

     const currentDot = dots[i]
     const nextDot = dots[(i+1)%len];
     const prevDot = dots[(i+len-1)%len];
    // move to the next slide
    if(i < slides.length - 1 && i < indText.length - 1 ){
        i++;
    } else {
        i = 0;
    }

    track.style.transform = 'translateX(-' + targetSlide.style.left + ')'
    current.style.display = 'block'
    previous.style.display = 'none'
    next.style.display = 'none'

    nextDot.classList.remove('current-slide')
    prevDot.classList.remove('current-slide')
    currentDot.classList.add('current-slide')

     reapeat()
}

function reapeat(){
    setTimeout(moveToSlide, time)
}

dotsNav.addEventListener('click', doteds())

function doteds() {
     const targetDot = dotsNav.querySelector('button')
     console.log('kelvin');
     if(!targetDot) return
     console.log('fuck off');
}

const commentSection = document.querySelector('.chgComents')
const everyComment = Array.from(commentSection.children)
const commentNav = document.querySelector('.comment_nav')
const commentDot = Array.from(commentNav.children)

function changeComment() {
     var len = everyComment.length;

     var currentComment = everyComment[i];
     var prevComment = everyComment[(i+len-1)%len];
     var nextComment = everyComment[(i+1)%len]; 

     const currentDot = commentDot[i]
     const nextDot = commentDot[(i+1)%len];
     const prevDot = commentDot[(i+len-1)%len];

     if(i < everyComment.length - 1){
          i++;
     } else {
          i = 0;
     }

     currentComment.style.display = 'block'
     prevComment.style.display = 'none'
     nextComment.style.display = 'none'

     nextDot.classList.remove('current-comment')
     prevDot.classList.remove('current-comment')
     currentDot.classList.add('current-comment')

     setTimeout(changeComment, 4000)
}
changeComment()