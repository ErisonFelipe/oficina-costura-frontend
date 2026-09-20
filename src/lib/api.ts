const API_BASE = '/api';

interface ApiError {
  error: string;
  details?: Record<string, string[]>;
}

async function handleResponse<T>(response: Response): Promise<T> {
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const err = data as ApiError;
    throw new Error(err.error || `Erro ${response.status}`);
  }

  return data as T;
}

export interface QuotePayload {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}

export interface Quote extends QuotePayload {
  id: string;
  status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED';
  notes: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  description: string | null;
  category: string;
  filename: string;
  featured: boolean;
  order: number;
  active: boolean;
  createdAt: string;
}

export const api = {
  // ===== QUOTES =====
  async createQuote(payload: QuotePayload): Promise<{ message: string; data: Quote }> {
    const response = await fetch(`${API_BASE}/quotes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    return handleResponse(response);
  },

  async listQuotes(): Promise<{ data: Quote[] }> {
    const response = await fetch(`${API_BASE}/quotes`);
    return handleResponse(response);
  },

  // ===== GALLERY =====
  async listGallery(params?: {
    category?: string;
    featured?: boolean;
    active?: boolean;
  }): Promise<{ data: GalleryImage[] }> {
    const search = new URLSearchParams();
    if (params?.category) search.set('category', params.category);
    if (params?.featured !== undefined) search.set('featured', String(params.featured));
    if (params?.active !== undefined) search.set('active', String(params.active));

    const qs = search.toString();
    const url = `${API_BASE}/gallery${qs ? `?${qs}` : ''}`;

    const response = await fetch(url);
    return handleResponse(response);
  },

  async listCategories(): Promise<{ data: string[] }> {
    const response = await fetch(`${API_BASE}/gallery/categories`);
    return handleResponse(response);
  },
};

// Helper para URL completa da imagem
export const getImageUrl = (filename: string): string => {
  return `/uploads/gallery/${filename}`;
};
