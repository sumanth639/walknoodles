import ContactHero from "../components/ContactHero"
import ContactInfoCard from "../components/ContactInfoCard"
import EventHostSection from "../components/EventHostSection"
import FindUsSection from "../components/FindUsSection"
import SEO from "../components/SEO"
import StructuredData from "../components/StructuredData"

function Contact() {
  return (
    <main>
      <SEO 
        title="Contact & Location - Walk Noodles Asian Restaurant | Indirapuram, Ghaziabad"
        description="Visit Walk Noodles in Indirapuram! Find us at Shop No.5, GC, Grand Street, Vaibhav Khand, Ghaziabad. Best Asian noodles restaurant near you. Contact us via email or Instagram. Open daily 11 AM - 10 PM."
        ogImage="/contactHeroBg.png"
        keywords="Walk Noodles location, Asian restaurant Indirapuram, noodles restaurant near me, restaurant Ghaziabad, contact Walk Noodles, Asian food Indirapuram address"
      />
      <StructuredData type="contact" />
      <ContactHero/>
      <ContactInfoCard />
      <EventHostSection/>
      <FindUsSection/>
    </main>
  )
}


export default Contact