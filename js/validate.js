"use strict";
var RegisterForm = function() { };
RegisterForm.prototype = new Validate();

RegisterForm.prototype.validateField = function(fieldName, text) {
    var field = fields[fieldName];
    if (field.required) {
        if ( this.isBlank(text) ) { throw new Error(field.required); } 
    }
    if (field.noMatch) {
        if ( ! this.isMatch(text, $(field.noMatch[1]).value ) ) {
            throw new Error(field.noMatch[0]);
        }
    }
    if (field.isEmail) {
        if ( ! this.isEmail(text) ) { throw new Error(field.isEmail); }
    }
};


RegisterForm.prototype.setError = function( fieldName, message ) {
    $(fieldName + "_error").setAttribute("class", "error");
    $(fieldName + "_error").firstChild.nodeValue = message;
};
RegisterForm.prototype.clearError = function( fieldName, message ) {
    $(fieldName + "_error").setAttribute("class", "");
    $(fieldName + "_error").firstChild.nodeValue = message || "";
};


RegisterForm.prototype.resetForm = function() {
    for ( var fieldName in fields ) {
        this.clearError(fieldName, fields[fieldName].message);
        $(fieldName).value = ""; 
    }
};
RegisterForm.prototype.validateForm = function() {
    var isOK = true;
    for ( var fieldName in fields ) {
        this.clearError(fieldName);
        try { this.validateField(fieldName, $(fieldName).value ); } 
        catch (error) {
            isOK = false;
            this.setError( fieldName, error.message);           
        }
    }
    return isOK;
};