import { useEffect, useState } from 'react'
import { Input, Button, Toast } from '@douyinfe/semi-ui'
import { getAccessToken, setToken } from '@//utils/token'
import LoginApi from '@//api/login'
import styles from './index.module.less'
import { useNavigate } from 'react-router'

const LoginPage: React.FC = () => {
  const navigator = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errMsg] = useState('')

  useEffect(() => {
    getAccessToken().then((res) => {
      if (res) {
        navigator('/dashboard')
      }
    })
  }, [])

  const onRegister = async () => {
    const res = await LoginApi.registerRequest({ username, password })
    if (res) {
      Toast.success(res.msg)
    } else {
      Toast.error('注册失败')
    }
  }

  const onLogin = async () => {
    const res = await LoginApi.loginRequest({ username, password })
    if (res) {
      setToken(res.accessToken, 'access')
      setToken(res.refreshToken, 'refresh')
      navigator('/dashboard')
      Toast.success('登录成功')
    } else {
      Toast.error('登录失败')
    }
  }

  return (
    <div className={styles['login-page-container']}>
      <div className={styles['login-form-container']}>
        <div className={styles['login-form-title']}>欢迎进入MYROOM麦荣系统</div>

        <div className={styles['login-form-input']}>
          <div className={styles['login-form-input--label']}>Username：</div>
          <Input type="text" size="large" onChange={(v) => setUsername(v)} />
        </div>

        <div className={styles['login-form-input']}>
          <div className={styles['login-form-input--label']}>Password：</div>
          <Input type="password" size="large" onChange={(v) => setPassword(v)} />
          <div className={styles['login-form-input--error']}>{Boolean(errMsg) && `*${errMsg}`}</div>
        </div>

        <div className={styles['login-form-submit']}>
          <Button onClick={onRegister} size="large" className={styles['login-form-submit--btn']}>
            注册
          </Button>
          <Button onClick={onLogin} size="large" className={styles['login-form-submit--btn']}>
            登录
          </Button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
