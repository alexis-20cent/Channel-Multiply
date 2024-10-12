import { ElementType, HtmlHTMLAttributes } from 'react';
import './style.scss';

type ListItemProps = HtmlHTMLAttributes<HTMLElement> & {
  as?: ElementType;
  title: string;
  img: string;
};

function ListItem({ as, title, img, ...props }: ListItemProps) {
  const Component = as || 'div';
  return (
    <Component {...props}>
      <h3>{title}</h3>
      <img src={img} alt='' />
    </Component>
  );
}

export { ListItem };
