import React from 'react'

import Form from "../../components/form/Form";
import FormInput from "../../components/form/form_input/FormInput";

const CreateUser = () => {
    const initialValues = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
    };

    const submit = (form, e) => {
        e.preventDefault()
        console.log(`Thanks for signing up, ${form.firstName} ${form.lastName}! We've sent you an email to ${form.emailAddress}.`);
    };
    return (
        <div>
            <div>
                <div className="row">
                    <div className="col-10">
                        <h2 className="page-header">
                            Create User
                        </h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card__body">
                                <Form submit={submit} initialValues={initialValues}>
                                    <div className="row">
                                        <div className="col-6">
                                            <FormInput
                                                label={'First Name'}
                                                name={'first_name'}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <FormInput
                                                label={'Last Name'}
                                                name={'last_name'}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <FormInput
                                                label={'Email'}
                                                type={'email'}
                                                name={'email'}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <FormInput
                                                label={'Password'}
                                                type={'password'}
                                                name={'password'}
                                            />
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateUser
