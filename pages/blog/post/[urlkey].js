import Image from 'next/image'
import dateformat from '../../../functions/dateformat'
import fetcher from '../../../functions/fetcher'
import { useRouter } from 'next/router'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Disqus from "disqus-react"
import menuquery from '../../../functions/queries/menuquery'
import { NextSeo } from 'next-seo';






function BlogPost({data,notFound,title}){

  const router = useRouter()

  if (router.isFallback) {
  return <div>Loading...</div>
}

  if(notFound){
    return (
      <h1 className="text-center">Δεν βρέθηκαν άρθρα</h1>
    )
  }


  const settings = {
   autoplay:true,
   dots: false,
   infinite: true,
   speed: 500,
   slidesToShow: 1,
   slidesToScroll: 1,
   nextArrow: <SampleNextArrow />,
   prevArrow: <SamplePrevArrow />
 };

  var article = data.articles[0]

  const disqusShortname = "mypigeon"
 const disqusConfig = {
   url: `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`,
   identifier: article.id,
   title: article.Title
 }

 function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="arrow right"
      style={{display: "block", position:"absolute", width:'20px',height:'20px',right:'10px', top:'50%', zIndex:'1000' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="arrow left"
      style={{display: "block", position:"absolute", width:'20px',height:'20px',left:'10px', top:'50%', zIndex:'1000' }}
      onClick={onClick}
    />
  );
}

  return (

    <div className="container">

    <NextSeo title={`${title} | MyPigeon`}
      description={`Άρθρο ${title}`}
      canonical={process.env.NEXT_PUBLIC_SITE_URL+router.asPath}
      openGraph={{
    type: 'website',
    url: `${process.env.NEXT_PUBLIC_SITE_URL+router.asPath}`,
    title:`${title} | MyPigeon`,
    description:`Άρθρο  ${title}`,
    images: [
      {
        url:`${process.env.NEXT_PUBLIC_STRAPI_URL}${article.Eikones[0] && article.Eikones[0].url || '/logo.png'}`,
        alt:`${title}`,
      }

    ],
    site_name: 'MyPigeon',
  }}
    />


      <div className="inner-page margin-default">
        <h3 className="text-center">{article.Title}</h3>
    <div className="row">
      <div className="col-lg-12 col-md-12">
        <section className="blog-post">
          <article id="post-1851" className="post-1851 post type-post status-publish format-standard has-post-thumbnail hentry category-riding-school tag-horses">
            <div className="image">
              {/* <img width={1400} height={933} src="http://senorcavallo.just-themes.com/wp-content/uploads/2017/09/blog9.jpg" className="attachment-senorcavallo-big size-senorcavallo-big wp-post-image" alt srcSet="http://senorcavallo.just-themes.com/wp-content/uploads/2017/09/blog9.jpg 1400w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/09/blog9-300x200.jpg 300w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/09/blog9-768x512.jpg 768w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/09/blog9-1024x682.jpg 1024w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/09/blog9-600x400.jpg 600w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/09/blog9-570x380.jpg 570w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/09/blog9-272x182.jpg 272w" sizes="(max-width: 1400px) 100vw, 1400px" /> */}
               <Slider {...settings}>
                 {article.Eikones.map((item,i) => {
                   return (
                     <div className="text-center">
                     <Image key={`imageblog${i}`} src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item.url}`}  alt={`blogimage${i}`} objectFit="contain" width={800} height={500} />
                    </div>
                   )
                 })}
               </Slider>
              {/* {article.Eikones[0]&&
                <Image src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${article.Eikones[0].url}`}  alt="Picture of the author" objectFit="cover" width={1200} height={800} />
              } */}
            </div>
            <div className="blog-info blog-info-top">
              <span className="date">{dateformat(article.created_at)}</span><span className="date-div color-main">|</span> <span>{article.author}</span>
              {/* <ul>
              <li className="icon-fav">
                  <span className="fa fa-eye" /> 0
                </li>
                <li className="icon-comments">
                  <span className="fa fa-commenting" /> 0</li>
                </ul> */}
              </div>
            <div className="description">
              <div className="text text-page">
                <ReactMarkdown>
                  {article.kyriosthema}
                </ReactMarkdown>

              </div>



              </div>
              <div className="clearfix" />


            <div className="blog-info blog-info-bottom">
              <div className="cats-short"><strong>Category:</strong>
              {article.category_arthras.map((cat,i) => {
                return (
                  <Link key={cat.id} href={`/blog/category/${cat.url_key}`}>
                    <a style={{marginRight:'10px'}}>{cat.title}</a>
                  </Link>
                )
              })}
             </div>
            </div>
          </article>

          {article.Youtubevideo && <div className="videoblock mx-auto my-3" style={{maxWidth:'800px'}}>

              <iframe rel="0" width="100%" height="100%" src={`https://www.youtube.com/embed/${article.Youtubevideo}`}/>



          </div>}

          {article.Video && <div className="mx-auto my-3" style={{maxWidth:'800px'}}>

               <video controls width="100%">



<source src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${article.Video.url}`} type={article.Video.mime}/>

     Sorry, your browser doesn't support embedded videos.
        </video>


          </div>}
          {/* <div id="comments" className="comments-area">
            <div className="comments-form-wrap">
              <a className="anchor" id="comments-form" />
              <div className="comments-form anchor">
                <div id="respond" className="comment-respond">
                  <h3 id="reply-title" className="comment-reply-title">Add Comment <small><a rel="nofollow" id="cancel-comment-reply-link" href="/how-can-i-keep-my-horse-happy-and-fit/#respond" style={{display: 'none'}}>Cancel reply</a></small></h3>			<form action="http://senorcavallo.just-themes.com/wp-comments-post.php" method="post" id="commentform" className="comment-form" noValidate>
                    <p className="comments_notes">Your email address will not be published. Required fields are marked *</p><div className="comments-field comments_message"><label htmlFor="comment" className="required">Your Message</label><textarea id="comment" name="comment" placeholder="Comment" aria-required="true" defaultValue={""} /></div><div className="row"><div className="comments-field comments_author col-sm-6"><label htmlFor="author" className="required">Name</label><input id="author" name="author" type="text" placeholder="Name *" defaultValue size={30} aria-required="true" /></div>
                      <div className="comments-field comments_email col-sm-6"><label htmlFor="email" className="required">Email</label><input id="email" name="email" type="text" placeholder="Email *" defaultValue size={30} aria-required="true" /></div></div>
                    <p className="form-submit"><input name="submit" type="submit" id="send_comment" className="submit btn btn-second-filled color-hover-black" defaultValue="Post Comment" /> <input type="hidden" name="comment_post_ID" defaultValue={1851} id="comment_post_ID" />
                      <input type="hidden" name="comment_parent" id="comment_parent" defaultValue={0} />
                    </p><p style={{display: 'none'}}><input type="hidden" id="akismet_comment_nonce" name="akismet_comment_nonce" defaultValue="33af0f134b" /></p><p style={{display: 'none'}} />			<input type="hidden" id="ak_js" name="ak_js" defaultValue={1609703972005} /></form>
                </div>
              </div>
            </div>
          </div> */}

          <Disqus.DiscussionEmbed
       shortname={disqusShortname}
       config={disqusConfig}
     />
        </section>
      </div>

    </div>
  </div>
</div>





  )

}

export default BlogPost

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
var nquery = `
query {

arthras{
  urlkey
}
}
`

var data = await fetcher(nquery,{},process.env.STRAPI_ADMIN_TOKEN)



  // Get the paths we want to pre-render based on posts
  const paths = data.arthras.map((post) => ({
    params: { urlkey: post.urlkey}
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: true }
}

export async function getStaticProps({ params }) {

  var nquery = `
  query($urlkey:String!) {


articles:arthras(where:{urlkey:$urlkey}){
id
created_at
Title
kyriosthema
author
Youtubevideo
Video{
  url
  mime
}
category_arthras{
  title
  url_key
}
Eikones{
  url
}
}

}
  `


  const data = await fetcher(nquery,{
    variables:{
      urlkey:params.urlkey
    }
  },process.env.STRAPI_ADMIN_TOKEN)

  var menu = await menuquery()


  // Pass data to the page via props
  return { props: { data,title:data.articles[0].Title,menu },revalidate:30 }

}


// export async function getServerSideProps({query}) {
//   // Fetch data from external API
//
//   var {urlkey} = query
//
//   var nquery = `
//   query($urlkey:String!) {
//
// menu:categoryArthras{
// title
// url_key
// }
//
// articles:arthras(where:{urlkey:$urlkey}){
// id
// created_at
// Title
// kyriosthema
// author
// Youtubevideo
// Video{
//   url
// }
// category_arthras{
//   title
//   url_key
// }
// Eikones{
//   url
// }
// }
//
// }
//   `
//
//
//   const data = await fetcher(nquery,{
//     variables:{
//       urlkey:urlkey
//     }
//   })
//
//
//   // Pass data to the page via props
//   return { props: { data,title:data.articles[0].Title } }
// }
