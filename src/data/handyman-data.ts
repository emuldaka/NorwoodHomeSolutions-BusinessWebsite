
import { Bug, Snowflake, Leaf, Hammer, Droplets, ShieldCheck, Flower} from 'lucide-react';

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
    id: "hives",
    title: "Bee & Wasp Removal",
    description: "Expert removal/extermination of wasp nests & relocation of bees.",
    icon: Bug,
    imageId: "service-hive"
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
    icon: Hammer,
    imageId: "service-repair"
  },
  {
    id: "gardening",
    title: "Gardening",
    description: "Small plant/tree removal, planting needs, and digging.",
    icon: Flower,
    imageId: "service-gardening"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Elis M",
    city: "Norridge",
    quote: "I called Nick when we noticed a wasp nest in one of our trees, he showed up and took care of it the same day. He has also assited with a rat issue in my garage.",
    rating: 5
  }
];

export const GALLERY_ITEMS = [
  { id: 1, imageId: "gallery-1", title: "Dirty Siding/Boards/Railing Before" },
  { id: 2, imageId: "gallery-2", title: "Siding/Boards/Railing After Washing Service" },
  { id: 3, imageId: "gallery-3", title: "Squirrel Removal and Crawl Space Enclosed" },
  { id: 4, imageId: "gallery-4", title: "Hole Below Stairs" },
  { id: 5, imageId: "gallery-5", title: "Hole and Area Dug Out" },
  { id: 6, imageId: "gallery-6", title: "Hole Enclosed" },
  { id: 7, imageId: "gallery-7", title: "Wasp Nest" },
  { id: 8, imageId: "gallery-8", title: "Wasp Nest" }
];
