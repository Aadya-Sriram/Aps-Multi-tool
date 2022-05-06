
var browser
var input
var camera
var wallpaper
var wallpaperimg
var wallpaper1


function preload(){
wallpaperimg = loadImage("hut.png")

}
function setup() {

  "use strict";


let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let cron;

document.form_main.start.onclick = () => start();
document.form_main.pause.onclick = () => pause();
document.form_main.reset.onclick = () => reset();
function start() {
  pause();
  cron = setInterval(() => { timer(); }, 10);
}

function pause() {
  clearInterval(cron);
}

function reset() {
  hour = 0;
  minute = 0;
  second = 0;
  millisecond = 0;
  document.getElementById('hour').innerText = '00';
  document.getElementById('minute').innerText = '00';
  document.getElementById('second').innerText = '00';
  document.getElementById('millisecond').innerText = '000';
}
function timer() {
  if ((millisecond += 10) == 1000) {
    millisecond = 0;
    second++;
  }
  if (second == 60) {
    second = 0;
    minute++;
  }
  if (minute == 60) {
    minute = 0;
    hour++;
  }
  document.getElementById('hour').innerText = returnData(hour);
  document.getElementById('minute').innerText = returnData(minute);
  document.getElementById('second').innerText = returnData(second);
  document.getElementById('millisecond').innerText = returnData(millisecond);
}

function returnData(input) {
  return input > 10 ? input : `0${input}`
}
let camera_button = document.querySelector("#start-camera");
let video = document.querySelector("#video");
let click_button = document.querySelector("#click-photo");
let canvas = document.querySelector("#canvas");

camera_button.addEventListener('click', async function() {
   	let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
	video.srcObject = stream;
});

click_button.addEventListener('click', function() {
   	canvas.getContext('2d').drawImage(video, 0, 0, 250, 250);
   	let image_data_url = canvas.toDataURL('image/jpeg');

   	// data url of the image
   	console.log(image_data_url);
});
  
  createCanvas(windowWidth,windowHeight);


  browser = createButton("Sign in")
  browser.position(10,50)
  browser.scale = 0.09
  browser.mouseClicked(open)



  input = createInput("Browser")
  input.position(800,100)
}

function draw() {
  
  


  const value=input.value();

  switch(value) {
  
    case 'what is an engine' :
      textSize(24)
      text("A machine with moving parts that converts power into motion.",200,200)
      break;
    case 'what is the capital of india' :
      text("the capital of india is new dehli",);
      break;
    case 'what are the laws of energy' :
      text("energy can not be destroyed or created it can only be transformed");
      break;
    case 'what is youtube' :
      text("Enjoy the videos and music you love, upload original content and share it all with friends, family and the world on YouTube.");
      break;
     
        case 'what is duo' :
          text("Google Duo is a video chat mobile app developed by Google, available on the Android and iOS operating systems. It was announced at Google's developer conference on May 18, 2016, and began its worldwide release on August 16, 2016. It is also available to use via Google's Chrome web browser on desktop and laptop computers.");
          break;
          case 'how far is the sun' :
            text("147.33 million km");
            break;
            case 'what is web browser' :
              text("web browser is made by Aadya sriram and he has made a java scipt calculator in the past he now has made this web browser ");
              break;
              case 'what is the fastest car in the world' :
                text("SSC Tuatara");
                break;
                case 'what is the biggest number' :
                  text("The biggest number referred to regularly is a googolplex (10googol), which works out as 1010^100. To show how ridiculous that number is, mathematician Wolfgang H Nitsche started releasing editions of a book trying to write it down.");
                  break;
                  
    case 'web browser please give my easter egg' :
      text("you have my blessing to go and use this Web browser thankyou");
      break;
    default:
      text("Sorry :( we can not answer question please enter another question");
      break;
      background
      drawSprites()
  }
  
}

function open(){
var pro = prompt("Enter Email")
if(pro !=null){
alert("Great! Now you are verifed  "+pro)
var phone = prompt("Enter Phone number")
if(phone !=null){
alert("Your Phone no: is " +phone)
alert("Your account has been successfully created!")

}

}
}
function open2(){
  textSize(0)
  text("Allow camera access",200,200)
}
function open3(){


}