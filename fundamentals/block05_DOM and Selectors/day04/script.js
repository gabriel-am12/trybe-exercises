
window.onload = function () {

    function fillBackGroundColor(selectedColor) {
        let textContent = document.querySelector('.textContent');
        textContent.style.backgroundColor = selectedColor;
        localStorage.setItem('backGroundColor', selectedColor);
    }

    let buttonsOfBackGroundColor = document.querySelectorAll('#backgroundColor>button');
    for (let index = 0; index < buttonsOfBackGroundColor.length; index += 1) {
        buttonsOfBackGroundColor[index].addEventListener('click', function(event) {
            fillBackGroundColor(event.target.innerHTML);
        })
    }

    function fillFontColor(selectedColor) {
        let paragraphs = document.querySelectorAll('.prgph');
        for (let index = 0; index < paragraphs.length; index += 1) {
            paragraphs[index].style.color = selectedColor;
        }
        localStorage.setItem('fontColor', selectedColor);
    }

    let buttonsOfFontColor = document.querySelectorAll('#fontColor>button');
    for (let index = 0; index < buttonsOfFontColor.length; index += 1) {
        buttonsOfFontColor[index].addEventListener('click', function(event) {
            fillFontColor(event.target.innerHTML);
        })
    }

    function fillFontSize(selectedSize) {
        let paragraphs = document.querySelectorAll('.prgph');
        for (let index = 0; index < paragraphs.length; index += 1) {
            paragraphs[index].style.fontSize = selectedSize;
        }
        localStorage.setItem('fontSize', selectedSize);
    }

    let buttonsOfFontSize = document.querySelectorAll('#fontSize>button');
    for (let index = 0; index < buttonsOfFontSize.length; index += 1) {
        buttonsOfFontSize[index].addEventListener('click', function(event) {
            fillFontSize(event.target.innerHTML);
        })
    }

    function fillLineHeight(selectedSize) {
        let paragraphs = document.querySelectorAll('.prgph');
        for (let index = 0; index < paragraphs.length; index += 1) {
            paragraphs[index].style.lineHeight = selectedSize;
        }
        localStorage.setItem('lineHeight', selectedSize);
    }

    let buttonsOfLineHeight = document.querySelectorAll('#lineHeight>button');
    for (let index = 0; index < buttonsOfLineHeight.length; index += 1) {
        buttonsOfLineHeight[index].addEventListener('click', function(event) {
            fillLineHeight(event.target.innerHTML);
        })
    }

    function fillFontFamily (selectedFamily) {
        let paragraphs = document.querySelectorAll('.prgph');
        for (let index = 0; index < paragraphs.length; index += 1) {
            paragraphs[index].style.fontFamily = selectedFamily;
        }
        localStorage.setItem('fontFamily', selectedFamily);
    }

    let buttonsOfFontFamily = document.querySelectorAll('#fontFamily>button');
    for (let index = 0; index < buttonsOfFontFamily.length; index += 1) {
        buttonsOfFontFamily[index].addEventListener('click', function(event) {
            fillFontFamily(event.target.innerHTML);
        })
    }

    function pageInit() {
        let backGroundColor = localStorage.getItem('backGroundColor');
        if (backGroundColor) fillBackGroundColor(backGroundColor);

        let fontColor = localStorage.getItem('fontColor');
        if (fontColor) fillFontColor(fontColor);

        let fontSize = localStorage.getItem('fontSize');
        if (fontSize) fillFontSize(fontSize);

        let lineHeight = localStorage.getItem('lineHeight');
        if (lineHeight) fillFontSize(lineHeight);

        let fontFamily = localStorage.getItem('fontFamily');
        if (fontFamily) fillFontSize(fontFamily);
    }
    pageInit();
}