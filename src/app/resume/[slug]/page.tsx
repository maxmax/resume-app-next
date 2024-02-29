import { getUser, User } from '@/lib/resume';
import moment from 'moment';
import Image from '@/ui/components/media/image';
import ResumeTable from '@/ui/components/resume/resume-table';

export default async function ResumeDetail({ params, searchParams }: { 
  params: { slug: string },
  searchParams?: {
    query?: string;
    page?: string;
    perPage?: string;
  }; 
}) {

  const query = searchParams?.query || 'updated';
  const currentPage = Number(searchParams?.page) || 1;
  const currentPerPage = Number(searchParams?.perPage) || 10;

  const user: User = await getUser(params.slug);

  const memberSince = moment(user.created_at).format('DD-MMM-YYYY');
  const lastUpdated = moment(user.updated_at).format('DD-MMM-YYYY');

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">{user.name}</h1>
            <div className="flex justify-center items-center">
              <Image
                src={user.avatar_url}
                alt="Profile"
                className="h-30 w-25 object-cover object-center rounded-full"
                width={140}
                height={140}
                style={{objectFit: "cover"}}
              />
            </div>
            <p className="text-gray-700 mt-8">Last Updated: {lastUpdated}</p>
            <p className="text-blue-700 mt-2 mb-6">
              <a href={user.html_url} target='_blank'>{user.html_url}</a>
            </p>
            <div className="mb-8 mx-14">
              <h2 className="text-xl font-bold mb-2">Summary</h2>
              <p className="text-gray-700">
                A GitHub user since {memberSince}, {user.name} is a developer with {user.public_repos} public repositories and {user.followers} subscribers.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-2/3 border-b-2 border-gray-300 mb-4"></div>
          </div>
          <ResumeTable 
            username={params.slug}
            query={query}
            currentPage={currentPage}
            currentPerPage={currentPerPage}
          />
        </div>
      </div>
    </div>
  );
}