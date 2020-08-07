let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png'){
        myImage.setAttribute('src','images/firefox2.png');
    }
    else{
        myImage.setAttribute('src','images/firefox-icon.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字');
    /*if(!myName||myName===null){
        setUserName();
    }*/
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Hello, ' + myName;
    
}

if(!localStorage.getItem('name')||localStorage.getItem('name')===null){
    setUserName();
}
else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla不错，'+storedName;
}

myButton.onclick=function(){
    setUserName();
}