/**
 * Calculates age based on the provided birth date.
 * @param birthDate - The birth date of the individual.
 * @returns The calculated age in years.
 */
export function calculateAge(birthDate: Date): number {
  const today = new Date();
  const yearsDiff = today.getFullYear() - birthDate.getFullYear();
  const hasHadBirthdayThisYear =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate());

  return hasHadBirthdayThisYear ? yearsDiff : yearsDiff - 1;
}

/**
 * Calculates total years of experience, accounting for a gap period.
 * @param startDate - The start date of the career.
 * @param gapStart - The start date of the gap period.
 * @param gapEnd - The end date of the gap period.
 * @returns The calculated years of experience.
 */
export function calculateExperience(
  startDate: Date,
  gapStart: Date,
  gapEnd: Date,
): number {
  const today = new Date();

  const totalMonths =
    (today.getFullYear() - startDate.getFullYear()) * 12 +
    (today.getMonth() - startDate.getMonth());

  const gapMonths =
    (gapEnd.getFullYear() - gapStart.getFullYear()) * 12 +
    (gapEnd.getMonth() - gapStart.getMonth());

  return Math.floor((totalMonths - gapMonths) / 12);
}
