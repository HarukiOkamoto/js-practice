const showKirin = (entries) => {
    console.log(entries[0]);
};

//監視ロボットの設定
const kirinObseerver = new IntersectionObserver(showKirin);

//監視するよう指示
kirinObseerver.observe(document.querySelector('#kirin'));