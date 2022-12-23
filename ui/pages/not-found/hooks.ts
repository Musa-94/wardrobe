import { useRouter } from 'next/router'

export const useNotFound = () => {
    const router = useRouter()

    const goHome = async () => {
        await router.replace('/')
    }

    return {
        goHome,
    }
}
