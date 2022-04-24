import API from "../../../API/API"
import { GET_ALL_PRODUCTS } from "../../../API/routes"


export const get_all_products = (payload) => {
    return async dispatch => {
        try {
            const { onSuccess } = payload || {}
            const response = await API.create().api.get(GET_ALL_PRODUCTS)
            const { data } = response || {}
            if (onSuccess) onSuccess(data)

        } catch (error) {
            console.log({ error })
        }
    }
}

