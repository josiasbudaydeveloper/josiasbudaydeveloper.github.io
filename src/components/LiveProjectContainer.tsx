export default function LiveProjectContainer({
  id,
  header, 
  description,
  link,
  img,
  alt
} :
{
  id: string
  header: string,
  description: string,
  link: string,
  img: string,
  alt: string
}) {
  return (
    <section id={id}>
    <header>
      <h1 className="items-area-item-header">
        {header}
      </h1>
    </header>
    <div className="description-overflow">
      <p dangerouslySetInnerHTML={{
        __html: description
      }}>
      </p>
    </div>
      
    <div className="logos-area image-text-container">
      <a 
        href={link} 
        target="_blank"
      >
        <img 
          src={img} style={{width: "100%", height: "auto", objectFit: "contain"}}
          alt={alt}
          title="Visit"
        />
        <span className="image-text-centered">Click me</span>
      </a>
    </div>
    </section>
  )
}