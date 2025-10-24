export async function onRequestGet(context) {
    const { request } = context;
    const url = new URL(request.url);
    const videoUrl = url.searchParams.get('url');
    
    if (!videoUrl) {
        return new Response('URL parameter is required', { status: 400 });
    }
    
    try {
        // Faz fetch do vídeo e retorna como blob
        const response = await fetch(videoUrl);
        
        if (!response.ok) {
            return new Response('Failed to fetch video', { status: response.status });
        }
        
        const videoData = await response.arrayBuffer();
        
        // Retorna o vídeo com headers apropriados
        return new Response(videoData, {
            headers: {
                'Content-Type': 'video/mp4',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET',
                'Cache-Control': 'public, max-age=3600',
            },
        });
    } catch (error) {
        return new Response(`Error: ${error.message}`, { status: 500 });
    }
}

