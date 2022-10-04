import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from 'sanity-codegen';

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Coffee
 *
 *
 */
export interface Coffee extends SanityDocument {
  _type: 'coffee';

  /**
   * Coffee Name — `string`
   *
   * Name of the coffee
   */
  name: string;

  /**
   * URL (slug) — `slug`
   *
   * The slug provides a unique URL on the website for this item.  Choose "Generate" to change the default value from a number to a url based on the name of the item.
   */
  slug: { _type: 'slug'; current: string };

  /**
   * Stock — `number`
   *
   * Number of pounds in stock
   */
  stock: number;

  /**
   * Roast Level — `string`
   *
   * Roast Level of the Coffee
   */
  roastLevel?: 'light' | 'light-medium' | 'medium' | 'medium-dark' | 'dark';

  /**
   * Single Origin — `boolean`
   *
   * Is this Coffee Single Origin?
   */
  singleOrigin?: boolean;

  /**
   * Short Description — `string`
   *
   * A concise description of the coffee to display on the home page tile
   */
  description?: string;

  /**
   * Longer Description — `array`
   *
   * A longer, more detailed story about this roast to show on the specific page for this coffee
   */
  descriptionLong?: Array<SanityKeyed<SanityBlock>>;

  /**
   * Flavor Profile — `string`
   *
   * Flavor Profile of the coffee
   */
  flavorProfile?: string;

  /**
   * Region — `string`
   *
   * Region of the Coffee
   */
  region?: string;

  /**
   * Grade — `string`
   *
   * Grade of the Coffee
   */
  grade?: string;

  /**
   * Processing — `string`
   *
   * How the Coffee was Processed
   */
  process?: string;

  /**
   * Cultivar — `string`
   *
   * Cultivar
   */
  cultivar?: string;

  /**
   * Elevation — `string`
   *
   * Elevation
   */
  elevation?: string;

  /**
   * Roast Date — `date`
   *
   * Day the Coffee was Roasted
   */
  roastDate?: string;

  /**
   * Price — `number`
   *
   * Price of the coffee in cents
   */
  price: number;

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: 'image';
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

export interface SanityImageType {
  _type: 'image';
  asset: SanityReference<SanityImageAsset>;
  crop?: SanityImageCrop;
  hotspot?: SanityImageHotspot;
}

/**
 * Blog Posts
 *
 *
 */
export interface Post extends SanityDocument {
  _type: 'post';

  /**
   * Title — `string`
   *
   * Titles should be catchy, descriptive, and not too long
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   * A slug is used to set the URL for the post
   */
  slug?: { _type: 'slug'; current: string };

  /**
   * Published at — `datetime`
   *
   * This can be used to schedule post for publishing (can be a future date)
   */
  publishedAt?: string;

  /**
   * Main image — `mainImage`
   *
   *
   */
  mainImage?: MainImage;

  /**
   * Excerpt — `excerptPortableText`
   *
   * This text is used for a descriptive summary for links to the post, on Google, and when people share your post in social media.
   */
  excerpt?: ExcerptPortableText;

  /**
   * Body — `bodyPortableText`
   *
   *
   */
  body?: BodyPortableText;
}

/**
 * Events
 *
 *
 */
export interface Event extends SanityDocument {
  _type: 'event';

  /**
   * Title — `string`
   *
   * Descriptive Title, or Name of Event
   */
  title?: string;

  /**
   * Date of Event — `datetime`
   *
   *
   */
  date?: string;

  /**
   * Description of the Event — `bodyPortableText`
   *
   *
   */
  description?: BodyPortableText;

  /**
   * Event Main Image — `mainImage`
   *
   *
   */
  mainImage?: MainImage;

  /**
   * Location of the event — `string`
   *
   *
   */
  location?: string;

  /**
   * Address — `string`
   *
   *
   */
  addressLine1?: string;

  /**
   * Address Line 2 — `string`
   *
   *
   */
  addressLine2?: string;

  /**
   * City — `string`
   *
   *
   */
  city?: string;

  /**
   * State — `string`
   *
   *
   */
  state?: string;

  /**
   * Zip Code — `string`
   *
   *
   */
  zipCode?: string;
}

/**
 * Landing Page
 *
 *
 */
export interface LandingPage extends SanityDocument {
  _type: 'landingPage';

  /**
   * Page Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Main image (Optional) — `backgroundImage`
   *
   * An optional background image at of the top of the page
   */
  bgImage1?: BackgroundImage;
  imageUrl?: string;

  /**
   * Main Image Overlay Text (optional) — `bodyPortableText`
   *
   * Optional Text that will overlay the main landing page background image
   */
  overlayText1?: BodyPortableText[];

  /**
   * Transition Text Block 1 (optional) — `bodyPortableText`
   *
   * Optional Text that will separate the main image from the coffee listing section
   */
  transitionText1?: BodyPortableText;

  /**
   * Optional Heading for the coffee section — `string`
   *
   *
   */
  coffeeSectionHeading?: string;

  /**
   * Optional Text for the coffee section — `bodyPortableText`
   *
   *
   */
  coffeeText?: BodyPortableText;

  /**
   * Content for the bottom of the home page — `bodyPortableText`
   *
   * Optional Content at the bottom of the home page
   */
  closingContent?: BodyPortableText;
}

/**
 * settings
 *
 *
 */
export interface SiteSettings extends SanityDocument {
  _type: 'siteSettings';

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Background color for pages if an image is not used — `color`
   *
   *
   */
  backgroundColor?: Color;

  /**
   * Background Image for Pages — `backgroundImage`
   *
   *
   */
  backgroundImage?: BackgroundImage;

  /**
   * TEXT COLOR: Color of headings and introductory text (both optional) on each page — `color`
   *
   *
   */
  textColor?: Color;
}

/**
 * Coffee Page
 *
 *
 */
export interface CoffeePage extends SanityDocument {
  _type: 'coffeePage';

  /**
   * Page Name — `string`
   *
   *
   */
  pageName?: string;

  /**
   * Page Heading — `string`
   *
   * Optional
   */
  heading?: string;

  /**
   * Text at the top of the coffee page (optional) — `bodyPortableText`
   *
   *
   */
  topText?: BodyPortableText;
}

/**
 * Events Page
 *
 *
 */
export interface EventsPage extends SanityDocument {
  _type: 'eventsPage';

  /**
   * Page Name — `string`
   *
   *
   */
  pageName?: string;

  /**
   * Page Heading — `string`
   *
   * Optional
   */
  heading?: string;

  /**
   * Page Introductory Content — `bodyPortableText`
   *
   * Optional
   */
  text?: BodyPortableText;
}

/**
 * About Page
 *
 *
 */
export interface AboutPage extends SanityDocument {
  _type: 'aboutPage';

  /**
   * Page Name — `string`
   *
   *
   */
  pageName?: string;

  /**
   * Page Heading — `string`
   *
   * Optional
   */
  heading?: string;

  /**
   * Page Introductory Content — `bodyPortableText`
   *
   * Optional
   */
  text?: BodyPortableText;
}

/**
 * Contact Page
 *
 *
 */
export interface ContactPage extends SanityDocument {
  _type: 'contactPage';

  /**
   * Page Name — `string`
   *
   *
   */
  pageName?: string;

  /**
   * Optional Heading for the contact page — `string`
   *
   * (optional)
   */
  heading?: string;

  /**
   * Contact Page Content — `bodyPortableText`
   *
   *
   */
  text?: BodyPortableText;
}

/**
 * Order
 *
 *
 */
export interface Order extends SanityDocument {
  _type: 'order';

  /**
   * Shipped / Delivered / Picked Up — `boolean`
   *
   *
   */
  shipped?: boolean;

  /**
   *  Customer Name — `string`
   *
   *
   */
  customerName?: string;

  /**
   * Customer Email — `string`
   *
   *
   */
  customerEmail?: string;

  /**
   * Customer Phone Number — `string`
   *
   *
   */
  customerPhone?: string;

  /**
   * Order Items — `array`
   *
   * The Items in the Order
   */
  orderItems?: Array<SanityKeyed<CoffeeOrderItem>>;

  /**
   * Notes From the Customer — `string`
   *
   *
   */
  customerComments?: string;

  /**
   * Delivery Method — `string`
   *
   *
   */
  deliveryMethod?: 'Pickup' | 'Shipping';

  /**
   * Pickup Location — `string`
   *
   *
   */
  pickupLocation?: 'Daniels' | 'Edge';

  /**
   * Ship to: (Name / Org.) — `string`
   *
   *
   */
  shippingName?: string;

  /**
   * Shipping Address Line 1 — `string`
   *
   *
   */
  shippingAddressLine1?: string;

  /**
   * Shipping Address Line 2 — `string`
   *
   *
   */
  shippingAddressLine2?: string;

  /**
   * Shipping City — `string`
   *
   *
   */
  shippingCity?: string;

  /**
   * Shipping State — `string`
   *
   *
   */
  shippingState?: string;

  /**
   * Shipping Zip Code — `string`
   *
   *
   */
  shippingZip?: string;

  /**
   * Tracking Number — `string`
   *
   *
   */
  trackingNumber?: string;

  /**
   * Total — `number`
   *
   * Total Price of the Order
   */
  total?: number;

  /**
   * Order Date — `datetime`
   *
   * Date Order was received
   */
  orderDate?: string;

  /**
   * Order Number — `number`
   *
   *
   */
  number?: number;

  /**
   * Stripe Payment ID — `string`
   *
   *
   */
  stripe_id?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: 'slug'; current: string };
}

export type BackgroundImage = {
  _type: 'backgroundImage';
  asset: SanityReference<SanityImageAsset>;
  crop?: SanityImageCrop;
  hotspot?: SanityImageHotspot;

  /**
   * Name of the picture, for reference purposes only — `string`
   *
   *
   */
  name?: string;

  /**
   * Alternative text — `string`
   *
   * Important for SEO and accessibility.
   */
  alt?: string;
};

export type MainImage = {
  _type: 'mainImage';
  asset: SanityReference<SanityImageAsset>;
  crop?: SanityImageCrop;
  hotspot?: SanityImageHotspot;

  /**
   * Image Caption (optional) — `string`
   *
   *
   */
  caption?: string;

  /**
   * Alternative text, (a concise description of the image) — `string`
   *
   * Important for SEO and accessibility.
   */
  alt?: string;
};

export type CoffeeOrderItem = {
  _type: 'coffeeOrderItem';
  /**
   * Coffee Ordered — `string`
   *
   *
   */
  name?: string;

  /**
   * Grind — `string`
   *
   *
   */
  grind?: string;

  /**
   * Size — `string`
   *
   *
   */
  size?: string;

  /**
   * Quantity — `number`
   *
   *
   */
  quantity?: number;

  /**
   * Notes for this item — `string`
   *
   *
   */
  notes?: string;
};

export type PortableTextBlock = Array<
  SanityKeyed<SanityBlock> | SanityKeyed<MainImage>
>;

export type BodyPortableText = Array<
  SanityKeyed<SanityBlock> | SanityKeyed<MainImage>
>;

export type ExcerptPortableText = Array<SanityKeyed<SanityBlock>>;

export type Documents =
  | Coffee
  | Post
  | Event
  | LandingPage
  | SiteSettings
  | CoffeePage
  | EventsPage
  | AboutPage
  | ContactPage
  | Order;

/**
 * This interface is a stub. It was referenced in your sanity schema but
 * the definition was not actually found. Future versions of
 * sanity-codegen will let you type this explicity.
 */
type Color = any;
