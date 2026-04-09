import { useState } from "react"
import { Button } from "./components/ui/button"
import AnimeCardList from "./components/AnimeCardList"
import { Slider } from "./components/ui/slider"

interface AnimeResponse {
  results: {
    artist_href: string,
    artist_name: string,
    source_url: string,
    url: string
  }[]
}

const App = () => {

  const [data, setData] = useState<AnimeResponse>()
  const [amount, setAmount] = useState<number[]>([5])

  const fetchAnime = async () => {
    const res = await fetch(`https://nekos.best/api/v2/waifu?amount=${amount[0]}`)
    const json: AnimeResponse = await res.json()
    setData(json)
  }

  return (
    <div className="flex flex-col items-center m-4">
      <h1 className="mb-2">Pull amount: {amount}</h1>
      <Slider
        defaultValue={[5]}
        min={1}
        max={10}
        step={1}
        onValueChange={(val) => setAmount(val)}
        className="w-1/8 mb-4"
      />
      <Button onClick={() => fetchAnime()} className="px-6 py-6 mb-4 hover:cursor-pointer w-30 bg-gray-600">
        <h1 className="text-4xl">Pull</h1>
      </Button>
      <AnimeCardList data={data} />
    </div>
  )
}
export default App