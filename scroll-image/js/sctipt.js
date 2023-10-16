const showKirin = (entries) => {
    const keyframes = {
        opacity: [0, 1],
        translate: ['200px 0', 0],
    }
    entries[0].target.animate(keyframes, 600);
};

//監視ロボットの設定
const kirinObseerver = new IntersectionObserver(showKirin);

//監視するよう指示
kirinObseerver.observe(document.querySelector('#kirin')); 