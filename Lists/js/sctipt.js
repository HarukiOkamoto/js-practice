const menu = document.querySelector('#menu');

// オブジェクト
// const sample01 = {
//     name: 'mikey',
//     img: 'sample01.jpg',
//     sex: 'man',
// };

//配列
const lists = [
    {
        name: 'mikey',
        img: 'sample01.jpg',
        sex: 'man'

    },
    {
        name: 'starwars',
        img: 'sample02.jpg',
        sex: 'unknown'
    },
    {
        name: 'art',
        img: 'sample03.jpg',
        sex: 'unknown'
    },
    {
        name: 'siro',
        img: 'sample04.jpg',
        sex: 'man'
    },
];

// console.log(lists[0].name);

for (let i = 0; i < lists.length; i++) {
    // const name = lists[i].name;
    // const img = lists[i].img;
    // const sex = lists[i].sex;

    //分割代入
    const { name, img, sex } = lists[i];

    const content = `<div><img src="img/${img}" alt="sample">
    <h2>${name}</h2><p>${sex}</p>`;
    menu.insertAdjacentHTML('beforeend', content);
}

