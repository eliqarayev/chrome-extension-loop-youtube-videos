(() => {
  let youtubeLeftControls, youtubePlayer;
  let currentVideo = "";

  chrome.runtime.onMessage.addListener((obj) => {
    const { type, videoId } = obj;

    if (type === "LOOP_VIDEO") {
      currentVideo = videoId;
      newVideoLoaded();
    }
  });

  const newVideoLoaded = () => {
    const loopBtnClass = document.getElementsByClassName("loop-btn")[0];
    if (!loopBtnClass) {
      const loopBtn = document.createElement("img");
      loopBtn.src = chrome.runtime.getURL("img/infinity-btn.png");
      loopBtn.width = "40";
      loopBtn.height = "46";
      loopBtn.className = "loop-btn";
      loopBtn.title = "start the loop";
      loopBtn.curson = "pointer";
      loopBtn.addEventListener("mouseover", function () {
        loopBtn.style.cursor = "pointer";
      });
      youtubeLeftControls =
        document.getElementsByClassName("ytp-left-controls")[0];
      youtubePlayer = document.getElementsByClassName("video-stream")[0];
      youtubeLeftControls.appendChild(loopBtn);

      loopBtn.addEventListener("click", startLoop);
    }
  };

  const startLoop = () => {
    youtubePlayer.loop = true;
  };
})();
