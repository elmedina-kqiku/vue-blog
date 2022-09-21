export default class SignupValidations {
      constructor(email, password) {
            this.email = email;
            this.password = password;
      }

      static getErrorMessageFromCode(errorCode) {
            switch (errorCode) {
                case 'EMAIL_EXISTS':
                    return 'Email already exists';
                case 'EMAIL_NOT_FOUND':
                    return 'Email Not Found';
                case 'INVALID_PASSWORD':
                    return 'Invalid Password';
                default:
                    return 'Unexpected error occurred. Please try again';
            }
      }
}