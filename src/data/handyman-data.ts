
import { Bug, Snowflake, Leaf, Hammer, Droplets, Paintbrush, Wrench, ShieldCheck, Star } from 'lucide-react';

export const BUSINESS_INFO = {
  name: "Norwood Home Solutions",
  tagline: "Norwood Home Solutions",
  phone: "708-359-9797",
  email: "NorwoodHomeSolutionsLLC@gmail.com",
  location: "Park Ridge, IL",
  experience: "3+ Years Experience",
  licensed: "License and Insurance coming soon",
  yearEstablished: 2023
};

export const SERVICES = [
  {
    id: "pest",
    title: "Pest Control",
    description: "Safe and effective removal of common household pests and insects.",
    icon: Bug,
    imageId: "service-pest"
  },
  {
    id: "snow",
    title: "Snow Removal",
    description: "Reliable shoveling and ice removal for driveways and walkways.",
    icon: Snowflake,
    imageId: "service-snow"
  },
  {
    id: "lawn",
    title: "Lawn Care",
    description: "Professional mowing, edging, and landscaping to keep your yard beautiful.",
    icon: Leaf,
    imageId: "service-lawn"
  },
  {
    id: "repair",
    title: "Home Repairs",
    description: "Expert fixing of drywall, doors, floors, and general home maintenance.",
    icon: Hammer,
    imageId: "service-repair"
  },
  {
    id: "gutter",
    title: "Gutter Cleaning",
    description: "Thorough removal of debris to ensure proper drainage and prevent leaks.",
    icon: ShieldCheck,
    imageId: "service-gutter"
  },
  {
    id: "washing",
    title: "Power Washing",
    description: "Restoring the look of your siding, deck, or driveway with deep cleaning.",
    icon: Droplets,
    imageId: "service-washing"
  },
  {
    id: "handyman",
    title: "General Handyman",
    description: "Drywall, painting, furniture assembly, and small carpentry projects.",
    icon: Paintbrush,
    imageId: "service-repair"
  },
  {
    id: "carpentry",
    title: "Small Carpentry",
    description: "Custom shelving, trim work, and minor structural improvements.",
    icon: Wrench,
    imageId: "gallery-2"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Johnson",
    city: "Metropolis",
    quote: "Handyman Hero saved the day when our gutters were overflowing. Quick, professional, and very reasonably priced.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    city: "River Heights",
    quote: "I've been using their snow removal service all winter. They are always there before I even wake up. Highly recommend!",
    rating: 5
  },
  {
    id: 3,
    name: "Jessica Miller",
    city: "Metropolis",
    quote: "The drywall repair in our living room is seamless. You can't even tell there was a hole. Excellent work.",
    rating: 5
  },
  {
    id: 4,
    name: "David Wilson",
    city: "Oak Creek",
    quote: "Professional pest control that actually works. We haven't seen a single ant since they visited last month.",
    rating: 4
  }
];

export const GALLERY_ITEMS = [
  { id: 1, imageId: "gallery-1", title: "Kitchen Remodel" },
  { id: 2, imageId: "gallery-2", title: "Deck Refinishing" },
  { id: 3, imageId: "gallery-3", title: "Interior Painting" },
  { id: 4, imageId: "gallery-4", title: "Garden Setup" },
  { id: 5, imageId: "gallery-5", title: "Floor Tiling" },
  { id: 6, imageId: "gallery-6", title: "Siding Cleaning" }
];
