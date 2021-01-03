import Image from 'next/image'
import dateformat from '../../../functions/dateformat'
import Link from 'next/link'

function BlogCategory({data,notFound}){

  if(notFound){
    return (
      <h1 className="text-center">Δεν βρέθηκαν άρθρα</h1>
    )
  }

  var articles = data[0].arthras

  return (

    <div className="container"><div className="inner-page margin-default">
    <div className>
      <div className="blog blog-block layout-three-cols">
        <div className="row">
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
                    <div dangerouslySetInnerHTML={{__html:item.kyriosthema}} className="text text-page margin-bottom-0 crop_string">
                    </div>
                    <div className="blog-info">
                      <Link href={`/blog/post/${item.urlkey}`}>
                      <a className="btn btn-xs btn-more btn-second">Περισσότερα..</a>
                    </Link>
                      <ul>
                        <li className="icon-fav">
                          <span className="fa fa-eye" /> 0
                        </li><li className="icon-comments"><span className="fa fa-commenting" /> 0</li></ul>
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


export async function getServerSideProps({query}) {
  // Fetch data from external API
  var notFound=false;
  var {urlkey} = query
  var url =`${process.env.NEXT_PUBLIC_STRAPI_URL}/category-arthras?url_key=${urlkey}`
  const res = await fetch(url)
  const data = await res.json()
  if(!data[0]){
    notFound=true;
  }

  

  // Pass data to the page via props
  return { props: { data, notFound } }
}
