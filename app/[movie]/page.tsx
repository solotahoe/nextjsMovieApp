import Image from 'next/image'
export async function generateStaticParams() {
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=049bb1bf8b0ce795f13b5524d3604ccf`)
    const res = await data.json();
    // console.log(res) 
    return res.results.map((movie)=>{
    movie:toString(movie.id)
    })
}
const MovieDetail = async({params}) => {
    // console.log(params)
    const {movie} = params
    // console.log(movie)
    const imagePath = 'https://image.tmdb.org/t/p/original'
    const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movie}?api_key=049bb1bf8b0ce795f13b5524d3604ccf`, {next:{revalidate:50}}
    )
    const res = await data.json();
    // console.log(res)
    return ( 
        <div>
         <h2 className= "text-2xl">{res.title}</h2>
         <h2 className="text-lg">{res.release_date}</h2>
         <h2>Runtime: {res.runtime} minutes</h2>
         <h2 className="bg-green-600 inline-block my-2 py-2 px-4 rounded text-sm">Runtime: {res.status} minutes</h2>

         <Image  className="my-12 w-full" src={imagePath + res.backdrop_path} alt="pic" width={1000} height={1000} priority/>
         <p>{res.overview}</p>
        </div>
     );  
}
 
export default MovieDetail;