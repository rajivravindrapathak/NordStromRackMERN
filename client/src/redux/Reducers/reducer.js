import { IMAGE_URL, LPRICE, PRICE, SUBLETTER, SUBTEXT, SUBTITLE, TITLE } from "../Actions/actionTypes";

const initialData = {
    image_url: "",
    title: "",
    subtitle: "",
    subtext: "",
    subletter: "",
    price: "",
    lprice: ""
}

export const reducer = (state = initialData, action) => {
    const { type, payload } = action

    switch (type) {
        case IMAGE_URL: {
            return {
                ...state,
                image_url: payload
            }
        } 
        case TITLE: {
            return {
                ...state,
                title: payload
            }
        }
        case SUBTITLE: {
            return {
                ...state,
                subtitle: payload
            }
        }
        case SUBTEXT: {
            return {
                ...state,
                subtext: payload
            }
        }
        case SUBLETTER: {
            return {
                ...state,
                subletter: payload
            }
        }
        case PRICE: {
            return {
                ...state,
                price: payload
            }
        } 
        case LPRICE: {
            return {
                ...state,
                lprice: payload
            }
        }   
        default:
            return state;
    }
}