
import imageUrlBuilder from '@sanity/image-url'
import { createClient } from "next-sanity";

export const config = {
  dataset: "production",
  projectId: "hggvfj13",
  apiVersion: '2021-10-21',
  useCdn: true,
}

export const client = createClient(config);

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source).auto('format').url()
}