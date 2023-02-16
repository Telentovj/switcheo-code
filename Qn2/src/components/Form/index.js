import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import "./styles.css";
import { TextInput } from '../TextInput';
import { Spinner } from '@chakra-ui/react'
import { useState } from 'react';


export const FancyForm = () => {
    const [isSubmitting, setSubmitting] = useState(false);
    const [successText, setSuccessText] = useState("");
    return (
        <>
            <h1>Fancy Form</h1>
            <Formik
                initialValues={{
                    ethaddress: '',
                    inputamount: '',
                    otpauthentication: '',
                }}
                validationSchema={Yup.object({
                    ethaddress: Yup.string()
                        .length(5, "Your address should be 42 characters")
                        .required('Required'),
                    inputamount: Yup.number()
                        .required('Required')
                        .positive("Amount must be more than zero"),
                    otpauthentication: Yup.number()
                        .integer("OTP should not have decimal points")
                        .lessThan(999999, 'Your OTP should be 6 digits')
                        .moreThan(100000, 'Your OTP should be 6 digits and positive')
                        .required('Required'),
                })}
                onSubmit={(values) => {
                    setSubmitting(true);
                    setTimeout(() => {
                        setSubmitting(false);
                        setSuccessText("Successfully sent " + values['inputamount'] + " Eth!");
                    }, 1000);
                    setTimeout(() => {
                        setSuccessText("You may now do another transaction!")
                    }, 3000);
                    setTimeout(() => {
                        setSuccessText("")
                    }, 5000);
                }}
            >
                <Form>
                    <TextInput
                        label="ETH Address"
                        name="ethaddress"
                        type="text"
                        placeholder=""
                    />

                    <TextInput
                        label="Input Amount"
                        name="inputamount"
                        type="number"
                        placeholder=""
                    />

                    <TextInput
                        label="OTP Authentication"
                        name="otpauthentication"
                        type="number"
                        placeholder=""
                    />
                    <div>
                        {isSubmitting ? <Spinner size='xl' />: <button type="submit">Submit</button>}
                    </div>
                    <h6>{successText}</h6>
                </Form>
            </Formik>
        </>
    );
};

