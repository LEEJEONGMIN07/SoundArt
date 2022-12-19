var b1, b2, b3, b4, b5, b6, b7, b8, b9, b10;
var playing = false;

var B1, B2, B3, B4, B5, B6, B7, B8, B9, B10; 

var button;
let r,g,b;
var slider;
let value = 0;

let permission = false;

function setup() {
  createCanvas(640, 480);

  r = random(50, 255);
  g = random(0, 200);
  b = random(50, 255);

  b1 = new p5.Oscillator();
  b1.setType('sine');
  b1.start(); 
  b1.freq(261.6);
  b1.amp(0);

  b2 = new p5.Oscillator();
  b2.setType('sine'); 
  b2.start(); 
  b2.freq(293.6);
  b2.amp(0);

  b3 = new p5.Oscillator();
  b3.setType('sine'); 
  b3.start(); 
  b3.freq(329.6);
  b3.amp(0);

  b4 = new p5.Oscillator();
  b4.setType('sine'); 
  b4.start(); 
  b4.freq(349.2);
  b4.amp(0);

  b5 = new p5.Oscillator();
  b5.setType('sine'); 
  b5.start(); 
  b5.freq(391.9);
  b5.amp(0);

  b6 = new p5.Oscillator();
  b6.setType('sine'); 
  b6.start(); 
  b6.freq(440);
  b6.amp(0);

  b7 = new p5.Oscillator();
  b7.setType('sine'); 
  b7.start(); 
  b7.freq(493.8);
  b7.amp(0);

  b8 = new p5.Oscillator();
  b8.setType('sine');
  b8.start();  
  b8.freq(523.2);
  b8.amp(0);

  b9 = new p5.Oscillator();
  b9.setType('sine'); 
  b9.start(); 
  b9.freq(587.3);
  b9.amp(0);

  b10 = new p5.Oscillator();
  b10.setType('sine'); 
  b10.start(); 
  b10.freq(659.2);
  b10.amp(0);


  B1 = createButton('C4');
  B1.touchStarted(toggle1);

  B2 = createButton('D4');
  B2.touchStarted(toggle2);

  B3 = createButton('E4');
  B3.touchStarted(toggle3);

  B4 = createButton('F4');
  B4.touchStarted(toggle4);

  B5 = createButton('G4');
  B5.touchStarted(toggle5);

  B6 = createButton('A4');
  B6.touchStarted(toggle6); 

  B7 = createButton('C5');
  B7.touchStarted(toggle7); 

  B8 = createButton('D5');
  B8.touchStarted(toggle8); 

  B9 = createButton('E5');
  B9.touchStarted(toggle9); 

  B10 = createButton('F5');
  B10.touchStarted(toggle10);

  slider = createSlider(0, 1, 1, 0.01);


  //ios
  if(typeof DeviceMotionEvent.requestPermission === "function") {
    background(255,0,0);
    button = createButton("Click to iOS Sensor");
    button.mousePressed(iosAccess);
    button.position(0,0);
  }else {
    background(0,0,255);
    text("is not a ios", 100, 100);
  }
}

//ios
function iosAccess() {
  DeviceOrientationEvent.requestPermission()
    .then((response) => {
      if(response === "granted"){
        permission = true;
      }
    })
    .catch(console.error);
}

function touchStarted() {
  getAudioContext().resume();
  b1.start();
  b2.start();
  b3.start();
  b4.start();
  b5.start();
  b6.start();
  b7.start();
  b8.start();
  b9.start();
  b10.start();
}

function draw(){
  if(!permission) return;
  //background(255);
  //textSize(72);
  //text(rotationX,100,100);

  b1.setVolume(slider.value());
  b2.setVolume(slider.value());
  b3.setVolume(slider.value());
  b4.setVolume(slider.value());
  b5.setVolume(slider.value());
  b6.setVolume(slider.value());
  b7.setVolume(slider.value());
  b8.setVolume(slider.value());
  b9.setVolume(slider.value());
  b10.setVolume(slider.value());

  background(r, g, b);

  //Multitouch
  clear();
  let display = touches.length + 'touches';
  text(display, 10, 10); 
}

function toggle1(){
  if(!playing){
    b1.start();
    b1.amp(0.5, 1);     
    playing = true;
    B1.html('pause');
  }else{
    b1.stop();
    b1.amp(0, 1);
    playing = false;
    B1.html('C4');
  }
}

function toggle2(){
  if(!playing){
    b2.start();
    b2.amp(0.5, 1);   
    playing = true;
    B2.html('pause');
  }else{
    b2.stop();
    b2.amp(0, 1); 
    playing = false;
    B2.html('D4');
  }
}

function toggle3(){
  if(!playing){
    b3.start();
    b3.amp(0.5, 1);     
    playing = true;
    B3.html('pause');
  }else{
    b3.stop();
    b3.amp(0, 1); 
    playing = false;
    B3.html('E4');
  }
}

function toggle4(){
  if(!playing){
    b4.start();
    b4.amp(0.5, 1);     
    playing = true;
    B4.html('pause');
  }else{
    b4.stop();
    b4.amp(0, 1); 
    playing = false;
    B1.html('F4');
  }
}

function toggle5(){
  if(!playing){
    b5.start();
    b5.amp(0.5, 1);     
    playing = true;
    B5.html('pause');
  }else{
    b5.stop();
    b5.amp(0, 1); 
    playing = false;
    B5.html('G4');
  }
}

function toggle6(){
  if(!playing){
    b6.start();
    b6.amp(0.5, 1);    
    playing = true;
    B6.html('pause');
  }else{
    b6.stop();
    b6.amp(0, 1); 
    playing = false;
    B6.html('A4');
  }
}

function toggle7(){
  if(!playing){
    b7.start();
    b7.amp(0.5, 1);    
    playing = true;
    B7.html('pause');
  }else{
    b7.stop();
    b7.amp(0, 1); 
    playing = false;
    B7.html('C5');
  }
}

function toggle8(){
  if(!playing){
    b8.start();
    b8.amp(0.5, 1);    
    playing = true;
    B8.html('pause');
  }else{
    b8.stop();
    b8.amp(0,1 ); 
    playing = false;
    B8.html('D5');
  }
}

function toggle9(){
  if(!playing){
    b9.start();
    b9.amp(0.5, 1);    
    playing = true;
    B9.html('pause');
  }else{
    b9.stop();
    b9.amp(0, 1); 
    playing = false;
    B9.html('E5');
  }
}

function toggle10(){
  if(!playing){
    b10.start();
    b10.amp(0.5, 1);    
    playing = true;
    B10.html('pause');
  }else{
    b10.stop();
    b10.amp(0, 1); 
    playing = false;
    B10.html('F5');
  }
}

//동작센서(각도값)
function deviceMoved() {
  r = map(rotationX, -180, 180, 100, 175);
  g = map(rotationY, -180, 180, 100, 200);
  b = map(rotationZ, -180, 180, 100, 200);
}