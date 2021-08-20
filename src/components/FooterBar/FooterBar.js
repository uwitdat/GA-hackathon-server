
import './FooterBar.css'
import { AiFillHome } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { MdEventNote } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { Link } from 'react-router-dom'


const FooterBar = () => {


    return (
        <div className='footerbar'>
            <div className='flex-col'>
                <Link to='/homepage'>
                    <AiFillHome value='click' className='footer-icon black' />
                </Link>
                <p className='footer-text black'>HOME</p>
            </div>
            <div className='flex-col'>
            <Link to='/groups'>
                <HiUserGroup className='footer-icon black' />
                <p className='footer-text black'>GROUPS</p>
                </Link>
            </div>
            <div className='flex-col'>
            <Link to='/meetups'>
                <MdEventNote className='footer-icon black' />
                <p className='footer-text black' >EVENTS</p>
                </Link>
            </div>
            <div className='flex-col'>
                <Link to='/mentors'>
                    <IoPerson className='footer-icon black' />
                <p className='footer-text'>MENTORS</p>
                </Link>
            </div>
        </div>
    )
}

export default FooterBar
