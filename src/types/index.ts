export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  tag: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageColor: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  address: string;
  hours: string;
}
