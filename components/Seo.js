import { NextSeo } from "next-seo"


const Seo = ({metainfo,title,pageurl,image,description}) => {
    return (
        <NextSeo title={metainfo?.meta_title || title}
        description={metainfo?.meta_description || description}
        canonical={pageurl}
        openGraph={{
      type: 'website',
      url: pageurl,
      title: metainfo?.meta_title || title,
      description:metainfo?.meta_description || description,
      images: [
        {
          url:image.url,
          width:image.width,
          height:image.height,
          alt:image.alt
        }

      ],
      site_name: 'MyPigeon',
    }}
      />
    )
}

Seo.defaultProps = {
    metainfo: null,
    description:"",
    pageurl:process.env.NEXT_PUBLIC_SITE_URL,
    image:{
        url:`${process.env.NEXT_PUBLIC_SITE_URL}/logo2.jpg`,
        width:1203,
        height:1200,
        alt:"logo"
    }
       
}

export default Seo