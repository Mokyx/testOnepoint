import { z } from "zod";

const OnePointAlbumSchema = z.object({
  id: z.string(),
  name: z.string(),
  artistName: z.string(),
  listenedCount: z.string().transform(Number),
  lastListened: z.string().transform((date) => new Date(date)),
});

export type OnePointAlbumType = z.infer<typeof OnePointAlbumSchema>;
