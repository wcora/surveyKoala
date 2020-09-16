const emailRegex =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default (emails) => {
    const emailArray = emails
        .split(',')
        .map(email => email.trim())
        .filter(email => emailRegex.test(email) === false);

    if (emailArray.length > 0) {
        return `These email addresses are invalid: ${emailArray}`;
    }

    return null;
}
