import { Client } from '@notionhq/client'
import clsx from 'clsx';
import BookItem from "../../components/BookItem";
import TextLink from "../../components/TextLink";
import Head from "next/head";
import { useTheme } from 'next-themes';

const Books = ({ books }) => {
  const { theme } = useTheme();
  const booksSortedByYear = books.reduce((acc, current) => {
    if (current.year in acc) {
      acc[current.year].push(current);
    } else {
      acc[current.year] = [current];
    }
    return acc;
  }, {});


  return (
    <div>
      <Head>
        <title>books - iamrobin</title>
        <meta
          name="description"
          content="book overview iamrobin"
        />
        {
          theme === "light"
            ? <link rel="icon" type="image/png" sizes="32x32" href="/favicons/32x32-light.png" />
            : <link rel="icon" type="image/png" sizes="32x32" href="/favicons/32x32-dark.png" />
        }
      </Head>
      {
        Object.entries(booksSortedByYear).reverse().map(([key, value]) => {
          return (
            <div key={key} className="mb-20 relative">
              <h2 className={clsx(
                'mt-24 mb-12 text-grey-300 text-lg font-medium text-center',
                'after:content-[""] after:bg-grey-200 after:h-[1px] after:w-full after:absolute after:left-[0px] after:top-[15px]',
                'dark:after:bg-grey-500 dark:text-grey-400'
              )}>
                <span className='bg-grey-100 px-4 z-10 relative dark:bg-black'>
                  {key}
                </span>
              </h2>
              <div className={clsx(
                "grid grid-cols-1 gap-x-3 gap-y-12",
                "xxs:grid-cols-2",
                "xs:grid-cols-3",
                "sm:grid-cols-4",
              )}>
                {value.map((book, i) => {
                  return <BookItem
                    key={i}
                    image={book.cover}
                    title={book.title}
                    author={book.author}
                    genre={book.genre}
                    color={book.color}
                    url={book.url}
                  />
                })}
              </div>
            </div>
          )
        })
      }
    </div>
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
        {
          "or": [
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
    author: book.properties.author.select.name,
    genre: book.properties.genre.multi_select,
    url: book.properties.URL.url,
    cover: book.properties.cover.files[0]?.file?.url || book.properties.cover.files[0]?.name,
    color: book.properties.placeholdercolor.rich_text[0].plain_text,
    year: new Date(book.properties.finished.date.start).getFullYear(),
  }));

  return {
    props: {
      books,
    },
    revalidate: 60,
  }
}

export default Books;
