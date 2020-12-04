import Head from 'next/head'
import Link from 'next/link'
import React from "react";
export default function Home({slugs}) {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div>
                Hello.
            </div>
        </>
    )
}

export const getStaticProps = async () => {
    const slugs = [];
    return {props: {slugs}};
};