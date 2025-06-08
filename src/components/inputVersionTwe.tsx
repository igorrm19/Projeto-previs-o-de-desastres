type InputVersionTweProps = {
  text: string;
  name: string;
  value: number;
};

const InputVersionTwe = (props: InputVersionTweProps) => {
  return (
    <>
      <input type="text" placeholder={props.text} name={props.name} value={props.value} />
    </>
  );
};

export default InputVersionTwe;
