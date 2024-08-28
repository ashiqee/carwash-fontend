import React from 'react';
import { Form } from 'antd';
import { Controller } from 'react-hook-form';
import { Calendar, theme } from 'antd';
import type { CalendarProps } from 'antd';
import dayjs, { Dayjs } from 'dayjs';

const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
  console.log(value.format('YYYY-MM-DD'), mode);
};

type TCalendarPickerProps = {
    name: string;
    label?: string;
  };
const CRCalendar: React.FC<TCalendarPickerProps> = ({ name, label }) => {
  const { token } = theme.useToken();

  const disablePastDate = (current: Dayjs)=>{
    return current && current < dayjs().startOf('day')
  }
  const wrapperStyle: React.CSSProperties = {
    width: 400,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  return (
    <div>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <div style={wrapperStyle}>
              <Calendar
                {...field}
                fullscreen={false}
                onPanelChange={onPanelChange}
                disabledDate={disablePastDate}
              />
            </div>
          </Form.Item>
        )}
      />
    </div>
  );
};

export default CRCalendar;
