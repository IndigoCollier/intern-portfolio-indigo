import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/**
 * Home page — Main single-page entry point
 *
 * Currently shows the Navbar and Footer with a placeholder in between.
 * In Task 5, the placeholder will be replaced with all six sections:
 * Hero → Skills → Projects → Experience → About → Contact
 */
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">
        {/* pt-16 adds padding-top to account for the fixed navbar height */}
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-heading font-bold text-text-primary">
            Indigo&apos;s Portfolio
          </h1>
          <p className="text-text-secondary mt-4 font-body">
            Coming soon...
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
