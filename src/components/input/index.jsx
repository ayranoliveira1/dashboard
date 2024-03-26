import { forwardRef } from "react";
import { Input, Label } from "./style";

const InputComponent = forwardRef(({ label, ...props }, ref) => {
   return (
      <>
         <Label>{label}</Label>
         <Input ref={ref} {...props} />
      </>
   );
});

export default InputComponent;
