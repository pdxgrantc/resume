import { useRef, useState, useEffect } from 'react'
import { Helmet } from 'react-helmet';
import { BottomBorder } from '../../Lib'

// icons
import { HiChevronDoubleDown as DownArrow } from 'react-icons/hi'

// firebase 
import { storage } from '../../firebase'
import { ref, getDownloadURL } from '@firebase/storage'

// components
import Header from '../../header/Header'
import Footer from '../../footer/Footer'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'


export default function Home() {
    const [url, setUrl] = useState(null)

    const getURL = async () => {
        const storageRef = ref(storage, 'HomeProfile.jpg')
        const url = await getDownloadURL(storageRef)
        setUrl(url)
    }

    useEffect(() => {
        getURL()
    }, [])

    const SecondCard = useRef(null);

    const scrollToWork = () => {
        if (SecondCard.current) {
            // Scroll to the target div
            SecondCard.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };


    // Code to make the navbar sticky at after scrolling past the first viewport
    const [isSticky, setIsSticky] = useState(false);
    const [scrollThreshold, setScrollThreshold] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;

            if (scrollTop > scrollThreshold) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        const updateScrollThreshold = () => {
            setScrollThreshold(window.innerHeight);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', updateScrollThreshold);

        // Initial setup
        updateScrollThreshold();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', updateScrollThreshold);
        };
    }, [scrollThreshold]);


    return (
        <div>
            <Helmet>
                <title>Grant Conklin</title>
            </Helmet>
            <div className="w-full min-h-screen bg-bg text h-full">
                <div className='h-screen flex bg-accent_bg'>
                    <div className='w-1/2'>
                        <img src={url} alt="Grant" className='w-full h-full' />
                    </div>
                    <div className="w-1/2 flex flex-col gap-6 mt-[12%] ml-16">
                        <div className='flex flex-col gap-3'>
                            <h2 className="text-xlheader font-bold">I amGrant Conklin</h2>
                            <h3 className="text-lheader font-semibold">Full Stack Web Developer</h3>
                            <h3 className="text-lheader leading-[4rem] font-semibold">Student at Oregon State University</h3>
                        </div>
                        <BottomBorder click={scrollToWork}>
                            <p className='text-sheader'>View my work</p>
                            <DownArrow className='h-8 w-auto my-auto' />
                        </BottomBorder>
                    </div>
                </div>
                <div ref={SecondCard} className={`sticky-navbar${isSticky ? ' sticky' : ''}`}>
                    <Header title={"Grant Conklin"} />
                </div>
                <div className='flex flex-col gap mx-page'>
                    <About>
                        <h2 className='font-bold text-lheader border-b-[.3rem] w-fit border-accent_red leading-[5rem]'>
                            About
                        </h2>
                    </About>
                    <Experience>
                        <h2 className='font-bold text-lheader border-b-[.3rem] w-fit border-accent_red leading-[5rem]'>
                            Experience
                        </h2>
                    </Experience>
                    <Projects>
                        <h2 className='font-bold text-lheader border-b-[.3rem] w-fit border-accent_red leading-[5rem]'>
                            Projects
                        </h2>
                    </Projects>
                </div>
                <Footer />
            </div>
        </div>
    )
}
