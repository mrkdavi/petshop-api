export function filterEntity<T>(entity: T, properties: string[]) {
  properties.forEach((property) => {
    if (property.includes(".")) {
      const [parent, child] = property.split(".");
      entity[parent] = filterEntity(entity[parent], [child]);
    } else {
      delete entity[property];
    }
  });
  return entity;
}