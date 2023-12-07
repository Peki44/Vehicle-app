import MobxReactForm from "mobx-react-form";
import dvr from "mobx-react-form/lib/validators/DVR";
import validatorjs from "validatorjs";

const plugins = {
  dvr: dvr(validatorjs)
};

const fields = [
  {
    name: "email",
    placeholder: "Email",
    rules: "required|email|string|between:5,25",
    type: "text",
  },
  {
    name: "password",
    placeholder: "Password",
    rules: "required|string|between:5,25",
    type: "password",
  },
  {
    name: "passwordConfirm",
    placeholder: "Confirm Password",
    rules: "required|string|between:5,25",
    type: "password",
  },
  {
    name: "productName",
    label: 'Product Name',
    rules: "required|string",
    type: "text",
  },
  {
    name: "productPrice",
    label: 'Product Price',
    rules: "required|string",
    type: "text",
  },
  {
    name: "productImage",
    label: 'Product Image',
    rules: "required",
    type: "file",
  },
  {
    name: "productBrand",
    label: 'Product Brand',
    rules: "required|string",
    type: "text",
  },
  {
    name: "selectedBrand",
    label: 'Select Brand',
    rules: "required|string",
    type: "text",
  },
];

const hooks = {
  onSuccess(form) {
    alert("Form is valid! Send the request here.");
    console.log("Form Values!", form.values());
  },
  onError(form) {
    alert("Form has errors!");
    console.log("All form errors", form.errors());
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default new MobxReactForm(
  { fields },
  {
    plugins,
    hooks
  }
);