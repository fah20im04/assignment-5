// funtion of coin
function balanceCutter(id){
      const callButton = document.getElementById(id).addEventListener('click',function(e){
    e.preventDefault();
    // console.log('clicked')

    
let coinValue = parseInt(document.getElementById("coin-counter").innerText)

    if(coinValue<20){
      alert("please recharge")
      return;
    }
    else{
      alert("calling")
    }
    coinValue-=20
let  newValue = coinValue;
console.log(newValue)
document.getElementById("coin-counter").innerText = newValue;

})
}

// function of heart count
function heartCount(id){
      const callButton = document.getElementById(id).addEventListener('click',function(e){
    e.preventDefault();
    // console.log('clicked')

    
let heartValue = parseInt(document.getElementById("heart-counter").innerText)

    heartValue+=1
let  newValue = heartValue;
console.log(newValue)
document.getElementById("heart-counter").innerText = newValue;

})
}
// function to copy

function copyCardNumber(id1,id2) {
document.getElementById(id1).addEventListener("click", function () {
  const numberElement = document.getElementById(id2);
  const number = numberElement.innerText.trim();

  navigator.clipboard.writeText(number)
  
});
}

heartCount("heart1")
heartCount("heart2")
heartCount("heart3")
heartCount("heart4")
heartCount("heart5")
heartCount("heart6")
heartCount("heart7")
heartCount("heart8")
heartCount("heart9")

copyCardNumber("copy-button1","phn-number1")
copyCardNumber("copy-button2","phn-number2")
copyCardNumber("copy-button3","phn-number3")
copyCardNumber("copy-button4","phn-number4")
copyCardNumber("copy-button5","phn-number5")
copyCardNumber("copy-button6","phn-number6")
copyCardNumber("copy-button7","phn-number7")
copyCardNumber("copy-button8","phn-number8")
copyCardNumber("copy-button9","phn-number9")

balanceCutter("call-button1")
balanceCutter("call-button2")
balanceCutter("call-button3")
balanceCutter("call-button4")
balanceCutter("call-button5")
balanceCutter("call-button6")
balanceCutter("call-button7")
balanceCutter("call-button8")
balanceCutter("call-button9")
