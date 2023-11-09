let count = 0

const countHeader = document.getElementById("count")
const countAddBtn = document.getElementById("add")
const countMinusBtn = document.getElementById("minus")

countHeader.innerHTML = count

countAddBtn.addEventListener("click",()=>{
    count++
    countHeader.innerHTML = count
})

countMinusBtn.addEventListener("click",()=>{
    count--
    countHeader.innerHTML = count
})