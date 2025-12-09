//your JS code here. If required.
  const tbody=document.getElementById("output");
  function createRandomPromise(){
       let time=Math.floor(Math.random()*2)+1;
	   return new Promise((resolve,reject)=>{
          setTimeout(()=>{
              resolve(time);
		  },time*1000) // to become millisecond
	   })
  }
  const p1=createRandomPromise();
  const p2=createRandomPromise();
  const p3=createRandomPromise();
   let startTime=performance.now(); 

  Promise.all([p1,p2,p3]).then((data)=>{ 
       let endTime=performance.now();
	   let totalTime=endTime-startTime;  //performance.now give time in milisecond
	     //convert totaltime in seconds
	   totalTime=totalTime/1000;
	  tbody.innerHTML=""; 
	  data.forEach((time,index)=>{
		  tbody.innerHTML+=`<tr><td>Promise ${index+1}</td><td>${time}</td></tr>`
	  })
	  tbody.innerHTML+=`<tr><td>Total</td><td>${totalTime.toFixed(3)}</td></tr>`
  })