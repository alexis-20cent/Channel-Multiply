import { memo, PropsWithChildren } from 'react';
import { SearchInput } from '@/components/shared/SearchInput';
import './style.scss';
import { useSearch } from '@/hooks/useSearch';
import { useLocation } from 'react-router-dom';

type PageComponentProps = {
  onSearch: (search: string) => void;
} & PropsWithChildren;

function PageComponent({ children, onSearch }: PageComponentProps) {
  const [search] = useSearch();
  const location = useLocation();

  return (
    <div className={`page page--${search ? 'normal' : 'centered'}`}>
      <header className='page-header'>
        <div className='page-logo' role='img'>
          <span>Channel</span>
          <img src='/logo.svg' alt='*' />
        </div>
        <div className='page-search'>
          <SearchInput
            autoFocus={location.pathname === '/'}
            value={search}
            onChange={value => onSearch(value)}
            placeholder='Movie or serie title...'
            aria-label='Page a movie or a serie'
            name='search'
          />
        </div>
      </header>
      {children}
    </div>
  );
}

export const Page = memo(PageComponent);
