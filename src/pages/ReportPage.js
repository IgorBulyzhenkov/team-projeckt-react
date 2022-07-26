import ReportList from 'components/ReportList/ReportList';

function ReportPage() {
  return (
    <div>
      <div>
        <div>
          Expenses:<span></span>
        </div>
        <div>
          Income:<span></span>
        </div>
      </div>

      <ReportList />
    </div>
  );
}

export default ReportPage;
