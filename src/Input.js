import { Field } from "formik";
import TextFieldInput from "./TextFieldInput";

const Input = (props) => {
  const { name, label, ...rest } = props;
  return (
    <div className="form-control">
      <Field
        component={() => <TextFieldInput label={label} />}
        name={name}
        id={name}
        {...rest}
      />
    </div>
  );
};

export default Input;
