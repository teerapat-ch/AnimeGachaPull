import { Button } from "./ui/button"
import { Card, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Image, User } from 'lucide-react';

interface Props {
  artist_href: string,
  artist_name: string,
  source_url: string,
  url: string
}

const AnimeCard = ({ artist_href, artist_name, source_url, url}: Props) => {
  return (
    <div>
      <Card className="w-50 shadow-lg">
        <img
          src={url}
          alt="not found"
        />
        <CardHeader className="w-full">
          <CardTitle>Artist: {artist_name}</CardTitle>
        </CardHeader>
        <CardFooter className="flex justify-center gap-2 w-full bg-gray-600">
          <a href={artist_href}>
            <Button className="w-20 hover:cursor-pointer" variant="secondary">
              <User />
              Artist
            </Button>
          </a>
          <a href={source_url}>
            <Button className="w-20 hover:cursor-pointer" variant="secondary">
              <Image />
              Image
            </Button>
          </a>
        </CardFooter>
      </Card>
    </div>
  )
}
export default AnimeCard