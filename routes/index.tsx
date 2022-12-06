import Header from "../components/Navigation/Header.tsx";
import Footer from "../components/Navigation/Footer.tsx";
import PlantForm from "../islands/PlantForm.tsx";

export default function Home() {
  return (
    <main class="h-auto">
      <Header />
      <section class="bg-white dark:bg-green-900 h-full">
        <div class="container mx-auto px-6 pt-28">
          <h1 class="text-2xl font-semibold text-green-800 dark:text-white lg:text-4xl">
            Hey
          </h1>
          <p class="text-green-800 dark:text-white lg:text-xl">
            We plant trees here
          </p>
        </div>
      </section>

      <section class="bg-white dark:bg-green-900 h-full">
        <PlantForm />
      </section>
      <Footer />
    </main>
  );
}
