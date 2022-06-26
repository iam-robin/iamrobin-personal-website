import clsx from 'clsx';

const AlbumPlaceholder: React.FC = (props) => {

  return (
    <div className='flex flex-col'>
      <div className='rounded bg-grey-200 pt-[100%] dark:bg-grey-600'>
      </div>
      <div className='mt-4'>
        <div className="h-2 bg-grey-200 w-full dark:bg-grey-600"></div>
        <div className='mt-2 h-2 bg-grey-200 w-1/2 dark:bg-grey-600'></div>
      </div>
    </div>
  );
}

export default AlbumPlaceholder;
