export const filterLocation = (listings, filter) => {
  var results = [];
  if (filter === 'all') return listings;
  else {
    listings.forEach(listing => {
      if (listing.location === filter) {
        results.push(listing);
      }
    });
  }
  return results;
};

export const getUniqueLocations = listings => {
  var results = [];
  listings.forEach(listing => {
    if (!results.includes(listing.location)) {
      results.push(listing.location);
    }
  });
  return results;
};
