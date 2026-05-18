import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SnackArticleTemplate } from "@/components/SnackArticleTemplate";
import { getSnackArticle, snackArticles } from "@/lib/snackArticles";

type SnackArticleRouteParams = {
  slug: string;
};

type SnackArticlePageProps = {
  params: Promise<SnackArticleRouteParams>;
};

export const dynamicParams = false;

export function generateStaticParams(): SnackArticleRouteParams[] {
  return snackArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: SnackArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getSnackArticle(slug);

  if (!article) {
    notFound();
  }

  return {
    title: article.metadata.title,
    description: article.metadata.description,
  };
}

export default async function SnackArticlePage({
  params,
}: SnackArticlePageProps) {
  const { slug } = await params;
  const article = getSnackArticle(slug);

  if (!article) {
    notFound();
  }

  return <SnackArticleTemplate article={article} />;
}
