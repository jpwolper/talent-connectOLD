export default function () {
  this.namespace = '/api';

  this.get('/contact-list', function () {
    return {
      data: [{
        type: 'contact-list',
        id: 'margaret-gonzalez',
        attributes: {
          fn: 'Margaret',
          ln: 'Gonzalez',
          p: '2139893898',
          email: 'margonzo@hotmail.com',
          image: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Michelle_Borromeo_Actor_Headshots_30.jpg'
        }
      }, {
        type: 'contact-list',
        id: 'gary-owens',
        attributes: {
          fn: 'Gary',
          ln: 'Owens',
          p: '2138739275',
          email: 'gowens1979@gmail.com',
          image: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Jamie_Marsh_Headshot.jpg'
        }
      }, {
        type: 'contact-list',
        id: 'melissa-morris',
        attributes: {
          fn: 'Melissa',
          ln: 'Morris',
          p: '2138398468',
          email: 'mmorris@yahoo.com',
          image: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Alissa_Moreno.jpg'
        }
      }/*,
      {
        type: 'rentals',
        id: 'grand-old-mansion',
        attributes: {
          title: 'Grand Old Mansion',
          owner: 'Veruca Salt',
          city: 'San Francisco',
          category: 'Estate',
          bedrooms: 15,
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
        }
      }, {
        type: 'rentals',
        id: 'urban-living',
        attributes: {
          title: 'Urban Living',
          owner: 'Mike Teavee',
          city: 'Seattle',
          category: 'Condo',
          bedrooms: 1,
          image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
        }
      }, {
        type: 'rentals',
        id: 'downtown-charm',
        attributes: {
          title: 'Downtown Charm',
          owner: 'Violet Beauregarde',
          city: 'Portland',
          category: 'Apartment',
          bedrooms: 3,
          image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'
        }
      } */]
    };
  });
}