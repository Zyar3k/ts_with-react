type GreetProps = {
  name: string;
};

const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>
        Hello {props.name}! Lorem ipsum, dolor sit amet consectetur adipisicing
        elit.
      </h2>
    </div>
  );
};

export default Greet;
