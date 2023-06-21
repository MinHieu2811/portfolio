import { Field, Form, Formik } from 'formik'
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  Textarea,
  useToast
} from '@chakra-ui/react'
import axios from 'axios'

function FormContact() {
  const toast = useToast()
  function validateEmail(value) {
    let error
    if (!value) {
      error = 'Email is required'
    }
    if (
      !String(value)
        ?.toLowerCase()
        ?.match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      error = 'Your email is invalid'
    }
    return error
  }

  function validatePhone(value) {
    let error
    if (!value) {
      error = 'Phone is required'
    }
    if (
      !String(value)
        .toLowerCase()
        .match(
          /^(0|84)(2(0[3-9]|1[0-6|8|9]|2[0-2|5-9]|3[2-9]|4[0-9]|5[1|2|4-9]|6[0-3|9]|7[0-7]|8[0-9]|9[0-4|6|7|9])|3[2-9]|5[5|6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])([0-9]{7})$/gm
        )
    ) {
      error = 'Your phone number is not valid'
    }
    return error
  }

  function validateMessage(value) {
    let error
    if (!value) {
      error = 'Message is required'
    }
    return error
  }

  return (
    <Formik
      initialValues={{ email: '', phone: '', message: '' }}
      onSubmit={(values, actions) => {
        setTimeout(async () => {
          const result = await axios.post('/api/sheets', values)
          const success = result?.data?.success
          if (success) {
            toast({
              title: success
                ? 'Thank you for sending me a message!'
                : 'Something went wrong! Please try again',
              position: 'top',
              status: success ? 'success' : 'error',
              isClosable: true
            })
          }
          actions.setSubmitting(false)
          actions.resetForm({
            values: {
              email: '',
              phone: '',
              message: ''
            }
          })
        }, 1000)
      }}
    >
      {props => (
        <Form>
          <Field name="email" validate={validateEmail}>
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.email && form.touched.email}
                isRequired
              >
                <FormLabel>Email</FormLabel>
                <Input {...field} variant="contained" placeholder="Email" />
                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="phone" validate={validatePhone}>
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.phone && form.touched.phone}
                isRequired
                marginTop={2}
              >
                <FormLabel>Phone</FormLabel>
                <Input {...field} variant="contained" placeholder="Phone" />
                <FormErrorMessage>{form.errors.phone}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="message" validate={validateMessage}>
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.message && form.touched.message}
                isRequired
                marginTop={2}
              >
                <FormLabel>Message</FormLabel>
                <Textarea
                  {...field}
                  variant="contained"
                  placeholder="Message"
                />
                <FormErrorMessage>{form.errors.message}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
            marginX="auto"
            mt={4}
            colorScheme="teal"
            isLoading={props.isSubmitting}
            type="submit"
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default FormContact
