import { Client } from '@notionhq/client'
import Masonry from 'react-masonry-css'
import Image from 'next/image';
import TextLink from "../components/TextLink";

const Photos = ({ photoData }) => {

  const breakpointColumnsObj = {
    default: 3,
    1280: 3,
    840: 2,
    448: 1,
  };

  return (
    <div>
      <h1 className="text-2xl">Photography</h1>
      <p className="mt-2 mb-20 max-w-3xl">
        For over 10 years I find a great pleasure in capturing visual impressions and aesthetically appearing moments with a camera. My companion for this is a Canon eos 5d mark III in combination with prime lenses (50mm & 85mm). <br /><br /> If you like my photos and want to support my passion feel free to <TextLink src="mailto:hey@iamrob.in">contact me</TextLink> and get a high quality print of one of my shots.
      </p>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {
          photoData.map(photo => (
            <div className='mb-14 bg-grey-100' key={photo?.id}>
              <Image
                src={photo?.imageUrl}
                alt={photo?.title || 'photo'}
                width="800"
                height={photo?.height}
                // layout="responsive"
                // placeholder="blur"
                // blurDataURL={photo?.placeholder?.base64}
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
        property: 'shot',
        direction: 'descending',
      },
    ],
    filter: {
      property: "archive",
      checkbox: {
        "equals": false
      }
    }
  })

  const photoData = photosQuery.results.map( (photo) => ({
    id: photo.id,
    title: photo.properties.Name.title[0]?.plain_text || null,
    height: photo.properties.height.number,
    imageUrl: photo.properties.photo.files[0]?.file?.url || photo.properties.photo.files[0]?.name || null,
    // placeholder: await getPlaiceholder(photo.properties.photo.files[0]?.file?.url || photo.properties.photo.files[0]?.name || null, { size: 20 }),
  }));

  return {
    props: {
      photoData: photoData,
    },
    revalidate: 60,
  }
}

Photos.layout = "LayoutWide";

export default Photos;
