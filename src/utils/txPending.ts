import { dag4 } from '@stardust-collective/dag4';

export const checkPendingTx = (tx: any): boolean => {
  const memPool = window.localStorage.getItem('dag4-network-main-mempool');
  if (!memPool) return true;
  const pendingTxs: any[] = JSON.parse(memPool);
  if (
    pendingTxs.length &&
    pendingTxs.filter((pTx: any) => pTx.hash === tx.hash).length
  )
    return false;
  return true;
};

export const addPendingTx = (tx: any) => {
  if (checkPendingTx(tx)) {
    dag4.monitor.addToMemPoolMonitor(tx);
  }
};
