import { Client } from '@notionhq/client'
import MediaItem from "../../components/MediaItem";

const Movies = ({ movies }) => {
  return (
    <>
      <h1>movies</h1>
      <br />
      <div className="grid grid-cols-5 gap-8">
        {
          movies.map((movie, i) => (
            <MediaItem key={i} image={movie.cover} title={movie.title} />
          ))
        }
      </div>
    </>
  )
};

export const getStaticProps = async () => {
  const notion = new Client({
    auth: process.env.NOTION_SECRET,
  })

  const moviesQuery = await notion.databases.query({
    database_id: process.env.MEDIA_DATABASE_ID,
    sorts: [
      {
        property: 'finished',
        direction: 'descending',
      },
    ],
    filter: {
      "and": [
        {
          property: "type",
          select: {
            equals: 'movie'
          }
        },
        {
          property: "rating",
          select: {
            is_not_empty: true
          }
        }
      ]
    }
  })

  const movies = moviesQuery.results.map(movie => ({
    id: movie.id,
    title: movie.properties.Name.title[0].plain_text,
    url: movie.properties.URL.url,
    cover: movie.properties.cover.files[0]?.file?.url || movie.properties.cover.files[0]?.name,
  }));

  return {
    props: {
      movies,
    },
    revalidate: 60,
  }
}

Movies.layout = "LayoutMedia";

export default Movies;
