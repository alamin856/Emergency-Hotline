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

// // Call Button Event Handler
// document.getElementById("card-container").addEventListener("click", function(event){
//     if(event.target.className.includes("call-btn")){
//         const title = event.target.parentNode.parentNode.children[1].children[0].innerText;
//         const subTitle = event.target.parentNode.parentNode.children[1].children[1].innerText;
//         const phoneNumber = event.target.parentNode.parentNode.children[2].innerText;
//         alert(`${title} ${phoneNumber}`)
//     }
// })