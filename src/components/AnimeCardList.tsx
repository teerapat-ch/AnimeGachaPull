import AnimeCard from "./AnimeCard"

interface Props {
  data: AnimeResponse | undefined
}

interface AnimeResponse {
  results: {
    artist_href: string,
    artist_name: string,
    source_url: string,
    url: string
  }[]
}

const AnimeCardList = ({ data }: Props) => {
  return (
    <div className="flex justify-center gap-8">
      {data &&
        data.results.map((items, index) => (
          <AnimeCard key={index} artist_href={items.artist_href} artist_name={items.artist_name} source_url={items.source_url} url={items.url} />
        ))
      }
    </div>
  )
}
export default AnimeCardList