let screen = document.querySelector(".screen");
let clr = document.querySelector(".top");

const wipe = () => {
    screen.value = '';
};

const show = (n) => {
    screen.value += n;
};

const solve = () => {
    screen.value = eval(screen.value);
};