var showTime = document.getElementById("clock")

setInterval(()=>{
    // showTime.innerHTML = currTime
    // console.log(currTime);
    showTime.innerHTML = new Date().toLocaleTimeString()

},1000)

// console.log(currTime);