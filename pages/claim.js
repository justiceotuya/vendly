import { useRouter } from 'next/router'

function RedirectPage() {
    const router = useRouter()
    // Make sure we're in the browser
    if (typeof window !== 'undefined') {
        let newSite = window.location.href.split('?')
        newSite.splice(0, 1)
        newSite = newSite.join('?')
        // let siteToDecode = newSite.split('&&')
        router.push(`/?${newSite}`)
    }
    return null
}

export default RedirectPage
