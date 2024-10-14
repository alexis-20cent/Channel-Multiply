import { List } from '@/components/shared/List';
import { ListItem } from '@/components/shared/ListItem';
import { Section } from '@/components/shared/Section';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Content } from '../../domain/Content';

export type ContentsProps = {
  type: 'Movie' | 'Serie';
  items: Content[];
};

function ContentsComponent({ type, items }: ContentsProps) {
  const loweredType = type.toLowerCase();
  return (
    <Section title={type}>
      {items.length > 0
        ? (
          <List scrollable>
            {items.map(item => (
              <ListItem
                as={Link}
                to={'/' + loweredType + '/' + item.id}
                key={item.id}
                title={item.title}
                img={item.image ? `https://image.tmdb.org/t/p/w500/${item.image}` : null}
              />
            ))}
          </List>
          )
        : (
          <p>No {loweredType}s found.</p>
          )}
    </Section>
  );
}

export const Contents = memo(ContentsComponent);
