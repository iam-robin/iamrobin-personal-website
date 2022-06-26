import clsx from 'clsx';
import Image from 'next/image';

interface Image {
  url: string;
  height: number,
  width: number
}

interface AlbumItemProps {
  name: string;
  artist: string;
  image: Image;
  url: string;
}

const AlbumItem: React.FC<AlbumItemProps> = (props) => {
  const { name, image, artist, url } = props;

  return (
    <a href={url} target="_blank" rel="noreferrer" className='cursor-pointer group flex flex-col'>
      <div>
        <div className='rounded border-[1px] border-grey-200 overflow-hidden flex transition-[transform,_box-shadow] duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_10px_40px_-12px_rgba(0,0,0,0.1)] group-hover:scale-[1.03] dark:border-grey-600'>
          <Image
            src={image.url}
            width={image.width}
            height={image.height}
          />
        </div>
        <div className='mt-4'>
          <h3 className='text-sm font-medium whitespace-nowrap overflow-hidden text-ellipsis'>{name}</h3>
          <h4 className='text-sm mt-[2px] text-grey-300 whitespace-nowrap overflow-hidden text-ellipsis dark:text-grey-400'>{artist}</h4>
        </div>
      </div>
    </a>
  );
}

export default AlbumItem;
