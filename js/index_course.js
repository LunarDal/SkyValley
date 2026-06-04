'use strict'
window.addEventListener('DOMContentLoaded', ()=>{
    const courseBoxes = document.querySelectorAll('.course_box')

    courseBoxes.forEach(box => {
        const video = box.querySelector('video')

        box.addEventListener('mouseenter', ()=>{
            video.play()
        })

        box.addEventListener('mouseleave', ()=>{
            video.pause()
            video.currentTime = 0
        })
    })
})
