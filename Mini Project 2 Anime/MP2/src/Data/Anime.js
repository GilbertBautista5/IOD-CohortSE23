fetch('https://kitsu.io/api/edge/trending/anime')
      .then(response => response.json())
      .then(json => console.log(json))