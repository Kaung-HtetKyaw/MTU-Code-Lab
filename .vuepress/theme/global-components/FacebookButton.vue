<template>
  <div class="flex justify-center items-center mb-8">
    <a
      :href="url"
      class="flex items-center rounded-lg border border-gray-800 text-gray-800 no-underline px-4 py-2 hover:bg-river hover:border-transparent hover:text-white"
      target="_blank"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="fill-current mr-2"
        width="20"
        height="20"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"
        />
      </svg>

      <span class="font-semibold font-sans text-base" v-text="title"></span>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    url: String,
    title: {
      type: String,
      default: "Full code on GitHub",
    },
  },
};
</script>
