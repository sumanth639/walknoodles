import OurMissionSection from "../components/OurMissionSection"
import OurVisionSection from "../components/OurVisionSection"
import WalkNoodlesStory from "../components/WalkNoodlesStory"
import YellowStrip from "../components/YellowStrip"
import SEO from "../components/SEO"
import StructuredData from "../components/StructuredData"

function About() {
    return (
        <main className="bg-gold ">
            <SEO 
              title="About Walk Noodles - Healthy Asian Noodles Restaurant in Indirapuram"
              description="Discover the story behind Walk Noodles - Indirapuram's favorite healthy Asian noodles restaurant. Learn how we're transforming comfort food into guilt-free indulgence with wholesome ingredients, millet noodles, and authentic flavors."
              ogImage="/about.png"
              keywords="about Walk Noodles, healthy noodles restaurant story, Asian food Indirapuram, millet noodles, wholesome ingredients, healthy comfort food"
            />
            <StructuredData type="about" />
            <YellowStrip/>
            <WalkNoodlesStory />
            <OurVisionSection/>
            <OurMissionSection/>
        </main>
    )
}


export default About