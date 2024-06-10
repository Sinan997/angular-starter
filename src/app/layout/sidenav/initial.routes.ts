import { NavRoute } from './model/nav-route';

export const initialRoutes: NavRoute[] = [
  {
    routeLink: 'first',
    icon: 'fa-solid fa-house-user',
    label: 'localization.Dashboard',
  },
  {
    routeLink: 'second',
    icon: 'fa-regular fa-address-book',
    label: 'localization.Business',
  },
  {
    routeLink: 'fourth',
    icon: 'fa-solid fa-book-open',
    label: 'localization.Cat',
    items: [
      {
        routeLink: 'fourth/asd',
        label: 'localization.SubCat',
      },
      {
        routeLink: 'fourth/qwe',
        label: 'localization.SubCat',
      },
    ],
  },
  {
    routeLink: 'third',
    icon: 'fa-regular fa-address-book',
    label: 'localization.Identity',
  },
];
