const loadingAreaGrey = document.querySelector('#loading');
const loadingAreaGreen = document.querySelector('#loading-screen');
const loadingText = document.querySelector('#loading p');

window.addEventListener('load', () => {
    //ローディング中(グレースクリーン)
    loadingAreaGrey.animate(
        {
            opacity: [1, 0], //だんだん薄くする
            visibility: 'hidden', //消えるがレイアウトには影響する　visible(可視),hidden(不可視),collapse(消える)
        },
        {
            duration: 2000, //時間（２秒）
            delay: 1200, //遅れ
            easing: 'ease', //初めと終わりをゆっくりに
            fill: 'forwards', //アニメーションの実行の前後にどう対象にスタイルを適用するかを設定。
        }
    );

    //ローディング中(薄緑スクリーン)
    loadingAreaGreen.animate(
        {
            translate: ['0 100vh', '0 0', '0 -100vh']
        },
        {
            duration: 2000,
            delay: 800,
            easing: 'ease',
            fill: "forwards",
        }
    );

    loadingText.animate(
        [
            {
                opacity: 1,
                offset: .8 //80%
            },
            {
                opacity: 0,
                offset: 1 //100%

            },
        ],
        {
            duration: 1200,
            easing: 'ease',
            fill: "forwards",
        }

    );
});