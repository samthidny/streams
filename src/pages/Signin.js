import React from 'react'
import useUser from '../hooks/useUser';

export default function Signin() {

    const [authorised] = useUser();

    return (
        <div>
            <h1>Sign In - Authorised: {authorised} {authorised ? 'Yes' : 'No'}</h1>
            <p>You are being automatically signed in as test user.</p>
        </div>
    )
}
