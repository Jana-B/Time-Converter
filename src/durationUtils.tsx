export function decimalToDuration(decimalDuration: number): string {
  const hours = Math.floor(decimalDuration);
  const minutesDecimal = (decimalDuration - hours) * 60;
  const minutes = Math.floor(minutesDecimal);

  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;
}

export function durationToDecimal(duration: string): number {
  const [hours, minutes] = duration.split(":").map(Number);
  const decimalDuration = hours + minutes / 60;
  return decimalDuration;
}
