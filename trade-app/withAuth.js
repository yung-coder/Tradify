import { useRouter } from 'next/router'
import { useAuthenticationStatus } from '@nhost/nextjs'

export default function withAuth(Component) {
  return function AuthProtected(props) {
    const router = useRouter()
    const { isLoading, isAuthenticated } = useAuthenticationStatus()

    if (isLoading) {
      return (
        <div>
          <p>Loading....</p>
        </div>
      )
    }

    if (!isAuthenticated) {
      router.push('/Sign')
      return null
    }

    return <Component {...props} />
  }
}