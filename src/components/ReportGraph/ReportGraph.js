import s from './ReportGraph.module.css';
function ReportGraph({ data, category }) {
  console.log(data);
  const newData = data[category];
  // delete newData['total'];
  const value = Object.values(newData).slice(1);
  console.log(value);
  const keys = Object.keys(newData).slice(1);
  console.log(keys);
  return (
    <div className={s.wrap}>
      <div className={s.container}></div>
    </div>
  );
}

export default ReportGraph;
