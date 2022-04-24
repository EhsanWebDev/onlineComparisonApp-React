
import React, { Fragment, useEffect, useState, } from 'react'
import { useDispatch } from 'react-redux';
import { create_product, get_all_brands, get_all_Categories, get_all_product_types } from './redux/actions';
import Loader from '../../../components/loader/Loader';
import AutoCompleteInput from '../../../components/AutoComplete/AutoCompleteInput';
import * as Yup from 'yup';
import { Formik, Form, } from 'formik';
import InputField from '../../../components/Field/InputField';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

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
    model_date: Yup.date().required('*Required'),
    // product_brand: Yup.string().required('*Required'),
    // product_category: Yup.string().required('*Required'),
    // product_type: Yup.string().required('*Required'),

});



const CreateProducts = () => {

    const dispatch = useDispatch()
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [loading, setLoading] = useState(true)
    const [productLoading, setProductLoading] = useState(false)
    const [open, setOpen] = useState(false)
    const [severity, setSeverity] = useState("success")
    const [alertMsg, setAlertMsg] = useState("Product Added Successfully!")


    // Is product Active?
    const [prodActive, setProdActive] = useState("")

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

    // Product Image
    const [productImg, setProductImg] = useState("")

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


    const handleClose = (event, reason) => {
        setOpen(false);
    };


    if (loading) {
        return (
            <div className='flex justify-center items-center mt-20'>
                <Loader color={"text-red-800"} />
            </div>
        )
    }
    console.log({ productImg })
    return (
        <div className='mt-8'>

            <h2 className='text-2xl font-bold underline md:text-center'>Create a New Product</h2>
            <div className='max-w-3xl md:max-w-xl md:flex md:items-center md:justify-center md:mx-auto'>
                <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert variant="filled" onClose={handleClose} severity={severity}>
                        {alertMsg}
                    </Alert>
                </Snackbar>
                <Formik
                    initialValues={{
                        productName: '',
                        prod_desc: '',
                        price_from: '',
                        price_to: '',
                        model_name: '',
                        model_date: '',
                        product_type: "",
                        product_category: "",
                        product_brand: "",
                    }}
                    validationSchema={productCreationSchema}
                    onSubmit={(values, { resetForm }) => {
                        if (productImg === "") {
                            alert("Please select at least one image of a product")
                            return
                        }
                        const { productName, prod_desc, price_from, price_to, model_date, model_name, } = values || {}

                        const productPayload = {
                            data: {
                                productId: "01",
                                name: productName,
                                description: prod_desc,
                                brandId: selectedBrand?.brandId,
                                typeId: selectedProductTypes?.categoryId,
                                categoryId: selectedCategory?.categoryId,
                                priceFrom: price_from,
                                priceTo: price_to,
                                modelName: model_name,
                                modelYear: model_date,
                                active: prodActive,
                                file: productImg
                            },
                            onSuccess: () => {
                                setProductLoading(false)
                                setOpen(true)
                                setAlertMsg(`Product added successfully!`)
                                setSeverity("success")
                                resetForm()
                            },
                            onError: (error) => {
                                const { status } = error || {}
                                setProductLoading(false)
                                setOpen(true)
                                setAlertMsg(`Error occurred. Status:${status}`)
                                setSeverity("error")
                            }
                        }
                        setProductLoading(true)
                        dispatch(create_product(productPayload))
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
                                autocomplete="off"
                                selected={selectedBrand} setSelected={setSelectedBrand} data={filteredBrands} query={brandsQuery} setQuery={setBrandsQuery} placeholder="Select Brand Name"
                            />
                            <AutoCompleteInput
                                autocomplete="off"
                                selected={selectedCategory} setSelected={setSelectedCategory} data={filteredCategories}
                                query={categoriesQuery}
                                setQuery={setCategoriesQuery}
                                placeholder="Select Category Name"
                            />
                            <AutoCompleteInput
                                autocomplete="off"
                                selected={selectedProductTypes}
                                setSelected={setSelectedProductTypes}
                                data={filteredProductTypes}
                                query={productTypesQuery} setQuery={setProductTypesQuery} placeholder="Select Product Type "
                            />


                            <div className='flex space-x-4 '>
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
                            <div className='flex flex-row items-center justify-between'>
                                <h6 className='text-sm'>Product Active?</h6>
                                <div >
                                    <fieldset id="group1" className='flex flex-row items-center space-x-3'>
                                        <div className='flex flex-col items-center'>
                                            <label className='text-sm' htmlFor="yes">Yes</label>
                                            <input type="radio" value="1" name="group1" onClick={(e) => setProdActive(e.target.value)} />
                                        </div>
                                        <div className='flex flex-col items-center'>
                                            <label className='text-sm' htmlFor="no">No</label>
                                            <input type="radio" value="0" name="group1" onClick={(e) => setProdActive(e.target.value)} />
                                        </div>

                                    </fieldset>
                                </div>


                            </div>

                            <InputField
                                label='Select image'
                                type={"file"}
                                onChange={(e) => {
                                    const { target } = e || {}
                                    const { files } = target || {}
                                    const file = files[0]

                                    if (file?.size > 2000000) {
                                        alert("File size should be less than 2MB")
                                        return
                                    }

                                    if (file)
                                        setProductImg(file)

                                }}
                                // value={productImg}
                                name="product_img"
                                accept=".jpg,.png,.gif"

                            />



                            <button type="submit" className='bg-red-800 text-sm bold w-full items-center justify-center flex mt-2 text-white py-2 rounded transition-all duration-500 hover:bg-red-700' disabled={productLoading}>
                                {productLoading ? <Loader color="text-white" /> : "Add product"}

                            </button>
                        </Form>
                    )}
                </Formik>
            </div>

        </div>
    )
}

export default CreateProducts