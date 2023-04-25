import {FormLabel, Input, Button, CircularProgress, Alert} from '@mui/material/'
import { useForm } from '../hooks/useForm';

    const initialForm = {
        user: '',
        password: ''
    }
    const validationsForm = (form) => {
        let errors = {}

        if(!form.user) {
            errors.user = "this field is required"
        }

        if(!form.password) {
            errors.password = "this field is required"
        }

        return errors
    }
export function Login() {
    const {form, errors, loading, alert, setAlert, handleChange, handleBlur, handleSubmit} = useForm(initialForm, validationsForm)

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <FormLabel >User: </FormLabel>
        <Input type='text' name='user' value={form.user} onChange={handleChange} onBlur={handleBlur}/>
        {errors.user && <span>{errors.user}</span>}
        <FormLabel >Password: </FormLabel>
        <Input type='password' name='password' value={form.password} onChange={handleChange} onBlur={handleBlur}/>
        {errors.password && <span>{errors.password}</span>}
        <Button type='submit' value='send'>Log in</Button>
        {loading && <CircularProgress />}
        {alert && <Alert onClose={() => {setAlert(false)}}>This is a success alert — check it out!</Alert>}
      </form>
    </>
  );
}
