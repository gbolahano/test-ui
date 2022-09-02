import {
  CloudArrowDownIcon,
  ArrowSmallDownIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";
import { Badge, Button } from "../../ui";

import { formatMoney } from "../../utils/money";
import { Invoice, tableData } from "../../utils/tableData";


const renderUsers = ({ users }: Pick<Invoice, "users">) => {
  if (users.length > 5) {
    let copyUsers = [...users];
    let visibleUsers = copyUsers.slice(0, 5);

    return (
      <div className="flex flex-shrink-0 -space-x-2">
        {visibleUsers.map((user) => {
          return (
            <>
              <img
                src={user.imageUrl}
                className="h-8 w-8 rounded-full border-white border-2"
                alt="profile"
              />
            </>
          );
        })}
        <div className="h-8 w-8 text-gray-600 text-base bg-gray-200 border-2 border-white flex justify-center items-center font-medium rounded-full">
          +{users.length - visibleUsers.length}
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-shrink-0 -space-x-2">
      {users.map((user) => {
        return (
          <>
            <img
              src={user.imageUrl}
              className="h-8 w-8 rounded-full border-white border-2"
              alt="profile"
            />
          </>
        );
      })}
    </div>
  );
};

const BillingTable = () => {
  return (
    <div className="mt-5 pb-10 space-y-4">
      <div className="flex flex-col justify-between items-start md:flex-row">
        <h3 className="text-lg text-gray-700 font-semibold mb-2 md:mb-0">
          Billing History
        </h3>
        <Button IconBefore={CloudArrowDownIcon} variant="white" size="xs">
          Download all
        </Button>
      </div>

      <div>
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 pb-3 lg:pb-0">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 bg-gray-100">
              <tr>
                <th className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-purple-600 bg-gray-100 rounded border-purple-300 focus:ring-purple-500 focus:ring-2"
                    />
                    <label htmlFor="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th className="py-3 px-6 md:w-1/3 text-gray-500">
                  <div className="flex items-center space-x-1">
                    <span>Invoice</span>
                    <ArrowSmallDownIcon className="h-4 w-4" />
                  </div>
                </th>
                <th className="py-3 px-6 text-gray-500">Amount</th>
                <th className="py-3 px-6 text-gray-500">Date</th>
                <th className="py-3 px-6 text-gray-500">Status</th>
                <th className="py-3 px-6 text-gray-500 whitespace-nowrap pr-32">
                  Users on plan
                </th>
                <th className="py-3 px-6"></th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item) => {
                return (
                  <tr className="bg-white border-b hover:bg-gray-50">
                    <td className="p-4 w-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-3"
                          type="checkbox"
                          className="w-4 h-4 text-purple-600 bg-gray-100 rounded border-purple-300 focus:ring-purple-500 focus:ring-2"
                        />
                        <label
                          htmlFor="checkbox-table-search-3"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-700 whitespace-nowrap"
                    >
                      {item.invoice}
                    </th>
                    <td className="py-4 px-6">
                      {formatMoney("usd", item.amount)}
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">{item.date}</td>
                    <td className="py-4 px-6">
                      <Badge IconBefore={CheckIcon} variant="success" size="sm">
                        {item.status}
                      </Badge>
                    </td>
                    <td className="py-4 px-6">
                      {renderUsers({ users: item.users })}
                    </td>
                    <td className="py-4 px-8">
                      <CloudArrowDownIcon className="h-6 w-6 cursor-pointer" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default BillingTable;
