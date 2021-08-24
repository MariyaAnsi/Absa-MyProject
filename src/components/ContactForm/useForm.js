import { useState, useEffect } from "react";
import { notification } from "antd";
// import axios from "axios";
import {db} from "/home/mariya/vscodeproj/absa/src/common/Fire.jsx";

const useForm = (validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [shouldSubmit, setShouldSubmit] = useState(false);

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: "Success",
      description: "Your message has been sent!",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(values));
    // Your url for API
    // const url = "";
    if (Object.keys(values).length === 3) {
      // axios
      //   .post(url, {
      //     ...values,
      //   })
      //   .then(() => {
      //     setShouldSubmit(true);
      //   });
      
      db.collection("Contacts")
        .add({
          Name:values.name,
          Email:values.email,
          Message:values.message
        })
        .then(()=>{
         
          setShouldSubmit(true);
         
        });
        
    }
   event.target.reset();
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && shouldSubmit) {
      setValues("");
      
      openNotificationWithIcon("success");
    }
  }, [errors, shouldSubmit]);

  const handleChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    setErrors((errors) => ({ ...errors, [event.target.name]: "" }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
