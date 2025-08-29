// funtion of coin
function balanceCutter(callBtnId, numberId, headingText) {
  document.getElementById(callBtnId).addEventListener("click", function (e) {
    e.preventDefault();

    const number = document.getElementById(numberId).innerText;
    let coinValue = parseInt(document.getElementById("coin-counter").innerText);

    if (coinValue < 20) {
      alert("Please recharge");
      return;
    }

    alert(`📞 Calling ${number}\n${headingText}`);
    coinValue -= 20;
    document.getElementById("coin-counter").innerText = coinValue;

    // ✅ Update history
    logCall(headingText, number);
  });
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
    .then(() => {
      alert("Number copied to clipboard!");
    })
    .catch(err => {
      console.error("Failed to copy:", err);
    });
      navigator.clipboard.writeText(number)

    let copyVal = parseInt(document.getElementById("copy-cnt").innerText)
        console.log(copyVal)

      copyVal+=1
     let copyNewVal = copyVal;
    document.getElementById("copy-cnt").innerText = copyNewVal;

  
});
}
// call log
function logCall(serviceName, phoneNumber) {
  const historyContainer = document.getElementById("callHistory");

  // Limit to last 5 entries
  if (historyContainer.children.length >= 5) {
    historyContainer.removeChild(historyContainer.firstChild);
  }

  const entry = document.createElement("div");
  entry.className = "bg-gray-200 rounded-xl p-3";

  entry.innerHTML = `
    <h3 class="text-black font-semibold">📞 ${serviceName}</h3>
    <p class="font-bold"> ${phoneNumber}</p>
    <p class="text-sm text-gray-600">Time: ${new Date().toLocaleString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })}</p>
  `;

  historyContainer.insertBefore(entry, historyContainer.firstChild);
}



// histry section
function updateContent(serviceId, numberId) {
  const serviceName = document.getElementById(serviceId).innerText;
  const phoneNumber = document.getElementById(numberId).innerText;

  const historyContainer = document.getElementById("callHistory");

  // Create a new entry
  const entry = document.createElement("div");
  entry.className = "bg-gray-200 rounded-xl p-3";

  const title = document.createElement("h3");
  title.className = "text-black font-semibold";
  title.innerText = serviceName;

  const number = document.createElement("p");
  number.className = "font-bold";
  number.innerText = phoneNumber;

  entry.appendChild(title);
  entry.appendChild(number);
  historyContainer.appendChild(entry);
}




balanceCutter("call-button1","phn-number1","National Emergency")
balanceCutter("call-button2","phn-number2","Police")
balanceCutter("call-button3","phn-number3","Fire-Service")
balanceCutter("call-button4","phn-number4","Ambulance")
balanceCutter("call-button5","phn-number5","Women & Child Helpline")
balanceCutter("call-button6","phn-number6","Anti-Corruption")
balanceCutter("call-button7","phn-number7","Electricity Outage")
balanceCutter("call-button8","phn-number8","Brac")
balanceCutter("call-button9","phn-number9","Bangaladesh Railway")

document.getElementById("clearHistory").addEventListener("click", () => {
  document.getElementById("callHistory").innerHTML = "";
});


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

logCall("heading1","phn-number1")
logCall("heading2","phn-number2")
logCall("heading3","phn-number3")
logCall("heading4","phn-number4")
logCall("heading5","phn-number5")
logCall("heading6","phn-number6")
logCall("heading7","phn-number7")
logCall("heading8","phn-number8")
logCall("heading9","phn-number9")


