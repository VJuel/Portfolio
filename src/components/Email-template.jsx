import * as React from 'react';

export const EmailTemplate = ({
  name,
  email,
  tel,
  message
}) => (
  <div>
    <h1>Welcome, {name}!</h1>
    <p>email : {email}</p>
    <p>tel : {tel}</p>
    <p>message : {message}</p>
  </div>
);
