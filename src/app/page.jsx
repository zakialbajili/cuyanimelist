import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"
const Page = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  const topAnime = await response.json()
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
