import Head from "next/head";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Results from "../components/Results";
import requests from "../utilities/requests";

export default function Home({ results }) {
	return (
		<div>
			<Head>
				<title>Hulu Clone - Nitin Chakraborty</title>
				<meta name="description" content="Next.JS Hulu Clone - Nitin Chakraborty" />
				<link rel="icon" href="/Favicon.ico" />
			</Head>

			<Header />

			<Navigation />

			<Results results={results} />
		</div>
	);
}

export async function getServerSideProps(context) {
	const genre = context.query.genre;

	const request = await fetch(
		`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`
	).then((res) => res.json());

	return {
		props: {
			results: request.results,
		},
	};
}
