var btnNum=0;
function clickBtn(){
    const btn= document.getElementById('btn');
    btnNum++;
    btn.innerHTML=btnNum;
}