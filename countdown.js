var startTimer = null;

function timer(){
    if(hours.value == 0 && minutes.value == 0 && seconds.value == 0){
        hours.value = 0;
        minutes.value = 0;
        seconds.value = 0;
    }else if(seconds.value !=0){
        seconds.value--
    }else if(minutes.value !=0 && seconds.value == 0){
        seconds.value = 59;
        minutes.value--;
    }else if(hours.value !=0 && minutes.value ==0){
        minutes.value =60;
        hours.value--;
    }
    return;  
}

function stopTimer(){
    clearInterval(startTimer);
}

function start(){
     setInterval(function(){
        timer();
    }, 1000);
    }



function reset(){
    hours.value = 0;
    minutes.value = 0;
    seconds.value = 0;
    startTimer()
}

