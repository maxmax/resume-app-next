import { getUserLanguage, Repository } from '@/lib/resume';
import PieChart from '@/ui/components/charts/pie-chart';
import { Suspense } from 'react';

export default async function UserLanguage({
  username
}: {
  username: string;
}) {

  const repos: Repository[] = await getUserLanguage(username);

	const languageCounts: { [lang: string]: number } = repos.reduce<{ [lang: string]: number }>((acc, repo) => {
		const lang = repo.language || 'Unknown';
		acc[lang] = (acc[lang] || 0) + 1;
		return acc;
	}, {});

  const languageCountsPercent = Object.entries(languageCounts).map(([lang, count]) => ({
    label: lang,
    value: Number(((count / repos.length) * 100).toFixed(2)),
  }));

  return (
    <div className="language-usage text-center mt-4 mb-4">
      <h2 className="text-xl font-bold mb-8">Languages Usage</h2>
      <div className="hidden md:block">
        <Suspense>
          <PieChart data={languageCountsPercent} />
        </Suspense>
      </div>
      <div className="language-usage-chips flex justify-center flex-wrap pt-6">
        {languageCountsPercent.map(({ label, value }) => (
          <div key={label} className="my-1 mx-1 inline-flex items-center bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 whitespace-normal w-auto">
            {`${label}: ${value}%`}
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <div className="w-2/3 border-b-2 border-gray-300 mt-8"></div>
      </div>
    </div>
  );
}
