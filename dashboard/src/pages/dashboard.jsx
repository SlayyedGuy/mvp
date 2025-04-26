import StorageTable from '../components/StorageTable';
import UploadsTable from '../components/UploadsTable';
import TokenBalanceCard from '../components/TokenBalanceCard';
import PeerStatusBar from '../components/PeerStatusBar';
import ActionButtons from '../components/ActionButtons';

export default function Dashboard() {
    return (
        <div className="p-6">
            <div className="grid grid-cols-3 gap-4">
                <TokenBalanceCard />
                <PeerStatusBar />
            </div>
            <div className="mt-6">
                <ActionButtons />
            </div>
            <div className="mt-6">
                <StorageTable />
                <UploadsTable />
            </div>
        </div>
    );
}
