export const SITE_NAME = "WebTech Media";
export const OG_IMAGE_URL = "https://webtech-media.jp/ogp.png";

export const TOP_METADATA = {
  title: `${SITE_NAME} | モダンなWeb開発手法に特化したメディアサイト`,
  description:
    "WebTech Mediaは、最新のWeb技術やモダンな開発手法に特化した情報をお届けするメディアサイトです。Jamstackをはじめとする革新的なWeb制作手法やツールに関する知見を共有し、Web制作の現場で役立つ実践的な情報を発信します。",
};

export const ARTICLE_METADATA = {
  title: `記事一覧 | ${SITE_NAME}`,
  description: "WebTech Mediaの記事一覧です。",
};

export const getPaginatedArticlesMetadata = (page) => {
  return {
    title: `記事一覧 - ${page}ページ目 | ${SITE_NAME}`,
    description: `WebTech Mediaの記事一覧です。（${page}ページ目）`,
  };
};

export const getPaginatedTagArticlesMetadata = (tagLabel, page) => {
  return {
    title: `タグ:${tagLabel}${page !== 1 ? " - " + page + "ページ目" : ""} | 記事一覧 | ${SITE_NAME}`,
    description: `タグ:${tagLabel}に属する記事一覧です。${page !== 1 ? "（" + page + "ページ目）" : ""}`,
  };
};

export const getPaginatedMonthlyArticlesMetadata = (year, month, page) => {
  return {
    title: `${year}年${month}月${page !== 1 ? " - " + page + "ページ目" : ""} | 記事一覧 | ${SITE_NAME}`,
    description: `${year}年${month}月に投稿された記事一覧です。${page !== 1 ? "（" + page + "ページ目）" : ""}`,
  };
};

export const ARTICLE_SINGLE_METADATA = {
  title: `${SITE_NAME}`,
};

export const TAG_SINGLE_METADATA = {
  title: `${SITE_NAME}`,
};

export const PRIVACY_POLICY_METADATA = {
  title: `プライバシーポリシー | ${SITE_NAME}`,
  description: "WebTech Mediaのプライバシーポリシーです。",
};

export const CONTACT_METADATA = {
  title: `お問い合わせ | ${SITE_NAME}`,
  description: "WebTech Mediaのお問い合わせページです。",
};

export const THANKS_METADATA = {
  title: `お問い合わせ完了 | ${SITE_NAME}`,
  description: "お問い合わせありがとうございました。",
};

export const NOT_FOUND_METADATA = {
  title: `お探しのページは見つかりませんでした。 | ${SITE_NAME}`,
  description: "お探しのページは見つかりませんでした。",
};
