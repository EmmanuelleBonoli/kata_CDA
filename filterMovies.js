const recentMovies = [
    {
      title: "The Great Adventure",
      releaseDate: "2023-07-15",
      actors: ["Alex Johnson", "Samantha Bloom", "Michael Cane"]
    },
    {
      title: "Lost in Time",
      releaseDate: "2023-05-22",
      actors: ["Clara Hughes", "Robert Smith", "Emily Stone"]
    },
    {
      title: "Mystery of the Blue Ocean",
      releaseDate: "2023-08-30",
      actors: ["Henry Gold", "Natalie Port", "Bruce Wayne"]
    },
    {
      title: "Cybernetic",
      releaseDate: "2023-09-12",
      actors: ["Aaron Stark", "Lisa Ray", "Jeremy Irons"]
    },
    {
      title: "The Hidden World",
      releaseDate: "2023-10-05",
      actors: ["Sophia Loren", "Daniel Craig", "Emma Watson"]
    }
  ];

  const chooseTitle = "great" 

  function filterByTitle (recentMovies, searchedTitle) {
    const recentMoviesFiltered = [];

    for (let i = 0; i < recentMovies.length; i++){
        if(recentMovies[i].title.toLowerCase().includes(searchedTitle.toLowerCase())){
            recentMoviesFiltered.push(recentMovies[i])
        }
    }
    return recentMoviesFiltered
  }

  console.log(filterByTitle(recentMovies, chooseTitle))