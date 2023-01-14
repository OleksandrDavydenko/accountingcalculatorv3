import { useEffect, useState } from "react";

export const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState(true);
    const [minLengthError, setMinLengthError] = useState(false);

    useEffect(() => {
      for (const validation in validations) {
        // eslint-disable-next-line default-case
        switch (validation) {
          case "minLenght":
            value.length < validations[validation]
              ? setMinLengthError(true)
              : setMinLengthError(false);
            break;
          case "isEmpty":
            value ? setEmpty(false) : setEmpty(true);
            break;
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return {
      isEmpty,
      minLengthError
    };
  };