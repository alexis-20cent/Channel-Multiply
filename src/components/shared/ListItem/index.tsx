import { ElementType, HtmlHTMLAttributes } from 'react';
import './style.scss';

export type ListItemProps = HtmlHTMLAttributes<HTMLElement> & {
  as?: ElementType;
  title: string;
  img?: string | null;
};

function ListItem({ as, title, img, ...props }: ListItemProps) {
  const Component = as || 'div';
  return (
    <Component className='list-item' {...props}>
      <img className='list-item-img' src={img || './default.svg'} alt='' />
      <h3 className='list-item-title'>{title}</h3>
    </Component>
  );
}

export { ListItem };
