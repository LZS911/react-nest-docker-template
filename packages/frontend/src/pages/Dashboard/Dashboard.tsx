import UniqueVisitorPanel from './UniqueVisitorPanel';
import DataSummaryPanel from './DataSummaryPanel';
import IncomeOverview from './IncomeOverview/IncomeOverview';

const Dashboard: React.FC = () => {
  const z = 1;
  const b = 2;
  const c= z + b;
  return (
    <>
      <DataSummaryPanel />
      <>{c}</>
      <div className="flex flex-wrap justify-between">
        <UniqueVisitorPanel />
        <IncomeOverview />
      </div>
    </>
  );
};

export default Dashboard;
