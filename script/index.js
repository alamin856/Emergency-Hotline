// Function To Get Element By Id
function getElement(id){
    const element = document.getElementById(id)
    return element
}

// Heart Button Event Handler
document.getElementById("card-container").addEventListener('click', function(event){
    if(event.target.className.includes("heart-btn")){
        const heartCount = getElement("heart-count").innerText;
        const totalHeartCount = Number(heartCount) + 1;
        getElement("heart-count").innerText = totalHeartCount
    }
})

// Call Button Event Handler

document.getElementById("card-container").addEventListener("click", function(event){
    if(event.target.className.includes("call-btn")){
        const date = new Date().toLocaleTimeString()
        const title = event.target.parentNode.parentNode.children[1].children[0].innerText;
        const phoneNumber = event.target.parentNode.parentNode.children[2].innerText;
        const coinCount = parseInt(getElement("coin-count").innerText);
        if(coinCount >=20){
            alert(`Calling ${title} ${phoneNumber}`)
            const totalCoinCount = coinCount - 20
            getElement("coin-count").innerText = totalCoinCount;

            const histoty = getElement("history");
            const newHistory = document.createElement("div");
            newHistory.innerHTML = `
                    <div class="flex justify-between items-center gap-1 bg-[#FAFAFA] p-5 rounded-lg mt-[16px]">
                        <div>
                            <h3 class="text-[#111111] font-semibold text-[18px]">${title}</h3>
                            <p class="text-[#5C5C5C]">${phoneNumber}</p>
                        </div>
                        <div>
                        <span class="text-[#111111] text-[18px]">${date}</span></div>
                    </div>
            `
            histoty.appendChild(newHistory)
        }else{
            alert("You don't have enough coins. You need at least 20 coins to make a call.")
        }
    }
})


// Copy Button Event Handler
document.getElementById("card-container").addEventListener("click", function(event){
    let phoneNumber = 0   
    
    if(event.target.parentNode.className.includes('copy-btn')){
        phoneNumber = event.target.parentNode.parentNode.parentNode.children[2].innerText
        alert(`Copied ${phoneNumber}`)
        const copyCount = getElement("copy-count").innerText;
        const totalCopyCount = Number(copyCount) + 1
        getElement("copy-count").innerText = totalCopyCount
        navigator.clipboard.writeText(phoneNumber)
    }

    else  if(event.target.className.includes("copy-btn")){
        phoneNumber = event.target.parentNode.parentNode.children[2].innerText
        alert(`Copied ${phoneNumber}`)
        const copyCount = getElement("copy-count").innerText;
        const totalCopyCount = Number(copyCount) + 1
        getElement("copy-count").innerText = totalCopyCount
        navigator.clipboard.writeText(phoneNumber)
       
    }
})


// Clear Button Event Handler
document.getElementById("clear-btn").addEventListener("click", function(){
    const history = document.getElementById("history");
    history.innerHTML = ""
})