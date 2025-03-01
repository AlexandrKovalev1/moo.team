import Container from '../../components/Container/Container.tsx'
import { TextField } from '../../components/textField/TextField.tsx'
import { Button } from '../../components/Button/Button.tsx'
import s from './loginPage.module.css'
import { useFormik } from 'formik'

export const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      console.log(values)
      formik.resetForm()
    },
  })

  return (
    <div>
      <Container>
        <form className={s.form} onSubmit={formik.handleSubmit}>
          <TextField
            label={'Email address'}
            placeholder={'Enter email'}
            description={"we'll never share your emeil with enyone else"}
            {...formik.getFieldProps('email')}
          />
          <TextField
            label={'Password'}
            placeholder={'Password'}
            {...formik.getFieldProps('password')}
          />
          <Button type={'submit'}>Submit</Button>
        </form>
      </Container>
    </div>
  )
}
