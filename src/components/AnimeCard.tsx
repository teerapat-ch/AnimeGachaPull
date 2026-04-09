import { Button } from "./ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Image, User } from 'lucide-react';

interface Props {
  artist_href: string,
  artist_name: string,
  source_url: string,
  url: string
}

const AnimeCard = ({ artist_href, artist_name, source_url, url}: Props) => {
  return (
    <div className="w-full">
      <Card className="w-full shadow-lg">
        <img
          src={url}
          alt="not found"
        />
        <CardHeader className="w-full">
          <CardDescription>Artist:</CardDescription>
          <CardTitle>{artist_name}</CardTitle>
        </CardHeader>
        <CardFooter className="flex justify-center items-center gap-2 w-full bg-gray-600">
          <a href={artist_href}>
            <Button className=" hover:cursor-pointer" variant="secondary">
              <User />
              <h1 className="hidden lg:block">Artist</h1>
            </Button>
          </a>
          <a href={source_url}>
            <Button className=" hover:cursor-pointer" variant="secondary">
              <Image />
              <h1 className="hidden lg:block">Image</h1>
            </Button>
          </a>
        </CardFooter>
      </Card>
    </div>
  )
}
export default AnimeCard