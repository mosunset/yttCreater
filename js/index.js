console.log("Hello world!");

const myPlayer = videojs('video1');
myPlayer.ready(() => {


    const currentVolume = myPlayer.volume();

    // 音量を指定
    myPlayer.volume(0.1);
    // Playerを再生する
    myPlayer.play();
});

function hidden() {
    console.log("test");
}