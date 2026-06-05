'use strict'
window.addEventListener('DOMContentLoaded', ()=>{
    const courseBoxes = document.querySelectorAll('.course_box')

    courseBoxes.forEach(box => {
        const iframe = box.querySelector('.course_video')
        const player = new Vimeo.Player(iframe)

        box.addEventListener('mouseenter', ()=>{
            iframe.style.opacity = '1'
            player.play().catch(error => {
                console.log(error)
            })
        })

        box.addEventListener('mouseleave', ()=>{
            player.pause()
            iframe.style.opacity = '0'
        })
    })
})
