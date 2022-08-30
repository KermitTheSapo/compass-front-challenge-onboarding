const button = document.querySelector(".buttonOn")
const sectionMain = document.querySelector(".contentPageOne")
const contentPageTwo = document.querySelector(".contentPageTwo")
const contentPageThree = document.querySelector(".contentPageThree")
const imagem = document.querySelector(".mainImg")

let contador = '0'

function handleChange() {
    if (contador === '0') {
        button.className = "buttonOff"
        contador = '1'
    } else {
        button.className = "buttonOn"
        contador = '0'
    }
}

function next() {
    if (contador === '0') {
        sectionMain.className = "contentPageTwo"
        contentPageTwo.setAttribute('style', 'display: block')
        imagem.setAttribute('src', "imgs/page2.png")
        contador = '1'
    } else if (contador === '1') {
        sectionMain.className = "contentPageOne"
        contentPageTwo.setAttribute('style', 'display: none')
        imagem.setAttribute('src', "imgs/page1.png")
        contador = '2'
    } else if (contador ==='2'){
        sectionMain.className = "contentPageThree"
        contentPageThree.setAttribute('style', 'display: block')
        imagem.setAttribute('src', "imgs/page3.png")
        contador = '0'
    }
}