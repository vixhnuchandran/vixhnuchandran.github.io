document.addEventListener("DOMContentLoaded", () => {
  const videoDropDown = document.getElementById("videoDropdown")
  const videoPlayer = document.getElementById("videoPlayer")

  videoDropDown.addEventListener("change", () => {
    const selectedVideo = videoDropDown.value
    videoPlayer.src = `./` + selectedVideo
  })
})
