import StorageUsageChart from '@/components/StorageUsageChart';
import TokenBalanceCard from '@/components/TokenBalanceCard';
import PeerListTable from '@/components/PeerListTable';
import UploadDownloadQueue from '@/components/UploadDownloadQueue';
import SyncStatus from '@/components/SyncStatus';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 grid gap-6 grid-cols-1 md:grid-cols-2">
      <SyncStatus online={true} />
      <TokenBalanceCard balance={125} />
      <StorageUsageChart />
      <UploadDownloadQueue />
      <PeerListTable />
    </div>
  );
}
