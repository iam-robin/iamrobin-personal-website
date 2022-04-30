import SearchIcon from '../public/img/search.svg';
import CommandIcon from '../public/img/command.svg';

const SearchIndicator = () => {
    return (
        <div className='flex items-center cursor-pointer'>
            <span className='flex items-center justify-center bg-grey-100 h-6 w-6 rounded'>
                <CommandIcon />
            </span>
            <span className='flex items-center justify-center bg-grey-100 text-grey-300 h-6 w-6 rounded ml-1 text-[12px] font-bold'>
                K
            </span>
            <SearchIcon className='ml-2' />
        </div>
    );
}

export default SearchIndicator;
