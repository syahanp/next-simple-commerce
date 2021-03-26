import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import style from './style.module.css'

const Searchbar = () => {

    const formik = useFormik({
        validationSchema: Yup.object().shape({
            query: Yup.string()
        }),
        initialValues: {
            query: ''
        },
        onSubmit: values => {
            console.log(values);
        },
    });
    
    return (
        <div className='flex items-center border border-gray-100'>
            <div className='flex justify-center items-center bg-gray-100 h-12 w-12'>
                <svg className='h-6 w-6 text-gray-400' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
            <input 
                type="text"
                name='query'
                value={formik.values.query}
                onChange={formik.handleChange}
                placeholder='Search for something...'
                className={style.searchbar} 
            />
        </div>
    )
}

export default Searchbar
