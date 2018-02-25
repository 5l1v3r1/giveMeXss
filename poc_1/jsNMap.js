function callHost(ip,t){
	var url   		= 'http://'+ip+'/favicon.ico';
	var status    	= ["LIVEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE", "DOWN"];
	var xTimeOut 	= t * 1000;

	$.ajax({
			method: "GET",
		  	url: url,
			timeout: xTimeOut,
		 	success: function(response){
			  	console.log( " Host is: " + status[0]);
			    console.log(" CORS ENABLE ?");
			},  
			error: function(response){
				statRes = response.statusText
// -- HOST Muerto -------------------------------------------------------				

				if (statRes == "timeout"){
					console.log( " Host is: " + status[1]);
				} 
// -- HOST VIVOS -------------------------------------------------------				
				else { 
					console.log( " Host is: " + status[0]);
//					console.log(response)
				}
			}
   });
}	