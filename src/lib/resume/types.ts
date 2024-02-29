export interface User {
	login: string;
	name: string;
	public_repos: number;
	created_at: string;
	updated_at: string;
	followers: string;
	avatar_url: string;
	html_url?: string;
	blog?: string;
}

export interface Repository {
	id: number;
	name: string;
	full_name?: string;
	html_url: string;
	updated_at: string;
	languages_url: string;
	language?: string;
	created_at?: string;
	subscribers_count?: number;
	watchers_count?: number;
	open_issues_count?: number;
}

export interface LanguageUsage {
  [key: string]: number;
}