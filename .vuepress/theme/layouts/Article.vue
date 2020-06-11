<template>
  <div class="flex flex-col">
    <!-- Progress bar and share buttons. -->
    <FloatingHeader />

    <!-- Article. -->
    <article class="bg-white">
      <div class="container">
        <Header />
        <ArticleMetaData />
      </div>
      <Content />
    </article>

    <!-- Related articles. -->
    <div v-if="relatedArticles.length >= 2" class="bg-white">
      <div class="container py-4 sm:py-8">
        <h2>Related articles</h2>
        <div class="flex flex-wrap -mx-5">
          <ArticleCard
            v-for="article in relatedArticles"
            :key="article.key"
            :article="article"
            class="mx-5 mb-8"
            style="flex: 1 1 300px"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { randomElements, excludePages } from "@theme/utils";
import Header from "@theme/components/Header";
import FloatingHeader from "@theme/components/FloatingHeader";
import ArticleMetaData from "@theme/components/ArticleMetaData";
import ArticleCard from "@theme/components/ArticleCard";

export default {
  components: {
    Header,
    FloatingHeader,
    ArticleMetaData,

    ArticleCard
  },
  computed: {
    disqusIdentifier() {
      return this.$page.frontmatter.disqus || this.$page.path;
    },

    relatedArticles() {
      const tags = this.$page.frontmatter.tags || [];
      const relatedArticles = this.$articles.filter(a =>
        (a.frontmatter.tags || []).some(tag => tags.includes(tag))
      );

      return randomElements(excludePages(relatedArticles, [this.$page]));
    }
  }
};
</script>
