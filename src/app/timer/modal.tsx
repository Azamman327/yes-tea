'use client';

import {
  Button,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

import { useDisclosure } from '@chakra-ui/react';

import { useTimeStore } from './timeStore';

const EditModal: React.FC = () => {
  const timeStore = useTimeStore();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} className="w-full mt-5">
        edit time
      </Button>

      <div className="flex item-center">
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>타이머 시간 바꾸기</ModalHeader>

            <ModalCloseButton />

            <ModalBody className="flex flex-row">
              <span className="flex flex-row items-center pr-8 w-1/3">
                <Input name="minute" onChange={(e) => timeStore.updateMinutesState(Number(e.target.value))} size="sm" />
                분
              </span>
              <span className="flex flex-row items-center pr-8 w-1/3">
                <Input name="second" onChange={(e) => timeStore.updateSecondsState(Number(e.target.value))} size="sm" />
                초
              </span>
            </ModalBody>

            <ModalFooter>
              <Button variant="ghost" onClick={onClose}>
                닫기
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </>
  );
};

export default function Component() {
  return <EditModal />;
}
