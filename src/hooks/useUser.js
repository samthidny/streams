import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { signInThunk } from '../redux/UserSlice';

export default function useUser() {

    const dispatch = useDispatch();

    const authorised = useSelector(state => {
        return !!state.user.user?.session?.access_token;
    });

    const user = useSelector(state => {
        return state.user.user;
    });

    useEffect(() => {

        if (!authorised) {
            console.log('Log user in!');
            dispatch(signInThunk());
        }

        return () => {
            console.log('Destroy useUser function')
        }
    }, [])

    return [authorised];
}
