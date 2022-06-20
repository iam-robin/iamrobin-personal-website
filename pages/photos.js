import { Client } from '@notionhq/client'
import Masonry from 'react-masonry-css'
import Image from 'next/image';
import TextLink from "../components/TextLink";
import { useTheme } from 'next-themes';
import Head from "next/head";

const Photos = ({ photoData }) => {
  const { theme } = useTheme();
  const breakpointColumnsObj = {
    default: 3,
    1280: 3,
    840: 2,
    448: 1,
  };

  return (
    <div>
      <Head>
        <title>photos - iamrobin</title>
        <meta
          name="description"
          content="Photography gallery iamrobin"
        />
        {
          theme === "light"
            ? <link rel="icon" type="image/png" sizes="32x32" href="/favicons/32x32-light.png" />
            : <link rel="icon" type="image/png" sizes="32x32" href="/favicons/32x32-dark.png" />
        }
      </Head>
      <div className='mx-auto max-w-screen-md'>
        <h1 className="text-2xl">Photography</h1>
        <p className="mt-2">
          For over 10 years I find a great pleasure in capturing visual impressions and aesthetically appearing moments with a camera. I mainly use a Canon eos 5d mark III with prime lenses (50mm & 85mm).
        </p>
        <p className='mt-2 mb-20 sm:mb-40'>
          If you want to support my passion feel free to <TextLink src="mailto:hey@iamrob.in">contact me</TextLink> and get a high quality print of one of my shots.
        </p>
      </div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {
          photoData.map(photo => (
            <div
              className='mb-14 bg-grey-200 shadow-inset-light dark:shadow-inset-dark dark:bg-grey-600'
              key={photo?.id}
            >
              <Image
                src={photo?.imageUrl}
                alt={photo?.title || 'photo'}
                width="800"
                height={photo?.height}
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

  const photoData = photosQuery.results.map((photo) => ({
    id: photo.id,
    title: photo.properties.Name.title[0]?.plain_text || null,
    height: photo.properties.height.number,
    imageUrl: photo.properties.photo.files[0]?.file?.url || photo.properties.photo.files[0]?.name || null,
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
