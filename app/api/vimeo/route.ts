import { NextResponse } from 'next/server'

export async function GET() {
  const videoId = '1063530782'
  const accessToken = process.env.VIMEO_ACCESS_TOKEN

  if (!accessToken) {
    return NextResponse.json({ error: 'Vimeo access token not configured' }, { status: 500 })
  }

  try {
    const response = await fetch(`https://api.vimeo.com/videos/${videoId}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })

    const data = await response.json()
    
    // Get the highest quality progressive download URL
    const progressiveFiles = data.download?.filter((file: any) => file.quality === '1080p')
    const videoUrl = progressiveFiles?.[0]?.link

    if (!videoUrl) {
      return NextResponse.json({ error: 'Video URL not found' }, { status: 404 })
    }

    return NextResponse.json({ url: videoUrl })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch video URL' }, { status: 500 })
  }
} 