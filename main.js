const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems=document.querySelectorAll('.tab-content-item');


// select tab content item
function SelectItem(e){
    removeBorder();
    removeShow();
this.classList.add('tab-border');

const tabContentItems = document.querySelector(`#${this.id}-content`)


tabContentItems.classList.add('show')
}

function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'))
}


function removeShow(){
    tabItems.forEach(item => item.classList.remove('tab-border'))
}
// listen for tab click
tabItems.forEach(item => item.addEventListener('click',SelectItem));
