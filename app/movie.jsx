import Link from 'next/link';
import Image from 'next/image'
const Movie = ({title, id,poster_path,release_date}) => {
  const imagePath = 'https://image.tmdb.org/t/p/original'
    return ( 
        <div>
            <h1>{title}</h1>
            <h2>{release_date}</h2>
            <Link href={`${id}`}> 
                <Image src={imagePath + poster_path} alt="poster_path" width={500} height={500}/>
            </Link>
        </div>
     );
}
 
export default Movie;