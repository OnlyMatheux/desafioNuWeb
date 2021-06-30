// You Code Javascript

async function main() {
    try {
        const response = await fetch ('https://nuweb.vercel.app/api/NuwebPlay')
        const data = await response.json()
        
        data.items.forEach(element => { 
            console.log(data)
            musics = [{
                name: element.track.name,
                time: element.track.miliseconds,
                artist: element.track.artists,
                cover: element.track.album.images[2].url,

            }]
        });

        transformToMinutes(musics.time);

    } catch (error) {
        console.error(error)

    }
}
main()

function show(musics) {
    let output = ''
    for (music of musics) {
        let transformTime = transformToMinutes(music.time)

        output += 
        `<div class = 'boxMusicas'>
         <div class = 'geral-boxMusicas'> 
         <img src = '${musics.cover}'  alt = "Album Cover não encontrada">
        <div class = "infoMusicas">
        ${music.name} <br>
        <h2>${music.artist},<h6> Titulo do Album </h6></h2>
        </div>
        </div>
        <div class = "time"> ${music.time} </div>
        </div>`
    }

    const div = document.createElement('div');
    div.innerHTML = output;

    containerElement.appendChild(div);
}

function transformToMinutes(musicTime) {
    let miliseconds = musicTime;
    let minutes = Math.floor((miliseconds / 1000 / 60) << 0).toFixed(2).replace('.', ':');
    
    return minutes;
}