import Link from 'next/link'
import { useEffect } from 'react'
import {useRouter} from 'next/router'
import Navbar from '../components/Navbar';
import Header from "./../components/Header";

const NotFound = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            // router.go(-1) -----this method is used to send the user back to the previous page
            router.push('/');
        }, 5000)
    }, [])

    const sectionHeader = {
        title: "Oops..."
      };

    return ( 
        <section className="not-found header-section">
        <Navbar />
        <Header data={sectionHeader} />
        <h2>That page cannot be found.</h2>
        <p>Go back to the <Link href='/'><a>Homepage</a></Link></p>
      </section>
     );
}
 
export default NotFound;