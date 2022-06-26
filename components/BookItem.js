import clsx from 'clsx';

const BookItem = (props) => {
  return (
    <a href={props.url} target="_blank" rel="noreferrer" className='cursor-pointer group flex flex-col'>
      <div className='transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-[1.03]'>
        <div
          className={clsx(
            'w-[70%] pt-[110%] bg-[length:100%_100%] rounded border-[1px] border-grey-200',
            'transition-shadow duration-300 group-hover:shadow-[0_10px_40px_-12px_rgba(0,0,0,0.1)]',
            'dark:border-grey-500',
          )}
          style={{backgroundImage: `url(${props.image})`, backgroundColor: props.color}}
        ></div>
      </div>
      <div className='pt-4 flex flex-col grow justify-between'>
        <div>
          <h3 className='text-sm font-medium leading-5 pr-6'>{props.title}</h3>
          <p className={clsx(
            'text-sm leading-5 mt-1 text-grey-300',
            'dark:text-grey-400'
          )}>{props.author}</p>
        </div>
        {
          props.genre &&
          <ul className='mt-2'>
            {
              props.genre.map((g, key) => (
                <li
                key={key}
                className={clsx(
                  'inline-block text-xs font-mono text-grey-400 mr-2 mb-1 border-[1px] border-grey-200 bg-white px-2 py-1 rounded',
                  'dark:border-grey-500 dark:bg-grey-600 dark:text-grey-300'
                )}>{g.name}</li>
              ))
            }
          </ul>
        }
      </div>
    </a>
  );
}

export default BookItem;
