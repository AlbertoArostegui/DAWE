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


    // 1.3
    let articulos = document.querySelectorAll('article');
    for (let i = 0; i < articulos.length; i++) {
        articulos[i].style.fontSize = 'smaller';
    }

    let links_aside = document.querySelectorAll('aside a');
    for (let i = 0; i < links_aside.length; i++) {
        links_aside[i].style.textDecoration = 'none';
        links_aside[i].style.fontStyle = 'italic';
    }

    let links_nav = document.querySelectorAll('nav a');
    for (let i = 0; i < links_nav.length; i++) {
        links_nav[i].style.fontSize = 'smaller';
        links_nav[i].style.fontWeight = 'bold';
    }
    

    // 1.4
    let elementos_li = document.querySelectorAll('li');
    console.log('Hay ', elementos_li, ' elementos <li> en el documento');
}
