const button = document.querySelector(".buttonOn")
const sectionMain = document.querySelector(".sectionMain")
const imagem = document.querySelector(".mainImg")
const title = document.querySelector(".title")
const paragraph = document.querySelector(".paragraph")

let contador = '0'

// function handleChange() {
//     if (contador === '0') {
//         button.className = "buttonOff"
//         contador = '1'
//     } else {
//         button.className = "buttonOn"
//         contador = '0'
//     }
// }

function next() {
    if (contador === '0') {
        imagem.setAttribute('src', "imgs/page2.png")
        title.innerHTML = "Get fast & safe delivery"
        paragraph.innerHTML = "Get good quality products for your plants "
        contador = '1'
    } else if (contador === '1') {
        title.innerHTML = "Buy & Sell Tools"
        paragraph.innerHTML = "Buy & sell good quality products for your beautiful plants"
        imagem.setAttribute('src', "imgs/page3.png")
        contador = '2'
    } 
    // else if (contador ==='2'){
    //     contentPageThree.setAttribute('style', 'display: block')
    //     imagem.setAttribute('src', "imgs/page3.png")
    //     contador = '0'
    // }
}