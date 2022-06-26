import useSWR from "swr";
import fetcher from "../../lib/fetcher";
import AlbumItem from "../../components/AlbumItem";
import MediaDivider from "../../components/MediaDivider";
import AlbumPlaceholder from "../../components/AlbumPlaceholder";
import clsx from "clsx";

const Music = () => {
  const { data: albums } = useSWR("/api/spotify/albums", fetcher);
  // const { data: topArtists } = useSWR("/api/spotify/topArtists", fetcher);

  return (
    <>
      <p>
      Music is a daily companion for me. To switch off my head after a long day, to focus at work or to feel alive at concerts. Here is an insight into my favorite music – The data is fetched directly from my Spotify and updates automatically when I add new music to my spotify account.
      </p>
      <MediaDivider>favourite albums</MediaDivider>
      <div className={clsx(
        "grid grid-cols-2 gap-6",
        "xs:grid-cols-3 xs:gap-10",
        "md:grid-cols-4 sm:gap-16",
      )}>
        {
          !albums
            ? [...Array(16)].map((value, index) => (
              <AlbumPlaceholder key={index}></AlbumPlaceholder>
            ))
            : albums?.map((album, index) => (
              <AlbumItem
                key={index}
                artist={album.artist}
                name={album.name}
                image={album.coverImage}
                url={album.url}
              ></AlbumItem>
            ))
        }
      </div>
      {/* {topArtists?.map((artist, index) => (
        <p>{artist.name}</p>
      ))} */}
    </>
  )
};

Music.layout = "LayoutMedia";

export default Music;
