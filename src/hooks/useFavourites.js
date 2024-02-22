import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addFavouriteThunk, getFavouritesThunk, removeFavouriteThunk } from '../redux/FavouritesSlice';
import useUser from './useUser';


export default function useFavourites() {

    const [authorised] = useUser();
    const dispatch = useDispatch();

    const favourites = useSelector((state) => {
        return state.favourites.favourites;
    });

    useEffect(() => {
        if (authorised) {
            dispatch(getFavouritesThunk());
        }
    }, [authorised])

    // details - { id, title}
    function addFavourite(details) {
        dispatch(addFavouriteThunk({ id: details.id, title: details.title }));
    }

    function removeFavourite(details) {
        dispatch(removeFavouriteThunk({ id: details.id }));
    }

    return { favourites, addFavourite, removeFavourite };
}
