const baseUrl = "https://i.imgur.com/";

export function getImageUrl(person, size = 's') {
  return (
      baseUrl + person.imageId + size + '.jpg'
  );
}