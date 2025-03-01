import Container from '../../../components/Container/Container.tsx'
import { TextField } from '../../../components/textField/TextField.tsx'
import { Button } from '../../../components/Button/Button.tsx'
import s from './loginPage.module.css'
import { useFormik } from 'formik'
import { AppRootStateType, useAppDispatch } from '../../../providers/store/store.ts'
import { loginTC } from '../model/authReducer.ts'
import { useSelector } from 'react-redux'
import { PATH } from '../../../providers/router/router.tsx'
import { Navigate } from 'react-router-dom'

export const LoginPage = () => {
  const dispatch = useAppDispatch()
  const isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth)
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      dispatch(loginTC(values)).then(_ => formik.resetForm())
    },
  })

  if (isAuth) {
    return <Navigate to={PATH.PROFILE} />
  }

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
