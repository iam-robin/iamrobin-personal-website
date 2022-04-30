import { Client } from '@notionhq/client'
import Masonry from 'react-masonry-css'
import Image from 'next/image';
import {getPlaiceholder} from 'plaiceholder';

const Photos = ({ photos }) => {

  const breakpointColumnsObj = {
    default: 3,
    1280: 3,
    840: 2,
    448: 1,
  };

  return (
    <div>
      <h1>photos</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus id veritatis quo, sed molestiae qui ipsum quisquam accusantium et asperiores, adipisci illum reiciendis fuga aut quibusdam, veniam enim repellendus? Dolores?</p>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {
          photos.map(photo => (
            <div className='mb-8 bg-grey-100' key={photo.id}>
              <Image
                src={photo.imageUrl}
                alt={photo.title || 'photo'}
                width="800"
                height={photo.height}
                layout="responsive"
                placeholder="blur"
                blurDataURL={photo.placeholder.base64}
              />
            </div>
          ))
        }
      </Masonry>
    </div>
  );
}

export async function getStaticProps() {
  const notion = new Client({
    auth: process.env.NOTION_SECRET,
  })

  const photosQuery = await notion.databases.query({
    database_id: process.env.PHOTOS_DATABASE_ID,
    sorts: [
      {
        property: 'Created',
        direction: 'descending',
      },
    ],
  })

  const photos = await Promise.all(photosQuery.results.map(async (photo) => ({
    id: photo.id,
    title: photo.properties.Name.title[0]?.plain_text || null,
    height: photo.properties.height.number,
    imageUrl: photo.properties.photo.files[0]?.file?.url || photo.properties.photo.files[0]?.name || null,
    placeholder: await getPlaiceholder(photo.properties.photo.files[0]?.file?.url || photo.properties.photo.files[0]?.name || null, {size: 20}),
  })));

  return {
    props: {
      photos,
    },
    revalidate: 60,
  }
}

Photos.layout = "LayoutWide";

export default Photos;
