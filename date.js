

exports.getDate= getDate;             //using export will print hello world in terminal
console.log(module);
function getDate(){
 let today = new Date();
 let options = {
      weekday:"long",                               // this function will auto change according to time and day.
      day:"numeric",
      month:"long"                // long means will return full name of days or month
  };
  
  let day = today.toLocaleDateString("en-US", options);
                                     
  return day;
}


exports.getDay= getDay;             //we use like this to export multiple function
console.log(module);
function getDay(){
 let today = new Date();
 let options = {
      weekday:"long",                               // this function will auto change according to time and day.
                                      // long means will return full name of days or month
  };
  
  let day = today.toLocaleDateString("en-US", options);
                                     
  return day;
}
console.log(module.exports)