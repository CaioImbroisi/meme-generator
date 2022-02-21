//Exibir o texto no meme
let inputText = document.querySelector('#text-input')
let memeText = document.querySelector('#meme-text')
let thumbMemeImg = document.querySelector('#thumbMeme')
function getText() {
    memeText.innerHTML = inputText.value
}
inputText.addEventListener('input', getText)



//Exibir imagem no meme
let imgInsert = document.querySelector('#meme-insert')
let memeIMG = document.querySelector('#meme-image')
function getIMG() {
    memeIMG.src = URL.createObjectURL(imgInsert.files[0])
}

imgInsert.addEventListener('change', getIMG)

//Alterar bordas
let containerBorder = document.querySelector('#meme-image-container');

//RED
let btnRed = document.querySelector('#fire')
function changeBorderRed() {
    containerBorder.style.setProperty('border', 'red 3px dashed')
}
btnRed.addEventListener('click', changeBorderRed)

//GREEN
let btnGreen = document.querySelector('#earth')
function changeBorderGreen() {
    containerBorder.style.setProperty('border', 'green 6px groove')
}
btnGreen.addEventListener('click', changeBorderGreen)

//BLUE
let btnBlue = document.querySelector('#water')
function changeBorderBlue() {
    containerBorder.style.setProperty('border', 'blue 5px double')
}
btnBlue.addEventListener('click', changeBorderBlue)



function thumb1() {
    let getMeme = document.querySelector('#meme-1').innerHTML;
    thumbMemeImg.innerHTML = getMeme;
    const imgId = document.querySelector('#thumbMeme img');
    imgId.id = 'meme-image';
}

let meme1 = document.querySelector('#meme-1')
meme1.addEventListener('click', thumb1)



function thumb2() {
    let getMeme = document.querySelector('#meme-2').innerHTML;
    thumbMemeImg.innerHTML = getMeme;
    const imgId = document.querySelector('#thumbMeme img');
    imgId.id = 'meme-image';
}

let meme2 = document.querySelector('#meme-2')
meme2.addEventListener('click', thumb2)


function thumb3() {
    let getMeme = document.querySelector('#meme-3').innerHTML;
    thumbMemeImg.innerHTML = getMeme;
    const imgId = document.querySelector('#thumbMeme img');
    imgId.id = 'meme-image';
}

let meme3 = document.querySelector('#meme-3')
meme3.addEventListener('click', thumb3)

function thumb4() {
    let getMeme = document.querySelector('#meme-4').innerHTML;
    thumbMemeImg.innerHTML = getMeme;
    const imgId = document.querySelector('#thumbMeme img');
    imgId.id = 'meme-image';
}

let meme4 = document.querySelector('#meme-4')
meme4.addEventListener('click', thumb4)

