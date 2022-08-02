import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'

type Props = {
  demo: string,
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      demo: 'static props are working (index page)'
    },
    revalidate: 60 * 15,
  }
}

const Home: NextPage<Props> = (props) => {
  const router = useRouter();
  console.log("props", JSON.stringify(props, null, 2));
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
