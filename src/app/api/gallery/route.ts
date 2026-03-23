import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';

export const dynamic = 'force-dynamic';

const normalizeImageUrl = (value: unknown) => {
  if (typeof value !== 'string') return '';
  const trimmed = value.trim();
  if (!trimmed) return '';

  if (trimmed.startsWith('http://lh3.googleusercontent.com')) {
    return trimmed.replace(/^http:\/\//i, 'https://');
  }

  return trimmed;
};

export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const items = await db
      .collection('gallery')
      .find()
      .sort({ createdAt: -1 })
      .toArray();

    const normalizedItems = items.map((item) => ({
      ...item,
      image: normalizeImageUrl(item.image),
      title: typeof item.title === 'string' ? item.title.trim() : '',
      category: item.category === 'Hair' || item.category === 'Skin' || item.category === 'Nails'
        ? item.category
        : 'Nails',
    }));

    return NextResponse.json(normalizedItems);
  } catch {
    return NextResponse.json([]);
  }
}
