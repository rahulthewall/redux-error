import jwt_decode from 'jwt-decode';

import { I_User } from './types';

export async function loginUser(code: string): Promise<I_User> {
  const endPoint = `${import.meta.env.REACT_APP_AWS_HOST}/cognito`;
  try {
    const res = await fetch(endPoint, {
      method: 'POST',
      body: JSON.stringify({
        authenticate: 'yes',
        access_code: code,
      }),
    });
    const tokens = await res.json();
    const decoded = jwt_decode(tokens.id_token) as any;
    return {
      email: decoded.email,
      name: decoded.name,
      employeeId: decoded.identities[0].userId,
      accessToken: tokens.access_token,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function refreshUser(): Promise<I_User> {
  const endPoint = `${import.meta.env.REACT_APP_AWS_HOST}/cognito`;
  try {
    const res = await fetch(endPoint, {
      method: 'POST',
      body: JSON.stringify({
        refresh_token: 'yes',
      }),
    });
    const tokens = await res.json();
    const decoded = jwt_decode(tokens.id_token) as any;
    return {
      email: decoded.email,
      name: decoded.name,
      employeeId: decoded.identities[0].userId,
      accessToken: tokens.access_token,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
