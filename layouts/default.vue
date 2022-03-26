<template>
  <section>
    <header class="mb-8">
      <nav class="bg-black">
        <div class="container mx-auto flex flex-row py-3 px-6">
          <nuxt-link to="/">
            <h1 class="text-white brand">مِصباح</h1>
          </nuxt-link>
          <span class="flex flex-1 grow" />
          <p class="text-gray-400 text-lg font-almarai">مولد النصوص العربية</p>
        </div>
      </nav>
    </header>

    <div
      class="flex flex-col md:flex-row cols-1 md:cols-2 grow w-full container mx-auto px-6 md:gap-6"
    >
      <section class="w-full md:w-4/6">
        <section class>
          <Nuxt />
        </section>
      </section>

      <aside
        class="order-first md:order-last flex grow flex-col h-full w-full md:w-2/6 md:block border-gray-100 border-b-2 md:border-b-0 md:border-r-2 px-3 md:px-6"
      >
        <div class="text-gray-400 bg-gray-100 rounded-sm px-3">
          <p class>يمكنك استخدام مصباح لانشاء قوالب نصية عشوائية لاستخدامها في التصميمات مثلًا.</p>
        </div>
        <h4 class="text-gray-500 font-bold text-xl mt-4 mb-3">الاعدادات</h4>
        <options />
        <actions class="mt-9" />
        <span class="flex flex-1 grow" />
        <footer class="mt-4">
          <p class="text-gray-400">
            تم التطوير بواسطة
            <a
              target="_blank"
              href="https://shehata.io"
              class="text-green-900 font-bold"
            >اسلام شحاته</a>
          </p>
          <p class="text-gray-400">
            بالاعتماد على مكتبة
            <a
              target="_blank"
              href="https://github.com/linuxscout/Arrand-arabic-random-text"
            >arrand.</a>
          </p>
          <nuxt-link class="text-gray-400 hover:text-black" to="/privacy">
            سياسة الخصوصية
          </nuxt-link>
        </footer>
      </aside>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>

<style scoped>
.brand {
  margin-top: -16px;
  cursor: pointer;
}
</style>
