import { ElementType, HtmlHTMLAttributes, PropsWithChildren } from 'react';
import './style.scss';

type ListProps = HtmlHTMLAttributes<HTMLElement> & PropsWithChildren & {
  as?: ElementType;
  className?: string;
};

function List ({ as, children, className, ...props }: ListProps) {
  const Component = as || 'div';
  return (
    <Component className={`list${className ? ' ' + className : ''}`} {...props}>
      {children}
    </Component>
  );
}

export { List };
