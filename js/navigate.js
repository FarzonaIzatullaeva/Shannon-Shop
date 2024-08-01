"use strict";
var $ = function(id) { return document.getElementById(id); };

// serves as a show hide function in order to show congratulations page when the form is succesfully submitted.
var navigate = {
    showForm: function() {
        $("registration_form").setAttribute("class","show");
        $("registration_result").setAttribute("class","hide");
    },
    showResults: function() {
        $("registration_form").setAttribute("class","hide");
        $("registration_result").setAttribute("class","show");
    }
};
