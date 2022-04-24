import API from "../../../../API/API"
import { CREATE_NEW_PRODUCT, GET_ALL_BRANDS, GET_ALL_CATEGORIES, GET_ALL_PRODUCT_TYPES } from "../../../../API/routes"


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
export const create_product = (payload) => {
    return async dispatch => {
        try {
            const { data: productPayload, onSuccess } = payload || {}
            const { productId, name, description, brandId, typeId, categoryId, priceFrom, priceTo, modelName, modelYear, active, file } = productPayload || {}
            const headers = {
                "Content-Type": "multipart/form-data",
                "accept": "text/plain"
            }
            let bodyFormData = new FormData();
            bodyFormData.set('ProductId', productId);
            bodyFormData.set('Name', name);
            bodyFormData.set('Description', description);
            bodyFormData.set('BrandId', brandId);
            bodyFormData.set('TypeId', typeId);
            bodyFormData.set('CategoryId', categoryId);
            bodyFormData.set('PriceFrom', priceFrom);
            bodyFormData.set('PriceTo', priceTo);
            bodyFormData.set('ModelName', modelName);
            bodyFormData.set('ModelYear', modelYear);
            bodyFormData.set('Active', active);
            bodyFormData.set('File', file);


            const response = await API.create({ ...headers }).api.post(CREATE_NEW_PRODUCT, bodyFormData)
            console.log({ response })
            const { data } = response || {}
            if (onSuccess) onSuccess(data)

        } catch (error) {
            const { onError } = payload || {}
            if (onError) onError(error)
            console.log({ error })
        }
    }
}