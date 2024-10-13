import { ElementType, HtmlHTMLAttributes, PropsWithChildren } from 'react';
import './style.scss';

export type SectionProps = HtmlHTMLAttributes<HTMLElement> & PropsWithChildren & {
  as?: ElementType;
  className?: string;
  title?: string;
};

function Section({ as, children, className, title, ...props }: SectionProps) {
  const Component = as || 'section';
  return (
    <Component className={`section${className ? ' ' + className : ''}`} {...props}>
      {title && <h1 className='section-title'>{title}</h1>}
      {children}
    </Component>
  );
}

export { Section };
