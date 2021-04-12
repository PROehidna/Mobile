var fourth = 'текст';
document.getElementById("fourth").innerHTML = fourth;

document.fourth.value = 'текст'
function insert(symbol) {
        if(document.form.textView.value.slice('-1') === symbol) {
            symbol = '';
    }
    document.form.textView.value = document.form.textView.value + symbol;
}

function equal() {
    let exp = document.form.textView.value;
    try{
        document.form.textView.value = eval(exp);
        document.getElementById("fourth").innerHTML = eval(exp);
    }
    catch{
        alert('невалидно');
    }
}

function clean() {
    document.form.textView.value = '';
}

function backspace() {
    let exp = document.form.textView.value.slice(0, -1);
    document.form.textView.value = exp;
}
