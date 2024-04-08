import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Header = () => {
    return (
        <header>
            <div>
                <h1 className='site-logo'>
                    <Link
                        to={'/titles/1'}
                        className='logo'
                    >
                        NetDB
                    </Link>
                </h1>
            </div>
            <SearchBar />
        </header>
    );
}

export default Header;