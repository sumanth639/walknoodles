import HeroSection from "../components/HeroSection"
import MustTrySection from "../components/MustTrySection"
import QualitySection from "../components/QualitySection"
import ReviewsSection from "../components/ReviewsSection"
import SEO from "../components/SEO"
import StructuredData from "../components/StructuredData"

function Home() {
  return (
    <>
      <SEO 
        title="Best Asian Noodles Restaurant in Indirapuram | Walk Noodles - Healthy Ramen & Pad Thai"
        description="Discover the best Asian noodles restaurant in Indirapuram! Walk Noodles serves healthy ramen, pad thai, and authentic Asian cuisine in Ghaziabad. Fresh ingredients, vegetarian options, and guilt-free comfort food. Visit us today!"
        ogImage="/hero-bg1.jpg"
        keywords="Asian noodles Indirapuram, best ramen restaurant near me, healthy noodles Ghaziabad, pad thai Indirapuram, vegetarian noodles restaurant, Asian food Indirapuram, ramen near me, healthy Asian cuisine, noodles restaurant Ghaziabad, best noodles Indirapuram"
      />
      <StructuredData type="home" />
      <HeroSection/>
      <MustTrySection/>
      <QualitySection/>
      <ReviewsSection/> 
    </>
  )
}


export default Home