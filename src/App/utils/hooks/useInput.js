import { useState } from "react";
import { useValidation } from "./useValidation";

export const useInput = (
    inputAttribute = {
      type: "",
      name: "",
      placeholder: "",
      width: ""
    },
    initialValue,
    validations
  ) => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setDirty] = useState(false);
    const valid = useValidation(value, validations);

    const onChange = (e) => {
      setValue(e.target.value);
    }
    const clearValue = () => {
        setValue(initialValue);
        setDirty(false);
    }

    const onBlur = (e) => {
      setDirty(true);
    };
    return {
      inputAttribute,
      value,
      initialValue,
      clearValue,
      onChange,
      onBlur,
      isDirty,
      ...valid
    };
  };