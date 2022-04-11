
import React, { useEffect, useState, } from 'react'
import { useDispatch } from 'react-redux';
import { get_all_brands, get_all_Categories, get_all_product_types } from './redux/actions';
import Loader from '../../../components/loader/Loader';
import AutoCompleteInput from '../../../components/AutoComplete/AutoCompleteInput';
import * as Yup from 'yup';
import { Formik, Form, } from 'formik';
import InputField from '../../../components/Field/InputField';

const productCreationSchema = Yup.object().shape({
    productName: Yup.string()
        .min(5, 'Too Short!')
        .max(50, 'Too Long!')
        .required('*Required'),
    prod_desc: Yup.string()
        .min(5, 'Too Short!')
        .max(200, 'Too Long!')
        .required('*Required'),
    price_from: Yup.string().required('*Required'),
    price_to: Yup.string().required('*Required'),
    model_name: Yup.string().min(5, 'Too Short!')
        .max(50, 'Too Long!').required('*Required'),
    model_date: Yup.string().required('*Required'),
});



const CreateProducts = () => {

    const dispatch = useDispatch()
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [loading, setLoading] = useState(true)

    // ProductBrand
    const [selectedBrand, setSelectedBrand] = useState()
    const [brandsQuery, setBrandsQuery] = useState('')
    const [brands, setBrands] = useState([])

    // Categories
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState()
    const [categoriesQuery, setCategoriesQuery] = useState('')

    // ProductTypes
    const [productTypes, setProductTypes] = useState([])
    const [selectedProductTypes, setSelectedProductTypes] = useState()
    const [productTypesQuery, setProductTypesQuery] = useState('')

    const filteredBrands =
        brandsQuery === ''
            ? brands
            : brands.filter((item) =>
                item.name
                    .toLowerCase()
                    .replace(/\s+/g, '')
                    .includes(brandsQuery.toLowerCase().replace(/\s+/g, ''))
            )
    const filteredCategories =
        categoriesQuery === ''
            ? categories
            : categories.filter((item) =>
                item.name
                    .toLowerCase()
                    .replace(/\s+/g, '')
                    .includes(categoriesQuery.toLowerCase().replace(/\s+/g, ''))
            )
    const filteredProductTypes =
        productTypesQuery === ''
            ? productTypes
            : productTypes.filter((item) =>
                item.name
                    .toLowerCase()
                    .replace(/\s+/g, '')
                    .includes(productTypesQuery.toLowerCase().replace(/\s+/g, ''))
            )

    useEffect(() => {
        setLoading(true)
        const brandsPayload = {
            onSuccess: (data) => {
                setBrands(data)


            }
        }
        const categoriesPayload = {
            onSuccess: (data) => {
                setCategories(data)


            }
        }
        const productTypePayload = {
            onSuccess: (data) => {
                setProductTypes(data)
                setLoading(false)
            }
        }
        dispatch(get_all_brands(brandsPayload))
        dispatch(get_all_Categories(categoriesPayload))
        dispatch(get_all_product_types(productTypePayload))
    }, [])

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };


    if (loading || !brands) {
        return (
            <div className='flex justify-center items-center mt-20'>
                <Loader />
            </div>
        )
    }
    return (
        <div className='mt-8'>

            <h2 className='text-2xl font-bold underline md:text-center'>Create a New Product</h2>
            <div className='max-w-3xl md:max-w-xl md:flex md:items-center md:justify-center md:mx-auto'>

                <Formik
                    initialValues={{
                        productName: '',
                        prod_desc: '',
                        price_from: '',
                        price_to: '',
                        model_name: '',
                        model_date: '',
                    }}
                    validationSchema={productCreationSchema}
                    onSubmit={values => {
                        // same shape as initial values
                        console.log(values);
                    }}
                >
                    {({ errors, touched, initialErrors, handleChange, handleBlur, values }) => (
                        <Form className={`mt-6 space-y-3`}>
                            <InputField
                                onChange={handleChange("productName")}
                                onBlur={handleBlur}
                                value={values.productName}
                                placeholder='Enter product name'
                                error={errors.productName && touched.productName}
                                name="productName"
                                errorMsg={
                                    errors.productName && touched.productName ?
                                        errors.productName : null
                                }
                            />
                            <InputField
                                onChange={handleChange("prod_desc")}
                                onBlur={handleBlur}
                                value={values.prod_desc}
                                placeholder='Enter product description' name="prod_desc"
                                error={errors.prod_desc && touched.prod_desc}
                                errorMsg={
                                    errors.prod_desc && touched.prod_desc ?
                                        errors.prod_desc : null
                                }
                            />

                            <AutoCompleteInput
                                selected={selectedBrand} setSelected={setSelectedBrand} data={filteredBrands} query={brandsQuery} setQuery={setBrandsQuery} placeholder="Select Brand Name"
                            />
                            <AutoCompleteInput
                                selected={selectedCategory} setSelected={setSelectedCategory} data={filteredCategories}
                                query={categoriesQuery}
                                setQuery={setCategoriesQuery}
                                placeholder="Select Category Name"
                            />
                            <AutoCompleteInput
                                selected={selectedProductTypes}
                                setSelected={setSelectedProductTypes}
                                data={filteredProductTypes}
                                query={productTypesQuery} setQuery={setProductTypesQuery} placeholder="Select Product Type "
                            />


                            <div className='flex space-x-4'>
                                <InputField
                                    onChange={handleChange("price_from")}
                                    onBlur={handleBlur}
                                    value={values.price_from}
                                    placeholder='Price From'
                                    name="price_from"
                                    error={errors.price_from && touched.price_from}
                                    errorMsg={
                                        errors.price_from && touched.price_from ?
                                            errors.price_from : null
                                    }
                                />
                                <InputField
                                    onChange={handleChange("price_to")}
                                    onBlur={handleBlur}
                                    value={values.price_to}
                                    placeholder='Price To'
                                    name="price_to"
                                    error={errors.price_to && touched.price_to}
                                    errorMsg={
                                        errors.price_to && touched.price_to ?
                                            errors.price_to : null
                                    }
                                />
                            </div>
                            <InputField
                                onChange={handleChange("model_name")}
                                onBlur={handleBlur}
                                value={values.model_name}
                                placeholder='Enter Model Name'
                                name="model_name"
                                error={errors.model_name && touched.model_name}
                                errorMsg={
                                    errors.model_name && touched.model_name ?
                                        errors.model_name : null
                                }
                            />
                            <InputField
                                label='model date'
                                type={"date"}
                                onChange={handleChange("model_date")}
                                onBlur={handleBlur}
                                value={values.model_date}
                                placeholder='Enter Model Date'
                                name="model_date"
                                error={errors.model_date && touched.model_date}
                                errorMsg={
                                    errors.model_date && touched.model_date ?
                                        errors.model_date : null
                                }
                            />


                            <button type="submit" className='bg-red-800 w-full mt-2 text-white py-2 rounded transition-all duration-500 hover:bg-red-700'>Add Product</button>
                        </Form>
                    )}
                </Formik>
            </div>

        </div>
    )
}

export default CreateProducts