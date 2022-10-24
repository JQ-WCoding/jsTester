
const regExp = /e-content-mainTab.*/g


document.querySelectorAll('div.e-item.e-active').forEach(i => {
    if (i.id.match(regExp)) {

    }
});

document.querySelectorAll('div.e-item.e-active')[2].parentElement.previousElementSibling.querySelectorAll('div.e-items.e-toolbar-items')