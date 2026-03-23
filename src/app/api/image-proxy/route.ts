import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const normalizeInputUrl = (input: string) => {
  const trimmed = input.trim();
  if (!trimmed) return '';
  if (trimmed.startsWith('http://lh3.googleusercontent.com')) {
    return trimmed.replace(/^http:\/\//i, 'https://');
  }
  return trimmed;
};

export async function GET(request: NextRequest) {
  const raw = request.nextUrl.searchParams.get('url') ?? '';
  const normalized = normalizeInputUrl(raw);

  if (!normalized) {
    return NextResponse.json({ error: 'Missing image url' }, { status: 400 });
  }

  let target: URL;
  try {
    target = new URL(normalized);
  } catch {
    return NextResponse.json({ error: 'Invalid image url' }, { status: 400 });
  }

  if (!['http:', 'https:'].includes(target.protocol)) {
    return NextResponse.json({ error: 'Unsupported protocol' }, { status: 400 });
  }

  try {
    const upstream = await fetch(target.toString(), {
      cache: 'no-store',
      headers: {
        'User-Agent': 'Mozilla/5.0',
        Accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
      },
    });

    if (!upstream.ok) {
      return NextResponse.json({ error: 'Failed to load image' }, { status: upstream.status });
    }

    const contentType = upstream.headers.get('content-type') ?? 'image/jpeg';
    const data = await upstream.arrayBuffer();

    return new NextResponse(data, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch {
    return NextResponse.json({ error: 'Unable to fetch image' }, { status: 502 });
  }
}
