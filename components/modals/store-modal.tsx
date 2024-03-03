'use client';

import { Modal } from '@/components/ui/modal';
import { useStoreModal } from '@/hooks/use-store-modal';

export const StoreModal = () => {
  const storeModal = useStoreModal();

  return (
    <Modal
      isOpen={storeModal.isOpen}
      title='modal'
      description='test'
      onClose={storeModal.onClose}
    >
      store modal
    </Modal>
  );
};
