import Skeleton from '@mui/material/Skeleton';
import s from './SkeletonReport.module.css';

export default function SkeletonReport() {
  return (
    <div>
      <div className={s.middlePart}>
        <div className={s.balance}>
          <Skeleton variant="rectangular" width={48} height={20} />
          <Skeleton
            variant="rectangular"
            width={125}
            height={44}
            className={s.balanceMargin}
            sx={{ borderRadius: '16px' }}
          />
          <Skeleton
            variant="rectangular"
            width={125}
            height={44}
            sx={{ borderRadius: '16px' }}
          />
        </div>
        <Skeleton variant="rectangular" width={84} height={24} />
      </div>
      <div className={s.main}>
        <div className={s.tabs}>
          <Skeleton
            variant="rectangular"
            width={158}
            height={53}
            className={s.balanceMargin}
            sx={{ borderRadius: '16px 16px 0 0', margin: '0' }}
          />
          <Skeleton
            variant="rectangular"
            width={158}
            height={53}
            className={s.balanceMargin}
            sx={{ borderRadius: '16px 16px 0 0', margin: '0' }}
          />
        </div>
        <Skeleton
          variant="rectangular"
          width={1098}
          height={579}
          sx={{ borderRadius: '0px 30px 30px 30px' }}
        />
      </div>
    </div>
  );
}
