/* eslint-disable @next/next/no-img-element */
import moment from "moment"

export default function CardMovie(props) {
    return (
        <>
            {props.data ? props.data.map(result => (
                <div key={result.mal_id}>
                        {/* <div key={result.mal_id}>
                            <h1>{result.title}</h1>
                        </div> */}
                    <div className="max-w-md mx-auto hover:shadow-xl overflow-hidden md:max-w-7xl rounded-3xl">
                        <div className="md:flex">
                            <div className="md:flex-shrink-0">
                            <a href={result.url} rel="noreferrer" target="_blank" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"><img className="h-48 w-full object-cover md:w-48 rounded-2xl" src={result.images.jpg.image_url} alt={result.title} /></a>
                            </div>
                            <div className="p-8">
                                <div className="tracking-wide text-sm text-indigo-500 font-semibold capitalize">released on: {moment(result.aired.from).format("ddd, DD-M-YYYY")}</div>
                                <a href={result.url} rel="noreferrer" target="_blank" className="mt-2 text-xl leading-tight font-medium transition duration-500 ease-in-out text-black hover:underline capitalize">{result.title}</a>
                                <p className="mt-1 text-gray-500 indent-5">{result.synopsis}<div className="mt-8"></div>Duration: {result.duration}<div className="mt-1"></div><div className="mt-1"></div>Type: {result.type}<div className="mt-1"></div>Rating: {result.rating}
                                <div className="mt-1"></div>Genre&apos;s:<br/>{result.genres ? result.genres.map(genre => (<li key={genre.data}>{genre.name}</li>)):""}</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10"></div>
                    <div className="mt-20"></div>
                    <br />
                </div>
            )):""}
            <br />
            <br />
        </>
    )
}