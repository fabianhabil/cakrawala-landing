import { Hidden } from "@mui/material";
import Head from "next/head";
import ErrorPage from "next/error";

function Custom404() {
	return (
		<>
			<Head>
				<title>Cakrawala Music Production</title>
			</Head>
			<ErrorPage statusCode={404} />
		</>
	);
}

export default Custom404;
