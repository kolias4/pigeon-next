import Image from 'next/image'
import dateformat from '../../../functions/date/dateformat'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import fetcher from '../../../functions/fetcher'
import { useRouter } from 'next/router'
import menuquery from '../../../functions/queries/menuquery'
import { NextSeo } from 'next-seo';



function BlogCategory({data,notFound,title}){

  const router = useRouter()

  if (router.isFallback) {
  return <div>Loading...</div>
}

  if(notFound){
    return (
      <h1 className="text-center">Δεν βρέθηκαν άρθρα</h1>
    )
  }

  var articles = data.articles[0].arthras

  return (

    <div className="container">

    <NextSeo title={`${title} | MyPigeon`}
      description={`Κατηγορία ${title}`}
      canonical={process.env.NEXT_PUBLIC_SITE_URL+router.asPath}
      openGraph={{
    type: 'website',
    url: `${process.env.NEXT_PUBLIC_SITE_URL+router.asPath}`,
    title:`${title} | MyPigeon`,
    description:`Κατηγορία  ${title}`,
    images: [
      {
        url:`${process.env.NEXT_PUBLIC_SITE_URL}/logo2.jpg`,
        width:1203,
        height:1200,
        alt:`${title}`
      }

    ],
    site_name: 'MyPigeon',
  }}
    />


    <div className="inner-page margin-default">
    <div className>
      <div className="blog blog-block layout-three-cols">
        <div className="row equal">
        {articles.map((item,i) => {
          let image = item.Eikones[0]
          return (
            <div className="col-lg-4 col-md-4 col-sm-6 matchHeight" >
                <article id="post-1855" className="post-1855 post type-post status-publish format-standard has-post-thumbnail hentry category-riding-school tag-children tag-school">
                  <div className="blog-info">
                    <a href="http://senorcavallo.just-themes.com/riding-school-begins-our-riding-classes-and-trainings/" className="date">{dateformat(item.created_at)}</a>
                    <span className="cat-div"> | </span><span className="cat color-main">{item.author}</span>
                  </div>
                  <Link href={`/blog/post/${item.urlkey}`}>
                  <a  className="header">
                    <h3>{item.Title}</h3>
                  </a>
                  </Link>
                  <Link href={`/blog/post/${item.urlkey}`}>
                  <a className="photo">
                  {image &&
                    <Image src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image.url}`}  alt="Picture of the author" width={770} height={520} />
                  }
                    {/* <img width={770} height={520} src="http://senorcavallo.just-themes.com/wp-content/uploads/2017/09/blog10-770x520.jpg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt srcSet="http://senorcavallo.just-themes.com/wp-content/uploads/2017/09/blog10-770x520.jpg 770w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/09/blog10-740x500.jpg 740w" sizes="(max-width: 770px) 100vw, 770px" /> */}
                  </a>
                </Link>
                   <div className="description">
                    <div  className="text text-page  crop_string">
                      <ReactMarkdown>{item.kyriosthema}</ReactMarkdown>
                    </div>
                    <div className="blog-info">
                      <Link href={`/blog/post/${item.urlkey}`}>
                      <a className="btn btn-xs btn-more btn-second">Περισσότερα..</a>
                    </Link>
                      {/* <ul>
                        <li className="icon-fav">
                          <span className="fa fa-eye" /> 0
                        </li>
                        <li className="icon-comments">
                        <span className="fa fa-commenting" /> 0</li>
                        </ul> */}
                    </div>
                  </div>
                </article>
              </div>

          )
        })}

        </div>
        {/* <nav className="navigation paging-navigation clearfix">
          <h6 className="screen-reader-text">Posts navigation</h6>
          <div className="pagination loop-pagination">
            <a href="#" className="prev page-numbers disabled"> </a>				<span className="page-numbers current">1</span>
            <a className="page-numbers" href="http://senorcavallo.just-themes.com/blog-three-columns/page/2/">2</a>
            <a className="next page-numbers" href="http://senorcavallo.just-themes.com/blog-three-columns/page/2/"> </a>							</div>

        </nav> */}
      </div>
    </div>
  </div>
</div>


  )

}

export default BlogCategory

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
var nquery = `
query {

categoryArthras{
  url_key
}
}
`

var data = await fetcher(nquery,{},process.env.STRAPI_ADMIN_TOKEN)



  // Get the paths we want to pre-render based on posts
  const paths = data.categoryArthras.map((arthro) => ({
    params: { urlkey: arthro.url_key },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: true }
}


export async function getStaticProps({ params }) {
  // Fetch data from external API


  var nquery = `
  query($urlkey:String!) {



articles:categoryArthras(where:{url_key:$urlkey}){
  title

arthras(sort:"created_at:desc"){
  Title
  urlkey
  Eikones{
    url
  }
  created_at
  author
  kyriosthema
}
}

}
  `


  var data = await fetcher(nquery,{
    variables:{
      urlkey:params.urlkey
    }
  },process.env.STRAPI_ADMIN_TOKEN)

  var menu = await menuquery()






  // Pass data to the page via props
  return { props: { data,title:data.articles[0].title,menu },revalidate:30  }
}
