export interface SearchFilters {
  q?: string;
  type?: 'public' | 'private';
  state?: string;
  degree?: 'bachelor' | 'master' | 'phd';
  field?: string;
  tuition_max?: number;
  scholarship?: boolean;
  sort?: 'ranking' | 'tuition_asc' | 'tuition_desc' | 'name';
  page?: number;
  limit?: number;
}

export interface SearchResult<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
