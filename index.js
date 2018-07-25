

var lang = "^\\/(ru|uk)\\/novostroyki";

var obl = "(?:-(vinnitskaya|zhitomirskaya|ternopolskaya|khmelnitskaya|lvovskaya|chernigovskaya|kharkovskaya|sumskaya|rovenskaya|kiyevskaya|dnepropetrovskaya|odesskaya|zaporozhskaya|ivano-frankovskaya|kirovogradskaya|volynskaya|nikolayevskaya|poltavskaya|zakarpatskaya|khersonskaya|cherkasskaya|chernovitskaya|donetskaya|luganskaya)-oblast)?";
var city = "(?:-(kiyv|vinnitsa))?"
var locality = "(?:rayon-(\\w+))|(?:metro-(\\w+))|(?:-(levyy-bereg))|(?:-(pravyy-bereg))|(?:-(vozle-metro))|(?:-ulitsa-(\\w+))";
var string = lang + obl + city;

var reg  = new RegExp(string);


console.log(reg.exec('/ru/novostroyki-kiyevskaya-oblast-kiyv-rayon-vishenka-taunkhausy'));



