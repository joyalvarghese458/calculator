function btnclick(val){
    document.getElementById("inp").value+=val

}
function allclear(){
    document.getElementById("inp").value=" "
}
function eqclick(){
    var text=document.getElementById("inp").value
    var result=eval(text)
    document.getElementById("inp").value=result
}