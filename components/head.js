import Head from "next/head"
import image_SEO from "../public/images/image_SEO.png"

export const MyHead = () => {
    return (
        <Head>
            <meta property="og:type" content={'website'}></meta>
            <meta property="og:title" content="Minh Hieu: Passionate Web Developer"></meta>
            <meta property="og:site_name" content="Minh Hieu's Portfolio"></meta>
            <meta property="og:description" content="Minh Hieu: Passionate web developer dedicated to crafting exceptional online experiences."></meta>
            <meta property="og:image" content={image_SEO}></meta>
        </Head>
    )
}