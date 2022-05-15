import Header from "./Header";
import Item from "./Item";

export default function Content() {
  return (
    <>
      <Header />
      <section className="page-section bg-light" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Portfolio</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
          <div className="row">
            <Item
              image="7"
              title="Website Topup Game"
              shortdesc="Lorem ipsum dolor sit amet consectetur."
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, sunt est quibusdam ad voluptatibus autem, quae nihil deleniti laboriosam ratione veniam a illum corrupti ipsa pariatur nulla asperiores alias impedit repudiandae eius maxime accusantium! Magni architecto itaque eum aspernatur nihil?"
              source="https://github.com/PrastowoAdi"
              linkpic="https://github.com/PrastowoAdi"
            />
            <Item
              image="7"
              title="Website Topup Game"
              shortdesc="Lorem ipsum dolor sit amet consectetur."
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, sunt est quibusdam ad voluptatibus autem, quae nihil deleniti laboriosam ratione veniam a illum corrupti ipsa pariatur nulla asperiores alias impedit repudiandae eius maxime accusantium! Magni architecto itaque eum aspernatur nihil?"
              source="https://github.com/PrastowoAdi"
              linkpic="https://github.com/PrastowoAdi"
            />
            <Item
              image="7"
              title="Website Topup Game"
              shortdesc="Lorem ipsum dolor sit amet consectetur."
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, sunt est quibusdam ad voluptatibus autem, quae nihil deleniti laboriosam ratione veniam a illum corrupti ipsa pariatur nulla asperiores alias impedit repudiandae eius maxime accusantium! Magni architecto itaque eum aspernatur nihil?"
              source="https://github.com/PrastowoAdi"
              linkpic="https://github.com/PrastowoAdi"
            />
          </div>
        </div>
      </section>

    </>
  );
}
