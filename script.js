let display = document.getElementById('display');
let buttons = document.querySelectorAll('.button');

let string = '';

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            display.value = string;
        } else if (e.target.innerHTML == 'AC') {
            string = '';
            display.value = string;
        } else if (e.target.innerHTML == '=') {
            try {
                string = eval(string);
                display.value = string;
            } catch (error) {
                display.value = 'Error';
            }
        } else {
            string += e.target.innerHTML;
            display.value = string;
        }
    });
});
