import Link from 'next/link'
import { useEffect } from 'react'
import {useRouter} from 'next/router'

const NotFound = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            // router.go(-1) -----this method is used to send the user back to the previous page
            router.push('/');
        }, 5000)
    }, [])

    return ( 
        <div className='not-found'>
            <h1>Oops...</h1>
            <h2>That page cannot be found.</h2>
            <p>Go back to the <Link href='/'><a>Homepage</a></Link></p>
        </div>
     );
}
 
export default NotFound;