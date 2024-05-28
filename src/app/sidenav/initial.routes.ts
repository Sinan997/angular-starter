import { NavRoute } from './model/nav-route';

export const initialRoutes: NavRoute[] = [
  {
    routeLink: 'first',
    icon: 'fa-solid fa-house-user',
    label: 'Dashboard',
  },
  {
    routeLink: 'second',
    icon: 'fa-regular fa-address-book',
    label: 'Business Management',
  },
  {
    routeLink: 'third',
    icon: 'fa-regular fa-address-book',
    label: 'Identity',
  },
  {
    routeLink: 'fourth',
    icon: 'fa-solid fa-book-open',
    label: 'Category',
    items: [
      {
        routeLink: 'fourth/asd',
        label: 'Sub Category',
      },
      {
        routeLink: 'fourth/qwe',
        label: 'Sub Category',
      },
    ],
  },
];
