import { getUser } from './get-user';
import { getUserLanguage } from './get-language';
import { getUserRepositories } from './get-repositories';

import { 
	User, 
	Repository,
	LanguageUsage,
} from './types';

export {
  getUser,
  getUserLanguage,
  getUserRepositories
}

export type { 
	User, 
	Repository,
	LanguageUsage,
};
