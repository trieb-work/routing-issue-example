import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'

type Props = {
  demo: string,
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      demo: '...slugs'
    },
    revalidate: 60 * 15,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        "params": {
          "slugs": [
            "business",
            "subpage1"
          ]
        },
        "locale": "de"
      },
      {
        "params": {
          "slugs": [
            "business",
            "subpage2"
          ]
        },
        "locale": "de"
      },
      {
        "params": {
          "slugs": [
            "business"
          ]
        },
        "locale": "de"
      },
      {
        "params": {
          "slugs": [
            "business",
            "subpage1"
          ]
        },
        "locale": "en"
      },
      {
        "params": {
          "slugs": [
            "business",
            "subpage2"
          ]
        },
        "locale": "en"
      },
      {
        "params": {
          "slugs": [
            "business"
          ]
        },
        "locale": "en"
      }
    ],
    fallback: "blocking"
  }
}

const Home: NextPage<Props> = (props) => {
  const router = useRouter();
  return (
    <div>
      Demo: {props.demo}
      <br/>
      Current locale: {router.locale}
      <br/>
      <Link href={router.asPath} locale="en">EN</Link>
      <br/>
      <Link href={router.asPath} locale="de">DE</Link>
    </div>
  )
}

export default Home
