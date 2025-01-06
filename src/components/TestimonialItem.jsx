/* eslint-disable react/prop-types */
const TestimonialItem = ({ item, containerClassName }) => {
  return (
    <div
      className={`relative px-14 pt-11 pb-14 after:absolute after:bottom-0
       after:right-0 after:h-0.5 after:w-screen after:bg-s2 after:content-[''] ${containerClassName}`}>
      <blockquote className="h6 mb-8 text-p4">{item.comment}</blockquote>
      <div className="flex items-center max-xl:-mr-8">
        <div className="mr-4 size-20 shrink-0 rounded-half border-2 border-s2 p-1 5">
          <img src={item.avatarUrl} alt="avatar" />
        </div>
        <div>
          <h4 className="body-2 mb-0.5 text-p1">{item.name}</h4>
          <p className="small-compact uppercase text-s3">{item.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
