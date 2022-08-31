const ButtonOne = document.querySelector(".ButtonOne")
const ButtonTwo = document.querySelector(".ButtonTwo")
const ButtonThree = document.querySelector(".ButtonThree")
const sectionMain = document.querySelector(".sectionMain")
const img = document.querySelector(".mainImg")
const title = document.querySelector(".title")
const paragraph = document.querySelector(".paragraph")
const ContinueButton = document.querySelector(".ContinueButton")
const skipParagraph = document.querySelector(".skipParagraph")
let counter = '0'


function next() {
    if (counter === '0') {
        img.setAttribute('src', "imgs/page2.png")
        title.innerHTML = "Get fast & safe delivery"
        paragraph.innerHTML = "Get good quality products for your plants "
        ButtonOne.setAttribute('style', 'background-color: white;')
        ButtonTwo.setAttribute('style', 'background-color: var(--main-color);')
        counter = '1'
    } else if (counter === '1') {
        title.innerHTML = "Buy & Sell Tools"
        paragraph.innerHTML = "Buy & sell good quality products for your beautiful plants"
        img.setAttribute('src', "imgs/page3.png")
        ButtonTwo.setAttribute('style', 'background-color: white;')
        ButtonThree.setAttribute('style', 'background-color: var(--main-color);')
        ContinueButton.innerHTML = "Get started"
        skipParagraph.setAttribute('style', 'display: none;')
        counter = '2'
    } 
}