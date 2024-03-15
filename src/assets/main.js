const API = 'https://youtube138.p.rapidapi.com/channel/videos/?id=UCFkPAM4WaU9N8mdI55oXU3g&hl=es&gl=ES';

const content = document.getElementById('content')

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '9fef2eba3amsh9984d19e0388fe0p1d02afjsn7e0c7e0c515',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};

async function fetchData (apiUrl) {
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    return data;
}

(async () => {
    try {
        const videos = await fetchData(API)
        let view = `
        ${videos.contents.map(video => `
            <a target=_blank href="https://youtube.com/watch?v=${video.video.videoId}">
                <div class="single-video">
                    <img src="${video.video.thumbnails[3].url}" alt="Video thumbail">
                    <p>${video.video.title}</p>
                </div>
            </a>
            `).join('')}
        `
        content.innerHTML += view
    } catch (error) {
        console.error(error)  
    }
})()