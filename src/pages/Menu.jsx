import FoodCollageGrid from "../components/FoodCollageGrid"
import MenuAccordion from "../components/MenuAccordion"
import OurMenu  from "../components/OurMenu"
import SEO from "../components/SEO"
import StructuredData from "../components/StructuredData"

function Menu() {
  return (
    <main>
      <SEO 
        title="Complete Menu - Asian Noodles, Ramen & Dim Sum | Walk Noodles Indirapuram"
        description="Browse our full menu of authentic Asian noodles, ramen bowls, and small plates in Indirapuram. From Pad Thai to Kimchi Ramen, Butter Chicken Noodles to Japchae - discover healthy, delicious options at Walk Noodles."
        ogImage="/menu/butter-chicken-noodles.jpg"
        keywords="Asian noodles menu Indirapuram, ramen menu, pad thai menu, dim sum menu, noodles restaurant menu, healthy noodles menu, vegetarian noodles menu, Asian food menu Ghaziabad"
      />
      <StructuredData type="menu" />
      <FoodCollageGrid/>
      {/* <OurMenu/> */}
      <MenuAccordion/>
    </main>
  )
}


export default Menu