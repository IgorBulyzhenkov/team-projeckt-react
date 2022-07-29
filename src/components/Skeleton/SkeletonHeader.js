import Skeleton from '@mui/material/Skeleton';
import s from './SkeletonHeader.module.css';

export default function SkeletonHeader() {
  return (
    <div>
      <div className={s.header}>
        <Skeleton variant="rectangular" width={90} height={31} />
        <div className={s.user}>
          <Skeleton variant="circular" width={32} height={32} />
          <Skeleton
            variant="rectangular"
            width={64}
            height={14}
            className={s.userMargin}
          />
          <Skeleton variant="rectangular" width={22} height={14} />
        </div>
      </div>
    </div>
  );
}
