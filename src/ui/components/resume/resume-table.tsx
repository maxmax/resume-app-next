import moment from 'moment';
import { getUserRepositories, Repository } from '@/lib/resume';

export default async function ResumeTable({
  username,
  query,
  currentPage,
  currentPerPage,
}: {
  username: string;
  query: string;
  currentPage: number;
  currentPerPage: number;
}) {

  const repos: Repository[] = await getUserRepositories(
    username, 
    query, 
    currentPage, 
    currentPerPage
  );

  return (
    <div className="table-wrapper pt-6">
      <h2 className="text-xl font-bold mb-4 text-center">Repositories</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="rounded-lg text-left text-sm font-normal">
            <tr>
              <th scope="col" className="px-4 py-5 font-medium">
                Name
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                Updated
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                Language
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {repos?.map(({ id, updated_at, language, full_name }) => (
              <tr
                key={id}
                className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
              >
                <td className="whitespace-nowrap px-3 py-3">
                  {full_name}
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  {moment(updated_at).format('DD-MMM-YYYY')}
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  {language || 'Unknown'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
