import { PlusIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

import { CARD_ICONS, cardData } from "../../utils/cardData";

const CardDetails = () => {
  const [selected, setSelected] = useState(cardData[0]);

  return (
    <div className="">
      <div className="py-5 border-b border-gray-200">
        <h3 className="mb-1 text-xl text-gray-700 font-semibold">
          Payment Method
        </h3>
        <p className="text-sm text-gray-700">
          Update your billing details and address.
        </p>
      </div>
      <div className="py-4 border-b md:flex">
        <div className="hidden md:block border-gray-200 mb-4 md:w-1/3">
          <h4 className="-mb-1 text-base text-gray-700 font-semibold">
            Contact email
          </h4>
          <p className="text-sm text-gray-700">
            where should invoices be sent?
          </p>
        </div>
        <div className="md:w-2/3">
          <div className="md:hidden border-gray-200 mb-4">
            <h4 className="-mb-1 text-base text-gray-700 font-semibold">
              Contact email
            </h4>
            <p className="text-sm text-gray-700">
              where should invoices be sent?
            </p>
          </div>
          <div className="flex items-start mb-4">
            <input
              id="card-option-1"
              type="radio"
              name="cards"
              value="default"
              className="h-4 w-4 border-gray-200 focus:ring-2 mt-1 focus:ring-purple-700 text-purple-700"
              aria-labelledby="card-option-1"
              aria-describedby="card-option-1"
            />
            <div className="flex flex-col">
              <label
                htmlFor="card-option-1"
                className="text-sm font-medium text-gray-700 ml-2 block cursor-pointer"
              >
                Send to my account email
              </label>
              <span className="ml-2 text-sm text-gray-500">
                olivia@untitledui.com
              </span>
            </div>
          </div>
          <div className="flex items-start mb-4">
            <input
              id="card-option-2"
              type="radio"
              name="cards"
              value="new"
              className="h-4 w-4 border-gray-200 focus:ring-2 mt-1 focus:ring-purple-700 text-purple-700"
              aria-labelledby="card-option-2"
              aria-describedby="card-option-2"
            />
            <div className="flex flex-col w-full">
              <label
                htmlFor="card-option-2"
                className="text-sm font-medium text-gray-700 ml-2 block cursor-pointer"
              >
                Send to an alternative account
              </label>
              <div className="relative ml-2 mt-2 sm:w-2/3">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <EnvelopeIcon className="w-5 h-5 text-gray-600" />
                </div>
                <input
                  type="input"
                  id="default-search"
                  className="block p-2 pl-10 w-full text-sm text-gray-800 bg-white border border-gray-200 rounded-lg shadow focus:ring-indigo-600 focus:outline-none focus:ring-2"
                  placeholder="billing@untitledui.com"
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-4 border-b md:flex">
        <div className="hidden md:block border-gray-200 mb-4 md:w-1/3">
          <h4 className="-mb-1 text-base text-gray-700 font-semibold">
            Card Details
          </h4>
          <p className="text-sm text-gray-700">Select default payment method</p>
        </div>
        <div className="md:w-2/3">
          <div className="md:hidden border-gray-200 mb-4">
            <h4 className="-mb-1 text-base text-gray-700 font-semibold">
              Contact email
            </h4>
            <p className="text-sm text-gray-700">
              where should invoices be sent?
            </p>
          </div>
          <div className="w-full">
            <RadioGroup value={selected} onChange={setSelected}>
              <RadioGroup.Label className="sr-only">
                Card Details
              </RadioGroup.Label>
              <div className="space-y-4">
                {cardData.map((card) => (
                  <RadioGroup.Option
                    key={card.name}
                    value={card}
                    className={({ active, checked }) =>
                      `${active ? "" : ""}
                  ${
                    checked
                      ? "bg-purple-50 border border-purple-500 text-gray-700"
                      : "bg-white"
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow focus:outline-none`
                    }
                  >
                    {({ active, checked }) => (
                      <>
                        <div className="flex w-full items-start justify-between">
                          <div className="flex items-start space-x-3">
                            <img
                              src={CARD_ICONS[card.provider]}
                              className="h-6 w-10 mt-2"
                              alt="card"
                            />
                            <div className="">
                              <RadioGroup.Label
                                as="p"
                                className={`font-medium  ${
                                  checked ? "text-purple-700" : "text-gray-800"
                                }`}
                              >
                                {card.name}
                              </RadioGroup.Label>
                              <RadioGroup.Description
                                as="div"
                                className={` ${
                                  checked ? "text-purple-500" : "text-gray-500"
                                }`}
                              >
                                <div className="flex space-x-1">
                                  <span>Expiry</span>
                                  <div>{card.expiry}</div>
                                </div>

                                <div className="flex space-x-1 mt-2 text-base items-center">
                                  <span
                                    className={` ${
                                      checked
                                        ? "text-purple-500 font-medium"
                                        : "text-gray-500 font-medium"
                                    }`}
                                  >
                                    Set as default
                                  </span>
                                  <button className="text-purple-700 font-medium">
                                    Edit
                                  </button>
                                </div>
                              </RadioGroup.Description>
                            </div>
                          </div>
                          {checked ? (
                            <div className="shrink-0">
                              <CheckCircleIcon className="h-6 w-6 text-purple-700" />
                            </div>
                          ) : (
                            <div className="h-5 w-5 border-2 rounded-full bg-white border-purple-600"></div>
                          )}
                        </div>
                      </>
                    )}
                  </RadioGroup.Option>
                ))}
              </div>
            </RadioGroup>
          </div>
          <button className="flex items-center space-x-2 text-gray-500 mt-4">
            <PlusIcon className="h-5 w-5" />
            <p className="font-medium">Add new payment method</p>
          </button>
        </div>
      </div>
    </div>
  );
};
export default CardDetails;
