export default function validation(values) {
    let errors = {};
    if (!values.fullname) {
      errors.fullname = "Required ****";
    }
    if (!values.email) {
      errors.email = "Email  ****";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email is invalid!";
    }
    if (!values.password) {
      errors.password = "Required ****";
    } 
    return errors;
  }