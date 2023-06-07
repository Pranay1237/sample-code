function deleteElementBasedOnSize()
{
    var header = document.querySelector('.header-right');

    if(window.innerWidth < 600) {
        header.remove();
    }
}

deleteElementBasedOnSize();

window.addEventListener('resize', deleteElementBasedOnSize);