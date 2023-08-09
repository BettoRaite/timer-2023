


const hourInput = document.getElementById('hours-input');
const minInput = document.getElementById('minutes-input');
const secInput = document.getElementById('seconds-input');
const startButton = document.getElementById('start-timer-button');
const resetButton = document.getElementById('reset-timer-button');
const logWindow = document.getElementById('log-window');
const timeOutput = document.getElementById('timer-output-text');
const websiteTitle = document.getElementById('website-title');

class Timer {
  constructor() {
    this.isActive = false;
    this.isReset = false;
    this.secondUnit = 1000;
  }

  startTimer() {
    this.isActive = true;
    startCounting(calculateTotalTime());       
  }
  activateResetting()
  {
    this.isReset = true;
    this.secondUnit = 0;
  }
  resetTimer() {
    this.isActive = false;
    this.isReset = false;
    this.secondUnit = 1000;
    
  }


}

const timer = new Timer();
const HOUR_T0_SEC = 3600;
const MIN_TO_SEC = 60;


startButton.addEventListener('click', function() {
    if(!timer.isActive)
      timer.startTimer();
    else
      timer.activateResetting();
});

resetButton.addEventListener('click', function() {
    if(!timer.isReset)
      timer.activateResetting();
    
});

function startCounting(countTime)
{ 
    setTimeout(function() {
      if(!timer.isReset && countTime >= 0)
       {
                outputTime(calculateTimeLeft(countTime));
         
          startCounting(--countTime);
       }
       else
       {
          outputTime(calculateTimeLeft(0));
          timer.resetTimer();
       }    
    }, timer.secondUnit);
}
function calculateTimeLeft(time)
{
  const totalTime = Number(time);
  if(isNaN(totalTime)) 
  {
    outputError();
    return 0;
  }
  
  const hoursLeft = Math.floor(totalTime / HOUR_T0_SEC);
  const minLeft = Math.floor( (totalTime % HOUR_T0_SEC) / MIN_TO_SEC )
  const secLeft = (totalTime % HOUR_T0_SEC) % MIN_TO_SEC;
  return `${hoursLeft} : ${minLeft} : ${secLeft}`;
}
function outputTime(time)
{
  timeOutput.innerText = time;
  websiteTitle.innerText = time;
}
function calculateTotalTime()
{
  const hours = Number(hourInput.value);
  const minutes = Number(minInput.value);
  const seconds = Number(secInput.value);
  
  clearInput();
  
  if(isNaN(hours) || isNaN(minutes) || isNaN(seconds))
    {
      outputError();
      return 0;
    }
      
  
  return hours * HOUR_T0_SEC + minutes * MIN_TO_SEC + seconds;
  
}
function clearInput()
{
  hourInput.value = '';
  minInput.value = '';
  secInput.value = '';
}
function outputError()
{
  const ACTIVE_FOR = 3;value
  logWindow.classList.toggle('active');
  setTimeout(function(){
    logWindow.classList.toggle('active');
  }, 1000 * ACTIVE_FOR); 
}

