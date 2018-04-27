// Create an AJAX or Fetch request that writes
// data to the #results section




//First you must create XMLHttpRequest object
var xhr = new XMLHttpRequest();

//when the response has loaded the function will run


xhr.onload = function () {
   
    
    //This condition is if you are loading from a server. If running loacally you can comment out
     if (xhr.status === 200) { //this is check if server status is ok
        
        //create a var to store JSON data
        var responseObject = JSON.parse(xhr.responseText);
         
         
var apiData='';

      
     
         apiData +='<ul class="apiSearch" id="apiSearchId">';
        
for( var i = 0; i < responseObject.results.length; i++)
         {
   
             
           
        
  //            apiData +='<li>';
            apiData +='<li><img src="'+responseObject.results[i].urls.small+'"';
            apiData +='srcset="'+responseObject.results[i].urls.thumb+' 200w,';
            apiData +=responseObject.results[i].urls.small+' 400w"';
          //  apiData +=responseObject.results[i].urls.regular+' 800w"';
            apiData +='sizes="(max-width:300px) 80vw,';
            apiData +='(max-width:600px) 75vw, 275px"';
            apiData +='alt="'+responseObject.results[i].description+'" />';
            apiData += '<div class="titles"><h2> '+responseObject.results[i].user.name+'</h2>';
            apiData +=  '<h3>'+responseObject.results[i].likes+'</h3></div></li>';
              
           
            
         }
 apiData +='</ul>';
        
         if(document.getElementById('results')){
         //update the page with the new content
      const listUpdated = document.getElementById('results');
      listUpdated.innerHTML = apiData;
      localStorage.setItem("searchEntered",apiData);
        } }};
 




//function to input search text
window.onload =
function () {
    document.clear();
 
    
xhr.open ('GET','https://api.unsplash.com/search/photos?random&per_page=9&query=mountain&client_id=e324c68611b84de22939d8f715a233ec7587e501a2164a618cb0990e3c07ad01',true);
//send the request
xhr.send(null); // no data needs to be sent to server
   };





document.getElementById("logo").addEventListener("click",bob);

function bob()
{ alert("hello")
    document.getElementById("logo").className="BackPeakAnim";
   
  //  document.getElementById("FrontPeak").className="FrontPeakAnim"; 

};

   
