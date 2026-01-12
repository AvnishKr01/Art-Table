import axios from "axios";

const API_URL = "https://api.artic.edu/api/v1/artworks";

export const fetchArtworks = async (page: number, limit: number) => {
  const response = await axios.get(API_URL, {
    params: {
      page,
      limit,
    },
  });

  return {
    data: response.data.data,
    total: response.data.pagination.total,
  };
};
