export default function updateUniqueItems(groceries) {
  if (!(groceries instanceof Map)) return 'Cannot process';

  groceries.forEach((value, key) => {
    if (value === 1) {
      groceries.set(key, 100);
    }
  });

  return groceries;
}
