import OurMissionSection from "../components/OurMissionSection"
import OurVisionSection from "../components/OurVisionSection"
import WalkNoodlesStory from "../components/WalkNoodlesStory"
import YellowStrip from "../components/YellowStrip"

function About() {
    return (
        <main className="bg-gold ">
            <YellowStrip/>
            <WalkNoodlesStory />
            <OurVisionSection/>
            <OurMissionSection/>
            
        </main>
    )
}


export default About