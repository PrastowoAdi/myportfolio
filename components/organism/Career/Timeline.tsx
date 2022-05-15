interface TimelineProps {
    classTitle?: string;
    image: "1",
    year: string;
    title: string;
    desc: string;
}

export default function Timeline(props: Partial<TimelineProps>) {
  const {
    classTitle, image, year, title, desc,
  } = props;
  return (
    <li className={classTitle}>
      <div className="timeline-image">
        <img className="rounded-circle img-fluid" src={`/img/${image}.jpg`} alt="timeline-img" />
      </div>
      <div className="timeline-panel">
        <div className="timeline-heading">
          <h4>{year}</h4>
          <h4 className="subheading">{title}</h4>
        </div>
        <div className="timeline-body">
          <p className="text-muted">
            {desc}
          </p>
        </div>
      </div>
    </li>
  );
}
