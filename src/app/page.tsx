"use client";

import { Heart, Star, Home, ShoppingBag, Sparkles, Users, MapPin } from "lucide-react";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import HeroBillboardScroll from "@/components/sections/hero/HeroBillboardScroll";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import MetricSplitMediaAbout from "@/components/sections/about/MetricSplitMediaAbout";
import ProductCardTwo from "@/components/sections/product/ProductCardTwo";
import FeatureCardSix from "@/components/sections/feature/FeatureCardSix";
import TeamCardEleven from "@/components/sections/team/TeamCardEleven";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterBase from "@/components/sections/footer/FooterBase";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="medium"
      sizing="largeSizeMediumTitles"
      background="noiseDiagonalGradient"
      cardStyle="glass-depth"
      primaryButtonStyle="double-inset"
      secondaryButtonStyle="solid"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={[
            { name: "Startseite", id: "hero" },
            { name: "Über uns", id: "about" },
            { name: "Produkte", id: "products" },
            { name: "Warum ARKOC", id: "features" },
            { name: "Kontakt", id: "contact" }
          ]}
          brandName="ARKOC Süper Market"
          bottomLeftText="Wien Community"
          bottomRightText="kontakt@arkoc.wien"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Ihr orientalischer Supermarkt in Wien"
          description="Frisch. Günstig. Persönlich. Einkaufen mit Vertrauen – wie bei Familie."
          background={{ variant: "radial-gradient" }}
          tag="Seit 2010 in Wien"
          tagIcon={Heart}
          tagAnimation="slide-up"
          buttons={[
            { text: "Jetzt besuchen", href: "#contact" },
            { text: "Produkte entdecken", href: "#products" }
          ]}
          buttonAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/full-shot-woman-kid-shopping_23-2149160639.jpg"
          imageAlt="moderner supermarkt innenraum beleuchtung"
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Von unseren Kunden geliebt"
          description="Stammkunden aus ganz Wien vertrauen uns für authentische orientalische Produkte und persönlichen Service."
          names={[
            "Sehr nett und sympathisch",            "Bester Supermarkt Wien",            "Sehr hilfsbereit ❤️",            "Faire Preise wie im Basar",            "Familie freundlich",            "Große Auswahl Orientalia",            "Immer frische Produkte"
          ]}
          tag="Kundenbewertungen"
          tagIcon={Star}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          showCard={true}
        />
      </div>

      <div id="about" data-section="about">
        <MetricSplitMediaAbout
          title="Mehr als nur ein Supermarkt"
          description="ARKOC SÜPER MARKET steht für Qualität, Nähe und Vertrauen. Hier kaufen Menschen nicht nur ein – sie kommen wieder, weil sie sich wohlfühlen. Das macht uns besonders: Familiengeführtes Geschäft seit 2010, persönlicher Service von Inhaber Mehmet, große Auswahl an orientalischen Produkten, faire Preise wie im Basar."
          metrics={[
            { value: "14+", title: "Jahre Erfahrung" },
            { value: "5000+", title: "Treue Kunden" },
            { value: "500+", title: "Unterschiedliche Produkte" },
            { value: "6/7", title: "Tage geöffnet" }
          ]}
          tag="Über uns"
          tagIcon={Home}
          tagAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/pleasant-smell_1098-15757.jpg"
          imageAlt="supermarkt innenansicht regale produkte"
          mediaAnimation="slide-up"
          metricsAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Unsere Produktkategorien"
          description="Frisch & authentisch – Qualität, die man schmeckt. Preise, die man liebt."
          tag="Produktpalette"
          tagIcon={ShoppingBag}
          tagAnimation="slide-up"
          buttons={[
            { text: "Alle Produkte", href: "#contact" }
          ]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          products={[
            {
              id: "vegetables",              brand: "Frisch",              name: "Obst & Gemüse",              price: "Fair",              rating: 5,
              reviewCount: "500+",              imageSrc: "http://img.b2bpic.net/free-photo/eggplants-with-tomatoes-peppers-wooden-cutting-board-high-angle-view_176474-7288.jpg",              imageAlt: "frisches obst gemüse marktstand"
            },
            {
              id: "spices",              brand: "Authentisch",              name: "Gewürze & Kräuter",              price: "Original",              rating: 5,
              reviewCount: "450+",              imageSrc: "http://img.b2bpic.net/free-photo/semicircle-from-spoons-spices_23-2147894619.jpg",              imageAlt: "orientalische gewürze behälter duftend"
            },
            {
              id: "oriental",              brand: "Spezial",              name: "Orientalische Spezialitäten",              price: "Exklusiv",              rating: 5,
              reviewCount: "480+",              imageSrc: "http://img.b2bpic.net/free-vector/ramadan-horizontal-banner-template_23-2148871546.jpg",              imageAlt: "orientalische spezialitäten feinkost angebot"
            },
            {
              id: "daily",              brand: "Praktisch",              name: "Alltagsprodukte",              price: "Günstig",              rating: 5,
              reviewCount: "520+",              imageSrc: "http://img.b2bpic.net/free-photo/courier-delivering-groceries-home_23-2149738016.jpg",              imageAlt: "supermarkt alltag grundversorgung produkte"
            },
            {
              id: "imported",              brand: "Global",              name: "Importierte Waren",              price: "Selten",              rating: 5,
              reviewCount: "380+",              imageSrc: "http://img.b2bpic.net/free-photo/delicious-food-groups-arrangement_23-2149235821.jpg",              imageAlt: "importierte waren international produkte"
            },
            {
              id: "bread",              brand: "Frisch",              name: "Frisches Gebäck",              price: "Täglich",              rating: 5,
              reviewCount: "510+",              imageSrc: "http://img.b2bpic.net/free-photo/delicious-cinnamon-rolls-with-copy-space_23-2148779698.jpg",              imageAlt: "frisches orientalisches brot gebäck weich"
            }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardSix
          title="Warum ARKOC?"
          description="Das unterscheidet uns von anderen Supermärkten in Wien."
          tag="Unsere Stärken"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              id: 1,
              title: "Herzlichkeit & Persönlichkeit",              description: "Der Besitzer Mehmet wird oft gelobt: freundlich, hilfsbereit, sympathisch. Kunden kommen nicht nur wegen der Produkte – sondern wegen ihm.",              imageSrc: "http://img.b2bpic.net/free-photo/hiring-staff_1098-13842.jpg",              imageAlt: "freundlicher verkäufer kundenservice lächelnd"
            },
            {
              id: 2,
              title: "Faire Preise",              description: "Wie im Orient-Basar – Qualität zu fairen Preisen, die Sie lieben werden. Gutes Geld-für-Wert-Verhältnis.",              imageSrc: "http://img.b2bpic.net/free-photo/woman-holding-her-finger-balance-with-coins_23-2148546835.jpg",              imageAlt: "faire preisschilder transparent günstig"
            },
            {
              id: 3,
              title: "Stammkundenvertrauen",              description: "Über 5.000 treue Kunden aus ganz Wien. Viele kommen seit Jahren regelmäßig, weil sie wissen, was sie bekommen.",              imageSrc: "http://img.b2bpic.net/free-photo/high-angle-people-holding-business-card_23-2149343421.jpg",              imageAlt: "treue kunden stammgäste langzeitbeziehung"
            },
            {
              id: 4,
              title: "Große Auswahl",              description: "Über 500 unterschiedliche Produkte – von frischem Gemüse über orientalische Spezialitäten bis zu Alltagsprodukten.",              imageSrc: "http://img.b2bpic.net/free-photo/woman-choosing-better-cheaper-product_329181-17354.jpg",              imageAlt: "große auswahl produkte regale vielfalt"
            },
            {
              id: 5,
              title: "Frische garantiert",              description: "Täglich frische Lieferungen für Obst, Gemüse und Gebäck. Qualität, die man schmeckt.",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-futuristic-soft-drink_23-2151281980.jpg",              imageAlt: "frische garanten täglich lieferung qualität"
            },
            {
              id: 6,
              title: "Familienfreundlich",              description: "Ein Ort, wo sich die ganze Familie willkommen fühlt. Von jung bis alt – alle finden, was sie suchen.",              imageSrc: "http://img.b2bpic.net/free-photo/woman-showing-bag-surprised-friend_23-2147950283.jpg",              imageAlt: "familienfreundlicher einkauf kinder eltern"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardEleven
          title="Das Herz unseres Ladens"
          description="Mehmet – Der Inhaber, der den Unterschied macht."
          tag="Unser Team"
          tagIcon={Users}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          groups={[
            {
              id: "founder",              groupTitle: "Gründer & Inhaber",              members: [
                {
                  id: "mehmet",                  title: "Mehmet",                  subtitle: "Inhaber & Gründer",                  detail: "Freundlich. Vertrauenswürdig. Hilfsbereit. Mehmet steht seit 2010 täglich im Laden und ist das Herz von ARKOC. Seine Persönlichkeit macht den Unterschied.",                  imageSrc: "http://img.b2bpic.net/free-photo/front-view-business-man-listening-music_23-2148763848.jpg",                  imageAlt: "nahostlicher mann mittleres alter lächelnd"
                }
              ]
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Kontakt"
          title="Erleben Sie den Unterschied"
          description="Besuchen Sie uns bald. Wir freuen uns, Sie kennenzulernen und Ihnen unsere Produkte zu zeigen."
          tagIcon={MapPin}
          tagAnimation="slide-up"
          background={{ variant: "plain" }}
          useInvertedBackground={false}
          inputPlaceholder="Ihre E-Mail"
          buttonText="Newsletter abonnieren"
          termsText="Mit dem Absenden akzeptieren Sie unsere Datenschutzerklärung."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="ARKOC"
          columns={[
            {
              title: "Geschäft",              items: [
                { label: "Startseite", href: "#hero" },
                { label: "Über uns", href: "#about" },
                { label: "Produkte", href: "#products" },
                { label: "Warum ARKOC", href: "#features" }
              ]
            },
            {
              title: "Kontakt",              items: [
                { label: "Breitenfurter Str. 291, 1230 Wien", href: "#" },
                { label: "Mo-Fr: 08:00 - 19:00", href: "#" },
                { label: "Sa: 08:00 - 18:00", href: "#" },
                { label: "So: Geschlossen", href: "#" }
              ]
            },
            {
              title: "Rechtliches",              items: [
                { label: "Datenschutz", href: "#" },
                { label: "Impressum", href: "#" },
                { label: "AGB", href: "#" },
                { label: "Kontaktformular", href: "#contact" }
              ]
            }
          ]}
          copyrightText="© 2025 ARKOC Süper Market Wien. Alle Rechte vorbehalten."
        />
      </div>
    </ThemeProvider>
  );
}