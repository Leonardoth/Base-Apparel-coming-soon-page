var verifyEmail = (event) => {
    event.preventDefault()
    var input = document.getElementById('field__email')
    var value = input.value
    var valid = mailRegex(value)

    if(!valid){
        input.classList.add('invalid')
        return false
    }else{
        input.classList.remove('invalid')
    }
    return event.currentTarget.submit()
}


var mailRegex = mail => {
    var pattern = '[^.][@][a-z]'
    var testRegex = new RegExp(pattern)
    return testRegex.test(mail)
}

var inputChanged = event => {
    var value = event.target.value
    if(value == '' || mailRegex(value)){
      return event.target.classList.remove('invalid')
    }
}