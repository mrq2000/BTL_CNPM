import * as yup from 'yup';

const schema = {
  email: yup
    .string()
    .email()
    .required(),
  password: yup
    .string()
    .min(6)
    .required(),
};

export const userSignIn = yup.object().shape(schema);

export const userSignUp = yup.object().shape({
  ...schema,
  passwordConfirmation: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required(),
});
