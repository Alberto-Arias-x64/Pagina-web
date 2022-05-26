function redir(link) {
    window.open(link, '_blank');
}

function move_to(scroll_to = '') {
    console.log(scroll_to)
    const element = document.getElementsByClassName(`${scroll_to}`)[0]
    element.scrollIntoView({
        behavior: 'smooth',
        block:'center'
    })
}

const IO = () => {

    let view_item = ''

    const options = {
        rootMargin: '-80px 0px 0px 0px',
        threshold: 0.2
    }

    function callback_observer(entries) {
        entries.forEach(element => {
            if (element.isIntersecting) {
                view_item = element.target.children[0].dataset.id
                nav.forEach(element => {
                    if (element.id === view_item) {
                        element.className = 'puta'
                    }
                    else element.className = ''
                })                
            }
        });
    }

    const intersection_observer = new IntersectionObserver(callback_observer, options)

    const sections = document.querySelectorAll('section')
    const nav = document.querySelectorAll('.nav')

    sections.forEach(element => {
        intersection_observer.observe(element)
    })
}


window.onload = IO