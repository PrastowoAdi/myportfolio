import React from "react";
import Timeline from "./Timeline";

export default function Career() {
  return (
    <section className="page-section" id="about">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">My Career</h2>
          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
        <ul className="timeline">
          <Timeline
            image="1"
            year="2009-2011"
            title="Our Humble Beginnings"
            desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!"
          />
          <Timeline
            classTitle="timeline-inverted"
            image="1"
            year="March 2011"
            title="Our Humble Beginnings"
            desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!"
          />
          <li className="timeline-inverted">
            <div className="timeline-image">
              <h4>
                This Part
                <br />
                Of My
                <br />
                Story!
              </h4>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
