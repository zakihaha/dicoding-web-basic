function more () {
    let article = document.getElementsByClassName('article-hide')
    article[0].classList.add('show')

    let btn = document.getElementById('btn-more')
    btn.classList.add('hide')
}

function skill (name) {
    let span = document.getElementById('skill-title').innerHTML = name
}