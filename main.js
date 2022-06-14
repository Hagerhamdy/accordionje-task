let btns = document.getElementsByClassName('nav-link');

for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = function () {
        
        let desc= this.nextElementSibling;
        //console.log(desc);

        if (desc.style.maxHeight) {
            desc.style.maxHeight = null;
        } else{
        desc.style.maxHeight = desc.scrollHeight + "px";
        }
    }
}