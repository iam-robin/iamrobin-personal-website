import { Client } from '@notionhq/client'
import MediaItem from "../../components/MediaItem";

const Movies = ({ movies }) => {
  const moviesSortedByYear = movies.reduce((acc, current) => {
    if (current.year in acc) {
      acc[current.year].push(current);
    } else {
      acc[current.year] = [current];
    }
    return acc;
  }, {});
  return (
    <>
      {
        Object.entries(moviesSortedByYear).reverse().map(([key, value]) => {
          return (
            <div key={key} className="mb-20">
              <h2 className="mb-4 text-xs text-grey-200">{key}</h2>
              <div className="grid grid-cols-5 gap-12">
                {value.map((movie, i) => {
                  return <MediaItem key={i} image={movie.cover} title={movie.title} />
                })}
              </div>
            </div>
          )
        })
      }
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
    year: new Date(movie.properties.finished.date.start).getFullYear(),
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
