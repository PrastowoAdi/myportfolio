/* eslint-disable jsx-a11y/img-redundant-alt */
interface ItemProps {
    image: "7";
    title: string;
    shortdesc: string;
    desc: string;
    source: string;
    linkpic: string
}

export default function Item(props: ItemProps) {
  const {
    image, title, shortdesc, desc, source, linkpic,
  } = props;
  return (
    <>
      <div className="col-lg-4 col-sm-6 mb-4">
        <div className="portfolio-item">
          <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
            </div>
            <img className="img-fluid" src={`/img/${image}.jpg`} alt="image-portfolio" />
          </a>
          <div className="portfolio-caption">
            <div className="portfolio-caption-heading">{title}</div>
            <div className="portfolio-caption-subheading text-muted">{shortdesc}</div>
          </div>
        </div>
      </div>

      <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex={-1} role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal"><img src="/img/close-icon.svg" alt="Close modal" /></div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    <h2 className="text-uppercase">{title}</h2>
                    <p className="item-intro text-muted">{shortdesc}</p>
                    <img className="img-fluid d-block mx-auto" src={`/img/${image}.jpg`} alt="image-portfolio" />
                    <p>
                      {desc}
                    </p>
                    <ul className="list-inline">
                      <li>
                        <strong>Source:</strong>
                        <a href={source}> My Github</a>
                      </li>
                      <li>
                        <strong>Picture:</strong>
                        <a href={linkpic}> My Drive</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
