let img_hover = document.querySelector('.hover_image img');
let img_slider = document.querySelector('.wrapper_slider img');
let load_image = new Image();
let link_img =
    'img/a3.png';
let btn_first = document.querySelectorAll('button');
img_hover.addEventListener('mouseenter', () => {
    img_hover.setAttribute('src', link_img);
});
img_hover.addEventListener('mouseleave', () => {
    img_hover.setAttribute('src', 'img/a4.png');
});
function loadImage() {
    load_image.src = link_img;
    arrayImage.forEach((element) => {
        let load_image = new Image();
        load_image.src = element;
    });
}
let arrayImage = [
    "img/a5.png",
    "img/a6.png",
    "img/a7.png",
    "img/a8.png",
    "img/a9.png",
];
let currentIndex = -1;
btn_first.forEach((element) => {
    element.addEventListener('click', () => {
        let text = element.innerText;
        switch (text) {
            case 'first':
                currentIndex = 0;
                img_slider.setAttribute('src', arrayImage[currentIndex]);
                break;
            case 'prev':
                if (currentIndex > 0) {
                    currentIndex--;
                    img_slider.setAttribute('src', arrayImage[currentIndex]);
                }
                break;
            case 'next':
                if (currentIndex < arrayImage.length - 1) {
                    currentIndex++;
                    img_slider.setAttribute('src', arrayImage[currentIndex]);
                }
                break;
            case 'last':
                currentIndex = arrayImage.length - 1;
                console.log(currentIndex);
                img_slider.setAttribute('src', arrayImage[currentIndex]);
                break;
            default:
                break;
        }
    });
});
