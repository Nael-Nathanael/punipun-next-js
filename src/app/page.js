import FullProfile from "@/components/FullProfile";
import HeaderBanner from "@/components/HeaderBanner";
import StickyNav from "@/components/StickyNav";
import NewestVideoAndMusic from "@/components/NewestVideoAndMusic";

export default function Home() {
  return (
    <>
      <HeaderBanner/>
      <StickyNav/>

      <main className="pt-0 pb-2">
        <div className="container">
          <NewestVideoAndMusic/>
          <FullProfile/>
        </div>
      </main>

    </>
  )
}
