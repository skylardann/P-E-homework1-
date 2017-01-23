level 6
function onestep () {
  if (getColor()=="blue") {
  down();
  down();
  down();
    
} else {
  up();
  up();
  up();
  }
  
}
 
    
function bluestep () {
if (getColor()=="red") {
  left();
  up();
  down();
} else {
  right();
  up();
  down();
  }
}

right(); 
onestep();
bluestep();



