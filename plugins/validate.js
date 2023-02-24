import { extend } from "vee-validate";

extend("requerido", {
  message: "This {_field_} is invalid.",
  validate: value => {
    // ...
    return true;
  }
});
