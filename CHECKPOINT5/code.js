var btnlike=document.getElementById('like1')

console.log(btnlike)

btnlike.addEventListener('click',function(){
    if(btnlike.style.color=="black"){
        btnlike.style.color="red"
    }
    else{btnlike.style.color="black"}
})

var btnplus=document.getElementsByClassName("plus-btn")
for(let i=0;i<btnplus.length;i++){
    let btn=btnplus[i]

btn.addEventListener('click',function(){
    btn.previousElementSibling.value++;
    totalprice()
})
}
var btnmoin=document.getElementsByClassName("minus-btn")
for(let i=0;i<btnmoin.length;i++){
    let btn=btnmoin[i]

    btn.addEventListener('click',function(){
        if(btn.nextElementSibling.value>0) 
        {btn.nextElementSibling.value--;
            totalprice()} 
   
})
}
var mov=document.getElementsByClassName("delete")
for(let i=0;i<mov.length;i++){
    let del=mov[i]
    del.addEventListener('click',function(){
      var parent=this.parentNode
      parent.remove()  
    })
}
function totalprice(){
var items=document.getElementsByClassName("Item")
var total=0
for(let i=0;i<items.length;i++){
    var price=items[i].querySelector(".price")
    var qt=items[i].querySelector(".Quant")
    total+=price.innerHTML*qt.value
}
document.getElementById("finalPrice").value=total
}
