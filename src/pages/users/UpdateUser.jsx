import React, {useEffect, useState} from 'react'

import Form from "../../components/form/Form";
import FormInput from "../../components/form/form_input/FormInput";
import Button from "../../components/button/Button";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import axios from "axios";

const UpdateUser = (props) => {
    const initUserSate = {
        id: null, username: '', first_name: '', last_name: '', email: '', phone: '', gender: ''
    }
    const update_url = `${process.env.REACT_APP_API_ROOT_V1}user/${props.match.params.id}/`
    const {
        handleSubmit,
        register,
        formState: {errors},
    } = useForm();
    const history = useHistory()
    let [user, setUser] = useState(initUserSate)
    useEffect(() => {
        axios.get(update_url).then((response) => {
            setUser(response.data);
        })
    }, [])

    const onSubmit = async (data) => {
        console.log(data)
        try {
            const response = await axios.put(
                update_url,
                data,);
            console.log(response);
            history.push(`/users/`)
        } catch (error) {
            if (error) console.log(error.response.data);
        }
    };
    return (
        <div>
            <div>
                <div className="row">
                    <div className="col-10">
                        <h2 className="page-header">
                            Update User
                        </h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card__body">
                                <form onSubmit={handleSubmit(onSubmit)} encType={"multipart/form-data"}>
                                    <div className="row">
                                        <div className="col-6">
                                            <label htmlFor="username"> Username </label>
                                            <input className={'form-control'} type="text" value={user.username}
                                                   id={'username'} {...register("username", {required: "Username is required.",})} />
                                            <p className={'text-danger'}> {errors.username && errors.username.message ? errors.username.message : null}</p>
                                        </div>
                                        <div className="col-6">
                                            <label htmlFor="gender"> Gender </label>
                                            <input className={'form-control'} type="text" value={user.gender}
                                                   id={'gender'} {...register("gender", {required: "Gender is required.",})} />
                                            <p className={'text-danger'}> {errors.gender && errors.gender.message ? errors.gender.message : null}</p>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-6">
                                            <label htmlFor="first_name"> First Name </label>
                                            <input className={'form-control'} type="text" value={user.first_name}
                                                   id={'first_name'} {...register("first_name", {required: "First Name is required.",})} />
                                            <p className={'text-danger'}> {errors.first_name && errors.first_name.message ? errors.first_name.message : null}</p>
                                        </div>

                                        <div className="col-6">
                                            <label htmlFor={'last_name'}> Last Name </label>
                                            <input className={'form-control'} type="text" value={user.last_name}
                                                   id={'last_name'} {...register("last_name", {required: "Last Name is required.",})}/>
                                            <p className={'text-danger'}> {errors.last_name && errors.last_name.message ? errors.last_name.message : null}</p>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-6">
                                            <label htmlFor="email"> Email </label>
                                            <input className={'form-control'} type="email" value={user.email}
                                                   id={'email'} {...register("email", {required: "Email is required.",})} />
                                            <p className={'text-danger'}> {errors.email && errors.email.message ? errors.email.message : null}</p>
                                        </div>

                                        <div className="col-6">
                                            <label htmlFor={'phone'}> Phone Number </label>
                                            <input className={'form-control'} type="text" value={user.phone}
                                                   id={'phone'} {...register("phone", {required: "Phone number is required.",})}/>
                                            <p className={'text-danger'}> {errors.phone && errors.phone.message ? errors.phone.message : null}</p>
                                        </div>
                                    </div>

                                    <div className="row">


                                        {/*<div className="col-6">*/}
                                        {/*    <p className={'text-danger'}> {errors.photo && errors.photo.message ? errors.photo.message : null}</p>*/}
                                        {/*    <label htmlFor={'photo'}> Photo </label>*/}
                                        {/*    <input className={'form-control'} type="file"*/}
                                        {/*           id={'photo'} {...register("photo", {required: "Photo is required.",})}/>*/}
                                        {/*</div>*/}
                                    </div>

                                    <Button type={'submit'} color={'primary float-right mt-3'}
                                            content={'Save User Info'}/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateUser
