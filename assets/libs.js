// Include JX via http://www.openjs.com/scripts/jx/
jx={getHTTPObject:function(){var A=false;if(typeof ActiveXObject!="undefined"){try{A=new ActiveXObject("Msxml2.XMLHTTP")}catch(C){try{A=new ActiveXObject("Microsoft.XMLHTTP")}catch(B){A=false}}}else{if(window.XMLHttpRequest){try{A=new XMLHttpRequest()}catch(C){A=false}}}return A},load:function(url,callback,format){var http=this.init();if(!http||!url){return }if(http.overrideMimeType){http.overrideMimeType("text/xml")}if(!format){var format="text"}format=format.toLowerCase();var now="uid="+new Date().getTime();url+=(url.indexOf("?")+1)?"&":"?";url+=now;http.open("GET",url,true);http.onreadystatechange=function(){if(http.readyState==4){if(http.status==200){var result="";if(http.responseText){result=http.responseText}if(format.charAt(0)=="j"){result=result.replace(/[\n\r]/g,"");result=eval("("+result+")")}if(callback){callback(result)}}else{if(error){error(http.status)}}}};http.send(null)},init:function(){return this.getHTTPObject()}}
/* GET PARAMETER PARSING - VIA http://stackoverflow.com/a/1562161/1437706 */
/*
if(window.location.search.length>0){
  window.params = function(){
    var params = {};
    var param_array = window.location.href.split('?')[1].split('&');
    for(var i in param_array){
     x = param_array[i].split('=');
     params[x[0]] = x[1];
    }
    return params;
  }();
  function getParams(x){
     return window.params[x] || "";
  }
}
*/
