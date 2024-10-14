import { Serie } from '../../domain/Serie';
import { memo } from 'react';
import { Contents } from '@/modules/contents/infrastructure/components/Contents';

export type SeriesProps = {
  series: Serie[];
};

function SeriesComponent({ series }: SeriesProps) {
  return (
    <Contents type='Series' items={series} />
  );
}

export const Series = memo(SeriesComponent);
