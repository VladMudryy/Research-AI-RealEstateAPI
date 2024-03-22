export interface RealEstateData {
  propertyId: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  yearBuilt: number;
  propertyType: string;
  listingType: string;
}

export interface RealEstateTableProps {
  data: RealEstateData[];
}
