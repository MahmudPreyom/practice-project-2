import About from "./about/About"
import Banner from "./banner/Banner"
import Blog from "./blog/Blog"

function Home() {
  return (
    <div>
      <Banner/>
      <About/>
      <Blog/>
      Home
    </div>
  )
}

export default Home