const isAgreed = document.querySelector('#check');
const btn = document.querySelector('#btn');

//イベント change：変化が起きたとき
isAgreed.addEventListener('change', () => {

    btn.disabled = !isAgreed.checked;
    // if (isAgreed.checked === true) {
    //     btn.disabled = false;
    // } else {
    //     btn.disabled = true;
    // }
});