import { ArrowDownOnSquareStackIcon } from "@heroicons/react/24/outline";

export default function InvoiceTable({ invoices }) {
  return (
    <div className="x-table rounded-t-xl rounded-b-none text-sm">
      <table>
        <thead className="whitespace-nowrap border-b border-neutral-200 text-neutral-900 font-semibold">
          <tr>
            <th className="text-start">Číslo faktury</th>
            <th className="text-start">Číslo objednávky</th>
            <th className="text-start">Cena celkem</th>
            <th className="text-end">Stažení</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.number} className="border-none">
              <td className="pb-4 sm:pb-6">{invoice.number}</td>
              <td className="">{invoice.invoiceNum}</td>
              <td className="">{invoice.amount}</td>
              <td className="text-end">
                <a
                  href="#"
                  className="x-link flex justify-end text-xs text-primary mx underline underline-transparent"
                  title=""
                >
                  <ArrowDownOnSquareStackIcon className="mr-1" />
                  Stáhnout
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
