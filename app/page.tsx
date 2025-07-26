import Header from "@/components/header"
import HeroBanner from "@/components/hero-banner"
import ParivarrFeatures from "@/components/parivaar-features"
import ProductsSection from "@/components/products-section"
import RecipesSection from "@/components/recipes-section"
import AboutSection from "@/components/about-section"
import FounderSection from "@/components/founder-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroBanner />
      <ParivarrFeatures />
      <ProductsSection />
      <RecipesSection />
      <AboutSection />
      <FounderSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
