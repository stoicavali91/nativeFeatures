

const GOOGLE_API_KEY = 'AIzaSyDz8zRhYJgRzZ--a-a2w2qqGaEvU3CzGik';
const SIGNATURE = '2ChZN3EL4ahx7DwZxwRkA-PGNeI='

// export function getMapPreview(lat, lng){
//   const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;
//   return imagePreviewUrl;
// }

export function getMapPreview(lat, lng) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}&signature=${SIGNATURE}`;

  return imagePreviewUrl;
}