import {
  ElementType, HtmlHTMLAttributes,
  memo,
  PropsWithChildren, useEffect, useRef, useState,
} from 'react';
import './style.scss';

export type ListProps = HtmlHTMLAttributes<HTMLElement> & PropsWithChildren & {
  as?: ElementType;
  className?: string;
  scrollable?: boolean;
};

function ListComponent({ as, children, className, scrollable, ...props }: ListProps) {
  const [leftReached, setLeftReached] = useState(false);
  const [rightReached, setRightReached] = useState(false);
  const [hasMouse, setHasMouse] = useState(false);
  const elem = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHasMouse(matchMedia?.('(pointer:fine)').matches);
  }, []);

  useEffect(() => {
    if (hasMouse) {
      const inside = elem.current;
      const parent = inside?.parentElement;

      const scroll = () => {
        setLeftReached((parent?.scrollLeft || 0) < 1);
        setRightReached((parent?.scrollLeft || 0) >= ((parent?.scrollWidth && parent?.clientWidth && parent.scrollWidth - parent.clientWidth) || 1));
      };

      scroll();

      parent?.addEventListener('scroll', scroll);
      window.addEventListener('resize', scroll);

      return () => {
        parent?.removeEventListener('scroll', scroll);
        window.removeEventListener('resize', scroll);
      };
    }
  }, [children, hasMouse]);

  const Component = as || 'div';
  return (
    <Component
      className={`list${scrollable ? ' list--scrollable' : ''}${className ? ' ' + className : ''}`}
      {...props}
      style={{ ...(props.style || {}), '--length': Array.isArray(children) ? children.length : 1 }}
    >
      <div className='list-outside'>
        <div ref={elem} className='list-inside'>
          {children}
        </div>
      </div>
      {scrollable && hasMouse && !leftReached && (
        <button
          onClick={() => elem.current?.parentElement?.scrollBy({ behavior: 'smooth', left: -332 })}
          className='list-arrow list-arrow--left'
          title='Scroll left'
        >
          &lsaquo;
        </button>
      )}
      {scrollable && hasMouse && !rightReached && (
        <button
          onClick={() => elem.current?.parentElement?.scrollBy({ behavior: 'smooth', left: 332 })}
          className='list-arrow list-arrow--right'
          title='Scroll right'
        >
          &rsaquo;
        </button>
      )}
    </Component>
  );
}

export const List = memo(ListComponent);
