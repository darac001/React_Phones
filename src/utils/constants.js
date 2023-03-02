import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
import services1 from '../assets/services-1.svg'
import services2 from '../assets/services-2.svg'
import services3 from '../assets/services-3.svg'
import services4 from '../assets/services-4.svg'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: services1,
    title: 'buy',
    text:
      'Check out our wide variety of Certified Pre-Owned phones that work like new and come with an industry-leading 1-year warranty.',
  },
  {
    id: 2,
    icon: services2,
    title: 'repair',
    text:
      'All of our cell phone and tablet repairs are performed by certified, expert technicians with premium-quality-parts and most are backed by a lifetime warranty and done in an hour.',
  },
  {
    id: 3,
    icon: services3,
    title: 'connect',
    text:
      'We offer a full range of rate plans from leading Canadian wireless carriers.',
  },
  {
    id: 4,
    icon: services4,
    title: 'trade-in',
    text:
      'When it’s time to purchase a new device, sell us your old one. We will buy most makes and models for top dollar.',
  },
]

export const products_url = '/.netlify/functions/products';

export const single_product_url = `/.netlify/functions/single-product?id=`;
