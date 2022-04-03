
import React, { useState } from 'react'
import { Divider, Grid, makeStyles, Typography, createStyles, TextField, Box, TableContainer, Breadcrumbs, Link, Snackbar } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import { products_data } from '../../../data'
import 'date-fns';
import Button from '../../../components/Button/Button';


const useStyles = makeStyles((theme) => createStyles({
    marginTop: {
        marginTop: theme.spacing(2)
    },
    auto_img: {
        height: 'auto', paddingTop: 8, maxWidth: 160, width: 30, objectFit: 'contain',
        [theme.breakpoints.down('xs')]: {
            width: 50,
        },
        [theme.breakpoints.up('sm')]: {
            width: 50,

        },
        [theme.breakpoints.up('md')]: {
            // width: "33%",
        },
        [theme.breakpoints.up('lg')]: {
            // width: "25%",
        },
    },
    input: {
        padding: "0 .3em",
    },
    auto_brand: {
        fontSize: ".65rem", whiteSpace: "nowrap",
        overflow: "hidden", textOverflow: "ellipsis",
        fontWeight: 300,
    },
    auto_title: {
        fontSize: ".7rem", whiteSpace: "nowrap", flexBasis: '70%',
        overflow: "hidden", textOverflow: "ellipsis",
        marginLeft: 4,
        [theme.breakpoints.down('xs')]: {
            marginLeft: 8
        },
        [theme.breakpoints.up('sm')]: {
            flexBasis: '85%',
            marginLeft: 8
        },
        [theme.breakpoints.up('md')]: {
            flexBasis: '90%',
            // width: "33%",
        },
        [theme.breakpoints.up('lg')]: {
            flexBasis: '90%',
            // width: "25%",
        },
    },
    tableHeader: {
        color: theme.palette.primary.main,
        textTransform: 'uppercase'
    },
    product_info: {
        // fontSize: '.75rem',


    },
    review_title: {
        fontSize: '.8rem'
    },
    table_cell: {
        textAlign: 'center',
        width: "33%",
        [theme.breakpoints.down('xs')]: {
            padding: ".5em .5em"
        },
        [theme.breakpoints.up('sm')]: {
            width: "40%",
        },
        [theme.breakpoints.up('md')]: {
            width: "33%",
        },
        [theme.breakpoints.up('lg')]: {
            width: "25%",
        },

    },
    textField: {

        width: "100%",
    },
}))

const CreateProducts = () => {

    const [firstSelected, setFirstSelected] = useState({})
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const {
        auto_title,
        input, textField
    } = useStyles() || {}


    const renderOption = (item, rest) => {
        const { name, brand, image } = item || {}
        const { selected } = rest || {}
        return (
            <Box flex={1} display="flex" alignItems="center" justifyContent="space-between" co>
                <Box display="flex" alignItems="center" flex={1} >
                    <Typography variant="subtitle2" className={auto_title} >{name}</Typography >
                </Box>
                {/* <Typography variant="caption" className={auto_brand} >{brand}</Typography > */}
            </Box>
        )

    }


    return (
        <div className='mt-8'>

            <h2 className='text-2xl font-bold underline md:text-center'>Create a New Product</h2>
            <div className='max-w-3xl md:max-w-xl md:flex md:items-center md:justify-center md:mx-auto'>
                <form className='mt-4 space-y-3'>
                    <input className='border outline-none focus:border-opacity-0 focus:ring-2 focus:ring-red-700 focus:border-transparent w-full py-2 px-3 border-gray-400 rounded ' placeholder='Enter product name' />
                    <input className='outline-none border border-gray-400 rounded w-full py-2 px-3 focus:border-opacity-0 focus:ring-2 focus:ring-red-700 ' placeholder='Enter product description' />
                    <Autocomplete
                        multiple={false}
                        classes={{ option: input }}
                        onChange={(event, value) => {
                            // if (!value) {
                            //     setFirstSelected({ name: "", image: null })
                            //     let newData = (compareRows || []).map((row, index) => {

                            //         return {
                            //             ...row,
                            //             first: "",
                            //         }

                            //     })
                            //     addCompareItem({ ...compare[0], firstPId: "", rows: newData })
                            //     return
                            // }
                            // const { id } = value || {}
                            // if (id === secondSelected.id) {
                            //     setOpen(true)
                            //     return
                            // }

                            // // addCompareItem({ firstPId: id, })
                            // handleChange(value, true)
                            // setFirstSelected(value)
                        }}
                        id="free-solo-2-demo"
                        renderOption={renderOption}
                        value={firstSelected}
                        options={products_data}
                        getOptionLabel={option => option.name}
                        filterSelectedOptions
                        size="small"
                        freeSolo
                        ListboxProps={
                            {
                                style: {
                                    maxHeight: '10em',
                                    padding: 0

                                }
                            }
                        }
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Select Brand"
                                placeholder="Search Brand"
                                size="small"
                                variant="outlined"
                                InputProps={{ ...params.InputProps, }}
                                style={{ fontSize: 12 }}
                            />
                        )}
                        getOptionSelected={(option, value) => option.id === value.id}
                    />
                    <Autocomplete
                        multiple={false}
                        classes={{ option: input }}
                        onChange={(event, value) => {
                            // if (!value) {
                            //     setFirstSelected({ name: "", image: null })
                            //     let newData = (compareRows || []).map((row, index) => {

                            //         return {
                            //             ...row,
                            //             first: "",
                            //         }

                            //     })
                            //     addCompareItem({ ...compare[0], firstPId: "", rows: newData })
                            //     return
                            // }
                            // const { id } = value || {}
                            // if (id === secondSelected.id) {
                            //     setOpen(true)
                            //     return
                            // }

                            // // addCompareItem({ firstPId: id, })
                            // handleChange(value, true)
                            // setFirstSelected(value)
                        }}
                        id="free-solo-2-demo"
                        renderOption={renderOption}
                        value={firstSelected}
                        options={products_data}
                        getOptionLabel={option => option.name}
                        filterSelectedOptions
                        size="small"
                        freeSolo
                        ListboxProps={
                            {
                                style: {
                                    maxHeight: '10em',
                                    padding: 0

                                }
                            }
                        }
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Select Category"
                                placeholder="Search Category"
                                size="small"
                                variant="outlined"
                                InputProps={{ ...params.InputProps, }}
                                style={{ fontSize: 12 }}
                            />
                        )}
                        getOptionSelected={(option, value) => option.id === value.id}
                    />
                    <Autocomplete
                        multiple={false}
                        classes={{ option: input }}
                        onChange={(event, value) => {
                            // if (!value) {
                            //     setFirstSelected({ name: "", image: null })
                            //     let newData = (compareRows || []).map((row, index) => {

                            //         return {
                            //             ...row,
                            //             first: "",
                            //         }

                            //     })
                            //     addCompareItem({ ...compare[0], firstPId: "", rows: newData })
                            //     return
                            // }
                            // const { id } = value || {}
                            // if (id === secondSelected.id) {
                            //     setOpen(true)
                            //     return
                            // }

                            // // addCompareItem({ firstPId: id, })
                            // handleChange(value, true)
                            // setFirstSelected(value)
                        }}
                        id="free-solo-2-demo"
                        renderOption={renderOption}
                        value={firstSelected}
                        options={products_data}
                        getOptionLabel={option => option.name}
                        filterSelectedOptions
                        size="small"
                        freeSolo
                        ListboxProps={
                            {
                                style: {
                                    maxHeight: '10em',
                                    padding: 0

                                }
                            }
                        }
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Select Type"
                                placeholder="Search Type"
                                size="small"
                                variant="outlined"
                                InputProps={{ ...params.InputProps, }}
                                style={{ fontSize: 12 }}
                            />
                        )}
                        getOptionSelected={(option, value) => option.id === value.id}
                    />

                    <div className='flex space-x-4'>
                        <input className='border outline-none focus:border-opacity-0 focus:ring-2 focus:ring-red-700 focus:border-transparent w-full py-2 px-3 border-gray-400 rounded ' placeholder='Price From' />
                        <input className='border outline-none focus:border-opacity-0 focus:ring-2 focus:ring-red-700 focus:border-transparent w-full py-2 px-3 border-gray-400 rounded ' placeholder='Price To' />
                    </div>

                    <input className='border outline-none focus:border-opacity-0 focus:ring-2 focus:ring-red-700 focus:border-transparent w-full py-2 px-3 border-gray-400 rounded ' placeholder='Enter model name' />
                    <TextField
                        id="date"
                        label="Model year"
                        type="date"
                        variant="outlined"
                        defaultValue="2017-05-24"
                        className={textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />


                    <button className='bg-red-800 w-full mt-2 text-white py-2 rounded transition-all duration-500 hover:bg-red-700'>Add Product</button>
                </form>

            </div>






        </div>
    )
}

export default CreateProducts