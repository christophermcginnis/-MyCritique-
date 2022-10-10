class AppError extends Error {
    constructor(message, status){
        super();
        this.message = message;
        this.status = status;
    }

    if(message = 'E11000 duplicate key error collection: mycritique.users index: email_1 dup key: { email: "chris_mcginnis@icloud.com" }'){
        this.message = "We're sorry that email address is already taken."
    }
}

module.exports = AppError;