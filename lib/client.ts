import React from 'react'
import imageUrlBuilder from '@sanity/image-url'
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "hggvfj13",
  dataset: "production",
  apiVersion: "2021-10-21", 
  useCdn: true, 
  token: process.env.SANITY_BACKEND_TOKEN,
});

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source).auto('format').url()
}