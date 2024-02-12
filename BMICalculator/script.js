const form = document.querySelector("form")
form.addEventListener('submit' , (e)=> {

    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value) 
    const weight = parseInt(document.querySelector("#weight").value)
    const result = document.querySelector("#results")

    if(height === '' || height <0 || isNaN(height)){
        result.innerHTML = "Please give a valid height"
        form.reset()
    }
    else if(weight === '' || weight <0 || isNaN(weight)){
        result.innerHTML = "Please give a valid weight"
        form.reset()
    }
    else{
        const heightInMeters = height/100
        const BMI = ((weight)/(heightInMeters*heightInMeters)).toFixed(2)
        result.innerHTML = BMI
    }
    
})





// const btn = document.querySelector("button")
// btn.addEventListener('click' , ()=> {
    
//     // console.log(BMI)
//     const result = document.querySelector("#results")
//     const h1 = document.createElement("h1")
//     h1.innerHTML = BMI 
//     result.appendChild(h1)
// })