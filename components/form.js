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
    return error
  }

  function validatePhone(value) {
    let error
    if (!value) {
      error = 'Phone is required'
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
        setTimeout(() => {
          axios.post('/api/sheets', values)?.then((res) => {
            const success = res?.data?.success
            if(success) {
              toast({
                title: success ? 'Thank you for sending me a message!': 'Something went wrong! Please try again',
                position: 'top',
                status: success ? 'success' : 'error',
                isClosable: true,
              })
            }
          })
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
