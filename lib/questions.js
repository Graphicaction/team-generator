const confirmAnswerValidator = input => { 
    if(input === "") {
        console.log("\nPlease enter valid input(Myinput))!");
        return false;
    }
    else
        return true;
}   

const validateId = input =>{
    if(isNaN(input)) {
        console.log("\nPlease enter valid Id(in numbers)!");
        return false;
    }
    else
        return true;
}
const confirmRole = input => { 
    if((input).toLowerCase() === 'manager' || (input).toLowerCase() === 'engineer' || (input).toLowerCase() === 'intern')
        return true;
    else {
        console.log("\nPlease enter valid role(manager/engineer/intern))!");
        return false;
    }
} 
const validateEmail = input =>{
    var emailStr = /\S+@\S+\.\S+/;
    if(!emailStr.test(input)) {
        console.log("\nPlease enter valid email(abc@gmail.com)!");
        return false;
    }
    else
        return true;
}

const validatePhone = input => {
    const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(!regex.test(input)){
        console.log("\nPlease enter valid phone number(111-111-1111)");
        return false;
    }
    return true;
}
const questions = [
    {   type: 'input', 
        name: 'name',
        message: 'Enter your name: ',
        validate: confirmAnswerValidator 
    },
    {   type: 'input', 
        name: 'role',
        message: 'Enter your role(manager/engineer/intern): ',
        validate: confirmRole 
    },
    {   type: 'input', 
        name: 'id',
        message: 'Enter your Id: ',
        validate: validateId
    },
    {   type: 'input', 
        name: 'email',
        message: 'Enter your Email: ',
        validate: validateEmail 
    },
    {   type: 'input', 
        name: 'officeNumber',
        message: 'Enter your Office number: ',
        validate: validatePhone,
        when: function(answers) {
            return ((answers.role).toLowerCase() == 'manager');
        } 
    },
    {   type: 'input', 
        name: 'github',
        message: 'Enter your github username: ',
        when: function(answers) {
            return ((answers.role).toLowerCase() == 'engineer');
          } 
    },
    {   type: 'input', 
        name: 'school',
        message: 'Enter your school name: ',
        when: function(answers) {
            return ((answers.role).toLowerCase() == 'intern');
          } 
    },
    {   type: 'confirm', 
        name: 'addEmployee',
        message: 'Would you like you to add employee: ',
    }
];

module.exports = {
    confirmAnswerValidator,
    confirmRole,
    validateId,
    validateEmail,
    validatePhone,
    questions
};




