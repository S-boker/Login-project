import './Link.css';
import { Link } from 'react-router-dom'

export default function InLink({pertext, linkText, link}) {
    return(
        <div className='link'>
            {pertext} <Link className='App-link' to={link}>{linkText}</Link> 
        </div>
    );
}