import { useState } from 'react'
import { useRouter } from 'next/router'
import { useSignUpEmailPassword } from '@nhost/nextjs'
import Link from 'next/link'
import Image from 'next/image'

const SignUp = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()

  const { signUpEmailPassword, isLoading, isSuccess, needsEmailVerification, isError, error } =
    useSignUpEmailPassword()

  const handleOnSubmit = async (e) => {
    e.preventDefault()

    await signUpEmailPassword(email, password, {
      displayName: `${firstName} ${lastName}`.trim(),
      metadata: {
        firstName,
        lastName
      }
    })
  }

  if (isSuccess) {
    console.log('Done in')
    router.push('/')
    return null
  }

  const disableForm = isLoading || needsEmailVerification

  return (
    <div className='border border-red-500 mt-16' >
      <div >
        {/* <div >
          <Image src="/logo.svg" alt="logo" layout="fill" objectFit="contain" />
        </div> */}

        {needsEmailVerification ? (
          <p >
            Please check your mailbox and follow the verification link to verify your email.
          </p>
        ) : (
          <form onSubmit={handleOnSubmit} className=''>
            <div>
              <input
                label="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                disabled={disableForm}
               
                className='bg-[#232B2B] text-white rounded-md outline-none p-2 placeholder:text-white'
              />
              <input
                label="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                disabled={disableForm}
                required
                className='bg-[#232B2B] text-white rounded-md outline-none p-2 placeholder:text-white'
              />
            </div>
            <input
              type="email"
              label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={disableForm}
              required
              className='bg-[#232B2B] text-white rounded-md outline-none p-2 placeholder:text-white'
            />
            <input
              type="password"
              label="Create password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={disableForm}
              required
              className='bg-[#232B2B] text-white rounded-md outline-none p-2 placeholder:text-white'
            />

            <button type="submit" disabled={disableForm}>
              {isLoading ? 'Loading' : 'Create account'}
            </button>

            {isError ? <p > {error?.message}</p> : null}
          </form>
        )}
      </div>

      <p >
        Already have an account?{' '}
        <Link href="/Sign">
          <a>Sign in</a>
        </Link>
      </p>
    </div>
  )
}

export default SignUp