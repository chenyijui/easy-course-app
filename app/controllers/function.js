
//remove  "?" in url
module.exports = function (url) {
    var changeworld = /watch/g;
    var result = url.replace(changeworld, 'embed/');
    if(typeof result == 'string'){
        var array = result.split("");
        var index = array.indexOf("?");
        if(index > -1) {
            array.splice(index, 1);
            var newurl = array.join("");
        }else {
            newurl = array.join("");
        }
    };
    return newurl;
};
