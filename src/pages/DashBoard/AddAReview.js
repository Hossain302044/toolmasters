import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddAReview = () => {
    const { reset, register, formState: { errors }, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    const onSubmit = async data => {
        const review = {
            name: user.displayName,
            description: data.description,
            rating: data.rating
        }
        fetch('https://ancient-hollows-97544.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    toast.success('Thanks For Your Reviews');
                    reset();
                }
                else {
                    toast.error('Failed !! please try again')
                }
            })
    }
    return (
        <div className=''>
            <div className='text-center'><h2 className='text-2xl font-bold text-primary uppercase px-5 my-10'>Add Review</h2></div>
            <div className="divider"></div>
            <div className='ml-10'>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full max-w-md">
                        <label className="label">
                            <span className="label-text">Rating Number</span>
                        </label>
                        <select className="select select-bordered" {...register("rating", {
                            required: {
                                value: true,
                                message: 'Rating is Required'
                            }
                        })}>
                            <option selected>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>

                        <label className="label">
                            {errors.rating?.type === 'required' && <span className="label-text-alt text-error">{errors.rating.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-md">
                        <label className="label">
                            <span className="label-text">Description</span>
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
                    <input className='btn w-full max-w-md text-white' type="submit" value='Add Review' />
                </form>
            </div>
        </div>
    );
};

export default AddAReview;