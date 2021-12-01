import TextField from '@material-ui/core/TextField';

const TextFieldInput = (props) => {
    const {label}= props;
    return ( 
        <TextField style={{width: "100%"}} label={label}/>
     );
}
 
export default TextFieldInput;