import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';



const AddProduct = () => {
    const { reset, register, formState: { errors }, handleSubmit } = useForm();

    const imageStorageKey = '0b8c175b6db0be88e6c9c5e4abad5ed2';

    const onSubmit = async data => {
        const image = data.productsImage[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const product = {
                        name: data.ProductsName,
                        img: img,
                        price: data.price,
                        qty: data.quantity,
                        description: data.description,
                        minOrder: data.minOrder
                    }
                    //send to database
                    fetch('https://ancient-hollows-97544.herokuapp.com/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            'authorization': `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Products Uploaded successfully');
                                reset();
                            }
                            else {
                                toast.error('fail to upload products');
                            }
                        })
                }
            })
    }


    return (
        <div className='mb-[150px] md:mb-0'>
            <div className='text-center'><h2 className='text-2xl font-bold text-primary uppercase px-5 my-10'>Add Products</h2></div>
            <div className="divider"></div>
            <div className='ml-0 md:ml-10'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-md">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Products Name"
                            className="input input-bordered w-full max-w-md"
                            {...register("ProductsName", {
                                required: {
                                    value: true,
                                    message: 'Products Name is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.ProductsName?.type === 'required' && <span className="label-text-alt text-error">{errors.ProductsName.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-md">
                        <label className="label">
                            <span className="label-text">Products Price</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Price Please"
                            className="input input-bordered w-full max-w-md"
                            {...register("price", {
                                required: {
                                    value: true,
                                    message: 'Price is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.price?.type === 'required' && <span className="label-text-alt text-error">{errors.price.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-md">
                        <label className="label">
                            <span className="label-text">Product Quantity</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Quantity Please"
                            className="input input-bordered w-full max-w-md"
                            {...register("quantity", {
                                required: {
                                    value: true,
                                    message: 'Quantity is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.quantity?.type === 'required' && <span className="label-text-alt text-error">{errors.quantity.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-md">
                        <label className="label">
                            <span className="label-text">Min Order</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Min Order"
                            className="input input-bordered w-full max-w-md"
                            {...register("minOrder", {
                                required: {
                                    value: true,
                                    message: 'Min Order is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.minOrder?.type === 'required' && <span className="label-text-alt text-error">{errors.minOrder.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-md">
                        <label className="label">
                            <span className="label-text">Product Picture</span>
                        </label>
                        <input
                            type="file"
                            placeholder="Product Picture"
                            className="input input-bordered w-full max-w-md"
                            {...register("productsImage", {
                                required: {
                                    value: true,
                                    message: 'Product Picture is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.productsImage?.type === 'required' && <span className="label-text-alt text-error">{errors.productsImage.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-md">
                        <label className="label">
                            <span className="label-text">Products Description</span>
                        </label>
                        <textarea className="textarea textarea-bordered h-24"
                            {...register("description", {
                                required: {
                                    value: true,
                                    message: 'Description is Required'
                                }
                            })}
                            placeholder="Products Description"></textarea>
                        <label className="label">
                            {errors.description?.type === 'required' && <span className="label-text-alt text-error">{errors.description.message}</span>}
                        </label>
                    </div>
                    <input className='btn w-full max-w-md text-white' type="submit" value='Add Product' />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;