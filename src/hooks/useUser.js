import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { signInThunk } from '../redux/UserSlice';

export default function useUser() {

    const dispatch = useDispatch();

    const authorised = useSelector(state => {
        return !!state.user.user?.session?.access_token;
    });

    useEffect(() => {

        if (!authorised) {
            dispatch(signInThunk());
        }

        return () => {
        }
    }, [])

    return [authorised];
}
