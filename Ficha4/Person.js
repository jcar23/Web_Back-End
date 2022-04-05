var person = {
    firstName : " ",
    lastname : " ",
    greet : function () {
        return this.firstName + '' + this.lastname;
    }
}

var Carl = person.create(person);
Carl.firstName = 'Carl';
