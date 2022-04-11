import API from "../../../../API/API"
import { GET_ALL_BRANDS, GET_ALL_CATEGORIES, GET_ALL_PRODUCT_TYPES } from "../../../../API/routes"


export const get_all_brands = (payload) => {
    return async dispatch => {
        try {
            const { onSuccess } = payload || {}
            const response = await API.create().api.get(GET_ALL_BRANDS)
            const { data } = response || {}
            if (onSuccess) onSuccess(data)

        } catch (error) {
            console.log({ error })
        }
    }
}
export const get_all_Categories = (payload) => {
    return async dispatch => {
        try {
            const { onSuccess } = payload || {}
            const response = await API.create().api.get(GET_ALL_CATEGORIES)
            const { data } = response || {}
            if (onSuccess) onSuccess(data)

        } catch (error) {
            console.log({ error })
        }
    }
}
export const get_all_product_types = (payload) => {
    return async dispatch => {
        try {
            const { onSuccess } = payload || {}
            const response = await API.create().api.get(GET_ALL_PRODUCT_TYPES)
            const { data } = response || {}
            if (onSuccess) onSuccess(data)

        } catch (error) {
            console.log({ error })
        }
    }
}