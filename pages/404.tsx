import { NotFound } from '@/pages/not-found'

export default function NotFoundPage() {
    return (
        <NotFound
            status="404"
            subTitle="Sorry, the page you visited does not exist."
        />
    )
}
