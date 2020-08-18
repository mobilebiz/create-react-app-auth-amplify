import React from 'react';
import { ConfirmSignIn, ConfirmSignUp, ForgotPassword, SignIn, SignUp, VerifyContact, withAuthenticator } from 'aws-amplify-react';
import MySignUp from './MySignUp'


export function withMyAuthenticator(Comp, includeGreetings=false) {
  console.log('withMyAuthenticator');
  return withAuthenticator(Comp, includeGreetings, [
      <SignIn/>,
      <ConfirmSignIn/>,
      <VerifyContact/>,
      <MySignUp/>,
      <SignUp/>,
      <ConfirmSignUp/>,
      <ForgotPassword/>
    ]);
}