// Include JX via http://www.openjs.com/scripts/jx/
jx={getHTTPObject:function(){var A=false;if(typeof ActiveXObject!="undefined"){try{A=new ActiveXObject("Msxml2.XMLHTTP")}catch(C){try{A=new ActiveXObject("Microsoft.XMLHTTP")}catch(B){A=false}}}else{if(window.XMLHttpRequest){try{A=new XMLHttpRequest()}catch(C){A=false}}}return A},load:function(url,callback,format){var http=this.init();if(!http||!url){return }if(http.overrideMimeType){http.overrideMimeType("text/xml")}if(!format){var format="text"}format=format.toLowerCase();var now="uid="+new Date().getTime();url+=(url.indexOf("?")+1)?"&":"?";url+=now;http.open("GET",url,true);http.onreadystatechange=function(){if(http.readyState==4){if(http.status==200){var result="";if(http.responseText){result=http.responseText}if(format.charAt(0)=="j"){result=result.replace(/[\n\r]/g,"");result=eval("("+result+")")}if(callback){callback(result)}}else{if(error){error(http.status)}}}};http.send(null)},init:function(){return this.getHTTPObject()}}
// Include templating
/* RSSI
 * Ruby-like simple string interpolation for Node.js
 * Copyright (c) 2014 Mark Vasilkov (https://github.com/mvasilkov)
 * License: MIT */
!function(){function e(e,f){var i=f&&f.blank,r=i?o:n;if((!f||!f.noCache)&&e in r)return r[e];var u=JSON.stringify(e).replace(/#\{(.*?)\}/g,function(e,n){return'"+(typeof obj["'+n+'"]!="undefined"?obj["'+n+'"]:"'+(i?"":e)+'")+"'});return r[e]=Function("obj",(i?t:"")+"return "+u)}var n={},o={},t='if (typeof obj == "undefined") obj = {}; ';"object"==typeof module&&module.exports?module.exports=e:"function"==typeof define&&define.amd?define(function(){return e}):"object"==typeof window&&(window.fmt=e)}();
/* GET PARAMETER PARSING - VIA http://stackoverflow.com/a/1562161/1437706 */
function getParams(x){
   return window.params[x];
}
window.params = function(){
  var params = {};
  var param_array = window.location.href.split('?')[1].split('&');
  for(var i in param_array){
   x = param_array[i].split('=');
   params[x[0]] = x[1];
  }
  return params;
}();
