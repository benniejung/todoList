const inputName = document.querySelector("#nameInput");
const name_Form = document.querySelector(".nameForm");
const greeting = document.querySelector("#greeting");

/* 이름 저장 */
const hidden = "hidden";
const name_Key = "name";

function handleForm(e) {
    e.preventDefault();
    inputName.classList.add(hidden);
    const inputValue = inputName.value;
    localStorage.setItem(name_Key, inputName.value);
    paintName(inputValue);
}
function paintName(inputValue) {
    greeting.classList.remove(hidden);
    greeting.innerText = inputValue;
}
const savedName = localStorage.getItem(name_Key);
if (savedName === null) {
    inputName.classList.remove(hidden);
    name_Form.addEventListener("submit", handleForm);
} else {
    paintName(savedName);
}


/* 프로필 사진 변경 */
const img = document.querySelector(".img_btn img");
const inputfile = document.querySelector("#file");
const img_Btn = document.querySelector(".img_btn");
const fileTypes = [
    "image/jpg",
    "image/apng",
    "image/bmp",
    "image/gif",
    "image/jpeg",
    "image/pjpeg",
    "image/png",
    "image/svg+xml",
    "image/tiff",
    "image/webp",
    "image/x-icon",
];

function open_File(e){
    e.preventDefault();
    inputfile.click();    
}

function handleProfileimg() {
    const currentfiles = inputfile.files;

    if(currentfiles.length === 0) {
        alert("No files selected for upload");
    } else {
        for (const file of currentfiles) {
            if (validFileType(file)){
                const reader = new FileReader();
                reader.addEventListener("load", () => {
                    localStorage.setItem("userImg", reader.result);
                    img.src = reader.result;
                });
                reader.readAsDataURL(file);
                    } else {
                        alert("Not a valid file type. Choose another files");
                    }
        }
    }
    }
    function validFileType(file) {
        return fileTypes.includes(file.type);
    }

    if(localStorage.getItem("userImg") !== null){
        img.src = localStorage.getItem("userImg")
    }


inputfile.addEventListener("change", handleProfileimg);
img_Btn.addEventListener("click", open_File);
