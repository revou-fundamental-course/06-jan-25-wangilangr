// ini file javascript

// function

welcomeSpeech()

function welcomeSpeech(){
    let inputNama = prompt("Haloo kawan, siapa nama mu ?", "");

    document.getElementById("userName").innerHTML = inputNama;


}


function formValidation (){


    let namaInput = document.getElementById("namaInput").value;
    console.log(namaInput);

    // condition form validation
    if (namaInput == ""){
        alert("harap diisi terlebih dahulu");
        document.getElementById("resultForm").innerHTML = "";
    }else{
        // display result
        document.getElementById("resultForm").innerHTML = namaInput;
    }

}

document.getElementById("btnForm").addEventListener("click", formValidation);

let indexBanner = 0;

changeBackground();

function nextBanner(){
    indexBanner += 1;
    changeBackground();
}

//function to change background banner

function changeBackground (){
    let bannerList = document.getElementsByClassName("banner-image");
    console.log(bannerList.length);

    console.log(indexBanner);
    if (indexBanner > bannerList.length - 1){
        // reset indexBanner
        indexBanner = 0;
    }

    // looping to change background
    for (let i = 0; i < bannerList.length; i++){
        bannerList[i].style.display = "none";
    }

    bannerList[indexBanner].style.display = "block";
}

setInterval(nextBanner, 3000);