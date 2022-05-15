export default function Header() {
  return (
    <div id="portfoliopage">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 content-left">
            <h3 className="section-heading text-uppercase mb-3">
              My portfolio
            </h3>
            <p className="large text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, sunt est quibusdam ad voluptatibus autem, quae nihil deleniti laboriosam ratione veniam a illum corrupti ipsa pariatur nulla asperiores alias impedit repudiandae eius maxime accusantium! Magni architecto itaque eum aspernatur nihil?</p>
          </div>
          <div className="col-lg-6 content-right">
            <div className="text-center">
              <img src="/img/portfolio-img.svg" alt="portfolio-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
