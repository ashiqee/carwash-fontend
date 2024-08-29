import { Form, Input } from 'antd';
import { Controller } from 'react-hook-form';

type TInputProps = {
  type: string;
  name: string;
  label?: string;
  disabled?: boolean;
  className?:string;
  placeholder?:string;
  size?:string;
  defaultValue?:string;
  readonly?:boolean;
};

const CRInput = ({ type, name, label, disabled,className,placeholder,defaultValue }: TInputProps) => {
  return (
    <div className={className}>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <Input
              {...field}
              type={type}
              id={name}
              
              defaultValue={defaultValue}
              placeholder={placeholder}
              size="large"
              disabled={disabled}
            />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default CRInput;
