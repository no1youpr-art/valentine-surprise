function openPopup(){
  document.getElementById("popup").style.display="flex";
}

function checkPin(){
  const pin=document.getElementById("pin").value;

  if(pin==="130338"){
    document.getElementById("page1").classList.add("hidden");
    document.getElementById("popup").style.display="none";
    document.getElementById("page3").classList.remove("hidden");

    const music=document.getElementById("music");
    music.play();
  }else{
    alert("PIN ไม่ถูกต้องนะ 🤭");
  }
}
