export const STANDARD_USER = 'standard_user'
export const LOCKED_OUT_USER = 'locked_out_user'
export const INCURRECT_USERNAME = 'wrong_user'
export const CURRECT_PASSWORD = 'secret_sauce'
export const INCURRECT_PASSWORD = 'wrong_password'


export const ERROR_MESSAGES = {
  lockedOut: 'Epic sadface: Sorry, this user has been locked out.',
  mismatch: 'Epic sadface: Username and password do not match any user in this service',
  usernameRequired: 'Epic sadface: Username is required',
  passwordRequired: 'Epic sadface: Password is required',
}


export const LOCKED_OUT_CASE = {
  name: 'locked_out_user + currect password',
  username: LOCKED_OUT_USER,
  password: CURRECT_PASSWORD,
  expectedError: ERROR_MESSAGES.lockedOut,
}

export const OTHER_NEGATIVE_CASES = [
  {
    name: 'currect username + incurrect password',
    username: STANDARD_USER,
    password: INCURRECT_PASSWORD,
    expectedError: ERROR_MESSAGES.mismatch,
  },
  {
    name: 'incurrect username + currect password',
    username: INCURRECT_USERNAME,
    password: CURRECT_PASSWORD,
    expectedError: ERROR_MESSAGES.mismatch,
  },
  {
    name: 'incurrect username + incurrect password',
    username: INCURRECT_USERNAME,
    password: INCURRECT_PASSWORD,
    expectedError: ERROR_MESSAGES.mismatch,
  },
  {
    name: 'empty username + currect password',
    username: '',
    password: CURRECT_PASSWORD,
    expectedError: ERROR_MESSAGES.usernameRequired,
  },
  {
    name: 'currect username + empty password',
    username: STANDARD_USER,
    password: '',
    expectedError: ERROR_MESSAGES.passwordRequired,
  },
  {
    name: 'empty username + empty password',
    username: '',
    password: '',
    expectedError: ERROR_MESSAGES.usernameRequired,
  },
]
