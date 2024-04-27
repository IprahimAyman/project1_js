//console.log(document.body)
//console.log(document.head)
// console.log(document.links)
//var x = document.links;
//for(i=0;i<=x.length;i++)
//{ 
//    x[i].style.color ="red";
//    x[i].innerHTML="gosomewhere";
//}
// var x=document.getElementsByClassName("ahmed");
// console.log(x)
// for(i=0;i<=x.length;i++){
// x[i].innerHTML="iprahim ayman";
// }
// var x=document.getElementsByTagName("h2");
// console.log(x[0].getAttribute("class"));
// function myfun(){
// x[0].setAttribute("id","ayman")
// x[0].setAttribute("style","color:red")
// 
// var x=document.querySelector("#example")
// console.log(x.children);
// var myDiv = document.createElement("div");
// var mytext = document.createTextNode("hello world!");
// myDiv.append(mytext);
// myDiv.className="iprahim";
// myDiv.id="message";
// // document.body.append(myDiv);
// var x=document.querySelector("#mena");
//   x.insertBefore(myDiv,x.children[0]);
// var button =document.querySelector("mahmoud").addEventListener("click",myfun)
// function myfun(event){
//     console.log(event.target)
// }
  // document.addEventListener("DOMContentLoaded",function(){
  //       document.querySelector("#red").onclick = function(){
  //           document.querySelector("#task").style.color = "red";
  //       }
  //       document.querySelector("#blue").onclick= function(){
  //         document.querySelector("#task").style.color="blue";
  //       }
  //       document.querySelector("#green").onclick = function(){
  //         document.querySelector("#task").style.color="green"
  //       }
  // })
       document.addEventListener("DOMContentLoaded",function(){
       document.querySelectorAll("button").forEach(function(button){
        button.onclick= function(){
          document.querySelector("#task").style.color = button.dataset.color;
        }
         
       })
       })

    document.addEventListener("DOMContentLoaded",function(){
    
    
    
      document.querySelector("form").onsubmit =function(){
      var value = document.querySelector("#creative").value;
      var myul  = document.querySelector("#output");
      if(value == ""){
        return false;
      }else{
      var myli  =document.createElement("li");
      myli.innerHTML=value;
      myul.append(myli);
      document.querySelector("#creative").value="";
      return false;
      }
    }
    })




