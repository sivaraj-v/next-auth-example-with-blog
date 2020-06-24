import Head from 'next/head'

import Date from '../../components/date'
import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import { getAllPostIds, getPostData } from '../../lib/posts'


 const Post = ({ postData }) => (
   <Layout>
     <article>
       <h1 className={utilStyles.headingXl}>{postData.title}</h1>
       <div className={utilStyles.lightText}>
         <Date dateString={postData.date} />
       </div>
       <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
     </article>
   </Layout>
 )


export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export default Post
