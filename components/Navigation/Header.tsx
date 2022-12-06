import { Head } from "$fresh/runtime.ts";

export default function Header() {
  return (
    <>
      <Head>
        <title>Plantr</title>
      </Head>
      <header class="bg-white dark:bg-green-900">
        <div class="container mx-auto p-6 lg:flex lg:items-center lg:justify-between">
          <div class="flex items-center justify-between">
            <div>
              <a
                class="text-2xl font-bold text-green-800 hover:text-green-700 dark:text-white dark:hover:text-green-300 lg:text-3xl"
                href="#"
              >
                Plantr
              </a>
            </div>
            {/* One day, menu goes here */}
          </div>
        </div>
      </header>
    </>
  );
}
