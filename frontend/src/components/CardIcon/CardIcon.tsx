import { Card } from 'react-bootstrap';
import { IconType } from 'react-icons';

interface CardIconProps {
  icon: IconType;
  title: string;
}

export function CardIcon({ icon: Icon, title }: CardIconProps) {
  return (
    <Card
      className=" shadow bg-success d-flex justify-content-center align-items-center text-white gap-5"
      style={{ height: '300px' }}
    >
      <Icon size={100} color="white" />
      <h4 className="text-nowrap">{title}</h4>
    </Card>
  );
}
