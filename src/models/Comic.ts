export type Comic = {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modifstringied: number;
  isbn: string;
  upc: number;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  thumbnail: {
    path: string;
    extension: string;
  };
};
