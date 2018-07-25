const test = require("./region.js"),
      exceptions = require("./exceptions"),
      joinedExceptions =  exceptions.join('|'),


    lang = "^\\/(ru|uk)\\/novostroyki",
    obl = "(?:-(vinnitskaya|zhitomirskaya|ternopolskaya|khmelnitskaya|lvovskaya|chernigovskaya|kharkovskaya|sumskaya|rovenskaya|kiyevskaya|dnepropetrovskaya|odesskaya|zaporozhskaya|ivano-frankovskaya|kirovogradskaya|volynskaya|nikolayevskaya|poltavskaya|zakarpatskaya|khersonskaya|cherkasskaya|chernovitskaya|donetskaya|luganskaya)-oblast)?",
    city = `(?:-(?!${joinedExceptions})([A-Za-z]*))?`,
    locality = "(?:(?:-rayon(?:-([A-Za-z]*)))|(?:-metro(?:-([A-Za-z]*)))|(?:-(levyy-bereg|pravyy-bereg))|(?:-(vozle-metro))|(?:-ulitsa-([A-Za-z]*)))?",
    params = "(?:-(sdannyye))?(?:-(stroyashchiyesya))?",
    objectType = "(?:-(kvartiry|kottedzhi|taunkhausy|pomeshcheniya))?",
    objectClass = "(?:-(ekonom-klassa|standart|biznes-klassa|elit-klassa|dachnyy|komfort-klassa|premium))?",
    roommate = "(?:-(odnokomnatnyye|dvukhkomnatnyye|trekhkomnatnyye|chetyrekhkomnatnyye))?",
    kredit = "(?:-(rassrochka))?",
    remont = "(?:-(s-remontom))?";

let string = lang + obl + city + locality + params + objectType + objectClass + roommate + kredit + remont;


let reg  = new RegExp(string);
console.log(reg);
//for (let item in test) {
  //  console.log(reg.exec(test[item]));
//}


