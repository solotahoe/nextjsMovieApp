import Movie from './movie'

export default async function Home() {
  // console.log(process.env.API_KEY)
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=049bb1bf8b0ce795f13b5524d3604ccf`)
    const res = await data.json();
    // console.log(res)
  return (
    <main >
   
     <div className="grid gap-16 grid-cols-fluid">  
      {res.results.map((movie, index)=>(
         <Movie 
         key ={movie.id}
         id ={movie.id}
         title ={movie.title}
         poster_path = {movie.poster_path}
         release_date = {movie.release_date}
         />
      ))}
    </div>
    </main>
  );  
}
