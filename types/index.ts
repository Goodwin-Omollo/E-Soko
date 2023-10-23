export type Banner = {
  _type: 'banner';
  smallText: string;
  saleTime: string;
  _createdAt: string;
  _updatedAt: string;
  image: {
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
  };
  _rev: string;
  discount: string;
  midText: string;
  _id: string;
  desc: string;
  buttonText: string;
  product: string;
};

type ProductImage = {
  _key: string;
  asset: {
    _type: 'reference';
    _ref: string;
  };
};


export type ProductDetails = {
  image: ProductImage[];
  _createdAt: string;
  _rev: string;
  _type: 'product';
  _updatedAt: string;
  name: string;
  _id: string;
  slug: {
    current: string;
    _type:'slug';
  }
  price: number;
  details: string;
}