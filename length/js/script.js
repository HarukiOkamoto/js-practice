const text = document.querySelector('#text');
const count = document.querySelector('#count');

//イベント: keyup：キーが離されたとき
text.addEventListener('keyup', () => {
    count.textContent = text.value.length;

    if(text.value.length <= 100){
        count.classList.remove('alert');
    }else{
        count.classList.add('alert');
    }
});
