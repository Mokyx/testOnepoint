import { z } from "zod";

export const SpotifyExternalUrlsSchema = z.object({
  spotify: z.string(),
});

export const SpotifyImageSchema = z.object({
  url: z.string(),
  height: z.number(),
  width: z.number(),
});

export const SpotifyArtistSchema = z.object({
  external_urls: SpotifyExternalUrlsSchema,
  href: z.string(),
  id: z.string(),
  name: z.string(),
  type: z.string(),
  uri: z.string(),
});

export const SpotifyRestrictionsSchema = z.object({
  reason: z.string(),
});

export const SpotifyAlbumSchema = z.object({
  album_type: z.string(),
  total_tracks: z.number(),
  available_markets: z.array(z.string()),
  external_urls: SpotifyExternalUrlsSchema,
  href: z.string(),
  id: z.string(),
  images: z.array(SpotifyImageSchema),
  name: z.string(),
  release_date: z.string(),
  release_date_precision: z.string(),
  restrictions: SpotifyRestrictionsSchema.optional(),
  type: z.string(),
  uri: z.string(),
  artists: z.array(SpotifyArtistSchema),
});

export const SpotifyAlbumsResponseSchema = z.object({
  href: z.string(),
  limit: z.number(),
  next: z.string().nullable(),
  offset: z.number(),
  previous: z.string().nullable(),
  total: z.number(),
  items: z.array(SpotifyAlbumSchema),
});

export const SpotifyResponseSchema = z.object({
  albums: SpotifyAlbumsResponseSchema,
});

export type SpotifyAlbumType = z.infer<typeof SpotifyAlbumSchema>;
export type SpotifyAlbumsResponseType = z.infer<
  typeof SpotifyAlbumsResponseSchema
>;
export type SpotifyResponseType = z.infer<typeof SpotifyResponseSchema>;
