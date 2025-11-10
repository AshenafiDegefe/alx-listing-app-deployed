import { PropertyProps } from '@/interfaces/index';
import { Bed, ShowerHead, Users, Star, Heart } from 'lucide-react';

const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const discountPercentage = property.discount ? parseInt(property.discount) : 0;
  const originalPrice = property.price;
  const discountedPrice = discountPercentage > 0
    ? originalPrice * (1 - discountPercentage / 100)
    : originalPrice;

  const priceToDisplay = discountedPrice.toFixed(0);

  return (
    <div 
      key={property.name} 
      className="bg-white rounded-xl overflow-hidden transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-1 group"
    >
      {/* Property Image and Badges */}
      <div className="relative w-full h-56">
        <img 
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
          onError={(e) => {
            e.currentTarget.onerror = null; 
            e.currentTarget.src = `https://placehold.co/600x400/CCCCCC/333333?text=${property.name.replace(/\s/g, '+')}`
          }}
        />
        
        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            {discountPercentage}% OFF
          </div>
        )}

        {/* Wishlist Button */}
        <button className="absolute top-3 right-3 p-2 bg-white rounded-full text-gray-400 shadow-md hover:scale-110 transition hover:text-red-500">
          <Heart size={20} fill="currentColor"/>
        </button>
      </div>

      {/* Property Details */}
      <div className="p-4">
        {/* Title and Rating */}
        <div className="flex justify-between items-start mb-2">
          <div>
            <h4 className="font-semibold text-xl text-gray-900 truncate">{property.name}</h4>
            <p className="text-sm text-gray-500 mt-0.5">{property.address.city}, {property.address.country}</p>
          </div>
          <div className="flex items-center space-x-1 bg-yellow-500 text-white px-2 py-0.5 rounded-full text-sm font-bold ml-4 flex-shrink-0">
            <Star size={14} fill="currentColor"/>
            <span>{property.rating.toFixed(2)}</span>
          </div>
        </div>

        {/* Offers/Amenities */}
        <div className="flex items-center space-x-4 text-sm text-gray-600 mt-3 border-t pt-3">
          <div className="flex items-center space-x-1">
            <Bed size={16} className="text-blue-500"/>
            <span>{property.offers.bed} Beds</span>
          </div>
          <div className="flex items-center space-x-1">
            <ShowerHead size={16} className="text-blue-500"/>
            <span>{property.offers.shower} Baths</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users size={16} className="text-blue-500"/>
            <span>{property.offers.occupants} Guests</span>
          </div>
        </div>

        {/* Price */}
        <div className="mt-3">
          {discountPercentage > 0 && (
            <p className="text-sm text-gray-400 line-through">
              ${originalPrice}
            </p>
          )}
          <p className="text-2xl font-extrabold text-blue-600 flex items-center">
            ${priceToDisplay}
            <span className="text-base font-normal text-gray-500 ml-1"> / night</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
