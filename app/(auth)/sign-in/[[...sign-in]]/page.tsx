import Login from '@/components/auth/LoginModal'

type Props = {}

const SignInPage = (props: Props) => {
  return (
    <div className='flex h-screen items-center justify-center'>
      <Login/>
    </div>
  )
}

export default SignInPage