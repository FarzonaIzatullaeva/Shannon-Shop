// stores messages that can be used in different situations.
var fields = {
    email: {
        message: "Must be a valid email address.",
        required: "Email address is required.",
        isEmail: "Email address is invalid."
    },
    verify: {
        required: "Please retype your email address.",
        noMatch: ["Emails do not match.", "email"]
    },
    first_name: {
        required: "First name is required."
    }
};