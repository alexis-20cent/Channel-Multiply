import { memo, PropsWithChildren } from 'react';
import { SearchInput } from '@/components/shared/SearchInput';
import './style.scss';
import { useSearch } from '@/hooks/useSearch';
import { Link } from 'react-router-dom';

type PageComponentProps = {
  onSearch: (search: string) => void;
  error?: boolean;
  loading?: boolean;
  centeredLayout?: boolean;
} & PropsWithChildren;

function PageComponent({ children, onSearch, error, loading, centeredLayout }: PageComponentProps) {
  const [search] = useSearch();

  return (
    <div className={`page page--${(search || !centeredLayout) ? 'normal' : 'centered'}`}>
      <header className='page-header'>
        <Link className='page-logo' role='img' to='/'>
          <span>Channel</span>
          <img src='/logo.svg' alt='*' />
        </Link>
        <div className='page-search'>
          <SearchInput
            autoFocus={centeredLayout}
            value={search}
            onChange={value => onSearch(value)}
            placeholder='Movie or serie title...'
            aria-label='Page a movie or a serie'
            name='search'
          />
        </div>
      </header>
      {loading && <p>Loading...</p>}
      {error && <p role='alert'>Page not found</p>}
      {!loading && !error && children}
    </div>
  );
}

export const Page = memo(PageComponent);
