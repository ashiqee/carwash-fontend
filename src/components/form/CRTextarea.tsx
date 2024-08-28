import { Form } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { Controller } from 'react-hook-form';

type TInputProps = {
  type: string;
  name: string;
  label?: string;
  disabled?: boolean;
  className?:string;
  placeholder?:string;
  size?:string;
};

const CRTextarea = ({ type, name, label, disabled,className,placeholder }: TInputProps) => {
  return (
    <div className={className}>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <TextArea
              {...field}
              type={type}
              id={name}
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

export default CRTextarea;
