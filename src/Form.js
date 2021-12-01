import { Formik } from "formik";
import PersonIcon from "@material-ui/icons/Person";
import FormControl from "./FormControl";
import * as Yup from "yup";
import "./Form.css";
import { makeStyles } from "@material-ui/core";
import { borderRadius } from "@mui/system";


const useStyle = makeStyles( (theme) => ({
    formIcon: {
        color:"white",
        backgroundColor: "#20BA7E",
        padding: "0.7rem",
        borderRadius: "50%"
    }
}));

const Form = () => {
    const classes = useStyle()
  const initialValues = {
    fullName: "",
    email: "",
  };
  const validationSchema = Yup.object({
    fullName: Yup.string().required(),
  });
  return (
    <Formik initialValues={initialValues}>
      {(props) => (
        <div className="form-container">
          <div className="form-header">
            <PersonIcon className={classes.formIcon}/>
            <h3>Sign Up</h3>
            <p>Please fill this form to create your Account !</p>
          </div>
          <form>
            <FormControl control="input" name="fullName" label="Full Name" />
          </form>
        </div>
      )}
    </Formik>
  );
};

export default Form;
