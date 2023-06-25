//your JS code here. If required.
  window.addEventListener("resize",function(){
    let height=this.innerHeight;
    let width=this.innerWidth;
   let div=document.getElementById("sizeInfo");
    let h=div.firstChild;

    h.innerText="width: "+width+" and Height: "+height; 
  
  })