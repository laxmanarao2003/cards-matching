let img1=document.getElementById("img1");
let img2=document.getElementById("img2");
let img3=document.getElementById("img3");
let img4=document.getElementById("img4");
let img5=document.getElementById("img5");
let img6=document.getElementById("img6");
let img7=document.getElementById("img7");
let img8=document.getElementById("img8");
let img9=document.getElementById("img9");
let img10=document.getElementById("img10");
let img11=document.getElementById("img11");
let img12=document.getElementById("img12");
let guess=document.getElementById("guess");
let match=document.getElementById("match");
let percentage=document.getElementById("percentage");
let matchtxt=document.getElementById("matchtxt");
let count=0,score=0,flipcount=0,matches=0;
let first,second,firid,secid,guesses=0;

let flipcard=(flip)=>{
   let clicked=flip.src;
   let pos=clicked.search("img");
   /*********** findind first and second clicked cards ***********/
   /*********** firid,secid = image element ***********/
   (!first) ? (first=clicked.slice(pos),firid=flip) : second=clicked.slice(pos),secid=flip;
   guesses+=1;

   /********** Number of guesses *********/
   if(guesses%2==0){
      guess.innerHTML=" "+(guesses/2);
   }

   /********* Matching verification ************/
   if(first==second)
   {
      console.log("matched");
      matches+=1;
      match.innerHTML=" "+matches;
      first="";second="";
      matchtxt.innerHTML="Found a match!";
   }
   else if(first!=second && second!="")
   {
      matchtxt.innerHTML="No match!";
      count+=1;
      if(count>1){
         setTimeout(()=>{
            firid.classList.add("imgrotate2");
            secid.classList.add("imgrotate2");
            firid.src=`.\\card${firid.id.slice(3)}.jpg`;
            secid.src=`.\\card${secid.id.slice(3)}.jpg`;
            first="";second="";
         },1000);
      }
      setTimeout(()=>{
      firid.classList.remove("imgrotate2");
      secid.classList.remove("imgrotate2");
      },2000);
   }
   /********* Percentage shown ********/
   if(match.innerHTML!=0 && guess.innerHTML!=0){
      let res=(match.innerHTML/guess.innerHTML)*100;
      let fres=res.toString();
      percentage.innerHTML=" "+fres.slice(0,5);
   }

}

/******** clicking cards addeventlisteners ********/
   img1.addEventListener("click",flip1=()=>
   {
      img1.classList.add("imgrotate1");
      img1.src=".\\img1.jpg";
      setTimeout(()=>{
         img1.classList.remove("imgrotate1");
      },1000);
      flipcard(img1);
   });

   img2.addEventListener("click",flip1=()=>
   {
      img2.classList.add("imgrotate1");
      img2.src=".\\img3.jpg";
      setTimeout(()=>{
         img2.classList.remove("imgrotate1");
      },1000);
      flipcard(img2);
   });

   img3.addEventListener("click",flip1=()=>
   {
      img3.classList.add("imgrotate1");
      img3.src=".\\img4.jpg";
      setTimeout(()=>{
         img3.classList.remove("imgrotate1");
      },1000);
      flipcard(img3);
   });

   img4.addEventListener("click",flip1=()=>
   {
      img4.classList.add("imgrotate1");
      img4.src=".\\img6.jpg";
      setTimeout(()=>{
         img4.classList.remove("imgrotate1");
      },1000);
      flipcard(img4);
   });

   img5.addEventListener("click",flip1=()=>
   {
      img5.classList.add("imgrotate1");
      img5.src=".\\img5.jpg";
      setTimeout(()=>{
         img5.classList.remove("imgrotate1");
      },1000);
      flipcard(img5);
   });

   img6.addEventListener("click",flip1=()=>
   {
      img6.classList.add("imgrotate1");
      img6.src=".\\img2.jpg";
      setTimeout(()=>{
         img6.classList.remove("imgrotate1");
      },1000);
      flipcard(img6);
   });

   img7.addEventListener("click",flip1=()=>
   {
      img7.classList.add("imgrotate1");
      img7.src=".\\img4.jpg";
      setTimeout(()=>{
         img7.classList.remove("imgrotate1");
      },1000);
      flipcard(img7);
   });

   img8.addEventListener("click",flip1=()=>
   {
      img8.classList.add("imgrotate1");
      img8.src=".\\img2.jpg";
      setTimeout(()=>{
         img8.classList.remove("imgrotate1");
      },1000);
      flipcard(img8);
   });

   img9.addEventListener("click",flip1=()=>
   {
      img9.classList.add("imgrotate1");
      img9.src=".\\img6.jpg";
      setTimeout(()=>{
         img9.classList.remove("imgrotate1");
      },1000);
      flipcard(img9);
   });

   img10.addEventListener("click",flip1=()=>
   {
      img10.classList.add("imgrotate1");
      img10.src=".\\img1.jpg";
      setTimeout(()=>{
         img10.classList.remove("imgrotate1");
      },1000);
      flipcard(img10);
   });

   img11.addEventListener("click",flip1=()=>
   {
      img11.classList.add("imgrotate1");
      img11.src=".\\img5.jpg";
      setTimeout(()=>{
         img11.classList.remove("imgrotate1");
      },1000);
      flipcard(img11);
   });

   img12.addEventListener("click",flip1=()=>
   {
      img12.classList.add("imgrotate1");
      img12.src=".\\img3.jpg";
      setTimeout(()=>{
         img12.classList.remove("imgrotate1");
      },1000);
      flipcard(img12);
   });
