import { Button, Input as AntdInput, Space } from 'antd';
import { useState } from 'react';

const Input: React.FC = () => {
  const [buttonName, setButtonName] = useState('Input');
  return (
    <Space>
      <AntdInput
        value={buttonName}
        onChange={(e) => setButtonName(e.target.value)}
      />
      <Button onClick={() => setButtonName('')}>
        {buttonName || 'button'}
      </Button>
    </Space>
  );
};
export default Input;
