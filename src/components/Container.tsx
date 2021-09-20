type ContainerProps = {
  styles: React.CSSProperties;
};

const Container = (props: ContainerProps) => {
  return <div style={props.styles}>Lorem ipsum dolor sit.</div>;
};

export default Container;
