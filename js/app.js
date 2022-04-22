const profileImg = document.getElementById('profileimg');
const nameInput = document.getElementById('name');
const lnameInput = document.getElementById('sname');
const yearInput = document.getElementById('grad');

const imgPrev = document.getElementById('imgprev');
const classof = document.getElementById('classof');
const profileName = document.getElementById('profilename');
const profileLname = document.getElementById('profilelname');

const saveImg = document.getElementById('btnConvertHTML');
const exportArea = document.getElementById('exportarea');



profileImg.addEventListener('change', (event) => {
    imgPrev.src = URL.createObjectURL(event.target.files[0]);
})

nameInput.addEventListener('keyup', (event) => {
    profileName.textContent = event.target.value;
})

lnameInput.addEventListener('keyup', (event) => {
    profileLname.textContent = event.target.value;
})

yearInput.addEventListener('keyup', (event) => {
    classof.textContent = `Class of ${ event.target.value}`;
})

let getCanvas;



function takeShot() {
    html2canvas(exportArea).then(function(canvas) {
        document.querySelector('.preview__block').appendChild(canvas);
        getCanvas = canvas;
    });
}


// saveImg.addEventListener('click', takeShot);


saveImg.addEventListener('click', event => {
    html2canvas(exportArea, {
        logging: true,
        letterRendering: 1,
        allowTaint: true,
        useCORS: true
    }).then(result => {
        let img = result.toDataURL("image/jpeg");
        // let newData = img.replace(/^data:image\/png/, "data:application/octet-stream");
        let newData = img.replace('image/jpeg', "image/octet-stream");
        // savePng(img);

        let a = document.createElement('a');
        a.href = newData;
        a.download = 'smasco_pro.jpeg';
        a.click();
    });
})