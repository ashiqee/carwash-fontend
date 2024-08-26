import { DatePicker, Form } from 'antd';
import { Controller } from 'react-hook-form';

type TDatePickerProps = {
  name: string;
  label?: string;
};

const CRDatePicker = ({ name, label }: TDatePickerProps) => {
  return (
    <div>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <DatePicker {...field} size="large" style={{ width: '100%' }} />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default CRDatePicker;