'use strict';

export const passwordValidationRegex = new RegExp(/"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"/);
export const emailValidationRegex = new RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
