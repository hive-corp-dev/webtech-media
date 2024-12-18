import { articleTags } from "@data/article-tags";

export const getTagDataBySlug = (slug) => {
  const tagData = articleTags.find((tag) => tag.slug === slug);
  return tagData;
};

export const getTagArchiveUrl = (slug) => {
  return `/article/tag/${slug}`;
};

export const sortTagsByKana = (tags) => {
  return tags.sort((a, b) => a.slug.localeCompare(b.slug));
};

export const getTagsWithArticles = (articles) => {
  const filteredTags = articleTags.filter((tag) => {
    const tagArticles = articles.filter((article) => article.data.tags.includes(tag.slug));
    return tagArticles.length > 0;
  });

  return filteredTags;
};

// 複数のタグスラッグから、複数のタグのデータを取得
export const getTagListBySlugs = (slugs) => {
  const tagList = articleTags.filter((tag) => slugs.includes(tag.slug));
  return tagList;
};
