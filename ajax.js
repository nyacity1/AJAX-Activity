  //Step 1
 //CREATE OBJECT
 
  //Step 2 DEFINE A CALL BAK FUNCTION



  const image = document.querySelector('#image');

function getDogPic(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(this.readyState === 4 ){
              console.log(this.responseText)
              console.log(this.response)
              console.log(this)
            let data = JSON.parse(this.response);
           // document.getElementById('btn').innerHTM.request.resopnseText;
           // document.getElementById('btn').addEventListener("onclick",myFunction()),
           console.log(data);
          image.src = data.message;
  
                   }
          }
          xhr.open('GET',`https://dog.ceo/api/breeds/image/random`)

          //STEP 4 SEND THE REQUEST 
        
          xhr.send();
}







     function myFunction() {
         document.getElementById('').innerHTML
     }
//Step 3 OPEN A REQUEST
        
