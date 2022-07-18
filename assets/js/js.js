$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
  var variablee=$("nav").height();
  var variable=variablee+"px";
  $(".soyYo").css("margin-top",variable);
  $(".leermas").click(function(){
    var identificador=this.id;
    console.log(this.ariaExpanded);
    if(this.ariaExpanded){
      $(this).text("...")
      console.log(this.textContent);
      console.log(this.ariaExpanded);
    }else{
      $(this).text("Leer más");
      console.log(this.textContent);
      console.log(this.ariaExpanded);
    }
  })
});
document.getElementById("lmasUno").onclick = function(element){
  var idthis=element.target.id;
  var este=document.getElementById(idthis);
  var pare=este.parentElement;
  console.log(pare);
  if(pare.open==true){
    este.innerHTML="Leer más";
  }else{
    este.innerHTML="...";
  }
};
