import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({ 
  title, 
  description, 
  ogImage = '/logo-big.png',
  ogType = 'website',
  keywords = ''
}) => {
  const location = useLocation();
  const baseUrl = 'https://www.walknoodles.com';
  const currentUrl = `${baseUrl}${location.pathname}`;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    if (keywords) {
      updateMetaTag('keywords', keywords);
    }

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', `${baseUrl}${ogImage}`, true);
    updateMetaTag('og:url', currentUrl, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:site_name', 'Walk Noodles', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', `${baseUrl}${ogImage}`);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', currentUrl);
  }, [title, description, ogImage, ogType, keywords, currentUrl]);

  return null;
};

export default SEO;

