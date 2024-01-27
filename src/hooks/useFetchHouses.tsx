import {useEffect, useState} from "react";
import {InitialState} from "./types";

const API_URL: string =
    "https://wizard-world-api.herokuapp.com/houses";

const initialState: InitialState = {
    isLoading: false,
    houses: [],
    hasError: false,
}

export const useFetchHouses = (): InitialState => {
    const [state, setState] = useState<InitialState>(initialState);

    useEffect(() => {
        const fetchData = async () => {
            setState((prevState => ({...prevState, isLoading: true})));
            try {
                const response = await fetch(API_URL);
                const data = await response.json();
                setState((prevState => ({...prevState, houses: data, isLoading: false})));
            } catch (error) {
                setState((prevState => ({...prevState, isLoading: false, hasError: true})));
            }

        }
        fetchData();
    }, [])
    return state;
}