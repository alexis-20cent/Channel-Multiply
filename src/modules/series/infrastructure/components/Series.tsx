import { Serie } from '../../domain/Serie';
import { memo } from 'react';
import { Contents } from '@/modules/contents/infrastructure/components/Content';

export type SeriesProps = {
  series: Serie[];
};

function SeriesComponent({ series }: SeriesProps) {
  return (
    <Contents type='Serie' items={series} />
  );
}

export const Series = memo(SeriesComponent);
