// Simple JavaScript Templating
// John Resig - http://ejohn.org/ - MIT Licensed
(function(){
  var cache = {};

  this.tmpl = function tmpl(str, data){
    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    var fn = !/\W/.test(str) ?
      cache[str] = cache[str] ||
        tmpl(document.getElementById(str).innerHTML) :

      // Generate a reusable function that will serve as a template
      // generator (and which will be cached).
      new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +

        // Introduce the data as local variables using with(){}
        "with(obj){p.push('" +

        // Convert the template into pure JavaScript
        str
          .replace(/[\r\t\n]/g, " ")
          .split("<%").join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)%>/g, "',$1,'")
          .split("\t").join("');")
          .split("%>").join("p.push('")
          .split("\r").join("\\'")
      + "');}return p.join('');");

    // Provide some basic currying to the user
    return data ? fn( data ) : fn;
  };
})();

// Demo data.
$(function(){

  var dataObject = {
    members:[
      {
        id:1,
        name: "Анисимова Алиса",
        photo: "photo_1.jpg",
        student:"Студент ветеринарного факультета",
        reason_1: "Клиенты кусаются",
        reason_2: "Платят мало",
        reason_3: "Приходится работать по ночам",
        number: "11111111111",
        facebookAcc: "#",
        feedback: "Могу вакцинировать вашу зверюшку :)",
      },

      {
        id:2,
        name: "Иван Иванов",
        photo: "photo_2.jpg",
        student:"Студент заборостроительного факультета",
        reason_1: "Платят мало",
        reason_2: "Приходится работать по ночам",
        reason_3: "Неинтересно",
        number: "222222222",
        facebookAcc: "#",
        feedback: "Могу построить вам забор",
    	},
    ]
  }; // -> End of dataObject

  var results = document.getElementById("results");
  results.innerHTML = tmpl("item_tmpl", dataObject);

});
