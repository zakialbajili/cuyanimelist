import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"
import { getAnimeResponse } from "@/app/libs/api-libs"
const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8")
  //console.log(anime.data)
  return (
    <>
      <section>
        <Header title='Paling Populer' linkTitle='Lihat Semua' linkHref='/populer' />
        <AnimeList api={topAnime} />
      </section>

      <section>
        <Header title='uhuy' linkTitle='Lihat Semua' linkHref='/new' />
        <AnimeList api={topAnime} />
      </section>
    </>
  )
}
export default Page
