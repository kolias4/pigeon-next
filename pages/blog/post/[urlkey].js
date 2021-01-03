import Image from 'next/image'
import dateformat from '../../../functions/dateformat'
import Link from 'next/link'

function BlogPost({data,notFound}){

  if(notFound){
    return (
      <h1 className="text-center">Δεν βρέθηκαν άρθρα</h1>
    )
  }

  var article = data[0]

  return (

    <div className="container">
      <div className="inner-page margin-default">
        <h3 className="text-center">{article.Title}</h3>
    <div className="row">
      <div className="col-lg-12 col-md-12">
        <section className="blog-post">
          <article id="post-1851" className="post-1851 post type-post status-publish format-standard has-post-thumbnail hentry category-riding-school tag-horses">
            <div className="image">
              {/* <img width={1400} height={933} src="http://senorcavallo.just-themes.com/wp-content/uploads/2017/09/blog9.jpg" className="attachment-senorcavallo-big size-senorcavallo-big wp-post-image" alt srcSet="http://senorcavallo.just-themes.com/wp-content/uploads/2017/09/blog9.jpg 1400w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/09/blog9-300x200.jpg 300w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/09/blog9-768x512.jpg 768w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/09/blog9-1024x682.jpg 1024w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/09/blog9-600x400.jpg 600w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/09/blog9-570x380.jpg 570w, http://senorcavallo.just-themes.com/wp-content/uploads/2017/09/blog9-272x182.jpg 272w" sizes="(max-width: 1400px) 100vw, 1400px" /> */}
              {article.Eikones[0]&&
                <Image src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${article.Eikones[0].url}`}  alt="Picture of the author" objectFit="cover" width={1200} height={800} />
              }
            </div>
            <div className="blog-info blog-info-top">
              <span className="date">{dateformat(article.created_at)}</span><span className="date-div color-main">|</span><ul><li className="icon-fav">
                  <span className="fa fa-eye" /> 0
                </li><li className="icon-comments"><span className="fa fa-commenting" /> 0</li></ul>		</div>
            <div className="description">
              <div dangerouslySetInnerHTML={{__html:article.kyriosthema.replace(/\n/g,"<br />")}} className="text text-page">

              </div>
              <div className="clearfix" />

            </div>
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
          <div id="comments" className="comments-area">
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
          </div>
        </section>
      </div>

    </div>
  </div>
</div>





  )

}

export default BlogPost


export async function getServerSideProps({query}) {
  // Fetch data from external API
  var notFound=false;
  var {urlkey} = query
  var url =`${process.env.NEXT_PUBLIC_STRAPI_URL}/arthras?urlkey=${urlkey}`
  const res = await fetch(url)
  const data = await res.json()
  if(!data[0]){
    notFound=true;
  }

  // Pass data to the page via props
  return { props: { data, notFound } }
}
