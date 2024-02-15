window.onload = () => {
    // 1.1
    const main = document.querySelector('main')
    let section = document.createElement('section')
    let h1 = document.createElement('h1')

    h1.textContent = 'Hello World'
    section.appendChild(h1)
    textos = ['Articulo primero', 'Articulo segundo', 'Articulo tercero']

    for (let i = 0; i < 3; i++) {
        let art = document.createElement('article')
        art.textContent = textos[i]
        section.appendChild(p)
    }

    main.appendChild(section)


    // 1.2
    function añadir(selector, link, texto) {
        let ul = document.querySelector(selector)
        let li = document.createElement('li')
        let a = document.createElement('a')
        a.href = link
        a.textContent = texto
        
        li.appendChild(a)
        ul.appendChild(li)
    }


    añadir('.aside-class', 'https://www.google.com', 'aside1')
    añadir('.aside-class', 'https://www.youtube.com', 'aside2')
    añadir('.aside-class', 'https://www.facebook.com', 'aside3')

    añadir('header', 'https://www.google.com', 'Link header')

    añadir('footer nav', 'https://www.google.com', 'Link footer1')
}