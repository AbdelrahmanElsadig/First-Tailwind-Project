

document.querySelector('#menu-btn').addEventListener('click', toggle_nav_menu)

function toggle_nav_menu(){
    const top = document.querySelector('.hamburger-top');
    const middle = document.querySelector('.hamburger-middle');
    const bottom = document.querySelector('.hamburger-bottom');
    top.classList.toggle('--clicked');
    middle.classList.toggle('--clicked');
    bottom.classList.toggle('--clicked');
    if (top.classList.contains('--clicked')){
        document.querySelector('#menu').classList.remove('hidden');
        document.querySelector('#menu').classList.add('flex');
        return
    }
    document.querySelector('#menu').classList.add('hidden');
    document.querySelector('#menu').classList.remove('flex');
}