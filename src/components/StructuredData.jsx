import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FULL_MENU_DATA } from '../assets/MenuData';

// Review data for structured data (matching ReviewsSection)
const reviewsData = [
  {
    author: 'Dan Dan Noodle Devotee',
    reviewBody: "Absolutely love WalkNoodles! Their Spicy Dan Dan noodles are a personal favorite. The broth is rich, the noodles are perfectly cooked, and the spice level is just right. A must-try for any noodle enthusiast in Indrapuram!",
    ratingValue: 5,
    bestRating: 5
  },
  {
    author: 'Butter Chicken Noodle Fan',
    reviewBody: "Such a gem for Asian food lovers! We were out with our little one looking for a good Chinese restaurant when we stumbled upon Walk Noodles — what a pleasant surprise! Cozy place with authentic flavors.",
    ratingValue: 5,
    bestRating: 5
  },
  {
    author: 'Ramen Rendezvous Regular',
    reviewBody: "Tried WalkNoodles last week and I'm already a regular. The staff are incredibly friendly and the service is quick. Their vegetarian spring rolls are out of this world!",
    ratingValue: 5,
    bestRating: 5
  },
  {
    author: 'Small Plates Specialist',
    reviewBody: "WalkNoodles is our go-to spot for quick, delicious meals. Great lunch specials and cozy ambiance — perfect for a family dinner or friends outing!",
    ratingValue: 5,
    bestRating: 5
  }
];

const StructuredData = ({ type = 'home' }) => {
  const location = useLocation();
  const baseUrl = 'https://www.walknoodles.com';

  useEffect(() => {
    // Remove existing structured data script
    const existingScript = document.getElementById('structured-data');
    if (existingScript) {
      existingScript.remove();
    }

    let structuredData = {};

    // LocalBusiness schema (nested within Restaurant)
    const localBusinessSchema = {
      '@type': 'LocalBusiness',
      name: 'Walk Noodles',
      image: `${baseUrl}/logo-big.png`,
      '@id': `${baseUrl}#localbusiness`,
      url: baseUrl,
      telephone: '+91-XXXXXXXXXX', // Update with actual phone number
      priceRange: '₹₹',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Shop No.5, GC, Grand Street, Vaibhav Khand',
        addressLocality: 'Indirapuram',
        addressRegion: 'Uttar Pradesh',
        postalCode: '201014',
        addressCountry: 'IN'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '28.6478', // Update with actual coordinates
        longitude: '77.3714' // Update with actual coordinates
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '11:00',
          closes: '22:00'
        }
      ],
      sameAs: [
        'https://www.instagram.com/walknoodles/',
        // Add Google Maps link when available
        // 'https://maps.google.com/...'
      ]
    };

    // Review schemas
    const reviewSchemas = reviewsData.map(review => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.author
      },
      reviewBody: review.reviewBody,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.ratingValue,
        bestRating: review.bestRating
      }
    }));

    // Base Restaurant schema with nested LocalBusiness
    const restaurantSchema = {
      '@context': 'https://schema.org',
      '@type': 'Restaurant',
      name: 'Walk Noodles',
      image: `${baseUrl}/logo-big.png`,
      '@id': `${baseUrl}#restaurant`,
      url: baseUrl,
      telephone: '+91-XXXXXXXXXX', // Update with actual phone number
      priceRange: '₹₹',
      servesCuisine: ['Asian', 'Chinese', 'Korean', 'Thai', 'Japanese', 'Indian Fusion'],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Shop No.5, GC, Grand Street, Vaibhav Khand',
        addressLocality: 'Indirapuram',
        addressRegion: 'Uttar Pradesh',
        postalCode: '201014',
        addressCountry: 'IN'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '28.6478', // Update with actual coordinates
        longitude: '77.3714' // Update with actual coordinates
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '11:00',
          closes: '22:00'
        }
      ],
      sameAs: [
        'https://www.instagram.com/walknoodles/'
      ],
      // Aggregate rating from reviews
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        reviewCount: reviewsData.length.toString(),
        bestRating: '5',
        worstRating: '1'
      },
      // Include reviews
      review: reviewSchemas
    };

    if (type === 'home') {
      structuredData = {
        '@context': 'https://schema.org',
        '@graph': [
          restaurantSchema,
          localBusinessSchema,
          {
            '@type': 'Organization',
            name: 'Walk Noodles',
            url: baseUrl,
            logo: `${baseUrl}/logo-big.png`,
            sameAs: ['https://www.instagram.com/walknoodles/']
          },
          ...reviewSchemas
        ]
      };
    } else if (type === 'menu') {
      // Create menu items schema
      const menuItems = [];
      
      Object.keys(FULL_MENU_DATA).forEach(categoryKey => {
        const category = FULL_MENU_DATA[categoryKey];
        category.items.forEach(item => {
          const price = item.price || item.price_veg || item.price_nonveg || '0';
          const priceCurrency = 'INR';
          
          menuItems.push({
            '@type': 'MenuItem',
            name: item.name,
            description: item.description,
            image: `${baseUrl}${item.image}`,
            offers: {
              '@type': 'Offer',
              price: price,
              priceCurrency: priceCurrency
            },
            ...(item.type === 'veg' && { suitableForDiet: 'https://schema.org/VegetarianDiet' })
          });
        });
      });

      structuredData = {
        '@context': 'https://schema.org',
        '@graph': [
          restaurantSchema,
          localBusinessSchema,
          {
            '@type': 'Menu',
            name: 'Walk Noodles Menu',
            hasMenuSection: Object.keys(FULL_MENU_DATA).map(categoryKey => ({
              '@type': 'MenuSection',
              name: FULL_MENU_DATA[categoryKey].name,
              hasMenuItem: FULL_MENU_DATA[categoryKey].items.map(item => ({
                '@type': 'MenuItem',
                name: item.name,
                description: item.description,
                image: `${baseUrl}${item.image}`,
                offers: {
                  '@type': 'Offer',
                  price: item.price || item.price_veg || item.price_nonveg || '0',
                  priceCurrency: 'INR'
                }
              }))
            }))
          }
        ]
      };
    } else if (type === 'about') {
      structuredData = {
        '@context': 'https://schema.org',
        '@graph': [
          restaurantSchema,
          localBusinessSchema,
          {
            '@type': 'AboutPage',
            name: 'About Walk Noodles',
            description: 'Learn about Walk Noodles - where taste meets health. Authentic Asian flavors made with wholesome ingredients.',
            url: `${baseUrl}/about`
          }
        ]
      };
    } else if (type === 'contact') {
      structuredData = {
        '@context': 'https://schema.org',
        '@graph': [
          restaurantSchema,
          localBusinessSchema,
          {
            '@type': 'ContactPage',
            name: 'Contact Walk Noodles',
            description: 'Get in touch with Walk Noodles. Visit us in Indirapuram or reach out via email or Instagram.',
            url: `${baseUrl}/contact`
          }
        ]
      };
    }

    // Inject structured data
    const script = document.createElement('script');
    script.id = 'structured-data';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('structured-data');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [type, location.pathname]);

  return null;
};

export default StructuredData;

