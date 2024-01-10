import { list } from '@vercel/blob';
import { NextResponse } from 'next/server';

export const runtime = "edge"

export default async (request) => {
  const { blobs } = await list();
  return NextResponse.json(blobs);
}
