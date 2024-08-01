"use strict";
var $ = function(id) { return document.getElementById(id); };

var registerForm;
// window onload function  
window.onload = function() {
	registerForm = new RegisterForm();
	registerForm.resetForm();
	
	$("register").onclick = function() {
        if ( registerForm.validateForm() ) { 
            navigate.showResults();
        }
	};
	
	$("reset").onclick = function() {
	    registerForm.resetForm();
	};

    $("back").onclick = function() {
   	    navigate.showForm();
        registerForm.resetForm();
    };
};

// creates placeholders so that users know what they are supposed to enter
$("first_name").placeholder = "Kate";
$("email").placeholder = "example@gmail.com";
$("verify").placeholder = "example@gmail.com";
$("question").placeholder = "Please type in your question here:";


