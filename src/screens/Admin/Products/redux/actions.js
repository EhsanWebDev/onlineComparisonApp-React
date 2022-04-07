import API from "../../../../API/API"
import { GET_ALL_BRANDS } from "../../../../API/routes"


export const get_all_brands = (payload) => {
    return async dispatch => {
        try {
            const { onSuccess } = payload || {}
            const response = await API.create().api.get(GET_ALL_BRANDS)
            const { data } = response || {}
            console.log({ data })
        } catch (error) {
            console.log({ error })
        }
    }
}