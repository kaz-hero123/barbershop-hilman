export interface Service {
  id: string;
  name: string;
  duration: string;
  price: string;
  description: string;
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  image: string;
  specialty: string;
}

export interface Testimonial {
  id: string;
  type: "long-form" | "metric" | "micro";
  name: string;
  context: string;
  content: string;
  metric?: string;
}

export interface BusinessInfo {
  name: string;
  address: string;
  hours: string;
  phone: string;
  whatsappLink: string;
  completedRituals: string;
}
