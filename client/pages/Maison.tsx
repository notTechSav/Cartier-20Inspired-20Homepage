import DynamicContent from '@/components/DynamicContent';

const Maison = () => {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-white px-6 py-24 text-center">
      <h1 className="text-4xl font-light tracking-[0.35em] uppercase text-gray-900">
        Maison
      </h1>
      
      {/* AI-Generated Content Section */}
      <div className="mt-8 w-full max-w-4xl">
        <DynamicContent 
          page="maison"
          brandVoice="Katherine Taylor brand voice"
          className="text-left"
        />
      </div>
      
      {/* Fallback static content */}
      <div className="mt-8 max-w-2xl text-base font-light leading-loose text-gray-600">
        <p>
          Discover the stories, craftsmanship, and heritage behind our maison.
          Explore curated collections, design inspirations, and exclusive
          experiences crafted for modern connoisseurs.
        </p>
      </div>
    </div>
  );
};

export default Maison;
