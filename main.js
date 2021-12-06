const slider = document.querySelector(".images")
let clickscroll = 320
let scroll_amount = 0

function slider_scroll_left(){

    slider.scrollTo({
        left: (scroll_amount -= clickscroll),
        behavior: 'auto'
    })
    if(scroll_amount <0){
        scroll_amount = 0
    }
}

function slider_scroll_right(){
    if(scroll_amount <= slider.scrollWidth - slider.clientWidth){
        slider.scrollTo({
            left: (scroll_amount += clickscroll),
            behavior: 'auto'
        })
    }
}