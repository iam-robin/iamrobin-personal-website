import { Client } from '@notionhq/client'
import BookItem from "../../components/BookItem";

const Books = ({ books }) => {
  return (
    <>
      <div className="grid grid-cols-5 gap-12">
        {
          books.map((book, i) => (
            <BookItem key={i} image={book.cover} title={book.title} />
          ))
        }
      </div>
    </>
  )
};

Books.layout = "LayoutMedia";

export const getStaticProps = async () => {
  const notion = new Client({
    auth: process.env.NOTION_SECRET,
  })

  const booksQuery = await notion.databases.query({
    database_id: process.env.MEDIA_DATABASE_ID,
    sorts: [
      {
        property: 'finished',
        direction: 'descending',
      },
    ],
    filter: {
      "and": [
        { "or": [
          {
            property: "type",
            select: {
              equals: "Book"
            }
          },
          {
            property: "type",
            select: {
              equals: "Audiobook"
            }
          },
        ]
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

  const books = booksQuery.results.map(book => ({
    id: book.id,
    title: book.properties.Name.title[0].plain_text,
    url: book.properties.URL.url,
    cover: book.properties.cover.files[0]?.file?.url || book.properties.cover.files[0]?.name,
  }));

  return {
    props: {
      books,
    },
    revalidate: 60,
  }
}

export default Books;
