const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');

const colorBg = () => {
    //選択した色を背景に表示
    document.body.style.backgroundColor = color.value;
    //カラーコードを表示
    text.textContent = 'カラーコード：' + color.value;
}

/* 無名関数
color.addEventLister('input' , () => {
    text.textContent = `カラーコード：${color.value}`
});
*/

color.addEventListener('input', colorBg);

