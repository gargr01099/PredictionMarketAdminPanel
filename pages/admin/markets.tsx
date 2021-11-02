import { Dialog, Transition } from "@headlessui/react";
import Head from "next/head";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { AdminMarketCard } from "../../components/AdminMarketCard";
import Navbar from "../../components/Navbar";

const Markets: React.FC = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center h-full">
        <ResolvePopup
          closeModal={closeModal}
          isOpen={isOpen}
          openModal={openModal}
        />
        <Head>
          <title>Polymarket</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <div className="w-full max-w-5xl m-auto">
          <Link href="/admin">
            <a
              type="button"
              className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
              onClick={() => {}}
            >
              Back
            </a>
          </Link>
        </div>

        <main className="w-full flex flex-row flex-wrap py-4 max-w-5xl pb-6">
          <div className="w-1/2 pr-2">
            <AdminMarketCard openModal={openModal} />
          </div>
          <div className="w-1/2 pl-2">
            <AdminMarketCard openModal={openModal} />
          </div>
        </main>
      </div>
    </>
  );
};

export const ResolvePopup = ({
  openModal,
  closeModal,
  isOpen,
}: {
  openModal: () => void;
  closeModal: () => void;
  isOpen: boolean;
}) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white border border-gray-300 shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 text-center"
                >
                  How would you like to Resolve?
                </Dialog.Title>

                <div className="mt-4 flex flex-row space-x-3 justify-center">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    YES
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    NO
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Markets;