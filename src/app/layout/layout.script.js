//Selecting all required elements

const dropArea= document.querySelector(".dropZone");
dragText = dropArea.querySelector("header"),
label = dropArea.querySelector("label"),
input = dropArea.querySelector("input");

let file; //this is a global variable  and we'll use uit inside multiple functions

label.onclick() =()=>{
    input.click();
}

input.addEventListener("change",function(){
    file=this.file[0];
});

//If user Drag file over Drop Area
dropArea.addEventListener("dragover", (event)=>{
    event.preventDefault(); //preventing from default behaviour
    dropArea.classList.add("active");
    dragText.textContent ="Release to uplaod file";
});

//If user leave Dragged file from Drop Area
dropArea.addEventListener("dragleave", ()=>{
    dropArea.classList.remove("active");
    dragText.textContent ="Drag & Drop to upload file";
});

//If user Drop file over Drop Area
dropArea.addEventListener("dragleave", (event)=>{
    event.preventDefault(); //preventing from default behaviour

    file =event.dataTransfer.files[0];
    showFile(); //calling function
});
function showFile(){
    let fileType= file.type;
    console.log(fileType);
    
    let validExtensions =["image/jpeg", "image/jpg", "image/png"];
    if(validExtensions.includes(fileType)){
       let fileReader =new FileReader(); //creating new file reader object
       fileReader.onload=()=>{
           let fileURL = fileReader.result; //passing user file source in fileURL variable
           console.log(fileURL);
           let imgTag ='<img src ="$(fileURL)" alt="">';
           dropArea.innerHTML=imgTag;
       }
       fileReader.readAsDataURL(file);
    } else{
        alert("This is not a image file");
    }
}




