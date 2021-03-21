const pinBtn = document.getElementById ("pin-button")
let inpDsply = document.getElementById ("input-display")
let  pinDsply = document.getElementById("pin-display").value


pinBtn.addEventListener("click", function(){
    
    pinDsply = Math.round (1000+ Math.random()*9000)
    document.getElementById("pin-display").value = pinDsply
})

const keys = document.getElementsByClassName("button")
for (let i = 0; i < keys.length; i++) {
    const number = keys[i];
    const action = number.dataset.action
    number.addEventListener("click", function(){
        if (!action){
            const keyContent = number.textContent
            const displayedNum = inpDsply.value
            // console.log (keyContent)
            // console.log (displayedNum)
            inpDsply.value = displayedNum + keyContent 
        }

        if (action==="all-clear"){
            inpDsply.value = ""
        }

        if (action === "delete") {
            inpDsply.value = inpDsply.value.substring (0,inpDsply.value.length-1)
        }
        
    })
}

const submit = document.getElementById ("pin-submit")
submit.addEventListener ("click", function(){
     
        const success = document.getElementById ("succeeded")
        const failure = document.getElementById ("failed")
        
        if (inpDsply.value == pinDsply) {
            
            success.style.display = "block"
            failure.style.display = "none"
        } else {
            let tried = document.getElementById ("caution").textContent
            let actualNum = parseInt(tried)
            failure.style.display = "block"
            success.style.display = "none"

            // console.log(actualNum) 
            // console.log (typeof (actualNum)) 
            
            actualNum = actualNum - 1 
            document.getElementById ("caution").textContent = actualNum
            if (actualNum == 0) {
                submit.style.display="none"
            }
        }
    
    
    // console.log (inpDsply.value)
    // console.log (pinDsply)
})



