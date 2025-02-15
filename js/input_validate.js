"use strict";
var Validate = function() {

};

// checks if the form is blank 
Validate.prototype.isBlank = function(text) {
    return (text === "");
};

// checks if two emails match with each other
Validate.prototype.isMatch = function(text1, text2) {
    return (text1 === text2);
};

// checks to see if there is any error in the email and if there is it retirns fale
Validate.prototype.isEmail = function(text) {
    if (text.length === 0) return false;
    var parts = text.split("@");
    if (parts.length !== 2 ) return false;
    if (parts[0].length > 64) return false;
    if (parts[1].length > 255) return false;
    var address =
        "(^[\\w!#$%&'*+/=?^`{|}~-]+(\\.[\\w!#$%&'*+/=?^`{|}~-]+)*$)";
    var quotedText = "(^\"(([^\\\\\"])|(\\\\[\\\\\"]))+\"$)";
    var localPart = new RegExp( address + "|" + quotedText );
    if ( !parts[0].match(localPart) ) return false;
    var hostnames =
        "(([a-zA-Z0-9]\\.)|([a-zA-Z0-9][-a-zA-Z0-9]{0,62}[a-zA-Z0-9]\\.))+";
    var tld = "[a-zA-Z0-9]{2,6}";
    var domainPart = new RegExp("^" + hostnames + tld + "$");
    if ( !parts[1].match(domainPart) ) return false;
    return true;
};
